import { test, expect } from '@playwright/test';

test.describe('Burger constructor', () => {
  test.beforeEach(async ({ page, context }) => {
    await context.addCookies([
      {
        name: 'accessToken',
        value: 'fake-access-token',
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
    await page.waitForSelector('button:has-text("Добавить")', {
      timeout: 10000
    });
    const addButtons = page.getByRole('button', { name: 'Добавить' });
    await addButtons.first().click();

    const constructorItem = page
      .locator('[class*="constructor-element"]')
      .first();
    await expect(constructorItem).toBeVisible();
  });

  test('should open and close ingredient modal', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForSelector('button:has-text("Добавить")', {
      timeout: 10000
    });

    // Кликаем по картинке или названию первого ингредиента
    // Используем селектор по классу, содержащему "BurgerIngredient" (или можно по картинке)
    await page.locator('[class*="BurgerIngredient"]').first().click();

    const modal = page.locator('.modal');
    await expect(modal).toBeVisible();

    const ingredientName = await page.locator('.modal h3').textContent();
    expect(ingredientName).toBeTruthy();

    await page.locator('.modal button[type="button"]').click();
    await expect(modal).not.toBeVisible();

    await page.locator('[class*="BurgerIngredient"]').first().click();
    await expect(modal).toBeVisible();
    await page.locator('.overlay').click();
    await expect(modal).not.toBeVisible();
  });

  test('should create an order and clear constructor', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForSelector('button:has-text("Добавить")', {
      timeout: 10000
    });

    const addButtons = page.getByRole('button', { name: 'Добавить' });
    await addButtons.nth(0).click(); // булка
    await addButtons.nth(2).click(); // начинка

    await page.locator('button:has-text("Оформить заказ")').click();

    const modal = page.locator('.modal');
    await expect(modal).toBeVisible();

    const orderNumber = await page.locator('.modal h2').textContent();
    expect(orderNumber).toMatch(/\d+/);

    const constructorItems = page.locator('[class*="constructor-element"]');
    await expect(constructorItems).toHaveCount(0);

    await page.locator('.modal button[type="button"]').click();
    await expect(modal).not.toBeVisible();
  });
});
