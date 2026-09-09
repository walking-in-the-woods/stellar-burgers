import { test, expect } from '@playwright/test';

test.describe('Burger constructor', () => {
  test.beforeEach(async ({ page, context }) => {
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

    const addButtons = page.getByRole('button', { name: 'Добавить' });
    await addButtons.first().waitFor({ state: 'visible', timeout: 15000 });

    await addButtons.first().click();

    const bunTop = page.getByText('(верх)');
    await expect(bunTop).toBeVisible({ timeout: 5000 });
  });

  test('should open and close ingredient modal', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const addButtons = page.getByRole('button', { name: 'Добавить' });
    await addButtons.first().waitFor({ state: 'visible', timeout: 15000 });

    // Находим первый ингредиент и запоминаем его название
    const ingredientLink = page.locator('a[href^="/ingredients/"]').first();
    const ingredientNameText = await ingredientLink
      .locator('p:last-child')
      .textContent();
    expect(ingredientNameText).toBeTruthy();

    await ingredientLink.click();

    // Проверяем, что модальное окно открылось (заголовок "Детали ингредиента")
    const modalTitle = page.getByText('Детали ингредиента');
    await expect(modalTitle).toBeVisible({ timeout: 5000 });

    // Проверяем, что в модальном окне отображается название ингредиента (в теге h3)
    // В списке ингредиентов название находится в <p>, поэтому <h3> есть только в модалке
    await expect(
      page.getByRole('heading', {
        name: ingredientNameText as string,
        level: 3
      })
    ).toBeVisible();

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

    const addButtons = page.getByRole('button', { name: 'Добавить' });
    await addButtons.first().waitFor({ state: 'visible', timeout: 15000 });

    await addButtons.nth(0).click(); // булка
    await addButtons.nth(2).click(); // начинка
    await addButtons.nth(3).click(); // ещё начинка

    const orderButton = page.getByRole('button', { name: 'Оформить заказ' });
    await expect(orderButton).toBeEnabled({ timeout: 10000 });

    await orderButton.click();

    const orderIdText = page.getByText('идентификатор заказа');
    await expect(orderIdText).toBeVisible({ timeout: 15000 });

    // Номер заказа из order.har – 109956
    const orderNumberElement = page
      .locator('h2')
      .filter({ hasText: /^\d+$/ })
      .first();
    await expect(orderNumberElement).toBeVisible();
    const orderNumber = await orderNumberElement.textContent();
    expect(orderNumber).toMatch(/109956/);

    const bunElement = page.getByText('(верх)');
    await expect(bunElement).not.toBeVisible({ timeout: 5000 });

    await page.keyboard.press('Escape');
    await expect(orderIdText).not.toBeVisible();
  });
});
