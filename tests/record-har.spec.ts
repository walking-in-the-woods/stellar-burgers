import { test } from '@playwright/test';

/**
 * Этот файл используется для генерации HAR-файлов с реальной авторизацией.
 * Запустите его один раз командой:
 *   npm run test:e2e:record
 *
 * После успешного создания файлов в папке tests/hars/ этот файл можно удалить
 * или закомментировать, чтобы не запускать случайно.
 */
test.describe('Generate HAR files with real auth', () => {
  test('record ingredients, user, order', async ({ page, context }) => {
    // Увеличиваем таймаут для этого теста (60 секунд)
    test.setTimeout(60000);

    // 1. Выполняем реальный вход через API
    const loginResponse = await page.request.post(
      'https://norma.education-services.ru/api/auth/login',
      {
        data: {
          email: 'test@example.com', // замените на реальные данные
          password: 'password123' // замените на реальный пароль
        }
      }
    );

    const loginData = await loginResponse.json();
    console.log('Login response:', loginData);

    if (!loginData.success) {
      throw new Error(`Login failed: ${loginData.message || 'Unknown error'}`);
    }

    // 2. Извлекаем токены
    const accessToken = loginData.accessToken;
    const refreshToken = loginData.refreshToken;

    // 3. Устанавливаем токены в браузере
    await context.addCookies([
      {
        name: 'accessToken',
        value: accessToken,
        domain: 'localhost',
        path: '/'
      }
    ]);
    await page.addInitScript((rt) => {
      localStorage.setItem('refreshToken', rt);
    }, refreshToken);

    // 4. Настраиваем перехват и запись HAR
    await page.routeFromHAR('./tests/hars/ingredients.har', {
      url: '**/api/ingredients',
      update: true
    });
    await page.routeFromHAR('./tests/hars/user.har', {
      url: '**/api/auth/user',
      update: true
    });
    await page.routeFromHAR('./tests/hars/order.har', {
      url: '**/api/orders',
      update: true
    });

    // 5. Открываем главную страницу
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // 6. Ждём загрузки ингредиентов
    await page.waitForSelector('button:has-text("Добавить")', {
      timeout: 10000
    });

    // 7. Добавляем булку и начинку
    const addButtons = page.getByRole('button', { name: 'Добавить' });
    await addButtons.first().click();
    await addButtons.nth(2).click();

    // 8. Оформляем заказ
    await page.locator('button:has-text("Оформить заказ")').click();

    // 9. Ждём появления модального окна с номером заказа
    await page.waitForSelector('.modal', { state: 'visible', timeout: 10000 });

    // 10. Закрываем модалку
    await page.locator('.modal button[type="button"]').click();

    // 11. Даём время на запись HAR-файлов
    await page.waitForTimeout(2000);
  });
});
