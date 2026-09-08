# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: record-har.spec.ts >> Generate HAR files >> record ingredients, user, order
- Location: tests/record-har.spec.ts:12:7

# Error details

```
TimeoutError: page.waitForSelector: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('.modal') to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - navigation [ref=e5]:
      - generic [ref=e6]:
        - link [ref=e7] [cursor=pointer]:
          - /url: /
          - paragraph [ref=e10]: Конструктор
        - link [ref=e11] [cursor=pointer]:
          - /url: /feed
          - paragraph [ref=e14]: Лента заказов
      - link [ref=e84] [cursor=pointer]:
        - /url: /profile
        - paragraph [ref=e87]: Личный кабинет
  - main [ref=e88]:
    - generic [ref=e89]:
      - heading "Вход" [level=3] [ref=e90]
      - generic [ref=e91]:
        - generic [ref=e94]:
          - generic [ref=e95]: E-mail
          - textbox [ref=e96]
        - generic [ref=e99]:
          - generic [ref=e100]: Пароль
          - textbox [ref=e101]
          - generic [ref=e102] [cursor=pointer]
        - button "Войти" [ref=e106] [cursor=pointer]
      - generic [ref=e107]:
        - text: Вы - новый пользователь?
        - link "Зарегистрироваться" [ref=e108] [cursor=pointer]:
          - /url: /register
      - generic [ref=e109]:
        - text: Забыли пароль?
        - link "Восстановить пароль" [ref=e110] [cursor=pointer]:
          - /url: /forgot-password
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | /**
  4  |  * Этот файл используется только для первоначальной генерации HAR-файлов.
  5  |  * Запустите его один раз командой:
  6  |  *   npm run test:e2e:record
  7  |  *
  8  |  * После успешного создания файлов в папке tests/hars/ этот файл можно удалить
  9  |  * или закомментировать, чтобы не запускать случайно.
  10 |  */
  11 | test.describe('Generate HAR files', () => {
  12 |   test('record ingredients, user, order', async ({ page, context }) => {
  13 |     // Увеличиваем таймаут для этого теста (60 секунд)
  14 |     test.setTimeout(60000);
  15 | 
  16 |     // Подставляем фейковые токены для авторизации (необходимы для эндпоинта /orders)
  17 |     await context.addCookies([
  18 |       {
  19 |         name: 'accessToken',
  20 |         value: 'fake-access-token',
  21 |         domain: 'localhost',
  22 |         path: '/'
  23 |       }
  24 |     ]);
  25 |     await page.addInitScript(() => {
  26 |       localStorage.setItem('refreshToken', 'fake-refresh-token');
  27 |     });
  28 | 
  29 |     // Включаем запись для всех трёх эндпоинтов
  30 |     await page.routeFromHAR('./tests/hars/ingredients.har', {
  31 |       url: '**/api/ingredients',
  32 |       update: true
  33 |     });
  34 |     await page.routeFromHAR('./tests/hars/user.har', {
  35 |       url: '**/api/auth/user',
  36 |       update: true
  37 |     });
  38 |     await page.routeFromHAR('./tests/hars/order.har', {
  39 |       url: '**/api/orders',
  40 |       update: true
  41 |     });
  42 | 
  43 |     // Открываем главную страницу
  44 |     await page.goto('/');
  45 |     await page.waitForLoadState('networkidle');
  46 | 
  47 |     // Ждём появления хотя бы одной кнопки "Добавить" – это означает, что ингредиенты загружены
  48 |     await page.waitForSelector('button:has-text("Добавить")', {
  49 |       timeout: 10000
  50 |     });
  51 | 
  52 |     // Добавляем булку (первая кнопка "Добавить")
  53 |     const addButtons = page.getByRole('button', { name: 'Добавить' });
  54 |     await addButtons.first().click();
  55 | 
  56 |     // Добавляем начинку (третья кнопка "Добавить", индекс 2)
  57 |     await addButtons.nth(2).click();
  58 | 
  59 |     // Оформляем заказ
  60 |     await page.locator('button:has-text("Оформить заказ")').click();
  61 | 
  62 |     // Ждём появления модального окна с номером заказа
> 63 |     await page.waitForSelector('.modal', { state: 'visible', timeout: 10000 });
     |                ^ TimeoutError: page.waitForSelector: Timeout 10000ms exceeded.
  64 | 
  65 |     // Закрываем модалку
  66 |     await page.locator('.modal button[type="button"]').click();
  67 | 
  68 |     // Даём время на запись HAR-файлов (2 секунды)
  69 |     await page.waitForTimeout(2000);
  70 |   });
  71 | });
  72 | 
```