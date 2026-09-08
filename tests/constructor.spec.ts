import { test, expect } from '@playwright/test';

test.describe('Burger constructor', () => {
  test.beforeEach(async ({ page, context }) => {
    // Подставляем фейковые токены (не обязательны, так как запросы перехвачены)
    await context.addCookies([
      {
        name: 'accessToken',
        value: 'fake-token',
        domain: 'localhost',
        path: '/'
      }
    ]);
    await page.addInitScript(() => {
      localStorage.setItem('refreshToken', 'fake-refresh-token');
    });

    // Используем HAR-файлы
    await page.routeFromHAR('./tests/hars/ingredients.har', {
      url: '**/api/ingredients'
    });
    await page.routeFromHAR('./tests/hars/user.har', {
      url: '**/api/auth/user'
    });
    await page.routeFromHAR('./tests/hars/order.har', {
      url: '**/api/orders'
    });
  });

  test('should add an ingredient to the constructor', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Ждём появления кнопок "Добавить" (ингредиенты загружены)
    const addButtons = page.getByRole('button', { name: 'Добавить' });
    await addButtons.first().waitFor({ state: 'visible', timeout: 15000 });

    // Добавляем булку (первая кнопка)
    await addButtons.first().click();

    // Проверяем, что в конструкторе появился элемент с текстом "(верх)"
    const bunTop = page.getByText('(верх)');
    await expect(bunTop).toBeVisible({ timeout: 5000 });
  });

  test('should open and close ingredient modal', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Ждём загрузки ингредиентов
    const addButtons = page.getByRole('button', { name: 'Добавить' });
    await addButtons.first().waitFor({ state: 'visible', timeout: 15000 });

    // Кликаем по первому ингредиенту (ссылка на /ingredients/{id})
    const ingredientLink = page.locator('a[href^="/ingredients/"]').first();
    await ingredientLink.click();

    // Проверяем, что модальное окно открылось (заголовок "Детали ингредиента")
    const modalTitle = page.getByText('Детали ингредиента');
    await expect(modalTitle).toBeVisible({ timeout: 5000 });

    // Проверяем, что отображается название ингредиента (второй h3)
    const ingredientName = page.locator('h3').nth(1);
    await expect(ingredientName).toBeVisible();
    expect(await ingredientName.textContent()).toBeTruthy();

    // Закрываем модалку через Escape
    await page.keyboard.press('Escape');
    await expect(modalTitle).not.toBeVisible();

    // Открываем снова и закрываем по Escape
    await ingredientLink.click();
    await expect(modalTitle).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(modalTitle).not.toBeVisible();
  });

  test('should create an order and clear constructor', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Ждём загрузки ингредиентов
    const addButtons = page.getByRole('button', { name: 'Добавить' });
    await addButtons.first().waitFor({ state: 'visible', timeout: 15000 });

    // Добавляем булку и две начинки
    await addButtons.nth(0).click(); // булка
    await addButtons.nth(2).click(); // начинка
    await addButtons.nth(3).click(); // ещё начинка

    // Ждём активации кнопки "Оформить заказ"
    const orderButton = page.getByRole('button', { name: 'Оформить заказ' });
    await expect(orderButton).toBeEnabled({ timeout: 10000 });

    // Оформляем заказ
    await orderButton.click();

    // Ждём появления текста "идентификатор заказа"
    const orderIdText = page.getByText('идентификатор заказа');
    await expect(orderIdText).toBeVisible({ timeout: 15000 });

    // Номер заказа – это h2 с цифрами перед текстом
    const orderNumberElement = page
      .locator('h2')
      .filter({ hasText: /^\d+$/ })
      .first();
    await expect(orderNumberElement).toBeVisible();
    const orderNumber = await orderNumberElement.textContent();
    expect(orderNumber).toMatch(/\d+/);

    // Проверяем, что конструктор очистился (нет "(верх)")
    const bunElement = page.getByText('(верх)');
    await expect(bunElement).not.toBeVisible({ timeout: 5000 });

    // Закрываем модалку через Escape
    await page.keyboard.press('Escape');
    await expect(orderIdText).not.toBeVisible();
  });
});
