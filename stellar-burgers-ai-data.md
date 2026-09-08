## File Tree

```markdown-tree
.babelrc
.editorconfig
.env
.env.example
.eslintrc
.gitignore
.prettierrc
README.md
jest.config.js
package-lock.json
package.json
playwright.config.ts
tsconfig.json
webpack.config.js
.storybook
    main.ts
    preview.tsx
    storybook-config-entry.js
playwright-report
    index.html
public
    favicon.ico
    index.html
    manifest.json
    robots.txt
src
    global.d.ts
    index.css
    index.tsx
    styles.d.ts
    svg.d.ts
    components
        index.ts
        app
            app.module.css
            app.tsx
        app-header
            app-header.tsx
            index.ts
        burger-constructor
            burger-constructor.tsx
            index.ts
        burger-constructor-element
            burger-constructor-element.tsx
            index.ts
            type.ts
        burger-ingredient
            burger-ingredient.tsx
            index.ts
            type.ts
        burger-ingredients
            burger-ingredients.tsx
            index.ts
        feed-info
            feed-info.tsx
            index.ts
        ingredient-details
            index.ts
            ingredient-details.tsx
        ingredients-category
            index.ts
            ingredients-category.tsx
            type.ts
        modal
            index.ts
            modal.tsx
            type.ts
        order-card
            index.ts
            order-card.tsx
            type.ts
        order-info
            index.ts
            order-info.tsx
        order-status
            index.ts
            order-status.tsx
            type.ts
        orders-list
            index.ts
            orders-list.tsx
            type.ts
        profile-menu
            index.ts
            profile-menu.tsx
        protected-route
            index.ts
            protected-route.tsx
        ui
            index.ts
            app-header
                app-header.module.css
                app-header.tsx
                index.ts
                type.ts
            burger-constructor
                burger-constructor.module.css
                burger-constructor.tsx
                index.ts
                type.ts
            burger-constructor-element
                burger-constructor-element.module.css
                burger-constructor-element.tsx
                index.ts
                type.ts
            burger-ingredient
                burger-ingredient.module.css
                burger-ingredient.tsx
                index.ts
                type.ts
            burger-ingredients
                burger-ingredients.module.css
                burger-ingredients.tsx
                index.ts
                type.ts
            feed-info
                feed-info.module.css
                feed-info.tsx
                index.ts
                type.ts
            ingredient-details
                index.ts
                ingredient-details.module.css
                ingredient-details.tsx
                type.ts
            ingredients-category
                index.ts
                ingredients-category.module.css
                ingredients-category.tsx
                type.ts
            modal
                index.ts
                modal.module.css
                modal.tsx
                type.ts
            modal-overlay
                index.ts
                modal-overlay.module.css
                modal-overlay.tsx
            order-card
                index.ts
                order-card.module.css
                order-card.tsx
                type.ts
            order-details
                index.ts
                order-details.module.css
                order-details.tsx
                type.ts
            order-info
                index.ts
                order-info.module.css
                order-info.tsx
                type.ts
            order-status
                index.ts
                order-status.tsx
                type.ts
            orders-list
                index.ts
                orders-list.module.css
                orders-list.tsx
                type.ts
            pages
                common-type.ts
                common.module.css
                index.ts
                constructor-page
                    constructor-page.module.css
                    constructor-page.tsx
                    index.ts
                    type.ts
                feed
                    feed.module.css
                    feed.tsx
                    index.ts
                    type.ts
                forgot-password
                    forgot-password.tsx
                    index.ts
                login
                    index.ts
                    login.tsx
                    type.ts
                profile
                    index.ts
                    profile.module.css
                    profile.tsx
                    type.ts
                profile-orders
                    index.ts
                    profile-orders.module.css
                    profile-orders.tsx
                    type.ts
                register
                    index.ts
                    register.tsx
                    type.ts
                reset-password
                    index.ts
                    reset-password.tsx
                    type.ts
            preloader
                index.ts
                preloader.module.css
                preloader.tsx
            profile-menu
                index.ts
                profile-menu.module.css
                profile-menu.tsx
                type.ts
    images
        done.svg
    pages
        index.ts
        constructor-page
            constructor-page.module.css
            constructor-page.tsx
            index.ts
        feed
            feed.tsx
            index.ts
        forgot-password
            forgot-password.tsx
            index.ts
        login
            index.ts
            login.tsx
        not-fount-404
            index.ts
            not-fount-404.tsx
        profile
            index.ts
            profile.tsx
        profile-orders
            index.ts
            profile-orders.tsx
        register
            index.ts
            register.tsx
        reset-password
            index.ts
            reset-password.tsx
    services
        hooks.ts
        store.ts
        slices
            actions.ts
            burgerConstructorSlice.ts
            feedSlice.ts
            ingredientsSlice.ts
            orderDetailsSlice.ts
            orderSlice.ts
            profileOrdersSlice.ts
            userSlice.ts
            __tests__
                burgerConstructorSlice.test.ts
                ingredientsSlice.test.ts
    stories
        BurgerConstructor.stories.ts
        BurgerConstructorElement.stories.ts
        BurgerIngredient.stories.tsx
        Configure.mdx
        FeedInfo.stories.ts
        Header.stories.ts
        IngredientDetails.stories.ts
        OrderCard.stories.ts
        OrderDetails.stories.tsx
        OrderInfo.stories.ts
        OrderStatus.stories.tsx
        Preloader.stories.ts
        ProfileMenu.stories.ts
        assets
            accessibility.png
            accessibility.svg
            addon-library.png
            assets.png
            avif-test-image.avif
            context.png
            discord.svg
            docs.png
            figma-plugin.png
            github.svg
            share.png
            styling.png
            testing.png
            theming.png
            tutorials.svg
            youtube.svg
    utils
        burger-api.ts
        cookie.ts
        generate-id.ts
        order-helpers.ts
        types.ts
test-results
    .last-run.json
tests
    constructor.spec.ts
    record-har.spec.ts.txt
    hars
        02614ee0f5add0cdfb4018a5f07331e39c319823.json
        483e26d8b2986ce14b0ba28dad65b2657456da9f.json
        4c2807cd5bf97b719de5bb9377003e9e6d0ca492.json
        d865ae765d0bd24d2055469500cc7f17b1056715.json
        e798c28fb79c703dca973374d87435d9e78c87a0.json
        f83c68134738db910c736ba5f61157d5f4551de9.json
        ingredients.har
        order.har
        user.har
```

## .babelrc
```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]
}

```

## .editorconfig
```
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true

# Matches multiple files with brace expansion notation
# Set default charset
[*.{js}]
charset = utf-8
indent_style = tab
indent_size = 2

```

## .env
```
BURGER_API_URL=https://norma.education-services.ru/api

```

## .env.example
```example
BURGER_API_URL=https://norma.education-services.ru/api

```

## .eslintrc
```
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "extends": ["prettier"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "prettier/prettier": [
      "warn",
      {
        "usePrettierrc": true
      }
    ],
    "react/react-in-jsx-scope": "off",
    "comma-dangle": "off",
    "use-isnan": ["error", { "enforceForSwitchCase": true }],
    "react/void-dom-elements-no-children": "warn",
    "react/no-unsafe": "warn",
    "react/no-unused-state": "warn",
    "react/prefer-stateless-function": "warn",
    "react/self-closing-comp": "warn",
    "react/no-will-update-set-state": "warn",
    "react/no-this-in-sfc": "warn",
    "react/no-string-refs": "warn",
    "react/no-redundant-should-component-update": "warn",
    "react/jsx-boolean-value": ["warn", "never"],
    "react/jsx-key": "warn",
    "react/jsx-max-props-per-line": ["warn", { "maximum": 7 }],
    "react/jsx-max-depth": ["warn", { "max": 8 }],
    "arrow-body-style": ["warn", "as-needed"],
    "dot-notation": "warn",
    "jsx-quotes": ["warn", "prefer-single"],
    "valid-typeof": "warn",
    "@typescript-eslint/member-ordering": [
      "warn",
      {
        "default": [
          "private-static-field",
          "protected-static-field",
          "public-static-field",
          "private-static-method",
          "protected-static-method",
          "public-static-method",
          "private-constructor",
          "protected-constructor",
          "public-constructor",
          "private-instance-field",
          "protected-instance-field",
          "public-instance-field",
          "private-instance-method",
          "protected-instance-method",
          "public-instance-method"
        ]
      }
    ]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}

```

## .gitignore
```
node_modules
.env
.idea
dist

```

## .prettierrc
```
{
  "semi": true,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "trailingComma": "none",
  "endOfLine": "auto"
}
```

## README.md
````md
# Проектная работа 11-го спринта

[Макет](<https://www.figma.com/file/vIywAvqfkOIRWGOkfOnReY/React-Fullstack_-Проектные-задачи-(3-месяца)_external_link?type=design&node-id=0-1&mode=design>)

[Чеклист](https://www.notion.so/praktikum/0527c10b723d4873aa75686bad54b32e?pvs=4)

## Этапы работы:

1. Разверните проект и ознакомьтесь с кодом. Все необходимые вам компоненты уже созданы и лежат в папке `src/components`

2. Настройте роутинг.

3. Напишите функционал запросов данных с сервера, используя `Redux` и глобальный `store`. Сами "ручки" уже прописаны и лежат в `utils/burger-api.ts`

4. Настройте авторизацию и создайте защищённые роуты.

## Важно:

Для корректной работы запросов к серверу необходимо добавить переменную BURGER_API_URL в окружение. Сама ссылка находится в файле `.env.example`.

## Команды для работы

### Установка Playwright (если ещё не установлен)

```bash
npm install -D @playwright/test
npx playwright install
```

### Генерация HAR-файлов (только один раз, либо при изменении API)

```bash
npm run test:e2e:record
```

или напрямую:

```bash
npx playwright test tests/record-har.spec.ts --headed
```

### Штатный запуск интеграционных тестов (после создания HAR)

```bash
npm run test:e2e
```

или с открытым браузером:

```bash
npm run test:e2e:headed
```

````

## jest.config.js
```js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec|test).ts'],
  moduleNameMapper: {
    '^@api$': '<rootDir>/src/utils/burger-api.ts',
    '^@utils-types$': '<rootDir>/src/utils/types.ts',
    '^@slices$': '<rootDir>/src/services/slices',
    '^@selectors$': '<rootDir>/src/services/selectors'
  }
};

```

## package.json
```json
{
  "name": "react-canonical",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@reduxjs/toolkit": "^2.12.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.23",
    "@types/react": "^18.0.31",
    "@types/react-dom": "^18.0.11",
    "@types/uuid": "^9.0.1",
    "@zlden/react-developer-burger-ui-components": "^1.15.0",
    "clsx": "^2.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-intersection-observer": "^9.4.3",
    "react-redux": "^9.3.0",
    "react-router-dom": "^6.30.6",
    "redux-thunk": "^3.1.0",
    "typescript": "^5.3.3",
    "uuid": "^9.0.0",
    "web-vitals": "^2.1.4",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1"
  },
  "devDependencies": {
    "@babel/core": "^7.23.6",
    "@babel/eslint-parser": "^7.23.3",
    "@babel/preset-env": "^7.23.6",
    "@babel/preset-react": "^7.23.3",
    "@babel/preset-typescript": "^7.23.3",
    "@jest/globals": "^29.7.0",
    "@playwright/test": "^1.63.0",
    "@storybook/addon-essentials": "^7.6.10",
    "@storybook/addon-interactions": "^7.6.10",
    "@storybook/addon-links": "^7.6.10",
    "@storybook/addon-onboarding": "^1.0.11",
    "@storybook/blocks": "^7.6.10",
    "@storybook/react": "^7.6.10",
    "@storybook/react-webpack5": "^7.6.10",
    "@storybook/test": "^7.6.10",
    "@testing-library/react": "^14.1.2",
    "@testing-library/user-event": "^14.5.1",
    "@types/jest": "^29.5.12",
    "@types/node": "^20.10.5",
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18",
    "@types/react-test-renderer": "^18.0.7",
    "@types/webpack-env": "^1.18.4",
    "@typescript-eslint/eslint-plugin": "^6.15.0",
    "@typescript-eslint/parser": "^6.15.0",
    "babel-jest": "^29.7.0",
    "babel-loader": "^9.1.3",
    "css-loader": "^6.8.1",
    "cypress": "^13.6.1",
    "dotenv-webpack": "^8.0.1",
    "eslint": "^8.56.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-cypress": "^2.15.1",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-jsx-a11y": "^6.8.0",
    "eslint-plugin-prettier": "^5.1.2",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-storybook": "^0.6.15",
    "eslint-webpack-plugin": "^4.0.1",
    "fetch-mock": "^9.11.0",
    "html-webpack-plugin": "^5.6.0",
    "jest": "^29.7.0",
    "jest-css-modules-transform": "^4.4.2",
    "jest-environment-jsdom": "^29.7.0",
    "jsdom": "^23.0.1",
    "prettier": "^3.1.1",
    "prettier-eslint": "^16.2.0",
    "prettier-eslint-cli": "^8.0.1",
    "react-test-renderer": "^18.2.0",
    "storybook": "^7.6.10",
    "storybook-addon-react-router-v6": "^2.0.10",
    "style-loader": "^3.3.3",
    "ts-jest": "^29.1.2",
    "ts-loader": "^9.5.1",
    "ts-node": "^10.9.2",
    "url-loader": "^4.1.1"
  },
  "scripts": {
    "start": "webpack serve --mode=development",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "lint": "eslint --ext .js,.jsx,.ts,.tsx ./src",
    "lint:fix": "npm run lint -- --fix",
    "format": "prettier ./src --write",
    "test": "jest",
    "test:e2e": "playwright test",
    "test:e2e:headed": "playwright test --headed",
    "test:e2e:record": "playwright test tests/record-har.spec.ts --headed"
  },
  "eslintConfig": {
    "extends": [
      "plugin:storybook/recommended"
    ]
  }
}

```

## playwright.config.ts
```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:4000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000
  }
});

```

## tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": false,
    "jsx": "react-jsx",
    "types": ["node", "jest"],
    "baseUrl": ".",
    "paths": {
      "@pages": ["src/pages"],
      "@components": ["src/components"],
      "@ui": ["src/components/ui"],
      "@ui-pages": ["src/components/ui/pages"],
      "@utils-types": ["src/utils/types"],
      "@api": ["src/utils/burger-api.ts"],
      "@slices": ["src/services/slices"],
      "@selectors": ["src/services/selectors"]
    }
  },
  "include": ["src"]
}

```

## webpack.config.js
```js
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.module\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new Dotenv()
  ],
  resolve: {
    extensions: [
      '*',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
      '.css',
      '.scss',
      '.png',
      '.svg',
      '.jpg'
    ],
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@ui-pages': path.resolve(__dirname, './src/components/ui/pages'),
      '@utils-types': path.resolve(__dirname, './src/utils/types'),
      '@api': path.resolve(__dirname, './src/utils/burger-api.ts'),
      '@slices': path.resolve(__dirname, './src/services/slices'),
      '@selectors': path.resolve(__dirname, './src/services/selectors')
    }
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/' // <-- ВАЖНО: абсолютный путь для статики
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './dist')
    },
    compress: true,
    historyApiFallback: {
      // Перенаправляем все запросы, кроме статических файлов, на index.html
      rewrites: [
        { from: /\.[a-zA-Z0-9]+$/, to: '/' } // файлы с расширением – отдаём как есть
      ],
      index: '/index.html' // если файл не найден – отдаём index.html
    },
    port: 4000,
    open: true
  }
};

```

## .storybook
### main.ts
```ts
import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions'
  ],
  webpackFinal: async (config) => {
    config.resolve
      ? (config.resolve.alias = {
          ...config.resolve.alias,
          '@pages': path.resolve(__dirname, '../src/pages'),
          '@components': path.resolve(__dirname, '../src/components'),
          '@ui': path.resolve(__dirname, '../src/components/ui'),
          '@ui-pages': path.resolve(__dirname, '../src/components/ui/pages'),
          '@utils-types': path.resolve(__dirname, '../src/utils/types'),
          '@api': path.resolve(__dirname, '../src/utils/burger-api.ts'),
          '@slices': path.resolve(__dirname, '../src/services/slices'),
          '@selectors': path.resolve(__dirname, '../src/services/selectors')
        })
      : null;
    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  docs: {
    autodocs: 'tag'
  }
};
export default config;

```

### preview.tsx
```tsx
import React from 'react';
import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ padding: 20, width: 'fit-content' }}>
          <Story />
        </div>
      </BrowserRouter>
    )
  ]
};

export default preview;

```

### storybook-config-entry.js
```js
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.entry.push(require.resolve('../.storybook/preview.tsx'));

    return config;
  }
};

```

## playwright-report
### index.html
```html


<!DOCTYPE html>
<html style='scrollbar-gutter: stable both-edges;'>
  <head>
    <meta charset='UTF-8'>
    <meta name='color-scheme' content='dark light'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Playwright Test Report</title>
    <script type="module">var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=15,d=0,f=1,p=2,m=-2,h=-3,g=-4,_=-5,v=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],y=1440,b=0,x=4,S=9,C=5,w=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],T=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],E=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],D=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],O=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],A=15;function j(){let e=this,t,n,r,i,a,o;function s(e,t,n,s,c,l,u,f,p,m,g){let v,b,x,S,C,w,T,E,D,O,k,j,ee,M,N;O=0,C=n;do r[e[t+O]]++,O++,C--;while(C!==0);if(r[0]==n)return u[0]=-1,f[0]=0,d;for(E=f[0],w=1;w<=A&&r[w]===0;w++);for(T=w,E<w&&(E=w),C=A;C!==0&&r[C]===0;C--);for(x=C,E>C&&(E=C),f[0]=E,M=1<<w;w<C;w++,M<<=1)if((M-=r[w])<0)return h;if((M-=r[C])<0)return h;for(r[C]+=M,o[1]=w=0,O=1,ee=2;--C!==0;)o[ee]=w+=r[O],ee++,O++;C=0,O=0;do(w=e[t+O])!==0&&(g[o[w]++]=C),O++;while(++C<n);for(n=o[x],o[0]=C=0,O=0,S=-1,j=-E,a[0]=0,k=0,N=0;T<=x;T++)for(v=r[T];v--!==0;){for(;T>j+E;){if(S++,j+=E,N=x-j,N=N>E?E:N,(b=1<<(w=T-j))>v+1&&(b-=v+1,ee=T,w<N))for(;++w<N&&!((b<<=1)<=r[++ee]);)b-=r[ee];if(N=1<<w,m[0]+N>y)return h;a[S]=k=m[0],m[0]+=N,S===0?u[0]=k:(o[S]=C,i[0]=w,i[1]=E,w=C>>>j-E,i[2]=k-a[S-1]-w,p.set(i,(a[S-1]+w)*3))}for(i[1]=T-j,O>=n?i[0]=192:g[O]<s?(i[0]=g[O]<256?0:96,i[2]=g[O++]):(i[0]=l[g[O]-s]+16+64,i[2]=c[g[O++]-s]),b=1<<T-j,w=C>>>j;w<N;w+=b)p.set(i,(k+w)*3);for(w=1<<T-1;(C&w)!==0;w>>>=1)C^=w;for(C^=w,D=(1<<j)-1;(C&D)!=o[S];)S--,j-=E,D=(1<<j)-1}return M!==0&&x!=1?_:d}function c(e){let s;for(t||(t=[],n=[],r=new Int32Array(16),i=[],a=new Int32Array(A),o=new Int32Array(16)),n.length<e&&(n=[]),s=0;s<e;s++)n[s]=0;for(s=0;s<16;s++)r[s]=0;for(s=0;s<3;s++)i[s]=0;a.set(r.subarray(0,A),0),o.set(r.subarray(0,16),0)}e.inflate_trees_bits=function(e,r,i,a,o){let l;return c(19),t[0]=0,l=s(e,0,19,19,null,null,i,r,a,t,n),l==h?o.msg=`oversubscribed dynamic bit lengths tree`:(l==_||r[0]===0)&&(o.msg=`incomplete dynamic bit lengths tree`,l=h),l},e.inflate_trees_dynamic=function(e,r,i,a,o,l,u,f,p){let m;return c(288),t[0]=0,m=s(i,0,e,257,E,D,l,a,f,t,n),m!=d||a[0]===0?(m==h?p.msg=`oversubscribed literal/length tree`:m!=g&&(p.msg=`incomplete literal/length tree`,m=h),m):(c(288),m=s(i,e,r,0,O,k,u,o,f,t,n),m!=d||o[0]===0&&e>257?(m==h?p.msg=`oversubscribed distance tree`:m==_?(p.msg=`incomplete distance tree`,m=h):m!=g&&(p.msg=`empty distance tree with lengths`,m=h),m):d)}}j.inflate_trees_fixed=function(e,t,n,r){return e[0]=S,t[0]=C,n[0]=w,r[0]=T,d};var ee=0,M=1,N=2,te=3,ne=4,re=5,ie=6,ae=7,P=8,oe=9;function se(){let e=this,t,n=0,r,i=0,a=0,o=0,s=0,c=0,l=0,u=0,p,g=0,_,y=0;function b(e,t,n,r,i,a,o,s){let c,l,u,p,m,g,_,y,b,x,S,C,w,T,E,D;_=s.next_in_index,y=s.avail_in,m=o.bitb,g=o.bitk,b=o.write,x=b<o.read?o.read-b-1:o.end-b,S=v[e],C=v[t];do{for(;g<20;)y--,m|=(s.read_byte(_++)&255)<<g,g+=8;if(c=m&S,l=n,u=r,D=(u+c)*3,(p=l[D])===0){m>>=l[D+1],g-=l[D+1],o.win[b++]=l[D+2],x--;continue}do{if(m>>=l[D+1],g-=l[D+1],p&16){for(p&=15,w=l[D+2]+(m&v[p]),m>>=p,g-=p;g<15;)y--,m|=(s.read_byte(_++)&255)<<g,g+=8;c=m&C,l=i,u=a,D=(u+c)*3,p=l[D];do if(m>>=l[D+1],g-=l[D+1],p&16){for(p&=15;g<p;)y--,m|=(s.read_byte(_++)&255)<<g,g+=8;if(T=l[D+2]+(m&v[p]),m>>=p,g-=p,x-=w,b>=T)E=b-T,b-E>0&&2>b-E?(o.win[b++]=o.win[E++],o.win[b++]=o.win[E++],w-=2):(o.win.set(o.win.subarray(E,E+2),b),b+=2,E+=2,w-=2);else{E=b-T;do E+=o.end;while(E<0);if(p=o.end-E,w>p){if(w-=p,b-E>0&&p>b-E)do o.win[b++]=o.win[E++];while(--p!==0);else o.win.set(o.win.subarray(E,E+p),b),b+=p,E+=p,p=0;E=0}}if(b-E>0&&w>b-E)do o.win[b++]=o.win[E++];while(--w!==0);else o.win.set(o.win.subarray(E,E+w),b),b+=w,E+=w,w=0;break}else if(!(p&64))c+=l[D+2],c+=m&v[p],D=(u+c)*3,p=l[D];else return s.msg=`invalid distance code`,w=s.avail_in-y,w=g>>3<w?g>>3:w,y+=w,_-=w,g-=w<<3,o.bitb=m,o.bitk=g,s.avail_in=y,s.total_in+=_-s.next_in_index,s.next_in_index=_,o.write=b,h;while(!0);break}if(!(p&64)){if(c+=l[D+2],c+=m&v[p],D=(u+c)*3,(p=l[D])===0){m>>=l[D+1],g-=l[D+1],o.win[b++]=l[D+2],x--;break}}else if(p&32)return w=s.avail_in-y,w=g>>3<w?g>>3:w,y+=w,_-=w,g-=w<<3,o.bitb=m,o.bitk=g,s.avail_in=y,s.total_in+=_-s.next_in_index,s.next_in_index=_,o.write=b,f;else return s.msg=`invalid literal/length code`,w=s.avail_in-y,w=g>>3<w?g>>3:w,y+=w,_-=w,g-=w<<3,o.bitb=m,o.bitk=g,s.avail_in=y,s.total_in+=_-s.next_in_index,s.next_in_index=_,o.write=b,h}while(!0)}while(x>=258&&y>=10);return w=s.avail_in-y,w=g>>3<w?g>>3:w,y+=w,_-=w,g-=w<<3,o.bitb=m,o.bitk=g,s.avail_in=y,s.total_in+=_-s.next_in_index,s.next_in_index=_,o.write=b,d}e.init=function(e,n,i,a,o,s){t=ee,l=e,u=n,p=i,g=a,_=o,y=s,r=null},e.proc=function(e,x,S){let C,w,T,E=0,D=0,O=0,k,A,j,se;for(O=x.next_in_index,k=x.avail_in,E=e.bitb,D=e.bitk,A=e.write,j=A<e.read?e.read-A-1:e.end-A;;)switch(t){case ee:if(j>=258&&k>=10&&(e.bitb=E,e.bitk=D,x.avail_in=k,x.total_in+=O-x.next_in_index,x.next_in_index=O,e.write=A,S=b(l,u,p,g,_,y,e,x),O=x.next_in_index,k=x.avail_in,E=e.bitb,D=e.bitk,A=e.write,j=A<e.read?e.read-A-1:e.end-A,S!=d)){t=S==f?ae:oe;break}a=l,r=p,i=g,t=M;case M:for(C=a;D<C;){if(k!==0)S=d;else return e.bitb=E,e.bitk=D,x.avail_in=k,x.total_in+=O-x.next_in_index,x.next_in_index=O,e.write=A,e.inflate_flush(x,S);k--,E|=(x.read_byte(O++)&255)<<D,D+=8}if(w=(i+(E&v[C]))*3,E>>>=r[w+1],D-=r[w+1],T=r[w],T===0){o=r[w+2],t=ie;break}if(T&16){s=T&15,n=r[w+2],t=N;break}if(!(T&64)){a=T,i=w/3+r[w+2];break}if(T&32){t=ae;break}return t=oe,x.msg=`invalid literal/length code`,S=h,e.bitb=E,e.bitk=D,x.avail_in=k,x.total_in+=O-x.next_in_index,x.next_in_index=O,e.write=A,e.inflate_flush(x,S);case N:for(C=s;D<C;){if(k!==0)S=d;else return e.bitb=E,e.bitk=D,x.avail_in=k,x.total_in+=O-x.next_in_index,x.next_in_index=O,e.write=A,e.inflate_flush(x,S);k--,E|=(x.read_byte(O++)&255)<<D,D+=8}n+=E&v[C],E>>=C,D-=C,a=u,r=_,i=y,t=te;case te:for(C=a;D<C;){if(k!==0)S=d;else return e.bitb=E,e.bitk=D,x.avail_in=k,x.total_in+=O-x.next_in_index,x.next_in_index=O,e.write=A,e.inflate_flush(x,S);k--,E|=(x.read_byte(O++)&255)<<D,D+=8}if(w=(i+(E&v[C]))*3,E>>=r[w+1],D-=r[w+1],T=r[w],T&16){s=T&15,c=r[w+2],t=ne;break}if(!(T&64)){a=T,i=w/3+r[w+2];break}return t=oe,x.msg=`invalid distance code`,S=h,e.bitb=E,e.bitk=D,x.avail_in=k,x.total_in+=O-x.next_in_index,x.next_in_index=O,e.write=A,e.inflate_flush(x,S);case ne:for(C=s;D<C;){if(k!==0)S=d;else return e.bitb=E,e.bitk=D,x.avail_in=k,x.total_in+=O-x.next_in_index,x.next_in_index=O,e.write=A,e.inflate_flush(x,S);k--,E|=(x.read_byte(O++)&255)<<D,D+=8}c+=E&v[C],E>>=C,D-=C,t=re;case re:for(se=A-c;se<0;)se+=e.end;for(;n!==0;){if(j===0&&(A==e.end&&e.read!==0&&(A=0,j=A<e.read?e.read-A-1:e.end-A),j===0&&(e.write=A,S=e.inflate_flush(x,S),A=e.write,j=A<e.read?e.read-A-1:e.end-A,A==e.end&&e.read!==0&&(A=0,j=A<e.read?e.read-A-1:e.end-A),j===0)))return e.bitb=E,e.bitk=D,x.avail_in=k,x.total_in+=O-x.next_in_index,x.next_in_index=O,e.write=A,e.inflate_flush(x,S);e.win[A++]=e.win[se++],j--,se==e.end&&(se=0),n--}t=ee;break;case ie:if(j===0&&(A==e.end&&e.read!==0&&(A=0,j=A<e.read?e.read-A-1:e.end-A),j===0&&(e.write=A,S=e.inflate_flush(x,S),A=e.write,j=A<e.read?e.read-A-1:e.end-A,A==e.end&&e.read!==0&&(A=0,j=A<e.read?e.read-A-1:e.end-A),j===0)))return e.bitb=E,e.bitk=D,x.avail_in=k,x.total_in+=O-x.next_in_index,x.next_in_index=O,e.write=A,e.inflate_flush(x,S);S=d,e.win[A++]=o,j--,t=ee;break;case ae:if(D>7&&(D-=8,k++,O--),e.write=A,S=e.inflate_flush(x,S),A=e.write,j=A<e.read?e.read-A-1:e.end-A,e.read!=e.write)return e.bitb=E,e.bitk=D,x.avail_in=k,x.total_in+=O-x.next_in_index,x.next_in_index=O,e.write=A,e.inflate_flush(x,S);t=P;case P:return S=f,e.bitb=E,e.bitk=D,x.avail_in=k,x.total_in+=O-x.next_in_index,x.next_in_index=O,e.write=A,e.inflate_flush(x,S);case oe:return S=h,e.bitb=E,e.bitk=D,x.avail_in=k,x.total_in+=O-x.next_in_index,x.next_in_index=O,e.write=A,e.inflate_flush(x,S);default:return S=m,e.bitb=E,e.bitk=D,x.avail_in=k,x.total_in+=O-x.next_in_index,x.next_in_index=O,e.write=A,e.inflate_flush(x,S)}},e.free=function(){}}var ce=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],le=0,ue=1,de=2,fe=3,pe=4,me=5,he=6,ge=7,_e=8,ve=9;function ye(e,t){let n=this,r=le,i=0,a=0,o=0,s,c=[0],l=[0],u=new se,p=0,g=new Int32Array(y*3),b=new j;n.bitk=0,n.bitb=0,n.win=new Uint8Array(t),n.end=t,n.read=0,n.write=0,n.reset=function(e,t){t&&(t[0]=0),r==he&&u.free(e),r=le,n.bitk=0,n.bitb=0,n.read=n.write=0},n.reset(e,null),n.inflate_flush=function(e,t){let r,i,a;return i=e.next_out_index,a=n.read,r=(a<=n.write?n.write:n.end)-a,r>e.avail_out&&(r=e.avail_out),r!==0&&t==_&&(t=d),e.avail_out-=r,e.total_out+=r,e.next_out.set(n.win.subarray(a,a+r),i),i+=r,a+=r,a==n.end&&(a=0,n.write==n.end&&(n.write=0),r=n.write-a,r>e.avail_out&&(r=e.avail_out),r!==0&&t==_&&(t=d),e.avail_out-=r,e.total_out+=r,e.next_out.set(n.win.subarray(a,a+r),i),i+=r,a+=r),e.next_out_index=i,n.read=a,t},n.proc=function(e,t){let _,y,x,S,C,w,T,E;for(S=e.next_in_index,C=e.avail_in,y=n.bitb,x=n.bitk,w=n.write,T=w<n.read?n.read-w-1:n.end-w;;){let D,O,k,A,ee,M,N,te;switch(r){case le:for(;x<3;){if(C!==0)t=d;else return n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,n.inflate_flush(e,t);C--,y|=(e.read_byte(S++)&255)<<x,x+=8}switch(_=y&7,p=_&1,_>>>1){case 0:y>>>=3,x-=3,_=x&7,y>>>=_,x-=_,r=ue;break;case 1:D=[],O=[],k=[[]],A=[[]],j.inflate_trees_fixed(D,O,k,A),u.init(D[0],O[0],k[0],0,A[0],0),y>>>=3,x-=3,r=he;break;case 2:y>>>=3,x-=3,r=fe;break;case 3:return y>>>=3,x-=3,r=ve,e.msg=`invalid block type`,t=h,n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,n.inflate_flush(e,t)}break;case ue:for(;x<32;){if(C!==0)t=d;else return n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,n.inflate_flush(e,t);C--,y|=(e.read_byte(S++)&255)<<x,x+=8}if((~y>>>16&65535)!=(y&65535))return r=ve,e.msg=`invalid stored block lengths`,t=h,n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,n.inflate_flush(e,t);i=y&65535,y=x=0,r=i===0?p===0?le:ge:de;break;case de:if(C===0||T===0&&(w==n.end&&n.read!==0&&(w=0,T=w<n.read?n.read-w-1:n.end-w),T===0&&(n.write=w,t=n.inflate_flush(e,t),w=n.write,T=w<n.read?n.read-w-1:n.end-w,w==n.end&&n.read!==0&&(w=0,T=w<n.read?n.read-w-1:n.end-w),T===0)))return n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,n.inflate_flush(e,t);if(t=d,_=i,_>C&&(_=C),_>T&&(_=T),n.win.set(e.read_buf(S,_),w),S+=_,C-=_,w+=_,T-=_,(i-=_)!==0)break;r=p===0?le:ge;break;case fe:for(;x<14;){if(C!==0)t=d;else return n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,n.inflate_flush(e,t);C--,y|=(e.read_byte(S++)&255)<<x,x+=8}if(a=_=y&16383,(_&31)>29||(_>>5&31)>29)return r=ve,e.msg=`too many length or distance symbols`,t=h,n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,n.inflate_flush(e,t);if(_=258+(_&31)+(_>>5&31),!s||s.length<_)s=[];else for(E=0;E<_;E++)s[E]=0;y>>>=14,x-=14,o=0,r=pe;case pe:for(;o<4+(a>>>10);){for(;x<3;){if(C!==0)t=d;else return n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,n.inflate_flush(e,t);C--,y|=(e.read_byte(S++)&255)<<x,x+=8}s[ce[o++]]=y&7,y>>>=3,x-=3}for(;o<19;)s[ce[o++]]=0;if(c[0]=7,_=b.inflate_trees_bits(s,c,l,g,e),_!=d)return t=_,t==h&&(s=null,r=ve),n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,n.inflate_flush(e,t);o=0,r=me;case me:for(;_=a,!(o>=258+(_&31)+(_>>5&31));){let i,u;for(_=c[0];x<_;){if(C!==0)t=d;else return n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,n.inflate_flush(e,t);C--,y|=(e.read_byte(S++)&255)<<x,x+=8}if(_=g[(l[0]+(y&v[_]))*3+1],u=g[(l[0]+(y&v[_]))*3+2],u<16)y>>>=_,x-=_,s[o++]=u;else{for(E=u==18?7:u-14,i=u==18?11:3;x<_+E;){if(C!==0)t=d;else return n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,n.inflate_flush(e,t);C--,y|=(e.read_byte(S++)&255)<<x,x+=8}if(y>>>=_,x-=_,i+=y&v[E],y>>>=E,x-=E,E=o,_=a,E+i>258+(_&31)+(_>>5&31)||u==16&&E<1)return s=null,r=ve,e.msg=`invalid bit length repeat`,t=h,n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,n.inflate_flush(e,t);u=u==16?s[E-1]:0;do s[E++]=u;while(--i!==0);o=E}}if(l[0]=-1,ee=[],M=[],N=[],te=[],ee[0]=9,M[0]=6,_=a,_=b.inflate_trees_dynamic(257+(_&31),1+(_>>5&31),s,ee,M,N,te,g,e),_!=d)return _==h&&(s=null,r=ve),t=_,n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,n.inflate_flush(e,t);u.init(ee[0],M[0],g,N[0],g,te[0]),r=he;case he:if(n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,(t=u.proc(n,e,t))!=f)return n.inflate_flush(e,t);if(t=d,u.free(e),S=e.next_in_index,C=e.avail_in,y=n.bitb,x=n.bitk,w=n.write,T=w<n.read?n.read-w-1:n.end-w,p===0){r=le;break}r=ge;case ge:if(n.write=w,t=n.inflate_flush(e,t),w=n.write,T=w<n.read?n.read-w-1:n.end-w,n.read!=n.write)return n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,n.inflate_flush(e,t);r=_e;case _e:return t=f,n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,n.inflate_flush(e,t);case ve:return t=h,n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,n.inflate_flush(e,t);default:return t=m,n.bitb=y,n.bitk=x,e.avail_in=C,e.total_in+=S-e.next_in_index,e.next_in_index=S,n.write=w,n.inflate_flush(e,t)}}},n.free=function(e){n.reset(e,null),n.win=null,g=null},n.set_dictionary=function(e,t,r){n.win.set(e.subarray(t,t+r),0),n.read=n.write=r},n.sync_point=function(){return+(r==ue)}}var be=32,xe=8,Se=0,Ce=1,we=2,Te=3,Ee=4,De=5,Oe=6,ke=7,Ae=12,je=13,Me=[0,0,255,255];function Ne(){let e=this;e.mode=0,e.method=0,e.was=[0],e.need=0,e.marker=0,e.wbits=0;function t(e){return!e||!e.istate?m:(e.total_in=e.total_out=0,e.msg=null,e.istate.mode=ke,e.istate.blocks.reset(e,null),d)}e.inflateEnd=function(t){return e.blocks&&e.blocks.free(t),e.blocks=null,d},e.inflateInit=function(n,r){return n.msg=null,e.blocks=null,r<8||r>15?(e.inflateEnd(n),m):(e.wbits=r,n.istate.blocks=new ye(n,1<<r),t(n),d)},e.inflate=function(e,t){let n,r;if(!e||!e.istate||!e.next_in)return m;let i=e.istate;for(t=t==x?_:d,n=_;;)switch(i.mode){case Se:if(e.avail_in===0)return n;if(n=t,e.avail_in--,e.total_in++,((i.method=e.read_byte(e.next_in_index++))&15)!=xe){i.mode=je,e.msg=`unknown compression method`,i.marker=5;break}if((i.method>>4)+8>i.wbits){i.mode=je,e.msg=`invalid win size`,i.marker=5;break}i.mode=Ce;case Ce:if(e.avail_in===0)return n;if(n=t,e.avail_in--,e.total_in++,r=e.read_byte(e.next_in_index++)&255,((i.method<<8)+r)%31!=0){i.mode=je,e.msg=`incorrect header check`,i.marker=5;break}if((r&be)===0){i.mode=ke;break}i.mode=we;case we:if(e.avail_in===0)return n;n=t,e.avail_in--,e.total_in++,i.need=(e.read_byte(e.next_in_index++)&255)<<24&4278190080,i.mode=Te;case Te:if(e.avail_in===0)return n;n=t,e.avail_in--,e.total_in++,i.need+=(e.read_byte(e.next_in_index++)&255)<<16&16711680,i.mode=Ee;case Ee:if(e.avail_in===0)return n;n=t,e.avail_in--,e.total_in++,i.need+=(e.read_byte(e.next_in_index++)&255)<<8&65280,i.mode=De;case De:return e.avail_in===0?n:(n=t,e.avail_in--,e.total_in++,i.need+=e.read_byte(e.next_in_index++)&255,i.mode=Oe,p);case Oe:return i.mode=je,e.msg=`need dictionary`,i.marker=0,m;case ke:if(n=i.blocks.proc(e,n),n==h){i.mode=je,i.marker=0;break}if(n==d&&(n=t),n!=f)return n;n=t,i.blocks.reset(e,i.was),i.mode=Ae;case Ae:return e.avail_in=0,f;case je:return h;default:return m}},e.inflateSetDictionary=function(e,t,n){let r=0,i=n;if(!e||!e.istate||e.istate.mode!=Oe)return m;let a=e.istate;return i>=1<<a.wbits&&(i=(1<<a.wbits)-1,r=n-i),a.blocks.set_dictionary(t,r,i),a.mode=ke,d},e.inflateSync=function(e){let n,r,i,a,o;if(!e||!e.istate)return m;let s=e.istate;if(s.mode!=je&&(s.mode=je,s.marker=0),(n=e.avail_in)===0)return _;for(r=e.next_in_index,i=s.marker;n!==0&&i<4;)e.read_byte(r)==Me[i]?i++:i=e.read_byte(r)===0?4-i:0,r++,n--;return e.total_in+=r-e.next_in_index,e.next_in_index=r,e.avail_in=n,s.marker=i,i==4?(a=e.total_in,o=e.total_out,t(e),e.total_in=a,e.total_out=o,s.mode=ke,d):h},e.inflateSyncPoint=function(e){return!e||!e.istate||!e.istate.blocks?m:e.istate.blocks.sync_point()}}function Pe(){}Pe.prototype={inflateInit(e){let t=this;return t.istate=new Ne,e||=u,t.istate.inflateInit(t,e)},inflate(e){let t=this;return t.istate?t.istate.inflate(t,e):m},inflateEnd(){let e=this;if(!e.istate)return m;let t=e.istate.inflateEnd(e);return e.istate=null,t},inflateSync(){let e=this;return e.istate?e.istate.inflateSync(e):m},inflateSetDictionary(e,t){let n=this;return n.istate?n.istate.inflateSetDictionary(n,e,t):m},read_byte(e){return this.next_in[e]},read_buf(e,t){return this.next_in.subarray(e,e+t)}};function Fe(e){let t=this,n=new Pe,r=e&&e.chunkSize?Math.floor(e.chunkSize*2):128*1024,i=b,a=new Uint8Array(r),o=!1;n.inflateInit(),n.next_out=a,t.append=function(e,t){let s=[],c,l,u=0,p=0,m=0;if(e.length!==0){n.next_in_index=0,n.next_in=e,n.avail_in=e.length;do{if(n.next_out_index=0,n.avail_out=r,n.avail_in===0&&!o&&(n.next_in_index=0,o=!0),c=n.inflate(i),o&&c===_){if(n.avail_in!==0)throw Error(`inflating: bad input`)}else if(c!==d&&c!==f)throw Error(`inflating: `+n.msg);if((o||c===f)&&n.avail_in===e.length)throw Error(`inflating: bad input`);n.next_out_index&&(n.next_out_index===r?s.push(new Uint8Array(a)):s.push(a.subarray(0,n.next_out_index))),m+=n.next_out_index,t&&n.next_in_index>0&&n.next_in_index!=u&&(t(n.next_in_index),u=n.next_in_index)}while(n.avail_in>0||n.avail_out===0);return s.length>1?(l=new Uint8Array(m),s.forEach(function(e){l.set(e,p),p+=e.length})):l=s[0]?new Uint8Array(s[0]):new Uint8Array,l}},t.flush=function(){n.inflateEnd()}}var Ie=4294967295,Le=65535,Re=101010256,ze=39169,Be=21589,Ve=28789,He=25461,Ue=6534,We=2048,Ge=`undefined`,Ke=class{constructor(e){return class extends TransformStream{constructor(t,n){let r=new e(n);super({transform(e,t){t.enqueue(r.append(e))},flush(e){let t=r.flush();t&&e.enqueue(t)}})}}}},qe=64,Je=2;try{typeof navigator<`u`&&navigator.hardwareConcurrency&&(Je=navigator.hardwareConcurrency)}catch{}var Ye=Object.assign({},{chunkSize:512*1024,maxWorkers:Je,terminateWorkerTimeout:5e3,useWebWorkers:!0,useCompressionStream:!0,workerScripts:void 0,CompressionStreamNative:typeof CompressionStream<`u`&&CompressionStream,DecompressionStreamNative:typeof DecompressionStream<`u`&&DecompressionStream});function Xe(){return Ye}function Ze(e){return Math.max(e.chunkSize,qe)}function Qe(e){let{baseURL:t,chunkSize:n,maxWorkers:r,terminateWorkerTimeout:i,useCompressionStream:a,useWebWorkers:o,Deflate:s,Inflate:c,CompressionStream:l,DecompressionStream:u,workerScripts:d}=e;if($e(`baseURL`,t),$e(`chunkSize`,n),$e(`maxWorkers`,r),$e(`terminateWorkerTimeout`,i),$e(`useCompressionStream`,a),$e(`useWebWorkers`,o),s&&(Ye.CompressionStream=new Ke(s)),c&&(Ye.DecompressionStream=new Ke(c)),$e(`CompressionStream`,l),$e(`DecompressionStream`,u),d!==void 0){let{deflate:e,inflate:t}=d;if((e||t)&&(Ye.workerScripts||={}),e){if(!Array.isArray(e))throw Error(`workerScripts.deflate must be an array`);Ye.workerScripts.deflate=e}if(t){if(!Array.isArray(t))throw Error(`workerScripts.inflate must be an array`);Ye.workerScripts.inflate=t}}}function $e(e,t){t!==void 0&&(Ye[e]=t)}function et(){return`application/octet-stream`}var tt=[];for(let e=0;e<256;e++){let t=e;for(let e=0;e<8;e++)t&1?t=t>>>1^3988292384:t>>>=1;tt[e]=t}var nt=class{constructor(e){this.crc=e||-1}append(e){let t=this.crc|0;for(let n=0,r=e.length|0;n<r;n++)t=t>>>8^tt[(t^e[n])&255];this.crc=t}get(){return~this.crc}},rt=class extends TransformStream{constructor(){let e,t=new nt;super({transform(e,n){t.append(e),n.enqueue(e)},flush(){let n=new Uint8Array(4);new DataView(n.buffer).setUint32(0,t.get()),e.value=n}}),e=this}};function it(e){if(typeof TextEncoder>`u`){e=unescape(encodeURIComponent(e));let t=new Uint8Array(e.length);for(let n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return t}else return new TextEncoder().encode(e)}var at={concat(e,t){if(e.length===0||t.length===0)return e.concat(t);let n=e[e.length-1],r=at.getPartial(n);return r===32?e.concat(t):at._shiftRight(t,r,n|0,e.slice(0,e.length-1))},bitLength(e){let t=e.length;if(t===0)return 0;let n=e[t-1];return(t-1)*32+at.getPartial(n)},clamp(e,t){if(e.length*32<t)return e;e=e.slice(0,Math.ceil(t/32));let n=e.length;return t&=31,n>0&&t&&(e[n-1]=at.partial(t,e[n-1]&2147483648>>t-1,1)),e},partial(e,t,n){return e===32?t:(n?t|0:t<<32-e)+e*1099511627776},getPartial(e){return Math.round(e/1099511627776)||32},_shiftRight(e,t,n,r){for(r===void 0&&(r=[]);t>=32;t-=32)r.push(n),n=0;if(t===0)return r.concat(e);for(let i=0;i<e.length;i++)r.push(n|e[i]>>>t),n=e[i]<<32-t;let i=e.length?e[e.length-1]:0,a=at.getPartial(i);return r.push(at.partial(t+a&31,t+a>32?n:r.pop(),1)),r}},ot={bytes:{fromBits(e){let t=at.bitLength(e)/8,n=new Uint8Array(t),r;for(let i=0;i<t;i++)i&3||(r=e[i/4]),n[i]=r>>>24,r<<=8;return n},toBits(e){let t=[],n,r=0;for(n=0;n<e.length;n++)r=r<<8|e[n],(n&3)==3&&(t.push(r),r=0);return n&3&&t.push(at.partial(8*(n&3),r)),t}}},st={};st.sha1=class{constructor(e){let t=this;t.blockSize=512,t._init=[1732584193,4023233417,2562383102,271733878,3285377520],t._key=[1518500249,1859775393,2400959708,3395469782],e?(t._h=e._h.slice(0),t._buffer=e._buffer.slice(0),t._length=e._length):t.reset()}reset(){let e=this;return e._h=e._init.slice(0),e._buffer=[],e._length=0,e}update(e){let t=this;typeof e==`string`&&(e=ot.utf8String.toBits(e));let n=t._buffer=at.concat(t._buffer,e),r=t._length,i=t._length=r+at.bitLength(e);if(i>9007199254740991)throw Error(`Cannot hash more than 2^53 - 1 bits`);let a=new Uint32Array(n),o=0;for(let e=t.blockSize+r-(t.blockSize+r&t.blockSize-1);e<=i;e+=t.blockSize)t._block(a.subarray(16*o,16*(o+1))),o+=1;return n.splice(0,16*o),t}finalize(){let e=this,t=e._buffer,n=e._h;t=at.concat(t,[at.partial(1,1)]);for(let e=t.length+2;e&15;e++)t.push(0);for(t.push(Math.floor(e._length/4294967296)),t.push(e._length|0);t.length;)e._block(t.splice(0,16));return e.reset(),n}_f(e,t,n,r){if(e<=19)return t&n|~t&r;if(e<=39)return t^n^r;if(e<=59)return t&n|t&r|n&r;if(e<=79)return t^n^r}_S(e,t){return t<<e|t>>>32-e}_block(e){let t=this,n=t._h,r=Array(80);for(let t=0;t<16;t++)r[t]=e[t];let i=n[0],a=n[1],o=n[2],s=n[3],c=n[4];for(let e=0;e<=79;e++){e>=16&&(r[e]=t._S(1,r[e-3]^r[e-8]^r[e-14]^r[e-16]));let n=t._S(5,i)+t._f(e,a,o,s)+c+r[e]+t._key[Math.floor(e/20)]|0;c=s,s=o,o=t._S(30,a),a=i,i=n}n[0]=n[0]+i|0,n[1]=n[1]+a|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+c|0}};var ct={};ct.aes=class{constructor(e){let t=this;t._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],t._tables[0][0][0]||t._precompute();let n=t._tables[0][4],r=t._tables[1],i=e.length,a,o,s,c=1;if(i!==4&&i!==6&&i!==8)throw Error(`invalid aes key size`);for(t._key=[o=e.slice(0),s=[]],a=i;a<4*i+28;a++){let e=o[a-1];(a%i===0||i===8&&a%i===4)&&(e=n[e>>>24]<<24^n[e>>16&255]<<16^n[e>>8&255]<<8^n[e&255],a%i===0&&(e=e<<8^e>>>24^c<<24,c=c<<1^(c>>7)*283)),o[a]=o[a-i]^e}for(let e=0;a;e++,a--){let t=o[e&3?a:a-4];a<=4||e<4?s[e]=t:s[e]=r[0][n[t>>>24]]^r[1][n[t>>16&255]]^r[2][n[t>>8&255]]^r[3][n[t&255]]}}encrypt(e){return this._crypt(e,0)}decrypt(e){return this._crypt(e,1)}_precompute(){let e=this._tables[0],t=this._tables[1],n=e[4],r=t[4],i=[],a=[],o,s,c,l;for(let e=0;e<256;e++)a[(i[e]=e<<1^(e>>7)*283)^e]=e;for(let u=o=0;!n[u];u^=s||1,o=a[o]||1){let a=o^o<<1^o<<2^o<<3^o<<4;a=a>>8^a&255^99,n[u]=a,r[a]=u,l=i[c=i[s=i[u]]];let d=l*16843009^c*65537^s*257^u*16843008,f=i[a]*257^a*16843008;for(let n=0;n<4;n++)e[n][u]=f=f<<24^f>>>8,t[n][a]=d=d<<24^d>>>8}for(let n=0;n<5;n++)e[n]=e[n].slice(0),t[n]=t[n].slice(0)}_crypt(e,t){if(e.length!==4)throw Error(`invalid aes block size`);let n=this._key[t],r=n.length/4-2,i=[0,0,0,0],a=this._tables[t],o=a[0],s=a[1],c=a[2],l=a[3],u=a[4],d=e[0]^n[0],f=e[t?3:1]^n[1],p=e[2]^n[2],m=e[t?1:3]^n[3],h=4,g,_,v;for(let e=0;e<r;e++)g=o[d>>>24]^s[f>>16&255]^c[p>>8&255]^l[m&255]^n[h],_=o[f>>>24]^s[p>>16&255]^c[m>>8&255]^l[d&255]^n[h+1],v=o[p>>>24]^s[m>>16&255]^c[d>>8&255]^l[f&255]^n[h+2],m=o[m>>>24]^s[d>>16&255]^c[f>>8&255]^l[p&255]^n[h+3],h+=4,d=g,f=_,p=v;for(let e=0;e<4;e++)i[t?3&-e:e]=u[d>>>24]<<24^u[f>>16&255]<<16^u[p>>8&255]<<8^u[m&255]^n[h++],g=d,d=f,f=p,p=m,m=g;return i}};var lt={getRandomValues(e){let t=new Uint32Array(e.buffer),n=e=>{let t=987654321,n=4294967295;return function(){return t=36969*(t&65535)+(t>>16)&n,e=18e3*(e&65535)+(e>>16)&n,(((t<<16)+e&n)/4294967296+.5)*(Math.random()>.5?1:-1)}};for(let r=0,i;r<e.length;r+=4){let e=n((i||Math.random())*4294967296);i=e()*987654071,t[r/4]=e()*4294967296|0}return e}},ut={};ut.ctrGladman=class{constructor(e,t){this._prf=e,this._initIv=t,this._iv=t}reset(){this._iv=this._initIv}update(e){return this.calculate(this._prf,e,this._iv)}incWord(e){if((e>>24&255)==255){let t=e>>16&255,n=e>>8&255,r=e&255;t===255?(t=0,n===255?(n=0,r===255?r=0:++r):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=r}else e+=1<<24;return e}incCounter(e){(e[0]=this.incWord(e[0]))===0&&(e[1]=this.incWord(e[1]))}calculate(e,t,n){let r;if(!(r=t.length))return[];let i=at.bitLength(t);for(let i=0;i<r;i+=4){this.incCounter(n);let r=e.encrypt(n);t[i]^=r[0],t[i+1]^=r[1],t[i+2]^=r[2],t[i+3]^=r[3]}return at.clamp(t,i)}};var dt={importKey(e){return new dt.hmacSha1(ot.bytes.toBits(e))},pbkdf2(e,t,n,r){if(n||=1e4,r<0||n<0)throw Error(`invalid params to pbkdf2`);let i=(r>>5)+1<<2,a,o,s,c,l,u=new ArrayBuffer(i),d=new DataView(u),f=0,p=at;for(t=ot.bytes.toBits(t),l=1;f<(i||1);l++){for(a=o=e.encrypt(p.concat(t,[l])),s=1;s<n;s++)for(o=e.encrypt(o),c=0;c<o.length;c++)a[c]^=o[c];for(s=0;f<(i||1)&&s<a.length;s++)d.setInt32(f,a[s]),f+=4}return u.slice(0,r/8)}};dt.hmacSha1=class{constructor(e){let t=this,n=t._hash=st.sha1,r=[[],[]];t._baseHash=[new n,new n];let i=t._baseHash[0].blockSize/32;e.length>i&&(e=new n().update(e).finalize());for(let t=0;t<i;t++)r[0][t]=e[t]^909522486,r[1][t]=e[t]^1549556828;t._baseHash[0].update(r[0]),t._baseHash[1].update(r[1]),t._resultHash=new n(t._baseHash[0])}reset(){let e=this;e._resultHash=new e._hash(e._baseHash[0]),e._updated=!1}update(e){let t=this;t._updated=!0,t._resultHash.update(e)}digest(){let e=this,t=e._resultHash.finalize(),n=new e._hash(e._baseHash[1]).update(t).finalize();return e.reset(),n}encrypt(e){if(this._updated)throw Error(`encrypt on already updated hmac called!`);return this.update(e),this.digest(e)}};var ft=typeof crypto<`u`&&typeof crypto.getRandomValues==`function`,pt=`Invalid password`,mt=`Invalid signature`,ht=`zipjs-abort-check-password`;function gt(e){return ft?crypto.getRandomValues(e):lt.getRandomValues(e)}var _t=16,vt=`raw`,yt={name:`PBKDF2`},bt={name:`HMAC`},xt=`SHA-1`,St=Object.assign({hash:bt},yt),Ct=Object.assign({iterations:1e3,hash:{name:xt}},yt),wt=[`deriveBits`],Tt=[8,12,16],Et=[16,24,32],Dt=10,Ot=[0,0,0,0],kt=typeof crypto!=Ge,At=kt&&crypto.subtle,jt=kt&&At!==void 0,Mt=ot.bytes,Nt=ct.aes,Pt=ut.ctrGladman,Ft=dt.hmacSha1,It=kt&&jt&&typeof At.importKey==`function`,Lt=kt&&jt&&typeof At.deriveBits==`function`,Rt=class extends TransformStream{constructor({password:e,rawPassword:t,signed:n,encryptionStrength:r,checkPasswordOnly:i}){super({start(){Object.assign(this,{ready:new Promise(e=>this.resolveReady=e),password:Kt(e,t),signed:n,strength:r-1,pending:new Uint8Array})},async transform(e,t){let n=this,{password:r,strength:a,resolveReady:o,ready:s}=n;r?(await Vt(n,a,r,Yt(e,0,Tt[a]+2)),e=Yt(e,Tt[a]+2),i?t.error(Error(ht)):o()):await s;let c=new Uint8Array(e.length-Dt-(e.length-Dt)%_t);t.enqueue(Bt(n,e,c,0,Dt,!0))},async flush(e){let{signed:t,ctr:n,hmac:r,pending:i,ready:a}=this;if(r&&n){await a;let o=Yt(i,0,i.length-Dt),s=Yt(i,i.length-Dt),c=new Uint8Array;if(o.length){let e=Zt(Mt,o);r.update(e),c=Xt(Mt,n.update(e))}if(t){let e=Yt(Xt(Mt,r.digest()),0,Dt);for(let t=0;t<Dt;t++)if(e[t]!=s[t])throw Error(mt)}e.enqueue(c)}}})}},zt=class extends TransformStream{constructor({password:e,rawPassword:t,encryptionStrength:n}){let r;super({start(){Object.assign(this,{ready:new Promise(e=>this.resolveReady=e),password:Kt(e,t),strength:n-1,pending:new Uint8Array})},async transform(e,t){let n=this,{password:r,strength:i,resolveReady:a,ready:o}=n,s=new Uint8Array;r?(s=await Ht(n,i,r),a()):await o;let c=new Uint8Array(s.length+e.length-e.length%_t);c.set(s,0),t.enqueue(Bt(n,e,c,s.length,0))},async flush(e){let{ctr:t,hmac:n,pending:i,ready:a}=this;if(n&&t){await a;let o=new Uint8Array;if(i.length){let e=t.update(Zt(Mt,i));n.update(e),o=Xt(Mt,e)}r.signature=Xt(Mt,n.digest()).slice(0,Dt),e.enqueue(qt(o,r.signature))}}}),r=this}};function Bt(e,t,n,r,i,a){let{ctr:o,hmac:s,pending:c}=e,l=t.length-i;c.length&&(t=qt(c,t),n=Jt(n,l-l%_t));let u;for(u=0;u<=l-_t;u+=_t){let e=Zt(Mt,Yt(t,u,u+_t));a&&s.update(e);let i=o.update(e);a||s.update(i),n.set(Xt(Mt,i),u+r)}return e.pending=Yt(t,u),n}async function Vt(e,t,n,r){let i=await Ut(e,t,n,Yt(r,0,Tt[t])),a=Yt(r,Tt[t]);if(i[0]!=a[0]||i[1]!=a[1])throw Error(pt)}async function Ht(e,t,n){let r=gt(new Uint8Array(Tt[t]));return qt(r,await Ut(e,t,n,r))}async function Ut(e,t,n,r){e.password=null;let i=await Wt(vt,n,St,!1,wt),a=await Gt(Object.assign({salt:r},Ct),i,8*(Et[t]*2+2)),o=new Uint8Array(a),s=Zt(Mt,Yt(o,0,Et[t])),c=Zt(Mt,Yt(o,Et[t],Et[t]*2)),l=Yt(o,Et[t]*2);return Object.assign(e,{keys:{key:s,authentication:c,passwordVerification:l},ctr:new Pt(new Nt(s),Array.from(Ot)),hmac:new Ft(c)}),l}async function Wt(e,t,n,r,i){if(It)try{return await At.importKey(e,t,n,r,i)}catch{return It=!1,dt.importKey(t)}else return dt.importKey(t)}async function Gt(e,t,n){if(Lt)try{return await At.deriveBits(e,t,n)}catch{return Lt=!1,dt.pbkdf2(t,e.salt,Ct.iterations,n)}else return dt.pbkdf2(t,e.salt,Ct.iterations,n)}function Kt(e,t){return t===void 0?it(e):t}function qt(e,t){let n=e;return e.length+t.length&&(n=new Uint8Array(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function Jt(e,t){if(t&&t>e.length){let n=e;e=new Uint8Array(t),e.set(n,0)}return e}function Yt(e,t,n){return e.subarray(t,n)}function Xt(e,t){return e.fromBits(t)}function Zt(e,t){return e.toBits(t)}var Qt=12,$t=class extends TransformStream{constructor({password:e,passwordVerification:t,checkPasswordOnly:n}){super({start(){Object.assign(this,{password:e,passwordVerification:t}),rn(this,e)},transform(e,t){let r=this;if(r.password){let t=tn(r,e.subarray(0,Qt));if(r.password=null,t.at(-1)!=r.passwordVerification)throw Error(pt);e=e.subarray(Qt)}n?t.error(Error(ht)):t.enqueue(tn(r,e))}})}},en=class extends TransformStream{constructor({password:e,passwordVerification:t}){super({start(){Object.assign(this,{password:e,passwordVerification:t}),rn(this,e)},transform(e,t){let n=this,r,i;if(n.password){n.password=null;let t=gt(new Uint8Array(Qt));t[Qt-1]=n.passwordVerification,r=new Uint8Array(e.length+t.length),r.set(nn(n,t),0),i=Qt}else r=new Uint8Array(e.length),i=0;r.set(nn(n,e),i),t.enqueue(r)}})}};function tn(e,t){let n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=on(e)^t[r],an(e,n[r]);return n}function nn(e,t){let n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=on(e)^t[r],an(e,t[r]);return n}function rn(e,t){let n=[305419896,591751049,878082192];Object.assign(e,{keys:n,crcKey0:new nt(n[0]),crcKey2:new nt(n[2])});for(let n=0;n<t.length;n++)an(e,t.charCodeAt(n))}function an(e,t){let[n,r,i]=e.keys;e.crcKey0.append([t]),n=~e.crcKey0.get(),r=cn(Math.imul(cn(r+sn(n)),134775813)+1),e.crcKey2.append([r>>>24]),i=~e.crcKey2.get(),e.keys=[n,r,i]}function on(e){let t=e.keys[2]|2;return sn(Math.imul(t,t^1)>>>8)}function sn(e){return e&255}function cn(e){return e&4294967295}var ln=`Invalid uncompressed size`,un=`deflate-raw`,dn=class extends TransformStream{constructor(e,{chunkSize:t,CompressionStream:n,CompressionStreamNative:r}){super({});let{compressed:i,encrypted:a,useCompressionStream:o,zipCrypto:s,signed:c,level:l}=e,u=this,d,f,p=super.readable;(!a||s)&&c&&(d=new rt,p=hn(p,d)),i&&(p=mn(p,o,{level:l,chunkSize:t},r,n)),a&&(s?p=hn(p,new en(e)):(f=new zt(e),p=hn(p,f))),pn(u,p,()=>{let e;a&&!s&&(e=f.signature),(!a||s)&&c&&(e=new DataView(d.value.buffer).getUint32(0)),u.signature=e})}},fn=class extends TransformStream{constructor(e,{chunkSize:t,DecompressionStream:n,DecompressionStreamNative:r}){super({});let{zipCrypto:i,encrypted:a,signed:o,signature:s,compressed:c,useCompressionStream:l}=e,u,d,f=super.readable;a&&(i?f=hn(f,new $t(e)):(d=new Rt(e),f=hn(f,d))),c&&(f=mn(f,l,{chunkSize:t},r,n)),(!a||i)&&o&&(u=new rt,f=hn(f,u)),pn(this,f,()=>{if((!a||i)&&o&&s!=new DataView(u.value.buffer).getUint32(0,!1))throw Error(mt)})}};function pn(e,t,n){t=hn(t,new TransformStream({flush:n})),Object.defineProperty(e,"readable",{get(){return t}})}function mn(e,t,n,r,i){try{e=hn(e,new(t&&r?r:i)(un,n))}catch(r){if(t)e=hn(e,new i(un,n));else throw r}return e}function hn(e,t){return e.pipeThrough(t)}var gn=`message`,_n=`start`,vn=`data`,yn=`close`,bn=`inflate`,xn=class extends TransformStream{constructor(e,t){super({});let n=this,{codecType:r}=e,i;r.startsWith(`deflate`)?i=dn:r.startsWith(`inflate`)&&(i=fn),n.outputSize=0;let a=0,o=new i(e,t),s=super.readable,c=new TransformStream({transform(e,t){e&&e.length&&(a+=e.length,t.enqueue(e))},flush(){Object.assign(n,{inputSize:a})}}),l=new TransformStream({transform(t,r){if(t&&t.length&&(r.enqueue(t),n.outputSize+=t.length,e.outputSize&&n.outputSize>e.outputSize))throw Error(ln)},flush(){let{signature:e}=o;Object.assign(n,{signature:e,inputSize:a})}});Object.defineProperty(n,"readable",{get(){return s.pipeThrough(c).pipeThrough(o).pipeThrough(l)}})}},Sn=class extends TransformStream{constructor(e){let t;super({transform:n,flush(e){t&&t.length&&e.enqueue(t)}});function n(r,i){if(t){let e=new Uint8Array(t.length+r.length);e.set(t),e.set(r,t.length),r=e,t=null}r.length>e?(i.enqueue(r.slice(0,e)),n(r.slice(e),i)):t=r}}},Cn=typeof Worker!=Ge,wn=class{constructor(e,{readable:t,writable:n},{options:r,config:i,streamOptions:a,useWebWorkers:o,transferStreams:s,scripts:c},l){let{signal:u}=a;return Object.assign(e,{busy:!0,readable:t.pipeThrough(new Sn(i.chunkSize)).pipeThrough(new Tn(a),{signal:u}),writable:n,options:Object.assign({},r),scripts:c,transferStreams:s,terminate(){return new Promise(t=>{let{worker:n,busy:r}=e;n?(r?e.resolveTerminated=t:(n.terminate(),t()),e.interface=null):t()})},onTaskFinished(){let{resolveTerminated:t}=e;t&&(e.resolveTerminated=null,e.terminated=!0,e.worker.terminate(),t()),e.busy=!1,l(e)}}),(o&&Cn?On:Dn)(e,i)}},Tn=class extends TransformStream{constructor({onstart:e,onprogress:t,size:n,onend:r}){let i=0;super({async start(){e&&await En(e,n)},async transform(e,r){i+=e.length,t&&await En(t,i,n),r.enqueue(e)},async flush(){r&&await En(r,i)}})}};async function En(e,...t){try{await e(...t)}catch{}}function Dn(e,t){return{run:()=>kn(e,t)}}function On(e,t){let{baseURL:n,chunkSize:r}=t;if(!e.interface){let i;try{i=Pn(e.scripts[0],n,e)}catch{return Cn=!1,Dn(e,t)}Object.assign(e,{worker:i,interface:{run:()=>An(e,{chunkSize:r})}})}return e.interface}async function kn({options:e,readable:t,writable:n,onTaskFinished:r},i){let a;try{a=new xn(e,i),await t.pipeThrough(a).pipeTo(n,{preventClose:!0,preventAbort:!0});let{signature:r,inputSize:o,outputSize:s}=a;return{signature:r,inputSize:o,outputSize:s}}catch(e){throw a&&(e.outputSize=a.outputSize),e}finally{r()}}async function An(e,t){let n,r,i=new Promise((e,t)=>{n=e,r=t});Object.assign(e,{reader:null,writer:null,resolveResult:n,rejectResult:r,result:i});let{readable:a,options:o,scripts:s}=e,{writable:c,closed:l}=jn(e.writable),u=Fn({type:_n,scripts:s.slice(1),options:o,config:t,readable:a,writable:c},e);u||Object.assign(e,{reader:a.getReader(),writer:c.getWriter()});let d=await i;return u||await c.getWriter().close(),await l,d}function jn(e){let t,n=new Promise(e=>t=e);return{writable:new WritableStream({async write(t){let n=e.getWriter();await n.ready,await n.write(t),n.releaseLock()},close(){t()},abort(t){return e.getWriter().abort(t)}}),closed:n}}var Mn=!0,Nn=!0;function Pn(e,t,n){let r={type:`module`},i,a;typeof e==`function`&&(e=e());try{i=new URL(e,t)}catch{i=e}if(Mn)try{a=new Worker(i)}catch{Mn=!1,a=new Worker(i,r)}else a=new Worker(i,r);return a.addEventListener(gn,e=>In(e,n)),a}function Fn(e,{worker:t,writer:n,onTaskFinished:r,transferStreams:i}){try{let{value:n,readable:r,writable:a}=e,o=[];if(n&&(n.byteLength<n.buffer.byteLength?e.value=n.buffer.slice(0,n.byteLength):e.value=n.buffer,o.push(e.value)),i&&Nn?(r&&o.push(r),a&&o.push(a)):e.readable=e.writable=null,o.length)try{return t.postMessage(e,o),!0}catch{Nn=!1,e.readable=e.writable=null,t.postMessage(e)}else t.postMessage(e)}catch(e){throw n&&n.releaseLock(),r(),e}}async function In({data:e},t){let{type:n,value:r,messageId:i,result:a,error:o}=e,{reader:s,writer:c,resolveResult:l,rejectResult:u,onTaskFinished:d}=t;try{if(o){let{message:e,stack:t,code:n,name:r,outputSize:i}=o,a=Error(e);Object.assign(a,{stack:t,code:n,name:r,outputSize:i}),f(a)}else{if(n==`pull`){let{value:e,done:n}=await s.read();Fn({type:vn,value:e,done:n,messageId:i},t)}n==`data`&&(await c.ready,await c.write(new Uint8Array(r)),Fn({type:`ack`,messageId:i},t)),n==`close`&&f(null,a)}}catch(e){Fn({type:yn,messageId:i},t),f(e)}function f(e,t){e?u(e):l(t),c&&c.releaseLock(),d()}}var Ln=[],Rn=[],zn=0;async function Bn(e,t){let{options:n,config:r}=t,{transferStreams:i,useWebWorkers:a,useCompressionStream:o,codecType:s,compressed:c,signed:l,encrypted:u}=n,{workerScripts:d,maxWorkers:f}=r;return t.transferStreams=i||i===void 0,t.useWebWorkers=!(!c&&!l&&!u&&!t.transferStreams)&&(a||a===void 0&&r.useWebWorkers),t.scripts=t.useWebWorkers&&d?d[s]:[],n.useCompressionStream=o||o===void 0&&r.useCompressionStream,(await p()).run();async function p(){let n=Ln.find(e=>!e.busy);if(n)return Hn(n),new wn(n,e,t,m);if(Ln.length<f){let n={indexWorker:zn};return zn++,Ln.push(n),new wn(n,e,t,m)}else return new Promise(n=>Rn.push({resolve:n,stream:e,workerOptions:t}))}function m(e){if(Rn.length){let[{resolve:t,stream:n,workerOptions:r}]=Rn.splice(0,1);t(new wn(e,n,r,m))}else e.worker?(Hn(e),Vn(e,t)):Ln=Ln.filter(t=>t!=e)}}function Vn(e,t){let{config:n}=t,{terminateWorkerTimeout:r}=n;Number.isFinite(r)&&r>=0&&(e.terminated?e.terminated=!1:e.terminateTimeout=setTimeout(async()=>{Ln=Ln.filter(t=>t!=e);try{await e.terminate()}catch{}},r))}function Hn(e){let{terminateTimeout:t}=e;t&&(clearTimeout(t),e.terminateTimeout=null)}async function Un(){await Promise.allSettled(Ln.map(e=>(Hn(e),e.terminate())))}var Wn=`HTTP error `,Gn=`HTTP Range not supported`,Kn=`Writer iterator completed too soon`,qn=`Writer not initialized`,Jn=`text/plain`,Yn=`Content-Length`,Xn=`Content-Range`,Zn=`Accept-Ranges`,Qn=`Range`,$n=`Content-Type`,er=`HEAD`,tr=`GET`,nr=`bytes`,rr=64*1024,ir=`writable`,ar=class{constructor(){this.size=0}init(){this.initialized=!0}},or=class extends ar{get readable(){let e=this,{chunkSize:t=rr}=e,n=new ReadableStream({start(){this.chunkOffset=0},async pull(r){let{offset:i=0,size:a,diskNumberStart:o}=n,{chunkOffset:s}=this,c=a===void 0?t:Math.min(t,a-s),l=await Lr(e,i+s,c,o);r.enqueue(l),s+t>a||a===void 0&&!l.length&&c?r.close():this.chunkOffset+=t}});return n}},sr=class extends ar{constructor(){super();let e=this,t=new WritableStream({write(t){if(!e.initialized)throw Error(qn);return e.writeUint8Array(t)}});Object.defineProperty(e,ir,{get(){return t}})}writeUint8Array(){}},cr=class extends or{constructor(e){super();let t=e.length;for(;e.charAt(t-1)==`=`;)t--;let n=e.indexOf(`,`)+1;Object.assign(this,{dataURI:e,dataStart:n,size:Math.floor((t-n)*.75)})}readUint8Array(e,t){let{dataStart:n,dataURI:r}=this,i=new Uint8Array(t),a=Math.floor(e/3)*4,o=atob(r.substring(a+n,Math.ceil((e+t)/3)*4+n)),s=e-Math.floor(a/4)*3,c=0;for(let e=s;e<s+t&&e<o.length;e++)i[e-s]=o.charCodeAt(e),c++;return c<i.length?i.subarray(0,c):i}},lr=class extends sr{constructor(e){super(),Object.assign(this,{data:`data:`+(e||``)+`;base64,`,pending:[]})}writeUint8Array(e){let t=this,n=0,r=t.pending,i=t.pending.length;for(t.pending=``,n=0;n<Math.floor((i+e.length)/3)*3-i;n++)r+=String.fromCharCode(e[n]);for(;n<e.length;n++)t.pending+=String.fromCharCode(e[n]);r.length&&(r.length>2?t.data+=btoa(r):t.pending+=r)}getData(){return this.data+btoa(this.pending)}},ur=class extends or{constructor(e){super(),Object.assign(this,{blob:e,size:e.size})}async readUint8Array(e,t){let n=this,r=e+t,i=await(e||r<n.size?n.blob.slice(e,r):n.blob).arrayBuffer();return i.byteLength>t&&(i=i.slice(e,r)),new Uint8Array(i)}},dr=class extends ar{constructor(e){super();let t=this,n=new TransformStream,r=[];e&&r.push([$n,e]),Object.defineProperty(t,ir,{get(){return n.writable}}),t.blob=new Response(n.readable,{headers:r}).blob()}getData(){return this.blob}},fr=class extends ur{constructor(e){super(new Blob([e],{type:Jn}))}},pr=class extends dr{constructor(e){super(e),Object.assign(this,{encoding:e,utf8:!e||e.toLowerCase()==`utf-8`})}async getData(){let{encoding:e,utf8:t}=this,n=await super.getData();if(n.text&&t)return n.text();{let t=new FileReader;return new Promise((r,i)=>{Object.assign(t,{onload:({target:e})=>r(e.result),onerror:()=>i(t.error)}),t.readAsText(n,e)})}}},mr=class extends or{constructor(e,t){super(),gr(this,e,t)}async init(){await _r(this,Tr,xr),super.init()}readUint8Array(e,t){return vr(this,e,t,Tr,xr)}},hr=class extends or{constructor(e,t){super(),gr(this,e,t)}async init(){await _r(this,Er,Sr),super.init()}readUint8Array(e,t){return vr(this,e,t,Er,Sr)}};function gr(e,t,n){let{preventHeadRequest:r,useRangeHeader:i,forceRangeRequests:a,combineSizeEocd:o}=n;n=Object.assign({},n),delete n.preventHeadRequest,delete n.useRangeHeader,delete n.forceRangeRequests,delete n.combineSizeEocd,delete n.useXHR,Object.assign(e,{url:t,options:n,preventHeadRequest:r,useRangeHeader:i,forceRangeRequests:a,combineSizeEocd:o})}async function _r(e,t,n){let{url:r,preventHeadRequest:i,useRangeHeader:a,forceRangeRequests:o,combineSizeEocd:s}=e;if(Fr(r)&&(a||o)&&(i===void 0||i)){let r=await t(tr,e,yr(e,s?-22:void 0));if(!o&&r.headers.get(Zn)!=nr)throw Error(Gn);{s&&(e.eocdCache=new Uint8Array(await r.arrayBuffer()));let i,a=r.headers.get(Xn);if(a){let e=a.trim().split(/\s*\/\s*/);if(e.length){let t=e[1];t&&t!=`*`&&(i=Number(t))}}i===void 0?await wr(e,t,n):e.size=i}}else await wr(e,t,n)}async function vr(e,t,n,r,i){let{useRangeHeader:a,forceRangeRequests:o,eocdCache:s,size:c,options:l}=e;if(a||o){if(s&&t==c-22&&n==22)return s;if(t>=c)return new Uint8Array;{t+n>c&&(n=c-t);let i=await r(tr,e,yr(e,t,n));if(i.status!=206)throw Error(Gn);return new Uint8Array(await i.arrayBuffer())}}else{let{data:r}=e;return r||await i(e,l),new Uint8Array(e.data.subarray(t,t+n))}}function yr(e,t=0,n=1){return Object.assign({},br(e),{[Qn]:`bytes=`+(t<0?t:t+`-`+(t+n-1))})}function br({options:e}){let{headers:t}=e;if(t)return Symbol.iterator in t?Object.fromEntries(t):t}async function xr(e){await Cr(e,Tr)}async function Sr(e){await Cr(e,Er)}async function Cr(e,t){let n=await t(tr,e,br(e));e.data=new Uint8Array(await n.arrayBuffer()),e.size||=e.data.length}async function wr(e,t,n){if(e.preventHeadRequest)await n(e,e.options);else{let r=(await t(er,e,br(e))).headers.get(Yn);r?e.size=Number(r):await n(e,e.options)}}async function Tr(e,{options:t,url:n},r){let i=await fetch(n,Object.assign({},t,{method:e,headers:r}));if(i.status<400)return i;throw i.status==416?Error(Gn):Error(Wn+(i.statusText||i.status))}function Er(e,{url:t},n){return new Promise((r,i)=>{let a=new XMLHttpRequest;if(a.addEventListener(`load`,()=>{if(a.status<400){let e=[];a.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach(t=>{let n=t.trim().split(/\s*:\s*/);n[0]=n[0].trim().replace(/^[a-z]|-[a-z]/g,e=>e.toUpperCase()),e.push(n)}),r({status:a.status,arrayBuffer:()=>a.response,headers:new Map(e)})}else i(a.status==416?Error(Gn):Error(Wn+(a.statusText||a.status)))},!1),a.addEventListener(`error`,e=>i(e.detail?e.detail.error:Error(`Network error`)),!1),a.open(e,t),n)for(let e of Object.entries(n))a.setRequestHeader(e[0],e[1]);a.responseType=`arraybuffer`,a.send()})}var Dr=class extends or{constructor(e,t={}){super(),Object.assign(this,{url:e,reader:t.useXHR?new hr(e,t):new mr(e,t)})}set size(e){}get size(){return this.reader.size}async init(){await this.reader.init(),super.init()}readUint8Array(e,t){return this.reader.readUint8Array(e,t)}},Or=class extends Dr{constructor(e,t={}){t.useRangeHeader=!0,super(e,t)}},kr=class extends or{constructor(e){super(),e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength),Object.assign(this,{array:e,size:e.length})}readUint8Array(e,t){return this.array.slice(e,e+t)}},Ar=class extends sr{init(e=0){Object.assign(this,{offset:0,array:new Uint8Array(e)}),super.init()}writeUint8Array(e){let t=this;if(t.offset+e.length>t.array.length){let n=t.array;t.array=new Uint8Array(n.length+e.length),t.array.set(n)}t.array.set(e,t.offset),t.offset+=e.length}getData(){return this.array}},jr=class extends or{constructor(e){super(),this.readers=e}async init(){let e=this,{readers:t}=e;e.lastDiskNumber=0,e.lastDiskOffset=0,await Promise.all(t.map(async(n,r)=>{await n.init(),r!=t.length-1&&(e.lastDiskOffset+=n.size),e.size+=n.size})),super.init()}async readUint8Array(e,t,n=0){let r=this,{readers:i}=this,a,o=n;o==-1&&(o=i.length-1);let s=e;for(;i[o]&&s>=i[o].size;)s-=i[o].size,o++;let c=i[o];if(c){let i=c.size;if(s+t<=i)a=await Lr(c,s,t);else{let o=i-s;a=new Uint8Array(t);let l=await Lr(c,s,o);a.set(l,0);let u=await r.readUint8Array(e+o,t-o,n);a.set(u,o),l.length+u.length<t&&(a=a.subarray(0,l.length+u.length))}}else a=new Uint8Array;return r.lastDiskNumber=Math.max(o,r.lastDiskNumber),a}},Mr=class extends ar{constructor(e,t=4294967295){super();let n=this;Object.assign(n,{diskNumber:0,diskOffset:0,size:0,maxSize:t,availableSize:t});let r,i,a,o=new WritableStream({async write(t){let{availableSize:o}=n;if(a)t.length>=o?(await s(t.subarray(0,o)),await c(),n.diskOffset+=r.size,n.diskNumber++,a=null,await this.write(t.subarray(o))):await s(t);else{let{value:o,done:s}=await e.next();if(s&&!o)throw Error(Kn);r=o,r.size=0,r.maxSize&&(n.maxSize=r.maxSize),n.availableSize=n.maxSize,await Ir(r),i=o.writable,a=i.getWriter(),await this.write(t)}},async close(){await a.ready,await c()}});Object.defineProperty(n,ir,{get(){return o}});async function s(e){let t=e.length;t&&(await a.ready,await a.write(e),r.size+=t,n.size+=t,n.availableSize-=t)}async function c(){await a.close()}}},Nr=class{constructor(e){return Array.isArray(e)&&(e=new jr(e)),e instanceof ReadableStream&&(e={readable:e}),e}},Pr=class{constructor(e){return e.writable===void 0&&typeof e.next==`function`&&(e=new Mr(e)),e instanceof WritableStream&&(e={writable:e}),e.size===void 0&&(e.size=0),e instanceof Mr||Object.assign(e,{diskNumber:0,diskOffset:0,availableSize:1/0,maxSize:1/0}),e}};function Fr(e){let{baseURL:t}=Xe(),{protocol:n}=new URL(e,t);return n==`http:`||n==`https:`}async function Ir(e,t){if(e.init&&!e.initialized)await e.init(t);else return Promise.resolve()}function Lr(e,t,n,r){return e.readUint8Array(t,n,r)}var Rr=jr,zr=Mr,Br=`\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ `.split(``),Vr=Br.length==256;function Hr(e){if(Vr){let t=``;for(let n=0;n<e.length;n++)t+=Br[e[n]];return t}else return new TextDecoder().decode(e)}function Ur(e,t){return t&&t.trim().toLowerCase()==`cp437`?Hr(e):new TextDecoder(t).decode(e)}var Wr=`filename`,Gr=`rawFilename`,Kr=`comment`,qr=`rawComment`,Jr=`uncompressedSize`,Yr=`compressedSize`,Xr=`offset`,Zr=`diskNumberStart`,Qr=`lastModDate`,$r=`rawLastModDate`,ei=`lastAccessDate`,ti=`rawLastAccessDate`,ni=`creationDate`,ri=`rawCreationDate`,ii=[Wr,Gr,Yr,Jr,Qr,$r,Kr,qr,ei,ni,Xr,Zr,Zr,`internalFileAttribute`,`internalFileAttributes`,`externalFileAttribute`,`externalFileAttributes`,`msDosCompatible`,`zip64`,`encrypted`,`version`,`versionMadeBy`,`zipCrypto`,`directory`,`executable`,`compressionMethod`,`signature`,`extraField`,`bitFlag`,`filenameUTF8`,`commentUTF8`,`rawExtraField`,`extraFieldZip64`,`extraFieldUnicodePath`,`extraFieldUnicodeComment`,`extraFieldAES`,`extraFieldNTFS`,`extraFieldExtendedTimestamp`],ai=class{constructor(e){ii.forEach(t=>this[t]=e[t])}},oi=`filenameEncoding`,si=`commentEncoding`,ci=`extractPrependedData`,li=`extractAppendedData`,ui=`password`,di=`rawPassword`,fi=`passThrough`,pi=`signal`,mi=`checkPasswordOnly`,hi=`checkOverlappingEntryOnly`,gi=`checkOverlappingEntry`,_i=`useWebWorkers`,vi=`useCompressionStream`,yi=`transferStreams`,bi=`File format is not recognized`,xi=`End of central directory not found`,Si=`End of Zip64 central directory locator not found`,Ci=`Central directory header not found`,wi=`Local file header not found`,Ti=`Zip64 extra field not found`,Ei=`File contains encrypted entry`,Di=`Encryption method not supported`,Oi=`Compression method not supported`,ki=`Split zip file`,Ai=`Overlapping entry found`,ji=`utf-8`,Mi=`cp437`,Ni=[[Jr,Ie],[Yr,Ie],[Xr,Ie],[Zr,Le]],Pi={[Le]:{getValue:R,bytes:4},[Ie]:{getValue:Yi,bytes:8}},F=class{constructor(e,t={}){Object.assign(this,{reader:new Nr(e),options:t,config:Xe(),readRanges:[]})}async*getEntriesGenerator(e={}){let t=this,{reader:n}=t,{config:r}=t;if(await Ir(n),(n.size===void 0||!n.readUint8Array)&&(n=new ur(await new Response(n.readable).blob()),await Ir(n)),n.size<22)throw Error(bi);n.chunkSize=Ze(r);let i=await Wi(n,Re,n.size,22,Le*16);if(!i)throw R(z(await Lr(n,0,4)))==134695760?Error(ki):Error(xi);let a=z(i),o=R(a,12),s=R(a,16),c=i.offset,l=L(a,20),u=c+22+l,d=L(a,4),f=n.lastDiskNumber||0,p=L(a,6),m=L(a,8),h=0,g=0;if(s==4294967295||o==4294967295||m==65535||p==65535){let e=z(await Lr(n,i.offset-20,20));if(R(e,0)==117853008){s=Yi(e,8);let t=await Lr(n,s,56,-1),r=z(t),a=i.offset-20-56;if(R(r,0)!=101075792&&s!=a){let e=s;s=a,s>e&&(h=s-e),t=await Lr(n,s,56,-1),r=z(t)}if(R(r,0)!=101075792)throw Error(Si);d==65535&&(d=R(r,16)),p==65535&&(p=R(r,20)),m==65535&&(m=Yi(r,32)),o==4294967295&&(o=Yi(r,40)),s-=o}}if(s>=n.size&&(h=n.size-s-o-22,s=n.size-o-22),f!=d)throw Error(ki);if(s<0)throw Error(bi);let _=0,v=await Lr(n,s,o,p),y=z(v);if(o){let e=i.offset-o;if(R(y,_)!=33639248&&s!=e){let t=s;s=e,s>t&&(h+=s-t),v=await Lr(n,s,o,p),y=z(v)}}let b=i.offset-s-(n.lastDiskOffset||0);if(o!=b&&b>=0&&(o=b,v=await Lr(n,s,o,p),y=z(v)),s<0||s>=n.size)throw Error(bi);let x=Gi(t,e,oi),S=Gi(t,e,si);for(let i=0;i<m;i++){let a=new Fi(n,r,t.options);if(R(y,_)!=33639248)throw Error(Ci);Ii(a,y,_+6);let o=!!a.bitFlag.languageEncodingFlag,s=_+46,c=s+a.filenameLength,l=c+a.extraFieldLength,u=L(y,_+4),d=u>>8==0,f=u>>8==3,p=v.subarray(s,c),b=L(y,_+32),C=l+b,w=v.subarray(l,C),T=o,E=o,D=R(y,_+38),O=d&&(Ji(y,_+38)&16)==16||f&&(D>>16&61440)==16384||p.length&&p.at(-1)==47,k=f&&(D>>16&73)!=0,A=R(y,_+42)+h;Object.assign(a,{versionMadeBy:u,msDosCompatible:d,compressedSize:0,uncompressedSize:0,commentLength:b,directory:O,offset:A,diskNumberStart:L(y,_+34),internalFileAttributes:L(y,_+36),externalFileAttributes:D,rawFilename:p,filenameUTF8:T,commentUTF8:E,rawExtraField:v.subarray(c,l),executable:k}),a.internalFileAttribute=a.internalFileAttributes,a.externalFileAttribute=a.externalFileAttributes;let j=Gi(t,e,`decodeText`)||Ur,ee=T?ji:x||Mi,M=E?ji:S||Mi,N=j(p,ee);N===void 0&&(N=Ur(p,ee));let te=j(w,M);te===void 0&&(te=Ur(w,M)),Object.assign(a,{rawComment:w,filename:N,comment:te,directory:O||N.endsWith(`/`)}),g=Math.max(A,g),Li(a,a,y,_+6),a.zipCrypto=a.encrypted&&!a.extraFieldAES;let ne=new ai(a);ne.getData=(e,n)=>a.getData(e,ne,t.readRanges,n),ne.arrayBuffer=async e=>{let n=new TransformStream,[r]=await Promise.all([new Response(n.readable).arrayBuffer(),a.getData(n,ne,t.readRanges,e)]);return r},_=C;let{onprogress:re}=e;if(re)try{await re(i+1,m,new ai(a))}catch{}yield ne}let C=Gi(t,e,ci),w=Gi(t,e,li);return C&&(t.prependedData=g>0?await Lr(n,0,g):new Uint8Array),t.comment=l?await Lr(n,c+22,l):new Uint8Array,w&&(t.appendedData=u<n.size?await Lr(n,u,n.size-u):new Uint8Array),!0}async getEntries(e={}){let t=[];for await(let n of this.getEntriesGenerator(e))t.push(n);return t}async close(){}},I=class{constructor(e={}){let{readable:t,writable:n}=new TransformStream,r=new F(t,e).getEntriesGenerator();this.readable=new ReadableStream({async pull(e){let{done:t,value:n}=await r.next();if(t)return e.close();let i={...n,readable:(function(){let{readable:e,writable:t}=new TransformStream;if(n.getData)return n.getData(t),e})()};delete i.getData,e.enqueue(i)}}),this.writable=n}},Fi=class{constructor(e,t,n){Object.assign(this,{reader:e,config:t,options:n})}async getData(e,t,n,r={}){let i=this,{reader:a,offset:o,diskNumberStart:s,extraFieldAES:c,extraFieldZip64:l,compressionMethod:u,config:d,bitFlag:f,signature:p,rawLastModDate:m,uncompressedSize:h,compressedSize:g}=i,{dataDescriptor:_}=f,v=t.localDirectory={},y=z(await Lr(a,o,30,s)),b=Gi(i,r,ui),x=Gi(i,r,di),S=Gi(i,r,fi);if(b=b&&b.length&&b,x=x&&x.length&&x,c&&c.originalCompressionMethod!=99||u!=0&&u!=8&&!S)throw Error(Oi);if(R(y,0)!=67324752)throw Error(wi);Ii(v,y,4);let{extraFieldLength:C,filenameLength:w,lastAccessDate:T,creationDate:E}=v;v.rawExtraField=C?await Lr(a,o+30+w,C,s):new Uint8Array,Li(i,v,y,4,!0),Object.assign(t,{lastAccessDate:T,creationDate:E});let D=i.encrypted&&v.encrypted&&!S,O=D&&!c;if(S||(t.zipCrypto=O),D){if(!O&&c.strength===void 0)throw Error(Di);if(!b&&!x)throw Error(Ei)}let k=o+30+w+C,A=g,j=a.readable;Object.assign(j,{diskNumberStart:s,offset:k,size:A});let ee=Gi(i,r,pi),M=Gi(i,r,mi),N=Gi(i,r,gi),te=Gi(i,r,hi);te&&(N=!0);let{onstart:ne,onprogress:re,onend:ie}=r,ae={options:{codecType:bn,password:b,rawPassword:x,zipCrypto:O,encryptionStrength:c&&c.strength,signed:Gi(i,r,`checkSignature`)&&!S,passwordVerification:O&&(_?m>>>8&255:p>>>24&255),outputSize:h,signature:p,compressed:u!=0&&!S,encrypted:i.encrypted&&!S,useWebWorkers:Gi(i,r,_i),useCompressionStream:Gi(i,r,vi),transferStreams:Gi(i,r,yi),checkPasswordOnly:M},config:d,streamOptions:{signal:ee,size:A,onstart:ne,onprogress:re,onend:ie}};N&&await Ui({reader:a,fileEntry:t,offset:o,diskNumberStart:s,signature:p,compressedSize:g,uncompressedSize:h,dataOffset:k,dataDescriptor:_||v.bitFlag.dataDescriptor,extraFieldZip64:l||v.extraFieldZip64,readRanges:n});let P;try{if(!te){M&&(e=new WritableStream),e=new Pr(e),await Ir(e,S?g:h),{writable:P}=e;let{outputSize:t}=await Bn({readable:j,writable:P},ae);if(e.size+=t,t!=(S?g:h))throw Error(ln)}}catch(t){if(t.outputSize!==void 0&&(e.size+=t.outputSize),!M||t.message!=`zipjs-abort-check-password`)throw t}finally{!Gi(i,r,`preventClose`)&&P&&!P.locked&&await P.getWriter().close()}return M||te?void 0:e.getData?e.getData():P}};function Ii(e,t,n){let r=e.rawBitFlag=L(t,n+2),i=(r&1)==1,a=R(t,n+6);Object.assign(e,{encrypted:i,version:L(t,n),bitFlag:{level:(r&6)>>1,dataDescriptor:(r&8)==8,languageEncodingFlag:(r&We)==We},rawLastModDate:a,lastModDate:Ki(a),filenameLength:L(t,n+22),extraFieldLength:L(t,n+24)})}function Li(e,t,n,r,i){let{rawExtraField:a}=t,o=t.extraField=new Map,s=z(new Uint8Array(a)),c=0;try{for(;c<a.length;){let e=L(s,c),t=L(s,c+2);o.set(e,{type:e,data:a.slice(c+4,c+4+t)}),c+=4+t}}catch{}let l=L(n,r+4);Object.assign(t,{signature:R(n,r+10),compressedSize:R(n,r+14),uncompressedSize:R(n,r+18)});let u=o.get(1);u&&(Ri(u,t),t.extraFieldZip64=u);let d=o.get(Ve);d&&(zi(d,Wr,Gr,t,e),t.extraFieldUnicodePath=d);let f=o.get(He);f&&(zi(f,Kr,qr,t,e),t.extraFieldUnicodeComment=f);let p=o.get(ze);p?(Bi(p,t,l),t.extraFieldAES=p):t.compressionMethod=l;let m=o.get(10);m&&(Vi(m,t),t.extraFieldNTFS=m);let h=o.get(Be);h&&(Hi(h,t,i),t.extraFieldExtendedTimestamp=h);let g=o.get(Ue);g&&(t.extraFieldUSDZ=g)}function Ri(e,t){t.zip64=!0;let n=z(e.data),r=Ni.filter(([e,n])=>t[e]==n);for(let i=0,a=0;i<r.length;i++){let[o,s]=r[i];if(t[o]==s){let r=Pi[s];t[o]=e[o]=r.getValue(n,a),a+=r.bytes}else if(e[o])throw Error(Ti)}}function zi(e,t,n,r,i){let a=z(e.data),o=new nt;o.append(i[n]);let s=z(new Uint8Array(4));s.setUint32(0,o.get(),!0);let c=R(a,1);Object.assign(e,{version:Ji(a,0),[t]:Ur(e.data.subarray(5)),valid:!i.bitFlag.languageEncodingFlag&&c==R(s,0)}),e.valid&&(r[t]=e[t],r[t+`UTF8`]=!0)}function Bi(e,t,n){let r=z(e.data),i=Ji(r,4);Object.assign(e,{vendorVersion:Ji(r,0),vendorId:Ji(r,2),strength:i,originalCompressionMethod:n,compressionMethod:L(r,5)}),t.compressionMethod=e.compressionMethod}function Vi(e,t){let n=z(e.data),r=4,i;try{for(;r<e.data.length&&!i;){let t=L(n,r),a=L(n,r+2);t==1&&(i=e.data.slice(r+4,r+4+a)),r+=4+a}}catch{}try{if(i&&i.length==24){let n=z(i),r=n.getBigUint64(0,!0),a=n.getBigUint64(8,!0),o=n.getBigUint64(16,!0);Object.assign(e,{rawLastModDate:r,rawLastAccessDate:a,rawCreationDate:o});let s={lastModDate:qi(r),lastAccessDate:qi(a),creationDate:qi(o)};Object.assign(e,s),Object.assign(t,s)}}catch{}}function Hi(e,t,n){let r=z(e.data),i=Ji(r,0),a=[],o=[];n?((i&1)==1&&(a.push(Qr),o.push($r)),(i&2)==2&&(a.push(ei),o.push(ti)),(i&4)==4&&(a.push(ni),o.push(ri))):e.data.length>=5&&(a.push(Qr),o.push($r));let s=1;a.forEach((n,i)=>{if(e.data.length>=s+4){let a=R(r,s);t[n]=e[n]=new Date(a*1e3);let c=o[i];e[c]=a}s+=4})}async function Ui({reader:e,fileEntry:t,offset:n,diskNumberStart:r,signature:i,compressedSize:a,uncompressedSize:o,dataOffset:s,dataDescriptor:c,extraFieldZip64:l,readRanges:u}){let d=0;if(r)for(let t=0;t<r;t++){let n=e.readers[t];d+=n.size}let f=0;if(c&&(f=l?20:12),f){let n=await Lr(e,s+a,f+4,r);if(R(z(n),0)==134695760){let e=R(z(n),4),r,s;l?(r=Yi(z(n),8),s=Yi(z(n),16)):(r=R(z(n),8),s=R(z(n),12)),(t.encrypted&&!t.zipCrypto||e==i)&&r==a&&s==o&&(f+=4)}}let p={start:d+n,end:d+s+a+f,fileEntry:t};for(let e of u)if(e.fileEntry!=t&&p.start>=e.start&&p.start<e.end){let t=Error(Ai);throw t.overlappingEntry=e.fileEntry,t}u.push(p)}async function Wi(e,t,n,r,i){let a=new Uint8Array(4);Xi(z(a),0,t);let o=r+i;return await s(r)||await s(Math.min(o,n));async function s(t){let i=n-t,o=await Lr(e,i,t);for(let e=o.length-r;e>=0;e--)if(o[e]==a[0]&&o[e+1]==a[1]&&o[e+2]==a[2]&&o[e+3]==a[3])return{offset:i+e,buffer:o.slice(e,e+r).buffer}}}function Gi(e,t,n){return t[n]===void 0?e.options[n]:t[n]}function Ki(e){let t=(e&4294901760)>>16,n=e&65535;try{return new Date(1980+((t&65024)>>9),((t&480)>>5)-1,t&31,(n&63488)>>11,(n&2016)>>5,(n&31)*2,0)}catch{}}function qi(e){return new Date(Number(e/BigInt(1e4)-BigInt(0xa9730b66800)))}function Ji(e,t){return e.getUint8(t)}function L(e,t){return e.getUint16(t,!0)}function R(e,t){return e.getUint32(t,!0)}function Yi(e,t){return Number(e.getBigUint64(t,!0))}function Xi(e,t,n){e.setUint32(t,n,!0)}function z(e){return new DataView(e.buffer)}var Zi=s({BlobReader:()=>ur,BlobWriter:()=>dr,Data64URIReader:()=>cr,Data64URIWriter:()=>lr,ERR_BAD_FORMAT:()=>bi,ERR_CENTRAL_DIRECTORY_NOT_FOUND:()=>Ci,ERR_ENCRYPTED:()=>Ei,ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND:()=>Si,ERR_EOCDR_NOT_FOUND:()=>xi,ERR_EXTRAFIELD_ZIP64_NOT_FOUND:()=>Ti,ERR_HTTP_RANGE:()=>Gn,ERR_INVALID_PASSWORD:()=>pt,ERR_INVALID_SIGNATURE:()=>mt,ERR_INVALID_UNCOMPRESSED_SIZE:()=>ln,ERR_ITERATOR_COMPLETED_TOO_SOON:()=>Kn,ERR_LOCAL_FILE_HEADER_NOT_FOUND:()=>wi,ERR_OVERLAPPING_ENTRY:()=>Ai,ERR_SPLIT_ZIP_FILE:()=>ki,ERR_UNSUPPORTED_COMPRESSION:()=>Oi,ERR_UNSUPPORTED_ENCRYPTION:()=>Di,ERR_WRITER_NOT_INITIALIZED:()=>qn,GenericReader:()=>Nr,GenericWriter:()=>Pr,HttpRangeReader:()=>Or,HttpReader:()=>Dr,Reader:()=>or,SplitDataReader:()=>jr,SplitDataWriter:()=>Mr,SplitZipReader:()=>Rr,SplitZipWriter:()=>zr,TextReader:()=>fr,TextWriter:()=>pr,Uint8ArrayReader:()=>kr,Uint8ArrayWriter:()=>Ar,Writer:()=>sr,ZipReader:()=>F,ZipReaderStream:()=>I,configure:()=>Qe,getMimeType:()=>et,initStream:()=>Ir,readUint8Array:()=>Lr,terminateWorkers:()=>Un});Qe({Inflate:Fe});var Qi=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function ee(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function M(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,M(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),M(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=M(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=M(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return M(ee(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function N(e,t,n){if(e==null)return e;var r=[],i=0;return M(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function te(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ne=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},re={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=re,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:te}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,ne)}catch(e){ne(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),$i=o(((e,t)=>{t.exports=Qi()})),ea=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),ta=o(((e,t)=>{t.exports=ea()})),na=o((e=>{var t=$i();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),ra=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=na()})),ia=o((e=>{var t=ta(),n=$i(),r=ra();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,p=Symbol.for(`react.element`),m=Symbol.for(`react.transitional.element`),h=Symbol.for(`react.portal`),g=Symbol.for(`react.fragment`),_=Symbol.for(`react.strict_mode`),v=Symbol.for(`react.profiler`),y=Symbol.for(`react.consumer`),b=Symbol.for(`react.context`),x=Symbol.for(`react.forward_ref`),S=Symbol.for(`react.suspense`),C=Symbol.for(`react.suspense_list`),w=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),E=Symbol.for(`react.activity`),D=Symbol.for(`react.memo_cache_sentinel`),O=Symbol.iterator;function k(e){return typeof e!=`object`||!e?null:(e=O&&e[O]||e[`@@iterator`],typeof e==`function`?e:null)}var A=Symbol.for(`react.client.reference`);function j(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===A?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case g:return`Fragment`;case v:return`Profiler`;case _:return`StrictMode`;case S:return`Suspense`;case C:return`SuspenseList`;case E:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case h:return`Portal`;case b:return e.displayName||`Context`;case y:return(e._context.displayName||`Context`)+`.Consumer`;case x:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case w:return t=e.displayName||null,t===null?j(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return j(e(t))}catch{}}return null}var ee=Array.isArray,M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ne=[],re=-1;function ie(e){return{current:e}}function ae(e){0>re||(e.current=ne[re],ne[re]=null,re--)}function P(e,t){re++,ne[re]=e.current,e.current=t}var oe=ie(null),se=ie(null),ce=ie(null),le=ie(null);function ue(e,t){switch(P(ce,t),P(se,e),P(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ae(oe),P(oe,e)}function de(){ae(oe),ae(se),ae(ce)}function fe(e){e.memoizedState!==null&&P(le,e);var t=oe.current,n=Hd(t,e.type);t!==n&&(P(se,e),P(oe,n))}function pe(e){se.current===e&&(ae(oe),ae(se)),le.current===e&&(ae(le),Qf._currentValue=te)}var me,he;function ge(e){if(me===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);me=t&&t[1]||``,he=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+me+e+he}var _e=!1;function ve(e,t){if(!e||_e)return``;_e=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{_e=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ge(n):``}function ye(e,t){switch(e.tag){case 26:case 27:case 5:return ge(e.type);case 16:return ge(`Lazy`);case 13:return e.child!==t&&t!==null?ge(`Suspense Fallback`):ge(`Suspense`);case 19:return ge(`SuspenseList`);case 0:case 15:return ve(e.type,!1);case 11:return ve(e.type.render,!1);case 1:return ve(e.type,!0);case 31:return ge(`Activity`);default:return``}}function be(e){try{var t=``,n=null;do t+=ye(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var xe=Object.prototype.hasOwnProperty,Se=t.unstable_scheduleCallback,Ce=t.unstable_cancelCallback,we=t.unstable_shouldYield,Te=t.unstable_requestPaint,Ee=t.unstable_now,De=t.unstable_getCurrentPriorityLevel,Oe=t.unstable_ImmediatePriority,ke=t.unstable_UserBlockingPriority,Ae=t.unstable_NormalPriority,je=t.unstable_LowPriority,Me=t.unstable_IdlePriority,Ne=t.log,Pe=t.unstable_setDisableYieldValue,Fe=null,Ie=null;function Le(e){if(typeof Ne==`function`&&Pe(e),Ie&&typeof Ie.setStrictMode==`function`)try{Ie.setStrictMode(Fe,e)}catch{}}var Re=Math.clz32?Math.clz32:Ve,ze=Math.log,Be=Math.LN2;function Ve(e){return e>>>=0,e===0?32:31-(ze(e)/Be|0)|0}var He=256,Ue=262144,We=4194304;function Ge(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ke(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ge(n))):i=Ge(o):i=Ge(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ge(n))):i=Ge(o)):i=Ge(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Je(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var e=We;return We<<=1,!(We&62914560)&&(We=4194304),e}function Xe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ze(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Re(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&$e(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function $e(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Re(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function et(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function tt(e,t){var n=t&-t;return n=n&42?1:nt(n),(n&(e.suspendedLanes|t))===0?n:0}function nt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function it(){var e=N.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function at(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var ot=Math.random().toString(36).slice(2),st=`__reactFiber$`+ot,ct=`__reactProps$`+ot,lt=`__reactContainer$`+ot,ut=`__reactEvents$`+ot,dt=`__reactListeners$`+ot,ft=`__reactHandles$`+ot,pt=`__reactResources$`+ot,mt=`__reactMarker$`+ot;function ht(e){delete e[st],delete e[ct],delete e[ut],delete e[dt],delete e[ft]}function gt(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[st])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function _t(e){if(e=e[st]||e[lt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function vt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function yt(e){var t=e[pt];return t||=e[pt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function bt(e){e[mt]=!0}var xt=new Set,St={};function Ct(e,t){wt(e,t),wt(e+`Capture`,t)}function wt(e,t){for(St[e]=t,e=0;e<t.length;e++)xt.add(t[e])}var Tt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Et={},Dt={};function Ot(e){return xe.call(Dt,e)?!0:xe.call(Et,e)?!1:Tt.test(e)?Dt[e]=!0:(Et[e]=!0,!1)}function kt(e,t,n){if(Ot(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function At(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function jt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Mt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Nt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Pt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ft(e){if(!e._valueTracker){var t=Nt(e)?`checked`:`value`;e._valueTracker=Pt(e,t,``+e[t])}}function It(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Nt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Lt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Rt=/[\n"\\]/g;function zt(e){return e.replace(Rt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Bt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Mt(t)):e.value!==``+Mt(t)&&(e.value=``+Mt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ht(e,o,Mt(n)):Ht(e,o,Mt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Mt(s):e.removeAttribute(`name`)}function Vt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ft(e);return}n=n==null?``:``+Mt(n),t=t==null?n:``+Mt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ft(e)}function Ht(e,t,n){t===`number`&&Lt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ut(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wt(e,t,n){if(t!=null&&(t=``+Mt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Mt(n)}function Gt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ee(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Mt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ft(e)}function Kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Jt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Yt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Jt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Jt(e,o,t[o])}function Xt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Zt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Qt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $t(e){return Qt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function en(){}var tn=null;function nn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rn=null,an=null;function on(e){var t=_t(e);if(t&&(e=t.stateNode)){var n=e[ct]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Bt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+zt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ct]||null;if(!a)throw Error(i(90));Bt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&It(r)}break a;case`textarea`:Wt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ut(e,!!n.multiple,t,!1)}}}var sn=!1;function cn(e,t,n){if(sn)return e(t,n);sn=!0;try{return e(t)}finally{if(sn=!1,(rn!==null||an!==null)&&(bu(),rn&&(t=rn,e=an,an=rn=null,on(t),e)))for(t=0;t<e.length;t++)on(e[t])}}function ln(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ct]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var un=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),dn=!1;if(un)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){dn=!0}}),window.addEventListener(`test`,fn,fn),window.removeEventListener(`test`,fn,fn)}catch{dn=!1}var pn=null,mn=null,hn=null;function gn(){if(hn)return hn;var e,t=mn,n=t.length,r,i=`value`in pn?pn.value:pn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return hn=i.slice(e,1<r?1-r:void 0)}function _n(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vn(){return!0}function yn(){return!1}function bn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?vn:yn,this.isPropagationStopped=yn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=vn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=vn)},persist:function(){},isPersistent:vn}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sn=bn(xn),Cn=f({},xn,{view:0,detail:0}),wn=bn(Cn),Tn,En,Dn,On=f({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Dn&&(Dn&&e.type===`mousemove`?(Tn=e.screenX-Dn.screenX,En=e.screenY-Dn.screenY):En=Tn=0,Dn=e),Tn)},movementY:function(e){return`movementY`in e?e.movementY:En}}),kn=bn(On),An=bn(f({},On,{dataTransfer:0})),jn=bn(f({},Cn,{relatedTarget:0})),Mn=bn(f({},xn,{animationName:0,elapsedTime:0,pseudoElement:0})),Nn=bn(f({},xn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Pn=bn(f({},xn,{data:0})),Fn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},In={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Ln={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Rn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ln[e])?!!t[e]:!1}function zn(){return Rn}var Bn=bn(f({},Cn,{key:function(e){if(e.key){var t=Fn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=_n(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?In[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zn,charCode:function(e){return e.type===`keypress`?_n(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?_n(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Vn=bn(f({},On,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Hn=bn(f({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zn})),Un=bn(f({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Wn=bn(f({},On,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Gn=bn(f({},xn,{newState:0,oldState:0})),Kn=[9,13,27,32],qn=un&&`CompositionEvent`in window,Jn=null;un&&`documentMode`in document&&(Jn=document.documentMode);var Yn=un&&`TextEvent`in window&&!Jn,Xn=un&&(!qn||Jn&&8<Jn&&11>=Jn),Zn=` `,Qn=!1;function $n(e,t){switch(e){case`keyup`:return Kn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function er(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var tr=!1;function nr(e,t){switch(e){case`compositionend`:return er(t);case`keypress`:return t.which===32?(Qn=!0,Zn):null;case`textInput`:return e=t.data,e===Zn&&Qn?null:e;default:return null}}function rr(e,t){if(tr)return e===`compositionend`||!qn&&$n(e,t)?(e=gn(),hn=mn=pn=null,tr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Xn&&t.locale!==`ko`?null:t.data;default:return null}}var ir={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ir[e.type]:t===`textarea`}function or(e,t,n,r){rn?an?an.push(r):an=[r]:rn=r,t=Ed(t,`onChange`),0<t.length&&(n=new Sn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var sr=null,cr=null;function lr(e){yd(e,0)}function ur(e){if(It(vt(e)))return e}function dr(e,t){if(e===`change`)return t}var fr=!1;if(un){var pr;if(un){var mr=`oninput`in document;if(!mr){var hr=document.createElement(`div`);hr.setAttribute(`oninput`,`return;`),mr=typeof hr.oninput==`function`}pr=mr}else pr=!1;fr=pr&&(!document.documentMode||9<document.documentMode)}function gr(){sr&&(sr.detachEvent(`onpropertychange`,_r),cr=sr=null)}function _r(e){if(e.propertyName===`value`&&ur(cr)){var t=[];or(t,cr,e,nn(e)),cn(lr,t)}}function vr(e,t,n){e===`focusin`?(gr(),sr=t,cr=n,sr.attachEvent(`onpropertychange`,_r)):e===`focusout`&&gr()}function yr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return ur(cr)}function br(e,t){if(e===`click`)return ur(t)}function xr(e,t){if(e===`input`||e===`change`)return ur(t)}function Sr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Cr=typeof Object.is==`function`?Object.is:Sr;function wr(e,t){if(Cr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xe.call(t,i)||!Cr(e[i],t[i]))return!1}return!0}function Tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Er(e,t){var n=Tr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Tr(n)}}function Dr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Or(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Lt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lt(e.document)}return t}function kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ar=un&&`documentMode`in document&&11>=document.documentMode,jr=null,Mr=null,Nr=null,Pr=!1;function Fr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pr||jr==null||jr!==Lt(r)||(r=jr,`selectionStart`in r&&kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&wr(Nr,r)||(Nr=r,r=Ed(Mr,`onSelect`),0<r.length&&(t=new Sn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=jr)))}function Ir(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Lr={animationend:Ir(`Animation`,`AnimationEnd`),animationiteration:Ir(`Animation`,`AnimationIteration`),animationstart:Ir(`Animation`,`AnimationStart`),transitionrun:Ir(`Transition`,`TransitionRun`),transitionstart:Ir(`Transition`,`TransitionStart`),transitioncancel:Ir(`Transition`,`TransitionCancel`),transitionend:Ir(`Transition`,`TransitionEnd`)},Rr={},zr={};un&&(zr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),`TransitionEvent`in window||delete Lr.transitionend.transition);function Br(e){if(Rr[e])return Rr[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zr)return Rr[e]=t[n];return e}var Vr=Br(`animationend`),Hr=Br(`animationiteration`),Ur=Br(`animationstart`),Wr=Br(`transitionrun`),Gr=Br(`transitionstart`),Kr=Br(`transitioncancel`),qr=Br(`transitionend`),Jr=new Map,Yr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Yr.push(`scrollEnd`);function Xr(e,t){Jr.set(e,t),Ct(t,[e])}var Zr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Qr=[],$r=0,ei=0;function ti(){for(var e=$r,t=ei=$r=0;t<e;){var n=Qr[t];Qr[t++]=null;var r=Qr[t];Qr[t++]=null;var i=Qr[t];Qr[t++]=null;var a=Qr[t];if(Qr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ai(n,i,a)}}function ni(e,t,n,r){Qr[$r++]=e,Qr[$r++]=t,Qr[$r++]=n,Qr[$r++]=r,ei|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ri(e,t,n,r){return ni(e,t,n,r),oi(e)}function ii(e,t){return ni(e,null,null,t),oi(e)}function ai(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Re(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function oi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var si={};function ci(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,t,n,r){return new ci(e,t,n,r)}function ui(e){return e=e.prototype,!(!e||!e.isReactComponent)}function di(e,t){var n=e.alternate;return n===null?(n=li(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function fi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function pi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ui(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,oe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case E:return e=li(31,n,t,a),e.elementType=E,e.lanes=o,e;case g:return mi(n.children,a,o,t);case _:s=8,a|=24;break;case v:return e=li(12,n,t,a|2),e.elementType=v,e.lanes=o,e;case S:return e=li(13,n,t,a),e.elementType=S,e.lanes=o,e;case C:return e=li(19,n,t,a),e.elementType=C,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case b:s=10;break a;case y:s=9;break a;case x:s=11;break a;case w:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=li(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function mi(e,t,n,r){return e=li(7,e,r,t),e.lanes=n,e}function hi(e,t,n){return e=li(6,e,null,t),e.lanes=n,e}function gi(e){var t=li(18,null,null,0);return t.stateNode=e,t}function _i(e,t,n){return t=li(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vi=new WeakMap;function yi(e,t){if(typeof e==`object`&&e){var n=vi.get(e);return n===void 0?(t={value:e,source:t,stack:be(t)},vi.set(e,t),t):n}return{value:e,source:t,stack:be(t)}}var bi=[],xi=0,Si=null,Ci=0,wi=[],Ti=0,Ei=null,Di=1,Oi=``;function ki(e,t){bi[xi++]=Ci,bi[xi++]=Si,Si=e,Ci=t}function Ai(e,t,n){wi[Ti++]=Di,wi[Ti++]=Oi,wi[Ti++]=Ei,Ei=e;var r=Di;e=Oi;var i=32-Re(r)-1;r&=~(1<<i),n+=1;var a=32-Re(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Di=1<<32-Re(t)+i|n<<i|r,Oi=a+e}else Di=1<<a|n<<i|r,Oi=e}function ji(e){e.return!==null&&(ki(e,1),Ai(e,1,0))}function Mi(e){for(;e===Si;)Si=bi[--xi],bi[xi]=null,Ci=bi[--xi],bi[xi]=null;for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Oi=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null}function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Oi,wi[Ti++]=Ei,Di=t.id,Oi=t.overflow,Ei=e}var Pi=null,F=null,I=!1,Fi=null,Ii=!1,Li=Error(i(519));function Ri(e){throw Wi(yi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Li}function zi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[st]=e,t[ct]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Gt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=en),t=!0):t=!1,t||Ri(e,!0)}function Bi(e){for(Pi=e.return;Pi;)switch(Pi.tag){case 5:case 31:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:Pi=Pi.return}}function Vi(e){if(e!==Pi)return!1;if(!I)return Bi(e),I=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&F&&Ri(e),Bi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=uf(e)}else t===27?(t=F,Zd(e.type)?(e=lf,lf=null,F=e):F=t):F=Pi?cf(e.stateNode.nextSibling):null;return!0}function Hi(){F=Pi=null,I=!1}function Ui(){var e=Fi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Fi=null),e}function Wi(e){Fi===null?Fi=[e]:Fi.push(e)}var Gi=ie(null),Ki=null,qi=null;function Ji(e,t,n){P(Gi,t._currentValue),t._currentValue=n}function L(e){e._currentValue=Gi.current,ae(Gi)}function R(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Yi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),R(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),R(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Xi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Cr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===le.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Yi(t,e,n,r),t.flags|=262144}function z(e){for(e=e.firstContext;e!==null;){if(!Cr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zi(e){Ki=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qi(e){return na(Ki,e)}function ea(e,t){return Ki===null&&Zi(e),na(e,t)}function na(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},qi===null){if(e===null)throw Error(i(308));qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qi=qi.next=t;return n}var ia=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},aa=t.unstable_scheduleCallback,B=t.unstable_NormalPriority,oa={$$typeof:b,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sa(){return{controller:new ia,data:new Map,refCount:0}}function ca(e){e.refCount--,e.refCount===0&&aa(B,function(){e.controller.abort()})}var la=null,ua=0,da=0,fa=null;function pa(e,t){if(la===null){var n=la=[];ua=0,da=dd(),fa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ua++,t.then(V,V),t}function V(){if(--ua===0&&la!==null){fa!==null&&(fa.status=`fulfilled`);var e=la;la=null,da=0,fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ma(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ha=M.S;M.S=function(e,t){eu=Ee(),typeof t==`object`&&t&&typeof t.then==`function`&&pa(e,t),ha!==null&&ha(e,t)};var ga=ie(null);function _a(){var e=ga.current;return e===null?q.pooledCache:e}function va(e,t){t===null?P(ga,ga.current):P(ga,t.pool)}function ya(){var e=_a();return e===null?null:{parent:oa._currentValue,pool:e}}var ba=Error(i(460)),xa=Error(i(474)),Sa=Error(i(542)),Ca={then:function(){}};function wa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ta(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(en,en),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e;default:if(typeof t.status==`string`)t.then(en,en);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e}throw Da=t,ba}}function Ea(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Da=e,ba):e}}var Da=null;function Oa(){if(Da===null)throw Error(i(459));var e=Da;return Da=null,e}function ka(e){if(e===ba||e===Sa)throw Error(i(483))}var Aa=null,ja=0;function Ma(e){var t=ja;return ja+=1,Aa===null&&(Aa=[]),Ta(Aa,e,t)}function Na(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Pa(e,t){throw t.$$typeof===p?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Fa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=di(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=hi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===g?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&Ea(i)===t.type)?(t=a(t,n.props),Na(t,n),t.return=e,t):(t=pi(n.type,n.key,n.props,null,e.mode,r),Na(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=mi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=hi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case m:return n=pi(t.type,t.key,t.props,null,e.mode,n),Na(n,t),n.return=e,n;case h:return t=_i(t,e.mode,n),t.return=e,t;case T:return t=Ea(t),f(e,t,n)}if(ee(t)||k(t))return t=mi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ma(t),n);if(t.$$typeof===b)return f(e,ea(e,t),n);Pa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case m:return n.key===i?l(e,t,n,r):null;case h:return n.key===i?u(e,t,n,r):null;case T:return n=Ea(n),p(e,t,n,r)}if(ee(n)||k(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ma(n),r);if(n.$$typeof===b)return p(e,t,ea(e,n),r);Pa(e,n)}return null}function _(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case m:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case h:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Ea(r),_(e,t,n,r,i)}if(ee(r)||k(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return _(e,t,n,Ma(r),i);if(r.$$typeof===b)return _(e,t,n,ea(t,r),i);Pa(t,r)}return null}function v(i,a,s,c){for(var l=null,u=null,d=a,m=a=0,h=null;d!==null&&m<s.length;m++){d.index>m?(h=d,d=null):h=d.sibling;var g=p(i,d,s[m],c);if(g===null){d===null&&(d=h);break}e&&d&&g.alternate===null&&t(i,d),a=o(g,a,m),u===null?l=g:u.sibling=g,u=g,d=h}if(m===s.length)return n(i,d),I&&ki(i,m),l;if(d===null){for(;m<s.length;m++)d=f(i,s[m],c),d!==null&&(a=o(d,a,m),u===null?l=d:u.sibling=d,u=d);return I&&ki(i,m),l}for(d=r(d);m<s.length;m++)h=_(d,i,m,s[m],c),h!==null&&(e&&h.alternate!==null&&d.delete(h.key===null?m:h.key),a=o(h,a,m),u===null?l=h:u.sibling=h,u=h);return e&&d.forEach(function(e){return t(i,e)}),I&&ki(i,m),l}function y(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,m=s,h=s=0,g=null,v=c.next();m!==null&&!v.done;h++,v=c.next()){m.index>h?(g=m,m=null):g=m.sibling;var y=p(a,m,v.value,l);if(y===null){m===null&&(m=g);break}e&&m&&y.alternate===null&&t(a,m),s=o(y,s,h),d===null?u=y:d.sibling=y,d=y,m=g}if(v.done)return n(a,m),I&&ki(a,h),u;if(m===null){for(;!v.done;h++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,h),d===null?u=v:d.sibling=v,d=v);return I&&ki(a,h),u}for(m=r(m);!v.done;h++,v=c.next())v=_(m,a,h,v.value,l),v!==null&&(e&&v.alternate!==null&&m.delete(v.key===null?h:v.key),s=o(v,s,h),d===null?u=v:d.sibling=v,d=v);return e&&m.forEach(function(e){return t(a,e)}),I&&ki(a,h),u}function x(e,r,o,c){if(typeof o==`object`&&o&&o.type===g&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case m:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===g){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Ea(l)===r.type){n(e,r.sibling),c=a(r,o.props),Na(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===g?(c=mi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=pi(o.type,o.key,o.props,null,e.mode,c),Na(c,o),c.return=e,e=c)}return s(e);case h:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=_i(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=Ea(o),x(e,r,o,c)}if(ee(o))return v(e,r,o,c);if(k(o)){if(l=k(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),y(e,r,o,c)}if(typeof o.then==`function`)return x(e,r,Ma(o),c);if(o.$$typeof===b)return x(e,r,ea(e,o),c);Pa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=hi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ja=0;var i=x(e,t,n,r);return Aa=null,i}catch(t){if(t===ba||t===Sa)throw t;var a=li(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ia=Fa(!0),La=Fa(!1),Ra=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ba(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=oi(e),ai(e,null,n),t}return ni(e,r,t,n),oi(e)}function Ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}function Wa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ga=!1;function Ka(){if(Ga){var e=fa;if(e!==null)throw e}}function qa(e,t,n,r){Ga=!1;var i=e.updateQueue;Ra=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(Y&p)===p:(r&p)===p){p!==0&&p===da&&(Ga=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:Ra=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ja(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ya(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ja(n[e],t)}var Xa=ie(null),Za=ie(0);function Qa(e,t){e=Ul,P(Za,e),P(Xa,t),Ul=e|t.baseLanes}function $a(){P(Za,Ul),P(Xa,Xa.current)}function eo(){Ul=Za.current,ae(Xa),ae(Za)}var H=ie(null),to=null;function no(e){var t=e.alternate;P(so,so.current&1),P(H,e),to===null&&(t===null||Xa.current!==null||t.memoizedState!==null)&&(to=e)}function ro(e){P(so,so.current),P(H,e),to===null&&(to=e)}function io(e){e.tag===22?(P(so,so.current),P(H,e),to===null&&(to=e)):ao(e)}function ao(){P(so,so.current),P(H,H.current)}function oo(e){ae(H),to===e&&(to=null),ae(so)}var so=ie(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var lo=0,U=null,W=null,uo=null,fo=!1,po=!1,mo=!1,ho=0,go=0,_o=null,vo=0;function yo(){throw Error(i(321))}function bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Cr(e[n],t[n]))return!1;return!0}function xo(e,t,n,r,i,a){return lo=a,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Ls:Rs,mo=!1,a=n(r,i),mo=!1,po&&(a=Co(t,n,r,i)),So(e),a}function So(e){M.H=Is;var t=W!==null&&W.next!==null;if(lo=0,uo=W=U=null,fo=!1,go=0,_o=null,t)throw Error(i(300));e===null||tc||(e=e.dependencies,e!==null&&z(e)&&(tc=!0))}function Co(e,t,n,r){U=e;var a=0;do{if(po&&(_o=null),go=0,po=!1,25<=a)throw Error(i(301));if(a+=1,uo=W=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}M.H=zs,o=t(n,r)}while(po);return o}function wo(){var e=M.H,t=e.useState()[0];return t=typeof t.then==`function`?Ao(t):t,e=e.useState()[0],(W===null?null:W.memoizedState)!==e&&(U.flags|=1024),t}function To(){var e=ho!==0;return ho=0,e}function Eo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Do(e){if(fo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fo=!1}lo=0,uo=W=U=null,po=!1,go=ho=0,_o=null}function Oo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return uo===null?U.memoizedState=uo=e:uo=uo.next=e,uo}function G(){if(W===null){var e=U.alternate;e=e===null?null:e.memoizedState}else e=W.next;var t=uo===null?U.memoizedState:uo.next;if(t!==null)uo=t,W=e;else{if(e===null)throw U.alternate===null?Error(i(467)):Error(i(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},uo===null?U.memoizedState=uo=e:uo=uo.next=e}return uo}function ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var t=go;return go+=1,_o===null&&(_o=[]),e=Ta(_o,e,t),t=U,(uo===null?t.memoizedState:uo.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Ls:Rs),e}function jo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ao(e);if(e.$$typeof===b)return Qi(e)}throw Error(i(438,String(e)))}function Mo(e){var t=null,n=U.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=U.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ko(),U.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=D;return t.index++,n}function No(e,t){return typeof t==`function`?t(e):t}function Po(e){return Fo(G(),W,e)}function Fo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(lo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===da&&(d=!0);else if((lo&p)===p){u=u.next,p===da&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,U.lanes|=p,Gl|=p;f=u.action,mo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,U.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Cr(o,e.memoizedState)&&(tc=!0,d&&(n=fa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Io(e){var t=G(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Cr(o,t.memoizedState)||(tc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Lo(e,t,n){var r=U,a=G(),o=I;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Cr((W||a).memoizedState,n);if(s&&(a.memoizedState=n,tc=!0),a=a.queue,cs(Bo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||uo!==null&&uo.memoizedState.tag&1){if(r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||lo&127||Ro(r,t,n)}return n}function Ro(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t=ko(),U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,Vo(t)&&Ho(e)}function Bo(e,t,n){return n(function(){Vo(t)&&Ho(e)})}function Vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Cr(e,n)}catch{return!0}}function Ho(e){var t=ii(e,2);t!==null&&hu(t,e,2)}function Uo(e){var t=Oo();if(typeof e==`function`){var n=e;if(e=n(),mo){Le(!0);try{n()}finally{Le(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t}function Wo(e,t,n,r){return e.baseState=n,Fo(e,W,typeof r==`function`?r:No)}function Go(e,t,n,r,a){if(Ns(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};M.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ko(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ko(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=M.T,o={};M.T=o;try{var s=n(i,r),c=M.S;c!==null&&c(o,s),qo(e,t,s)}catch(n){Yo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),M.T=a}}else try{a=n(i,r),qo(e,t,a)}catch(n){Yo(e,t,n)}}function qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Jo(e,t,n)},function(n){return Yo(e,t,n)}):Jo(e,t,n)}function Jo(e,t,n){t.status=`fulfilled`,t.value=n,Xo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ko(e,n)))}function Yo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Xo(t),t=t.next;while(t!==r)}e.action=null}function Xo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zo(e,t){return t}function Qo(e,t){if(I){var n=q.formState;if(n!==null){a:{var r=U;if(I){if(F){b:{for(var i=F,a=Ii;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){F=cf(i.nextSibling),r=i.data===`F!`;break a}}Ri(r)}r=!1}r&&(t=n[0])}}return n=Oo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},n.queue=r,n=As.bind(null,U,r),r.dispatch=n,r=Uo(!1),a=Ms.bind(null,U,!1,r.queue),r=Oo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Go.bind(null,U,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function $o(e){return es(G(),W,e)}function es(e,t,n){if(t=Fo(e,t,Zo)[0],e=Po(No)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ao(t)}catch(e){throw e===ba?Sa:e}else r=t;t=G();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(U.flags|=2048,rs(9,{destroy:void 0},ts.bind(null,i,n),null)),[r,a,e]}function ts(e,t){e.action=t}function ns(e){var t=G(),n=W;if(n!==null)return es(t,n,e);G(),t=t.memoizedState,n=G();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=U.updateQueue,t===null&&(t=ko(),U.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function is(){return G().memoizedState}function as(e,t,n,r){var i=Oo();U.flags|=e,i.memoizedState=rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function os(e,t,n,r){var i=G();r=r===void 0?null:r;var a=i.memoizedState.inst;W!==null&&r!==null&&bo(r,W.memoizedState.deps)?i.memoizedState=rs(t,a,n,r):(U.flags|=e,i.memoizedState=rs(1|t,a,n,r))}function ss(e,t){as(8390656,8,e,t)}function cs(e,t){os(2048,8,e,t)}function ls(e){U.flags|=4;var t=U.updateQueue;if(t===null)t=ko(),U.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function us(e){var t=G().memoizedState;return ls({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ds(e,t){return os(4,2,e,t)}function fs(e,t){return os(4,4,e,t)}function ps(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ms(e,t,n){n=n==null?null:n.concat([e]),os(4,4,ps.bind(null,t,e),n)}function hs(){}function gs(e,t){var n=G();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=G();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&bo(t,r[1]))return r[0];if(r=e(),mo){Le(!0);try{e()}finally{Le(!1)}}return n.memoizedState=[r,t],r}function vs(e,t,n){return n===void 0||lo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),U.lanes|=e,Gl|=e,n)}function ys(e,t,n,r){return Cr(n,t)?n:Xa.current===null?!(lo&42)||lo&1073741824&&!(Y&261930)?(tc=!0,e.memoizedState=n):(e=mu(),U.lanes|=e,Gl|=e,t):(e=vs(e,n,r),Cr(e,t)||(tc=!0),e)}function bs(e,t,n,r,i){var a=N.p;N.p=a!==0&&8>a?a:8;var o=M.T,s={};M.T=s,Ms(e,!1,t,n);try{var c=i(),l=M.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?js(e,t,ma(c,r),pu(e)):js(e,t,r,pu(e))}catch(n){js(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{N.p=a,o!==null&&s.types!==null&&(o.types=s.types),M.T=o}}function xs(){}function Ss(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Cs(e).queue;bs(e,a,t,te,n===null?xs:function(){return ws(e),n(r)})}function Cs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ws(e){var t=Cs(e);t.next===null&&(t=e.alternate.memoizedState),js(e,t.next.queue,{},pu())}function Ts(){return Qi(Qf)}function Es(){return G().memoizedState}function Ds(){return G().memoizedState}function Os(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Va(n);var r=Ha(t,e,n);r!==null&&(hu(r,t,n),Ua(r,t,n)),t={cache:sa()},e.payload=t;return}t=t.return}}function ks(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e)?Ps(t,n):(n=ri(e,t,n,r),n!==null&&(hu(n,e,r),Fs(n,t,r)))}function As(e,t,n){js(e,t,n,pu())}function js(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))Ps(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Cr(s,o))return ni(e,t,i,0),q===null&&ti(),!1}catch{}if(n=ri(e,t,i,r),n!==null)return hu(n,e,r),Fs(n,t,r),!0}return!1}function Ms(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ns(e)){if(t)throw Error(i(479))}else t=ri(e,n,r,2),t!==null&&hu(t,e,2)}function Ns(e){var t=e.alternate;return e===U||t!==null&&t===U}function Ps(e,t){po=fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}var Is={readContext:Qi,use:jo,useCallback:yo,useContext:yo,useEffect:yo,useImperativeHandle:yo,useLayoutEffect:yo,useInsertionEffect:yo,useMemo:yo,useReducer:yo,useRef:yo,useState:yo,useDebugValue:yo,useDeferredValue:yo,useTransition:yo,useSyncExternalStore:yo,useId:yo,useHostTransitionStatus:yo,useFormState:yo,useActionState:yo,useOptimistic:yo,useMemoCache:yo,useCacheRefresh:yo};Is.useEffectEvent=yo;var Ls={readContext:Qi,use:jo,useCallback:function(e,t){return Oo().memoizedState=[e,t===void 0?null:t],e},useContext:Qi,useEffect:ss,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),as(4194308,4,ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return as(4194308,4,e,t)},useInsertionEffect:function(e,t){as(4,2,e,t)},useMemo:function(e,t){var n=Oo();t=t===void 0?null:t;var r=e();if(mo){Le(!0);try{e()}finally{Le(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Oo();if(n!==void 0){var i=n(t);if(mo){Le(!0);try{n(t)}finally{Le(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ks.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Oo();return e={current:e},t.memoizedState=e},useState:function(e){e=Uo(e);var t=e.queue,n=As.bind(null,U,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hs,useDeferredValue:function(e,t){return vs(Oo(),e,t)},useTransition:function(){var e=Uo(!1);return e=bs.bind(null,U,e.queue,!0,!1),Oo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=U,a=Oo();if(I){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Ro(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ss(Bo.bind(null,r,o,e),[e]),r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,o,n,t),null),n},useId:function(){var e=Oo(),t=q.identifierPrefix;if(I){var n=Oi,r=Di;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ho++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=vo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ts,useFormState:Qo,useActionState:Qo,useOptimistic:function(e){var t=Oo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ms.bind(null,U,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mo,useCacheRefresh:function(){return Oo().memoizedState=Os.bind(null,U)},useEffectEvent:function(e){var t=Oo(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Rs={readContext:Qi,use:jo,useCallback:gs,useContext:Qi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Po,useRef:is,useState:function(){return Po(No)},useDebugValue:hs,useDeferredValue:function(e,t){return ys(G(),W.memoizedState,e,t)},useTransition:function(){var e=Po(No)[0],t=G().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){return Wo(G(),W,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};Rs.useEffectEvent=us;var zs={readContext:Qi,use:jo,useCallback:gs,useContext:Qi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Io,useRef:is,useState:function(){return Io(No)},useDebugValue:hs,useDeferredValue:function(e,t){var n=G();return W===null?vs(n,e,t):ys(n,W.memoizedState,e,t)},useTransition:function(){var e=Io(No)[0],t=G().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){var n=G();return W===null?(n.baseState=e,[e,n.queue.dispatch]):Wo(n,W,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};zs.useEffectEvent=us;function Bs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Va(r);i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(hu(t,e,r),Ua(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Va(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(hu(t,e,r),Ua(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Va(n);r.tag=2,t!=null&&(r.callback=t),t=Ha(e,r,n),t!==null&&(hu(t,e,n),Ua(t,e,n))}};function Hs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!wr(n,r)||!wr(i,a):!0}function Us(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function Ws(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Gs(e){Zr(e)}function Ks(e){console.error(e)}function qs(e){Zr(e)}function Js(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){return n=Va(n),n.tag=3,n.payload={element:null},n.callback=function(){Js(e,t)},n}function Zs(e){return e=Va(e),e.tag=3,e}function Qs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ys(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ys(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function $s(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Xi(t,n,a,!0),n=H.current,n!==null){switch(n.tag){case 31:case 13:return to===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(I)return t=H.current,t===null?(r!==Li&&(t=Error(i(423),{cause:r}),Wi(yi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=yi(r,n),a=Xs(e.stateNode,r,a),Wa(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Li&&(e=Error(i(422),{cause:r}),Wi(yi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=yi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=yi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Xs(n.stateNode,r,e),Wa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Zs(a),Qs(a,e,n,r),Wa(n,a),!1}n=n.return}while(n!==null);return!1}var ec=Error(i(461)),tc=!1;function nc(e,t,n,r){t.child=e===null?La(t,null,n,r):Ia(t,e.child,n,r)}function rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Zi(t),r=xo(e,t,n,o,a,i),s=To(),e!==null&&!tc?(Eo(e,t,i),Dc(e,t,i)):(I&&s&&ji(t),t.flags|=1,nc(e,t,r,i),t.child)}function ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ui(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ac(e,t,a,r,i)):(e=pi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Oc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?wr:n,n(o,r)&&e.ref===t.ref)return Dc(e,t,i)}return t.flags|=1,e=di(a,r),e.ref=t.ref,e.return=t,t.child=e}function ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(wr(a,r)&&e.ref===t.ref)if(tc=!1,t.pendingProps=r=a,Oc(e,i))e.flags&131072&&(tc=!0);else return t.lanes=e.lanes,Dc(e,t,i)}return pc(e,t,n,r,i)}function oc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return cc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&va(t,a===null?null:a.cachePool),a===null?$a():Qa(t,a),io(t);else return r=t.lanes=536870912,cc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&va(t,null),$a(),ao(t)):(va(t,a.cachePool),Qa(t,a),ao(t),t.memoizedState=null);return nc(e,t,i,n),t.child}function sc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cc(e,t,n,r,i){var a=_a();return a=a===null?null:{parent:oa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&va(t,null),$a(),io(t),e!==null&&Xi(e,t,r,!0),t.childLanes=i,null}function lc(e,t){return t=Sc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uc(e,t,n){return Ia(t,e.child,null,n),e=lc(t,t.pendingProps),e.flags|=2,oo(t),t.memoizedState=null,e}function dc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(I){if(r.mode===`hidden`)return e=lc(t,r),t.lanes=536870912,sc(null,e);if(ro(t),(e=F)?(e=rf(e,Ii),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ei===null?null:{id:Di,overflow:Oi},retryLane:536870912,hydrationErrors:null},n=gi(e),n.return=t,t.child=n,Pi=t,F=null)):e=null,e===null)throw Ri(t);return t.lanes=536870912,null}return lc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(ro(t),a)if(t.flags&256)t.flags&=-257,t=uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(tc||Xi(e,t,n,!1),a=(n&e.childLanes)!==0,tc||a){if(r=q,r!==null&&(s=tt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ii(e,s),hu(r,e,s),ec;Du(),t=uc(e,t,n)}else e=o.treeContext,F=cf(s.nextSibling),Pi=t,I=!0,Fi=null,Ii=!1,e!==null&&Ni(t,e),t=lc(t,r),t.flags|=4096;return t}return e=di(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pc(e,t,n,r,i){return Zi(t),n=xo(e,t,n,r,void 0,i),r=To(),e!==null&&!tc?(Eo(e,t,i),Dc(e,t,i)):(I&&r&&ji(t),t.flags|=1,nc(e,t,n,i),t.child)}function mc(e,t,n,r,i,a){return Zi(t),t.updateQueue=null,n=Co(t,r,n,i),So(e),r=To(),e!==null&&!tc?(Eo(e,t,a),Dc(e,t,a)):(I&&r&&ji(t),t.flags|=1,nc(e,t,n,a),t.child)}function hc(e,t,n,r,i){if(Zi(t),t.stateNode===null){var a=si,o=n.contextType;typeof o==`object`&&o&&(a=Qi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Vs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},za(t),o=n.contextType,a.context=typeof o==`object`&&o?Qi(o):si,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Bs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Vs.enqueueReplaceState(a,a.state,null),qa(t,r,a,i),Ka(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ws(n,s);a.props=c;var l=a.context,u=n.contextType;o=si,typeof u==`object`&&u&&(o=Qi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Us(t,a,r,o),Ra=!1;var f=t.memoizedState;a.state=f,qa(t,r,a,i),Ka(),l=t.memoizedState,s||f!==l||Ra?(typeof d==`function`&&(Bs(t,n,d,r),l=t.memoizedState),(c=Ra||Hs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ba(e,t),o=t.memoizedProps,u=Ws(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=si,typeof l==`object`&&l&&(c=Qi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Us(t,a,r,c),Ra=!1,f=t.memoizedState,a.state=f,qa(t,r,a,i),Ka();var p=t.memoizedState;o!==d||f!==p||Ra||e!==null&&e.dependencies!==null&&z(e.dependencies)?(typeof s==`function`&&(Bs(t,n,s,r),p=t.memoizedState),(u=Ra||Hs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&z(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,fc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ia(t,e.child,null,i),t.child=Ia(t,null,n,i)):nc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Dc(e,t,i),e}function gc(e,t,n,r){return Hi(),t.flags|=256,nc(e,t,n,r),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:ya()}}function yc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function bc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(so.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(I){if(a?no(t):ao(t),(e=F)?(e=rf(e,Ii),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ei===null?null:{id:Di,overflow:Oi},retryLane:536870912,hydrationErrors:null},n=gi(e),n.return=t,t.child=n,Pi=t,F=null)):e=null,e===null)throw Ri(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ao(t),a=t.mode,c=Sc({mode:`hidden`,children:c},a),r=mi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(null,r)):(no(t),xc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(no(t),t.flags&=-257,t=Cc(e,t,n)):t.memoizedState===null?(ao(t),c=r.fallback,a=t.mode,r=Sc({mode:`visible`,children:r.children},a),c=mi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ia(t,e.child,null,n),r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,t=sc(null,r)):(ao(t),t.child=e.child,t.flags|=128,t=null);else if(no(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Wi({value:r,source:null,stack:null}),t=Cc(e,t,n)}else if(tc||Xi(e,t,n,!1),s=(n&e.childLanes)!==0,tc||s){if(s=q,s!==null&&(r=tt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ii(e,r),hu(s,e,r),ec;af(c)||Du(),t=Cc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,F=cf(c.nextSibling),Pi=t,I=!0,Fi=null,Ii=!1,e!==null&&Ni(t,e),t=xc(t,r.children),t.flags|=4096);return t}return a?(ao(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=di(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=mi(c,a,n,null),c.flags|=2):c=di(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,sc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=vc(n):(a=c.cachePool,a===null?a=ya():(l=oa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(e.child,r)):(no(t),n=e.child,e=n.sibling,n=di(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function xc(e,t){return t=Sc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Sc(e,t){return e=li(22,e,null,t),e.lanes=0,e}function Cc(e,t,n){return Ia(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),R(e.return,t,n)}function Tc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=so.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,P(so,o),nc(e,t,r,n),r=I?Ci:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tc(t,!0,n,null,a,r);break;case`together`:Tc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Dc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Xi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=di(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=di(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&z(e))):!0}function kc(e,t,n){switch(t.tag){case 3:ue(t,t.stateNode.containerInfo),Ji(t,oa,e.memoizedState.cache),Hi();break;case 27:case 5:fe(t);break;case 4:ue(t,t.stateNode.containerInfo);break;case 10:Ji(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ro(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(no(t),e=Dc(e,t,n),e===null?null:e.sibling):bc(e,t,n):(no(t),t.flags|=128,null);no(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Xi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),P(so,so.current),r)break;return null;case 22:return t.lanes=0,oc(e,t,n,t.pendingProps);case 24:Ji(t,oa,e.memoizedState.cache)}return Dc(e,t,n)}function Ac(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tc=!0;else{if(!Oc(e,n)&&!(t.flags&128))return tc=!1,kc(e,t,n);tc=!!(e.flags&131072)}else tc=!1,I&&t.flags&1048576&&Ai(t,Ci,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ea(t.elementType),t.type=e,typeof e==`function`)ui(e)?(r=Ws(e,r),t.tag=1,t=hc(null,t,e,r,n)):(t.tag=0,t=pc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===x){t.tag=11,t=rc(null,t,e,r,n);break a}else if(a===w){t.tag=14,t=ic(null,t,e,r,n);break a}}throw t=j(e)||e,Error(i(306,t,``))}}return t;case 0:return pc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ws(r,t.pendingProps),hc(e,t,r,a,n);case 3:a:{if(ue(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ba(e,t),qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ji(t,oa,r),r!==o.cache&&Yi(t,[oa],n,!0),Ka(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=gc(e,t,r,n);break a}else if(r!==a){a=yi(Error(i(424)),t),Wi(a),t=gc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(F=cf(e.firstChild),Pi=t,I=!0,Fi=null,Ii=!0,n=La(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Hi(),r===a){t=Dc(e,t,n);break a}nc(e,t,r,n)}t=t.child}return t;case 26:return fc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:I||(n=t.type,e=t.pendingProps,r=Bd(ce.current).createElement(n),r[st]=t,r[ct]=e,Pd(r,n,e),bt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fe(t),e===null&&I&&(r=t.stateNode=ff(t.type,t.pendingProps,ce.current),Pi=t,Ii=!0,a=F,Zd(t.type)?(lf=a,F=cf(r.firstChild)):F=a),nc(e,t,t.pendingProps.children,n),fc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&I&&((a=r=F)&&(r=tf(r,t.type,t.pendingProps,Ii),r===null?a=!1:(t.stateNode=r,Pi=t,F=cf(r.firstChild),Ii=!1,a=!0)),a||Ri(t)),fe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=xo(e,t,wo,null,null,n),Qf._currentValue=a),fc(e,t),nc(e,t,r,n),t.child;case 6:return e===null&&I&&((e=n=F)&&(n=nf(n,t.pendingProps,Ii),n===null?e=!1:(t.stateNode=n,Pi=t,F=null,e=!0)),e||Ri(t)),null;case 13:return bc(e,t,n);case 4:return ue(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ia(t,null,r,n):nc(e,t,r,n),t.child;case 11:return rc(e,t,t.type,t.pendingProps,n);case 7:return nc(e,t,t.pendingProps,n),t.child;case 8:return nc(e,t,t.pendingProps.children,n),t.child;case 12:return nc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ji(t,t.type,r.value),nc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Zi(t),a=Qi(a),r=r(a),t.flags|=1,nc(e,t,r,n),t.child;case 14:return ic(e,t,t.type,t.pendingProps,n);case 15:return ac(e,t,t.type,t.pendingProps,n);case 19:return Ec(e,t,n);case 31:return dc(e,t,n);case 22:return oc(e,t,n,t.pendingProps);case 24:return Zi(t),r=Qi(oa),e===null?(a=_a(),a===null&&(a=q,o=sa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},za(t),Ji(t,oa,a)):((e.lanes&n)!==0&&(Ba(e,t),qa(t,null,null,n),Ka()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ji(t,oa,r),r!==a.cache&&Yi(t,[oa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ji(t,oa,r))),nc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function jc(e){e.flags|=4}function Mc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Da=Ca,xa}else e.flags&=-16777217}function Nc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Da=Ca,xa}function Pc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ye(),e.lanes|=t,Yl|=t)}function Fc(e,t){if(!I)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ic(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(Mi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ic(t),null;case 1:return Ic(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),L(oa),de(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Vi(t)?jc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ui())),Ic(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(jc(t),o===null?(Ic(t),Mc(t,a,null,r,n)):(Ic(t),Nc(t,o))):o?o===e.memoizedState?(Ic(t),t.flags&=-16777217):(jc(t),Ic(t),Nc(t,o)):(e=e.memoizedProps,e!==r&&jc(t),Ic(t),Mc(t,a,e,r,n)),null;case 27:if(pe(t),n=ce.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}e=oe.current,Vi(t)?zi(t,e):(e=ff(a,r,n),t.stateNode=e,jc(t))}return Ic(t),null;case 5:if(pe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}if(o=oe.current,Vi(t))zi(t,o);else{var s=Bd(ce.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[st]=t,o[ct]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&jc(t)}}return Ic(t),Mc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ce.current,Vi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Pi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ri(t,!0)}else e=Bd(e).createTextNode(r),e[st]=t,t.stateNode=e}return Ic(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Vi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[st]=t}else Hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),e=!1}else n=Ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(oo(t),t):(oo(t),null);if(t.flags&128)throw Error(i(558))}return Ic(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Vi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[st]=t}else Hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),a=!1}else a=Ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(oo(t),t):(oo(t),null)}return oo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pc(t,t.updateQueue),Ic(t),null);case 4:return de(),e===null&&Sd(t.stateNode.containerInfo),Ic(t),null;case 10:return L(t.type),Ic(t),null;case 19:if(ae(so),r=t.memoizedState,r===null)return Ic(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Fc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=co(e),o!==null){for(t.flags|=128,Fc(r,!1),e=o.updateQueue,t.updateQueue=e,Pc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)fi(n,e),n=n.sibling;return P(so,so.current&1|2),I&&ki(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ee()>tu&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304)}else{if(!a)if(e=co(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Pc(t,e),Fc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!I)return Ic(t),null}else 2*Ee()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Ic(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ee(),e.sibling=null,n=so.current,P(so,a?n&1|2:n&1),I&&ki(t,r.treeForkCount),e);case 22:case 23:return oo(t),eo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Ic(t),t.subtreeFlags&6&&(t.flags|=8192)):Ic(t),n=t.updateQueue,n!==null&&Pc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ae(ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),L(oa),Ic(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(Mi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return L(oa),de(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return pe(t),null;case 31:if(t.memoizedState!==null){if(oo(t),t.alternate===null)throw Error(i(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(oo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(so),null;case 4:return de(),null;case 10:return L(t.type),null;case 22:case 23:return oo(t),eo(),e!==null&&ae(ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return L(oa),null;case 25:return null;default:return null}}function zc(e,t){switch(Mi(t),t.tag){case 3:L(oa),de();break;case 26:case 27:case 5:pe(t);break;case 4:de();break;case 31:t.memoizedState!==null&&oo(t);break;case 13:oo(t);break;case 19:ae(so);break;case 10:L(t.type);break;case 22:case 23:oo(t),eo(),e!==null&&ae(ga);break;case 24:L(oa)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ya(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Ws(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ct]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=en));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[st]=e,t[ct]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=Or(e),kr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ws(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ws(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ya(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ht(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Ie&&typeof Ie.onCommitFiberUnmount==`function`)try{Ie.onCommitFiberUnmount(Fe,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null)if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[mt]||o[st]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[st]=e,bt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[st]=e,bt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{Kt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ee()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Kt(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ja(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ca(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ca(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=Qi(oa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Qi(oa).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:M.T===null?it():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||I){var e=Ue;Ue<<=1,!(Ue&3932160)&&(Ue=262144),Jl=e}else Jl=536870912;return e=H.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),Ze(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||qe(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ee(),10<a)){if(yu(r,t,Jl,!Bl),Ke(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:en},jl(t,a,d);var m=(a&62914560)===a?$l-Ee():(a&4194048)===a?eu-Ee():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Cr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Re(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&$e(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,qi=Ki=null,Do(e),Aa=null,ja=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=di(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=qe(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Re(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ti(),n}function Cu(e,t){U=null,M.H=Is,t===ba||t===Sa?(t=Oa(),X=3):t===xa?(t=Oa(),X=4):X=t===ec?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Js(e,yi(t,e.current)))}function wu(){var e=H.current;return e===null?!0:(Y&4194048)===Y?to===null:(Y&62914560)===Y||Y&536870912?e===to:!1}function Tu(){var e=M.H;return M.H=Is,e===null?Is:e}function Eu(){var e=M.A;return M.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&H.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:H.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,qi=Ki=null,K=r,M.H=i,M.A=a,J===null&&(q=null,Y=0,ti()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=Ee()+500,Su(e,t)):Vl=qe(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(wa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:wa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return qi=Ki=null,M.H=r,M.A=a,K=n,J===null?(q=null,Y=0,ti(),Wl):0}function ju(){for(;J!==null&&!we();)Mu(J)}function Mu(e){var t=Ac(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=mc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Do(t);default:zc(n,t),t=J=fi(t,Ul),t=Ac(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){qi=Ki=null,Do(t),Aa=null,ja=0;var i=t.return;try{if($s(e,i,t,n,Y)){Wl=1,Js(e,yi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Js(e,yi(n,e.current)),J=null;return}t.flags&32768?(I||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=H.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ei,Qe(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ae,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=M.T,M.T=null,a=N.p,N.p=2,s=K,K|=4;try{il(e,t,n)}finally{K=s,N.p=a,M.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Or(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Dr(s.ownerDocument.documentElement,s)){if(c!==null&&kr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Er(s,h),v=Er(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,N.p=r,M.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,N.p=r,M.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Te();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),rt(n),t=t.stateNode,Ie&&typeof Ie.onCommitFiberRoot==`function`)try{Ie.onCommitFiberRoot(Fe,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=M.T,i=N.p,N.p=2,M.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{M.T=t,N.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ca(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=rt(su),r=M.T,a=N.p;try{N.p=32>n?32:n,M.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot==`function`)try{Ie.onPostCommitFiberRoot(Fe,o)}catch{}return!0}finally{N.p=a,M.T=r,Vu(e,t)}}function Wu(e,t,n){t=yi(n,t),t=Xs(e.stateNode,t,2),e=Ha(e,t,2),e!==null&&(Ze(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=yi(n,e),n=Zs(2),r=Ha(t,n,2),r!==null&&(Qs(n,r,t,e),Ze(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Ee()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Ye()),e=ii(e,t),e!==null&&(Ze(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Se(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Re(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Ke(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||qe(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ee(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Re(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Je(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Ke(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ce(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ce(r),rt(n)){case 2:case 8:n=ke;break;case 32:n=Ae;break;case 268435456:n=Me;break;default:n=Ae}return r=cd.bind(null,e),n=Se(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ce(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Ke(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ee()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?Se(Oe,ad):od()})}function dd(){if(nd===0){var e=da;e===0&&(e=He,He<<=1,!(He&261888)&&(He=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:$t(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ct]||null).action),o=r.submitter;o&&(t=(t=o[ct]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Sn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ss(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ss(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Yr.length;hd++){var gd=Yr[hd];Xr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Xr(Vr,`onAnimationEnd`),Xr(Hr,`onAnimationIteration`),Xr(Ur,`onAnimationStart`),Xr(`dblclick`,`onDoubleClick`),Xr(`focusin`,`onFocus`),Xr(`focusout`,`onBlur`),Xr(Wr,`onTransitionRun`),Xr(Gr,`onTransitionStart`),Xr(Kr,`onTransitionCancel`),Xr(qr,`onTransitionEnd`),wt(`onMouseEnter`,[`mouseout`,`mouseover`]),wt(`onMouseLeave`,[`mouseout`,`mouseover`]),wt(`onPointerEnter`,[`pointerout`,`pointerover`]),wt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ct(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ct(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ct(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ct(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ct(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ct(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Zr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Zr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ut];n===void 0&&(n=t[ut]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,xt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!dn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=gt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}cn(function(){var r=a,i=nn(n),s=[];a:{var c=Jr.get(e);if(c!==void 0){var l=Sn,u=e;switch(e){case`keypress`:if(_n(n)===0)break a;case`keydown`:case`keyup`:l=Bn;break;case`focusin`:u=`focus`,l=jn;break;case`focusout`:u=`blur`,l=jn;break;case`beforeblur`:case`afterblur`:l=jn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=kn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=An;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Hn;break;case Vr:case Hr:case Ur:l=Mn;break;case qr:l=Un;break;case`scroll`:case`scrollend`:l=wn;break;case`wheel`:l=Wn;break;case`copy`:case`cut`:case`paste`:l=Nn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Vn;break;case`toggle`:case`beforetoggle`:l=Gn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=ln(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==tn&&(u=n.relatedTarget||n.fromElement)&&(gt(u)||u[lt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?gt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=kn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Vn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:vt(l),h=u==null?c:vt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,gt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?vt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=dr;else if(ar(c))if(fr)v=xr;else{v=yr;var y=vr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Xt(r.elementType)&&(v=dr):v=br;if(v&&=v(e,r)){or(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ht(c,`number`,c.value)}switch(y=r?vt(r):window,e){case`focusin`:(ar(y)||y.contentEditable===`true`)&&(jr=y,Mr=r,Nr=null);break;case`focusout`:Nr=Mr=jr=null;break;case`mousedown`:Pr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Pr=!1,Fr(s,n,i);break;case`selectionchange`:if(Ar)break;case`keydown`:case`keyup`:Fr(s,n,i)}var b;if(qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else tr?$n(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Xn&&n.locale!==`ko`&&(tr||x!==`onCompositionStart`?x===`onCompositionEnd`&&tr&&(b=gn()):(pn=i,mn=`value`in pn?pn.value:pn.textContent,tr=!0)),y=Ed(r,x),0<y.length&&(x=new Pn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=er(n),b!==null&&(x.data=b)))),(b=Yn?nr(e,n):rr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Pn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=ln(e,n),i!=null&&r.unshift(Td(e,i,a)),i=ln(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=ln(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=ln(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Kt(e,``+r);break;case`className`:At(e,`class`,r);break;case`tabIndex`:At(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:At(e,n,r);break;case`style`:Yt(e,r,o);break;case`data`:if(t!==`object`){At(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=$t(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=$t(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=en);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=$t(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),kt(e,`popover`,r);break;case`xlinkActuate`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:kt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Zt.get(n)||n,kt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Yt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Kt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=en);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!St.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ct]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):kt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Vt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ut(e,!!r,n,!0):Ut(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Gt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Xt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Bt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ut(e,!!n,n?[]:``,!1):Ut(e,!!n,t,!0)):Ut(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Wt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Xt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[mt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),ht(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[mt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ht(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=N.d;N.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=_t(e);t!==null&&t.tag===5&&t.type===`form`?ws(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=zt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),bt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+zt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+zt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+zt(n.imageSizes)+`"]`)):i+=`[href="`+zt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),bt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+zt(r)+`"][href="`+zt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),bt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=yt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);bt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=yt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=f({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),bt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=yt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),bt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ce.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=yt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=yt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=yt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+zt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),bt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+zt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+zt(n.href)+`"]`);if(r)return t.instance=r,bt(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),bt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,bt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),bt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,bt(a),a):(r=n,(a=mf.get(o))&&(r=f({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),bt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[mt]||a[st]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,bt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),bt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:b,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=li(3,null,null,t),e.current=a,a.stateNode=e,t=sa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},za(a),e}function tp(e){return e?(e=si,e):si}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Va(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ha(e,r,t),n!==null&&(hu(n,e,t),Ua(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ii(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=nt(t);var n=ii(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=2,up(e,t,n,r)}finally{N.p=a,M.T=i}}function lp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=8,up(e,t,n,r)}finally{N.p=a,M.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=_t(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ge(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Re(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Ee()+500,id(0,!1))}}break;case 31:case 13:s=ii(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=nn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=gt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(De()){case Oe:return 2;case ke:return 8;case Ae:case je:return 32;case Me:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=_t(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=gt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,at(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,at(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);tn=r,n.target.dispatchEvent(r),tn=null}else return t=_t(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=_t(n);a!==null&&(e.splice(t,3),t-=3,Ss(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ct]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ct]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[lt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=it();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:M,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Fe=zp.inject(Rp),Ie=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Gs,s=Ks,c=qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[lt]=t.current,Sd(e),new Fp(t)}})),aa=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=ia()})),B=l($i(),1),oa=l(aa(),1),sa=class e{constructor(){this.project=[],this.status=[],this.text=[],this.labels=[],this.annotations=[]}empty(){return this.project.length+this.status.length+this.text.length+this.labels.length+this.annotations.length===0}static parse(t){let n=e.tokenize(t),r=new Set,i=new Set,a=[],o=new Set,s=new Set;for(let e of n){let t=e.startsWith(`!`);if(t&&(e=e.slice(1)),e.startsWith(`p:`)){r.add({name:e.slice(2),not:t});continue}if(e.startsWith(`s:`)){i.add({name:e.slice(2),not:t});continue}if(e.startsWith(`@`)){o.add({name:e,not:t});continue}if(e.startsWith(`annot:`)){s.add({name:e.slice(6),not:t});continue}a.push({name:e.toLowerCase(),not:t})}let c=new e;return c.text=a,c.project=[...r],c.status=[...i],c.labels=[...o],c.annotations=[...s],c}static tokenize(e){let t=[],n,r=[];for(let i=0;i<e.length;++i){let a=e[i];if(n&&a===`\\`&&e[i+1]===n){r.push(n),++i;continue}if(a===`"`||a===`'`){n===a?(t.push(r.join(``).toLowerCase()),r=[],n=void 0):n?r.push(a):n=a;continue}if(n){r.push(a);continue}if(a===` `){r.length&&(t.push(r.join(``).toLowerCase()),r=[]);continue}r.push(a)}return r.length&&t.push(r.join(``).toLowerCase()),t}matches(e){let t=la(e);if(this.project.length&&!this.project.find(e=>{let n=t.project.includes(e.name);return e.not?!n:n}))return!1;if(this.status.length){if(!this.status.find(e=>{let n=t.status.includes(e.name);return e.not?!n:n}))return!1}else if(t.status===`skipped`)return!1;return!(this.text.length&&!this.text.every(e=>{if(t.text.includes(e.name))return!e.not;let[n,r,i]=e.name.split(`:`);return t.file.includes(n)&&t.line===r&&(i===void 0||t.column===i)?!e.not:!!e.not})||this.labels.length&&!this.labels.every(e=>{let n=t.labels.includes(e.name);return e.not?!n:n})||this.annotations.length&&!this.annotations.every(e=>{let n=t.annotations.some(t=>t.includes(e.name));return e.not?!n:n}))}},ca=Symbol(`searchValues`);function la(e){let t=e[ca];if(t)return t;let n=`passed`;e.outcome===`unexpected`&&(n=`failed`),e.outcome===`flaky`&&(n=`flaky`),e.outcome===`skipped`&&(n=`skipped`);let r={text:(n+` `+e.projectName+` `+e.tags.join(` `)+` `+e.location.file+` `+e.path.join(` `)+` `+e.title).toLowerCase(),project:e.projectName.toLowerCase(),status:n,file:e.location.file,line:String(e.location.line),column:String(e.location.column),labels:e.tags.map(e=>e.toLowerCase()),annotations:e.annotations.map(e=>e.type.toLowerCase()+`=`+(e.description??``).toLowerCase())};return e[ca]=r,r}var ua=/("[^"]*"|"[^"]*$|\S+)/g;function da(e,t,n){let r=new URLSearchParams(e),i=[...(e.get(`q`)??``).matchAll(ua)].map(e=>{let t=e[0];return t.startsWith(`"`)&&t.endsWith(`"`)&&t.length>1?t.slice(1,t.length-1):t});if(n)return r.set(`q`,fa(i.includes(t)?i.filter(e=>e!==t):[...i,t])),`#?`+r;let a;t.startsWith(`s:`)&&(a=`s:`),t.startsWith(`p:`)&&(a=`p:`),t.startsWith(`@`)&&(a=`@`);let o=i.filter(e=>!e.startsWith(a));return o.push(t),r.set(`q`,fa(o)),`#?`+r}function fa(e){return e.map(e=>/\s/.test(e)?`"${e}"`:e).join(` `).trim()}var pa=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),V=o(((e,t)=>{t.exports=pa()}))(),ma=()=>(0,V.jsx)(`span`,{className:`octicon`,style:{width:16,height:16}}),ha=()=>(0,V.jsx)(`svg`,{"aria-hidden":`true`,height:`16`,viewBox:`0 0 16 16`,version:`1.1`,width:`16`,"data-view-component":`true`,className:`octicon subnav-search-icon`,children:(0,V.jsx)(`path`,{fillRule:`evenodd`,d:`M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z`})}),ga=()=>(0,V.jsx)(`svg`,{"aria-hidden":`true`,height:`16`,viewBox:`0 0 16 16`,version:`1.1`,width:`16`,className:`octicon color-fg-muted`,children:(0,V.jsx)(`path`,{fillRule:`evenodd`,d:`M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z`})}),_a=()=>(0,V.jsx)(`svg`,{"aria-hidden":`true`,height:`16`,viewBox:`0 0 16 16`,version:`1.1`,width:`16`,"data-view-component":`true`,className:`octicon color-fg-muted`,children:(0,V.jsx)(`path`,{fillRule:`evenodd`,d:`M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z`})}),va=()=>(0,V.jsx)(`svg`,{"aria-hidden":`true`,height:`16`,viewBox:`0 0 16 16`,version:`1.1`,width:`16`,"data-view-component":`true`,className:`octicon color-text-warning`,children:(0,V.jsx)(`path`,{fillRule:`evenodd`,d:`M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z`})}),ya=()=>(0,V.jsx)(`svg`,{"aria-hidden":`true`,height:`16`,viewBox:`0 0 16 16`,version:`1.1`,width:`16`,"data-view-component":`true`,className:`octicon color-fg-muted`,children:(0,V.jsx)(`path`,{fillRule:`evenodd`,d:`M3.5 1.75a.25.25 0 01.25-.25h3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h2.086a.25.25 0 01.177.073l2.914 2.914a.25.25 0 01.073.177v8.586a.25.25 0 01-.25.25h-.5a.75.75 0 000 1.5h.5A1.75 1.75 0 0014 13.25V4.664c0-.464-.184-.909-.513-1.237L10.573.513A1.75 1.75 0 009.336 0H3.75A1.75 1.75 0 002 1.75v11.5c0 .649.353 1.214.874 1.515a.75.75 0 10.752-1.298.25.25 0 01-.126-.217V1.75zM8.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM6 5.25a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 016 5.25zm2 1.5A.75.75 0 018.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 018 6.75zm-1.25.75a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM8 9.75A.75.75 0 018.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 018 9.75zm-.75.75a1.75 1.75 0 00-1.75 1.75v3c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75v-3a1.75 1.75 0 00-1.75-1.75h-.5zM7 12.25a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v2.25H7v-2.25z`})}),ba=()=>(0,V.jsx)(`svg`,{"aria-hidden":`true`,height:`16`,viewBox:`0 0 16 16`,version:`1.1`,width:`16`,"data-view-component":`true`,className:`octicon color-fg-muted indirect-attachment-indicator`,children:(0,V.jsx)(`path`,{fillRule:`evenodd`,d:`M3.5 1.75a.25.25 0 01.25-.25h3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h2.086a.25.25 0 01.177.073l2.914 2.914a.25.25 0 01.073.177v8.586a.25.25 0 01-.25.25h-.5a.75.75 0 000 1.5h.5A1.75 1.75 0 0014 13.25V4.664c0-.464-.184-.909-.513-1.237L10.573.513A1.75 1.75 0 009.336 0H3.75A1.75 1.75 0 002 1.75v11.5c0 .649.353 1.214.874 1.515a.75.75 0 10.752-1.298.25.25 0 01-.126-.217V1.75zM8.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM6 5.25a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 016 5.25zm2 1.5A.75.75 0 018.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 018 6.75zm-1.25.75a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM8 9.75A.75.75 0 018.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 018 9.75zm-.75.75a1.75 1.75 0 00-1.75 1.75v3c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75v-3a1.75 1.75 0 00-1.75-1.75h-.5zM7 12.25a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v2.25H7v-2.25z`})}),xa=()=>(0,V.jsx)(`svg`,{className:`octicon color-text-danger`,viewBox:`0 0 16 16`,version:`1.1`,width:`16`,height:`16`,"aria-hidden":`true`,children:(0,V.jsx)(`path`,{fillRule:`evenodd`,d:`M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z`})}),Sa=()=>(0,V.jsx)(`svg`,{"aria-hidden":`true`,height:`16`,viewBox:`0 0 16 16`,version:`1.1`,width:`16`,"data-view-component":`true`,className:`octicon color-icon-success`,children:(0,V.jsx)(`path`,{fillRule:`evenodd`,d:`M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z`})}),Ca=()=>(0,V.jsx)(`svg`,{"aria-hidden":`true`,height:`16`,viewBox:`0 0 16 16`,version:`1.1`,width:`16`,"data-view-component":`true`,className:`octicon octicon-clock color-text-danger`,children:(0,V.jsx)(`path`,{fillRule:`evenodd`,d:`M5.75.75A.75.75 0 016.5 0h3a.75.75 0 010 1.5h-.75v1l-.001.041a6.718 6.718 0 013.464 1.435l.007-.006.75-.75a.75.75 0 111.06 1.06l-.75.75-.006.007a6.75 6.75 0 11-10.548 0L2.72 5.03l-.75-.75a.75.75 0 011.06-1.06l.75.75.007.006A6.718 6.718 0 017.25 2.541a.756.756 0 010-.041v-1H6.5a.75.75 0 01-.75-.75zM8 14.5A5.25 5.25 0 108 4a5.25 5.25 0 000 10.5zm.389-6.7l1.33-1.33a.75.75 0 111.061 1.06L9.45 8.861A1.502 1.502 0 018 10.75a1.5 1.5 0 11.389-2.95z`})}),wa=()=>(0,V.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 16 16`,width:`16`,height:`16`,"data-view-component":`true`,className:`octicon color-fg-muted`,children:(0,V.jsx)(`path`,{d:`M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm9.78-2.22-5.5 5.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l5.5-5.5a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z`})}),Ta=()=>(0,V.jsx)(`svg`,{className:`octicon`,viewBox:`0 0 48 48`,version:`1.1`,width:`20`,height:`20`,"aria-hidden":`true`,children:(0,V.jsx)(`path`,{xmlns:`http://www.w3.org/2000/svg`,d:`M11.85 32H36.2l-7.35-9.95-6.55 8.7-4.6-6.45ZM7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-29v26-26Zm34 26V11H7v26Z`})}),Ea=()=>(0,V.jsx)(`svg`,{className:`octicon`,viewBox:`0 0 48 48`,version:`1.1`,width:`20`,height:`20`,"aria-hidden":`true`,children:(0,V.jsx)(`path`,{xmlns:`http://www.w3.org/2000/svg`,d:`m19.6 32.35 13-8.45-13-8.45ZM7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h34V11H7v26Zm0 0V11v26Z`})}),Da=()=>(0,V.jsx)(`svg`,{className:`octicon`,viewBox:`0 0 48 48`,version:`1.1`,width:`20`,height:`20`,"aria-hidden":`true`,children:(0,V.jsx)(`path`,{xmlns:`http://www.w3.org/2000/svg`,d:`M7 37h9.35V11H7v26Zm12.35 0h9.3V11h-9.3v26Zm12.3 0H41V11h-9.35v26ZM7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Z`})}),Oa=()=>(0,V.jsxs)(`svg`,{className:`octicon`,viewBox:`0 0 16 16`,width:`16`,height:`16`,"aria-hidden":`true`,children:[(0,V.jsx)(`path`,{d:`M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z`}),(0,V.jsx)(`path`,{d:`M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z`})]}),ka=()=>(0,V.jsx)(`svg`,{className:`octicon octicon-settings`,viewBox:`0 0 16 16`,width:`16`,height:`16`,"aria-hidden":`true`,children:(0,V.jsx)(`path`,{d:`M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z`})}),Aa=({value:e})=>{let[t,n]=B.useState(`copy`);return(0,V.jsx)(`button`,{className:`copy-icon`,title:`Copy to clipboard`,"aria-label":`Copy to clipboard`,onClick:B.useCallback(()=>{navigator.clipboard.writeText(e).then(()=>{n(`check`),setTimeout(()=>{n(`copy`)},3e3)},()=>{n(`cross`)})},[e]),children:t===`check`?Sa():t===`cross`?xa():Oa()})},ja=({children:e,value:t})=>(0,V.jsxs)(`span`,{className:`copy-value-container`,children:[e,(0,V.jsx)(`span`,{className:`copy-button-container`,children:(0,V.jsx)(Aa,{value:t})})]});function Ma(e,t,n,r){let[i,a]=B.useState(n);return B.useEffect(()=>{let t=!1;return r!==void 0&&a(r),e().then(e=>{t||a(e)}),()=>{t=!0}},t),i}function Na(){let e=B.useRef(null),[t]=Pa(e);return[t,e]}function Pa(e){let[t,n]=B.useState(new DOMRect(0,0,10,10)),r=B.useCallback(()=>{let t=e?.current;t&&n(t.getBoundingClientRect())},[e]);return B.useLayoutEffect(()=>{let t=e?.current;if(!t)return;r();let n=new ResizeObserver(r);return n.observe(t),window.addEventListener(`resize`,r),()=>{n.disconnect(),window.removeEventListener(`resize`,r)}},[r,e]),[t,r]}var Fa=new class{constructor(){this.onChangeEmitter=new EventTarget}getString(e,t){return localStorage[e]||t}setString(e,t){localStorage[e]=t,this.onChangeEmitter.dispatchEvent(new Event(e)),window.saveSettings?.()}getObject(e,t){if(!localStorage[e])return t;try{return JSON.parse(localStorage[e])}catch{return t}}setObject(e,t){localStorage[e]=JSON.stringify(t),this.onChangeEmitter.dispatchEvent(new Event(e)),window.saveSettings?.()}};function Ia(...e){return e.filter(Boolean).join(` `)}var La=RegExp(`(?:[a-zA-Z][a-zA-Z0-9+.-]{2,}:\\/\\/|www\\.)[^\\s\\u0000-\\u0020\\u007f-\\u009f"]{2,}[^\\s\\u0000-\\u0020\\u007f-\\u009f"')}\\],:;.!?]`,`ug`);function Ra(){let[e,t]=B.useState(!1);return[e,B.useCallback(()=>{let e=[];return t(n=>(e.push(setTimeout(()=>t(!1),1e3)),n?(e.push(setTimeout(()=>t(!0),50)),!1):!0)),()=>e.forEach(clearTimeout)},[t])]}function za(e){let t=[],n=0,r;for(;(r=La.exec(e))!==null;){let i=e.substring(n,r.index);i&&t.push(i);let a=r[0];t.push(Ba(a)),n=r.index+a.length}let i=e.substring(n);return i&&t.push(i),t}function Ba(e){let t=e;return t.startsWith(`www.`)&&(t=`https://`+t),(0,V.jsx)(`a`,{href:t,target:`_blank`,rel:`noopener noreferrer`,children:e})}var Va=({summary:e,children:t,className:n,style:r})=>{let[i,a]=B.useState(!1);return(0,V.jsxs)(`details`,{style:r,className:n,onToggle:e=>{a(e.currentTarget.open)},children:[(0,V.jsxs)(`summary`,{className:`expandable-summary`,children:[i?ga():_a(),e]}),t]})};function Ha(e){let t=0;for(let n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<8)-t);return Math.abs(t%6)}function Ua(e){if(!e)return e;try{let t=new URL(e,window.location.href);if(t.origin===window.location.origin){for(let[e,n]of new URLSearchParams(window.location.search))t.searchParams.set(e,n);return t.toString()}return e}catch{return e}}var Wa=({label:e,href:t,onClick:n,colorIndex:r,trimAtSymbolPrefix:i})=>{let a=(0,V.jsx)(`span`,{className:Ia(`label`,`label-color-`+(r===void 0?Ha(e):r)),onClick:n?t=>n(t,e):void 0,children:i&&e.startsWith(`@`)?e.slice(1):e});return t?(0,V.jsx)(`a`,{className:`label-anchor`,href:Ua(t),children:a}):a},Ga=({projectNames:e,activeProjectName:t,otherLabels:n,style:r})=>{let i=e.length>0&&!!t;return(i||n.length>0)&&(0,V.jsxs)(`span`,{className:`label-row`,style:r,children:[i&&(0,V.jsx)(Za,{projectNames:e,projectName:t}),(0,V.jsx)(Ka,{labels:n})]})},Ka=({labels:e})=>{let t=H(),n=B.useCallback((e,n)=>{let r=new URLSearchParams(t);e.preventDefault(),r.has(`testId`)&&r.delete(`speedboard`),r.delete(`testId`),qa(da(r,n,e.metaKey||e.ctrlKey))},[t]);return(0,V.jsx)(V.Fragment,{children:e.map(e=>(0,V.jsx)(Wa,{label:e,trimAtSymbolPrefix:!0,onClick:n},e))})};function qa(e){window.history.pushState({},``,e);let t=new PopStateEvent(`popstate`);window.dispatchEvent(t)}var Ja=({predicate:e,children:t})=>e(H())?t:null,Ya=({click:e,ctrlClick:t,children:n,...r})=>(0,V.jsx)(`a`,{...r,style:{textDecoration:`none`,color:`var(--color-fg-default)`,cursor:`pointer`},onClick:n=>{e&&(n.preventDefault(),qa(Ua((n.metaKey||n.ctrlKey)&&t||e)))},children:n}),Xa=({className:e,...t})=>(0,V.jsx)(Ya,{...t,className:Ia(`link-badge`,t.dim&&`link-badge-dim`,e)}),Za=({projectNames:e,projectName:t})=>{let n=new URLSearchParams(H());return n.has(`testId`)&&n.delete(`speedboard`),n.delete(`testId`),(0,V.jsx)(Ya,{click:da(n,`p:${t}`,!1),ctrlClick:da(n,`p:${t}`,!0),children:(0,V.jsx)(Wa,{label:t,colorIndex:e.indexOf(t)%6})})},Qa=({attachment:e,result:t,href:n,linkName:r,openInNewTab:i})=>{let[a,o]=Ra();ao(`attachment-`+t.attachments.indexOf(e),o);let s=(0,V.jsxs)(`span`,{children:[e.contentType===io?va():ya(),e.path&&(i?(0,V.jsx)(`a`,{href:Ua(n||e.path),target:`_blank`,rel:`noreferrer`,children:r||e.name}):(0,V.jsx)(`a`,{href:Ua(n||e.path),download:no(e),children:r||e.name})),!e.path&&(i?(0,V.jsx)(`a`,{href:URL.createObjectURL(new Blob([e.body],{type:e.contentType})),target:`_blank`,rel:`noreferrer`,onClick:e=>e.stopPropagation(),children:e.name}):(0,V.jsx)(`span`,{children:za(e.name)}))]});return e.body?(0,V.jsx)(Va,{style:{lineHeight:`32px`},className:Ia(a&&`attachment-flash`),summary:s,children:(0,V.jsxs)(`div`,{className:`attachment-body`,children:[(0,V.jsx)(Aa,{value:e.body}),za(e.body)]})}):(0,V.jsxs)(`div`,{style:{lineHeight:`32px`,whiteSpace:`nowrap`,paddingLeft:4},className:Ia(a&&`attachment-flash`),children:[(0,V.jsx)(`span`,{style:{visibility:`hidden`},children:_a()}),s]})},$a=({test:e,run:t,trailingSeparator:n,dim:r})=>{let i=(t!==void 0&&e.results[t]?[e.results[t]]:e.results).map(e=>e.attachments.filter(e=>e.name===`trace`)).filter(e=>e.length>0)[0];if(i)return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(Xa,{href:Ua(ro(i)),title:`View Trace`,className:`button trace-link`,dim:r,children:[Da(),(0,V.jsx)(`span`,{children:`View Trace`})]}),n&&(0,V.jsx)(`div`,{className:`trace-link-separator`,children:`|`})]})},eo=B.createContext(new URLSearchParams(window.location.hash.slice(1)));function H(){return B.useContext(eo)}var to=({children:e})=>{let[t,n]=B.useState(new URLSearchParams(window.location.hash.slice(1)));return B.useEffect(()=>{let e=()=>n(new URLSearchParams(window.location.hash.slice(1)));return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[]),(0,V.jsx)(eo.Provider,{value:t,children:e})};function no(e){if(e.name.includes(`.`)||!e.path)return e.name;let t=e.path.indexOf(`.`);return t===-1?e.name:e.name+e.path.slice(t,e.path.length)}function ro(e){return`trace/index.html?${e.map((e,t)=>`trace=${new URL(e.path,window.location.href)}`).join(`&`)}`}var io=`x-playwright/missing`;function ao(e,t){let n=H(),r=oo(e);B.useEffect(()=>{if(r)return t()},[r,t,n])}function oo(e){let t=H().get(`anchor`);return t===null||e===void 0?!1:typeof e==`string`?e===t:Array.isArray(e)?e.includes(t):e(t)}function so({id:e,children:t}){let n=B.useRef(null);return ao(e,B.useCallback(()=>{n.current?.scrollIntoView({block:`start`,inline:`start`})},[])),(0,V.jsx)(`div`,{ref:n,children:t})}function co({test:e,result:t,anchor:n},r){let i=new URLSearchParams(r);return e&&i.set(`testId`,e.testId),e&&t&&i.set(`run`,``+e.results.indexOf(t)),n&&i.set(`anchor`,n),`#?`+i}function lo(e){switch(e){case`failed`:case`unexpected`:return xa();case`passed`:case`expected`:return Sa();case`timedOut`:return Ca();case`flaky`:return va();case`skipped`:case`interrupted`:return wa()}}var U=({className:e,style:t,open:n,isModal:r,minWidth:i,verticalOffset:a,requestClose:o,anchor:s,dataTestId:c,children:l})=>{let u=B.useRef(null),[d,f]=B.useState(0),[p]=Pa(u),[m,h]=Pa(s),g=s?W(p,m,a):void 0;return B.useEffect(()=>{let e=e=>{!u.current||!(e.target instanceof Node)||u.current.contains(e.target)||o?.()},t=e=>{e.key===`Escape`&&o?.()};return n?(document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)}):()=>{}},[n,o]),B.useLayoutEffect(()=>h(),[n,h]),B.useEffect(()=>{let e=()=>f(e=>e+1);return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]),B.useLayoutEffect(()=>{u.current&&(n?r?u.current.showModal():u.current.show():u.current.close())},[n,r]),(0,V.jsx)(`dialog`,{ref:u,style:{position:`fixed`,margin:g?0:void 0,zIndex:110,top:g?.top,left:g?.left,minWidth:i||0,...t},className:e,"data-testid":c,children:l})};function W(e,t,n=4,r=4){let i=Math.max(r,t.left);i+e.width>window.innerWidth-r&&(i=window.innerWidth-e.width-r);let a=Math.max(0,t.bottom)+n;return a+e.height>window.innerHeight-n&&(a=Math.max(0,t.top)>e.height+n?Math.max(0,t.top)-e.height-n:window.innerHeight-n-e.height),{left:i,top:a}}var uo=`system`,fo=`theme`,po=[{label:`Dark mode`,value:`dark-mode`},{label:`Light mode`,value:`light-mode`},{label:`System`,value:`system`}],mo=window.matchMedia(`(prefers-color-scheme: dark)`);function ho(){document.playwrightThemeInitialized||(document.playwrightThemeInitialized=!0,document.defaultView.addEventListener(`focus`,e=>{e.target.document.nodeType===Node.DOCUMENT_NODE&&document.body.classList.remove(`inactive`)},!1),document.defaultView.addEventListener(`blur`,e=>{document.body.classList.add(`inactive`)},!1),_o(vo()),mo.addEventListener(`change`,()=>{_o(vo())}))}var go=new Set;function _o(e){let t=yo(),n=e===`system`?mo.matches?`dark-mode`:`light-mode`:e;if(t!==n){t&&document.documentElement.classList.remove(t),document.documentElement.classList.add(n);for(let e of go)e(n)}}function vo(){return Fa.getString(fo,uo)}function yo(){return document.documentElement.classList.contains(`dark-mode`)?`dark-mode`:document.documentElement.classList.contains(`light-mode`)?`light-mode`:null}function bo(){let[e,t]=B.useState(vo());return B.useEffect(()=>{Fa.setString(fo,e),_o(e)},[e]),[e,t]}var xo=({title:e,leftSuperHeader:t,rightSuperHeader:n})=>(0,V.jsxs)(`div`,{className:`header-view`,children:[(0,V.jsxs)(`div`,{className:`hbox header-superheader`,children:[t,(0,V.jsx)(`div`,{style:{flex:`auto`}}),n]}),e&&(0,V.jsx)(`div`,{className:`header-title`,children:za(e)})]}),So=({stats:e,filterText:t,setFilterText:n})=>{let r=H().get(`q`);return B.useEffect(()=>{n(r?`${r.trim()} `:``)},[r,n]),(0,V.jsx)(V.Fragment,{children:(0,V.jsxs)(`div`,{className:`pt-3`,children:[(0,V.jsx)(`div`,{className:`header-view-status-container ml-2 pl-2 d-flex`,children:(0,V.jsx)(Co,{stats:e})}),(0,V.jsxs)(`form`,{className:`subnav-search`,onSubmit:e=>{e.preventDefault();let t=new URL(window.location.href),n=new URLSearchParams(t.hash.slice(1)),r=new FormData(e.target).get(`q`),i=new URLSearchParams({q:r});n.has(`speedboard`)&&i.set(`speedboard`,``),i.toString()&&(t.hash=`?`+i.toString()),qa(t)},children:[ha(),(0,V.jsx)(`input`,{name:`q`,spellCheck:!1,className:`form-control subnav-search-input input-contrast width-full`,"aria-label":`Search tests`,placeholder:`Search tests`,value:t,onChange:e=>{n(e.target.value)}})]})]})})},Co=({stats:e})=>{let t=H().has(`speedboard`);return(0,V.jsxs)(`nav`,{children:[(0,V.jsxs)(Ya,{className:`subnav-item`,href:`#?`,children:[(0,V.jsx)(`span`,{className:`subnav-item-label`,children:`All`}),(0,V.jsx)(`span`,{className:`d-inline counter`,children:e.total-e.skipped})]}),(0,V.jsx)(wo,{token:`passed`,count:e.expected}),(0,V.jsx)(wo,{token:`failed`,count:e.unexpected}),(0,V.jsx)(wo,{token:`flaky`,count:e.flaky}),(0,V.jsx)(wo,{token:`skipped`,count:e.skipped}),(0,V.jsx)(Ya,{className:`subnav-item`,href:`#?speedboard`,title:`Speedboard`,"aria-selected":t,children:Ca()}),(0,V.jsx)(To,{})]})},wo=({token:e,count:t})=>{let n=new URLSearchParams(H());n.delete(`speedboard`),n.delete(`testId`);let r=`s:${e}`,i=da(n,r,!1),a=da(n,r,!0),o=e.charAt(0).toUpperCase()+e.slice(1);return(0,V.jsxs)(Ya,{className:`subnav-item`,href:i,click:i,ctrlClick:a,children:[t>0&&lo(e),(0,V.jsx)(`span`,{className:`subnav-item-label`,children:o}),(0,V.jsx)(`span`,{className:`d-inline counter`,children:t})]})},To=()=>{let e=B.useRef(null),[t,n]=B.useState(!1),[r,i]=bo();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`button`,{type:`button`,ref:e,className:`subnav-item`,title:`Settings`,"aria-haspopup":`dialog`,"aria-expanded":t,onClick:e=>{n(!t),e.preventDefault()},onMouseDown:Eo,children:ka()}),(0,V.jsx)(U,{open:t,minWidth:150,verticalOffset:4,requestClose:()=>n(!1),anchor:e,dataTestId:`settings-dialog`,children:(0,V.jsxs)(`label`,{className:`header-setting-theme`,children:[`Theme:`,(0,V.jsx)(`select`,{value:r,onChange:e=>i(e.target.value),children:po.map(e=>(0,V.jsx)(`option`,{value:e.value,children:e.label},e.value))})]})})]})},Eo=e=>{e.stopPropagation(),e.preventDefault()},Do=({tabs:e,selectedTab:t,setSelectedTab:n})=>{let r=B.useId();return(0,V.jsx)(`div`,{className:`tabbed-pane`,children:(0,V.jsxs)(`div`,{className:`vbox`,children:[(0,V.jsx)(`div`,{className:`hbox`,style:{flex:`none`},children:(0,V.jsx)(`div`,{className:`tabbed-pane-tab-strip`,role:`tablist`,children:e.map(e=>(0,V.jsx)(`button`,{className:Ia(`tabbed-pane-tab-element`,t===e.id&&`selected`),onClick:()=>n(e.id),id:`${r}-${e.id}`,role:`tab`,"aria-selected":t===e.id,children:(0,V.jsx)(`div`,{className:`tabbed-pane-tab-label`,children:e.title})},e.id))})}),e.map(e=>{if(t===e.id)return(0,V.jsx)(`div`,{className:`tab-content`,role:`tabpanel`,"aria-labelledby":`${r}-${e.id}`,children:e.render()},e.id)})]})})},Oo=({header:e,footer:t,expanded:n,setExpanded:r,children:i,noInsets:a,body:o,dataTestId:s})=>{let c=B.useId(),l=typeof e==`string`?e:void 0,u=(0,V.jsxs)(V.Fragment,{children:[r?n?(0,V.jsx)(ga,{}):(0,V.jsx)(_a,{}):(0,V.jsx)(ma,{}),e]});return(0,V.jsxs)(`div`,{className:`chip`,"data-testid":s,children:[r?(0,V.jsx)(`button`,{type:`button`,"aria-expanded":!!n,"aria-controls":c,className:Ia(`chip-header`,`expanded-`+n),onClick:()=>r(!n),title:l,children:u}):(0,V.jsx)(`h2`,{className:`chip-header`,title:l,children:u}),(!r||n)&&(0,V.jsxs)(`div`,{id:c,role:`region`,className:Ia(`chip-body`,a&&`chip-body-no-insets`),children:[i,o&&o(),t&&(0,V.jsx)(`div`,{className:`chip-footer`,children:t})]})]})},G=({header:e,initialExpanded:t,noInsets:n,children:r,body:i,dataTestId:a,revealOnAnchorId:o})=>{let[s,c]=B.useState(t??!0);return ao(o,B.useCallback(()=>c(!0),[])),(0,V.jsx)(Oo,{header:e,expanded:s,setExpanded:c,noInsets:n,body:i,dataTestId:a,children:r})},ko=({title:e,loadChildren:t,onClick:n,expandByDefault:r,depth:i,style:a,flash:o})=>{let[s,c]=B.useState(r||!1);return B.useEffect(()=>{c(r||!1)},[r]),(0,V.jsxs)(`div`,{role:`treeitem`,className:Ia(`tree-item`,o&&`yellow-flash`),style:a,children:[(0,V.jsxs)(`div`,{className:`tree-item-title`,style:{paddingLeft:i*22+4},onClick:()=>{n?.(),c(!s)},children:[t&&!!s&&ga(),t&&!s&&_a(),!t&&(0,V.jsx)(`span`,{style:{visibility:`hidden`},children:_a()}),e]}),s&&t?.()]})};function Ao(e){if(e<0||!isFinite(e))return`-`;if(e===0)return`0ms`;if(e<1e3)return e.toFixed(0)+`ms`;let t=e/1e3;if(t<60)return t.toFixed(1)+`s`;let n=t/60;if(n<60)return n.toFixed(1)+`m`;let r=n/60;return r<24?r.toFixed(1)+`h`:(r/24).toFixed(1)+`d`}var jo=({cursor:e,onPaneMouseMove:t,onPaneMouseUp:n,onPaneDoubleClick:r})=>(B.useEffect(()=>{let i=document.createElement(`div`);return i.style.position=`fixed`,i.style.top=`0`,i.style.right=`0`,i.style.bottom=`0`,i.style.left=`0`,i.style.zIndex=`9999`,i.style.cursor=e,document.body.appendChild(i),t&&i.addEventListener(`mousemove`,t),n&&i.addEventListener(`mouseup`,n),r&&document.body.addEventListener(`dblclick`,r),()=>{t&&i.removeEventListener(`mousemove`,t),n&&i.removeEventListener(`mouseup`,n),r&&document.body.removeEventListener(`dblclick`,r),document.body.removeChild(i)}},[e,t,n,r]),(0,V.jsx)(V.Fragment,{})),Mo={position:`absolute`,top:0,right:0,bottom:0,left:0},No=({orientation:e,offsets:t,setOffsets:n,resizerColor:r,resizerWidth:i,minColumnWidth:a})=>{let o=a||0,[s,c]=B.useState(null),[l,u]=Na(),d={position:`absolute`,right:e===`horizontal`?void 0:0,bottom:e===`horizontal`?0:void 0,width:e===`horizontal`?7:void 0,height:e===`horizontal`?void 0:7,borderTopWidth:e===`horizontal`?void 0:(7-i)/2,borderRightWidth:e===`horizontal`?(7-i)/2:void 0,borderBottomWidth:e===`horizontal`?void 0:(7-i)/2,borderLeftWidth:e===`horizontal`?(7-i)/2:void 0,borderColor:`transparent`,borderStyle:`solid`,cursor:e===`horizontal`?`ew-resize`:`ns-resize`};return(0,V.jsxs)(`div`,{style:{position:`absolute`,top:0,right:0,bottom:0,left:-(7-i)/2,zIndex:100,pointerEvents:`none`},ref:u,children:[!!s&&(0,V.jsx)(jo,{cursor:e===`horizontal`?`ew-resize`:`ns-resize`,onPaneMouseUp:()=>c(null),onPaneMouseMove:r=>{if(!r.buttons)c(null);else if(s){let i=e===`horizontal`?r.clientX-s.clientX:r.clientY-s.clientY,a=s.offset+i,c=s.index>0?t[s.index-1]:0,u=e===`horizontal`?l.width:l.height,d=Math.min(Math.max(c+o,a),u-o)-t[s.index];for(let e=s.index;e<t.length;++e)t[e]=t[e]+d;n([...t])}}}),t.map((t,n)=>(0,V.jsx)(`div`,{style:{...d,top:e===`horizontal`?0:t,left:e===`horizontal`?t:0,pointerEvents:`initial`},onMouseDown:e=>c({clientX:e.clientX,clientY:e.clientY,offset:t,index:n}),children:(0,V.jsx)(`div`,{style:{...Mo,background:r}})},n))]})};async function Po(e){let t=new Image;return e&&(t.src=e,await new Promise((e,n)=>{t.onload=e,t.onerror=e})),t}var Fo={backgroundImage:`linear-gradient(45deg, #80808020 25%, transparent 25%),
                    linear-gradient(-45deg, #80808020 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #80808020 75%),
                    linear-gradient(-45deg, transparent 75%, #80808020 75%)`,backgroundSize:`20px 20px`,backgroundPosition:`0 0, 0 10px, 10px -10px, -10px 0px`,boxShadow:`rgb(0 0 0 / 10%) 0px 1.8px 1.9px,
              rgb(0 0 0 / 15%) 0px 6.1px 6.3px,
              rgb(0 0 0 / 10%) 0px -2px 4px,
              rgb(0 0 0 / 15%) 0px -6.1px 12px,
              rgb(0 0 0 / 25%) 0px 6px 12px`},Io=({diff:e,noTargetBlank:t,hideDetails:n})=>{let[r,i]=B.useState(e.diff?`diff`:`actual`),[a,o]=B.useState(!1),[s,c]=B.useState(null),[l,u]=B.useState(`Expected`),[d,f]=B.useState(null),[p,m]=B.useState(null),[h,g]=Na();B.useEffect(()=>{(async()=>{c(await Po(e.expected?.attachment.path)),u(e.expected?.title||`Expected`),f(await Po(e.actual?.attachment.path)),m(await Po(e.diff?.attachment.path))})()},[e]);let _=s&&d&&p,v=_?Math.max(s.naturalWidth,d.naturalWidth,200):500,y=_?Math.max(s.naturalHeight,d.naturalHeight,200):500,b=Math.min(1,(h.width-30)/v),x=Math.min(1,(h.width-50)/v/2),S=v*b,C=y*b,w=(e,t)=>(0,V.jsx)(`button`,{role:`tab`,"aria-selected":r===e,className:`image-diff-mode`,style:{fontWeight:r===e?600:`initial`},onClick:()=>i(e),children:t});return(0,V.jsx)(`div`,{"data-testid":`test-result-image-mismatch`,style:{display:`flex`,flexDirection:`column`,alignItems:`center`,flex:`auto`},ref:g,children:_&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{role:`tablist`,"data-testid":`test-result-image-mismatch-tabs`,style:{display:`flex`,margin:`10px 0 20px`},children:[e.diff&&w(`diff`,`Diff`),w(`actual`,`Actual`),w(`expected`,l),w(`sxs`,`Side by side`),w(`slider`,`Slider`)]}),(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,flex:`auto`,minHeight:C+60},children:[e.diff&&r===`diff`&&(0,V.jsx)(Ro,{image:p,alt:`Diff`,hideSize:n,canvasWidth:S,canvasHeight:C,scale:b}),e.diff&&r===`actual`&&(0,V.jsx)(Ro,{image:d,alt:`Actual`,hideSize:n,canvasWidth:S,canvasHeight:C,scale:b}),e.diff&&r===`expected`&&(0,V.jsx)(Ro,{image:s,alt:l,hideSize:n,canvasWidth:S,canvasHeight:C,scale:b}),e.diff&&r===`slider`&&(0,V.jsx)(Lo,{expectedImage:s,actualImage:d,hideSize:n,canvasWidth:S,canvasHeight:C,scale:b,expectedTitle:l}),e.diff&&r===`sxs`&&(0,V.jsxs)(`div`,{style:{display:`flex`},children:[(0,V.jsx)(Ro,{image:s,title:l,hideSize:n,canvasWidth:x*v,canvasHeight:x*y,scale:x}),(0,V.jsx)(Ro,{image:a?p:d,title:a?`Diff`:`Actual`,onClick:()=>o(!a),hideSize:n,canvasWidth:x*v,canvasHeight:x*y,scale:x})]}),!e.diff&&r===`actual`&&(0,V.jsx)(Ro,{image:d,title:`Actual`,hideSize:n,canvasWidth:S,canvasHeight:C,scale:b}),!e.diff&&r===`expected`&&(0,V.jsx)(Ro,{image:s,title:l,hideSize:n,canvasWidth:S,canvasHeight:C,scale:b}),!e.diff&&r===`sxs`&&(0,V.jsxs)(`div`,{style:{display:`flex`},children:[(0,V.jsx)(Ro,{image:s,title:l,canvasWidth:x*v,canvasHeight:x*y,scale:x}),(0,V.jsx)(Ro,{image:d,title:`Actual`,canvasWidth:x*v,canvasHeight:x*y,scale:x})]})]}),!n&&(0,V.jsxs)(`div`,{style:{alignSelf:`start`,lineHeight:`18px`,marginLeft:`15px`},children:[(0,V.jsx)(`div`,{children:e.diff&&(0,V.jsx)(`a`,{target:`_blank`,href:e.diff.attachment.path,rel:`noreferrer`,children:e.diff.attachment.name})}),(0,V.jsx)(`div`,{children:(0,V.jsx)(`a`,{target:t?``:`_blank`,href:e.actual.attachment.path,rel:`noreferrer`,children:e.actual.attachment.name})}),(0,V.jsx)(`div`,{children:(0,V.jsx)(`a`,{target:t?``:`_blank`,href:e.expected.attachment.path,rel:`noreferrer`,children:e.expected.attachment.name})})]})]})})},Lo=({expectedImage:e,actualImage:t,canvasWidth:n,canvasHeight:r,scale:i,expectedTitle:a,hideSize:o})=>{let s={position:`absolute`,top:0,left:0},[c,l]=B.useState(n/2),u=e.naturalWidth===t.naturalWidth&&e.naturalHeight===t.naturalHeight;return(0,V.jsxs)(`div`,{style:{flex:`none`,display:`flex`,alignItems:`center`,flexDirection:`column`,userSelect:`none`},children:[!o&&(0,V.jsxs)(`div`,{style:{margin:5},children:[!u&&(0,V.jsx)(`span`,{style:{flex:`none`,margin:`0 5px`},children:`Actual `}),!u&&(0,V.jsx)(`span`,{children:t.naturalWidth}),!u&&(0,V.jsx)(`span`,{style:{flex:`none`,margin:`0 5px`},children:`x`}),!u&&(0,V.jsx)(`span`,{children:t.naturalHeight}),!u&&(0,V.jsxs)(`span`,{style:{flex:`none`,margin:`0 5px 0 15px`},children:[a,` `]}),(0,V.jsx)(`span`,{children:e.naturalWidth}),(0,V.jsx)(`span`,{style:{flex:`none`,margin:`0 5px`},children:`x`}),(0,V.jsx)(`span`,{children:e.naturalHeight})]}),(0,V.jsxs)(`div`,{style:{position:`relative`,width:n,height:r,margin:15,...Fo},children:[(0,V.jsx)(No,{orientation:`horizontal`,offsets:[c],setOffsets:e=>l(e[0]),resizerColor:`#57606a80`,resizerWidth:6}),(0,V.jsx)(`img`,{alt:a,style:{width:e.naturalWidth*i,height:e.naturalHeight*i},draggable:`false`,src:e.src}),(0,V.jsx)(`div`,{style:{...s,bottom:0,overflow:`hidden`,width:c,...Fo},children:(0,V.jsx)(`img`,{alt:`Actual`,style:{width:t.naturalWidth*i,height:t.naturalHeight*i},draggable:`false`,src:t.src})})]})]})},Ro=({image:e,title:t,alt:n,hideSize:r,canvasWidth:i,canvasHeight:a,scale:o,onClick:s})=>(0,V.jsxs)(`div`,{style:{flex:`none`,display:`flex`,alignItems:`center`,flexDirection:`column`},children:[!r&&(0,V.jsxs)(`div`,{style:{margin:5},children:[t&&(0,V.jsx)(`span`,{style:{flex:`none`,margin:`0 5px`},children:t}),(0,V.jsx)(`span`,{children:e.naturalWidth}),(0,V.jsx)(`span`,{style:{flex:`none`,margin:`0 5px`},children:`x`}),(0,V.jsx)(`span`,{children:e.naturalHeight})]}),(0,V.jsx)(`div`,{style:{display:`flex`,flex:`none`,width:i,height:a,margin:15,...Fo},children:(0,V.jsx)(`img`,{width:e.naturalWidth*o,height:e.naturalHeight*o,alt:t||n,style:{cursor:s?`pointer`:`initial`},draggable:`false`,src:e.src,onClick:s})})]});function zo(e,t){let n=/(\x1b\[(\d+(;\d+)*)m)|([^\x1b]+)/g,r=[],i,a={},o=!1,s=t?.fg,c=t?.bg;for(;(i=n.exec(e))!==null;){let[,,e,,n]=i;if(e)for(let n of e.split(`;`)){let e=+n;switch(e){case 0:a={};break;case 1:a[`font-weight`]=`bold`;break;case 2:a.opacity=`0.8`;break;case 3:a[`font-style`]=`italic`;break;case 4:a[`text-decoration`]=`underline`;break;case 7:o=!0;break;case 8:a.display=`none`;break;case 9:a[`text-decoration`]=`line-through`;break;case 22:delete a[`font-weight`],delete a[`font-style`],delete a.opacity,delete a[`text-decoration`];break;case 23:delete a[`font-weight`],delete a[`font-style`],delete a.opacity;break;case 24:delete a[`text-decoration`];break;case 27:o=!1;break;case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:s=Bo[e-30];break;case 39:s=t?.fg;break;case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:c=Bo[e-40];break;case 49:c=t?.bg;break;case 53:a[`text-decoration`]=`overline`;break;case 90:case 91:case 92:case 93:case 94:case 95:case 96:case 97:s=Vo[e-90];break;case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:c=Vo[e-100];break}}else if(n){let e={...a},t=o?c:s;t!==void 0&&(e.color=t),o&&s&&(e[`background-color`]=s),r.push(`<span style="${Uo(e)}">${Ho(n)}</span>`)}}return r.join(``)}var Bo={0:`var(--vscode-terminal-ansiBlack)`,1:`var(--vscode-terminal-ansiRed)`,2:`var(--vscode-terminal-ansiGreen)`,3:`var(--vscode-terminal-ansiYellow)`,4:`var(--vscode-terminal-ansiBlue)`,5:`var(--vscode-terminal-ansiMagenta)`,6:`var(--vscode-terminal-ansiCyan)`,7:`var(--vscode-terminal-ansiWhite)`},Vo={0:`var(--vscode-terminal-ansiBrightBlack)`,1:`var(--vscode-terminal-ansiBrightRed)`,2:`var(--vscode-terminal-ansiBrightGreen)`,3:`var(--vscode-terminal-ansiBrightYellow)`,4:`var(--vscode-terminal-ansiBrightBlue)`,5:`var(--vscode-terminal-ansiBrightMagenta)`,6:`var(--vscode-terminal-ansiBrightCyan)`,7:`var(--vscode-terminal-ansiBrightWhite)`};function Ho(e){return e.replace(/[&"<>]/g,e=>({"&":`&amp;`,'"':`&quot;`,"<":`&lt;`,">":`&gt;`})[e])}function Uo(e){return Object.entries(e).map(([e,t])=>`${e}: ${t}`).join(`; `)}var Wo=({code:e,children:t,testId:n})=>(0,V.jsxs)(`div`,{className:`test-error-container test-error-text`,"data-testid":n,children:[t,(0,V.jsx)(`div`,{className:`test-error-view`,dangerouslySetInnerHTML:{__html:B.useMemo(()=>qo(e),[e])||``}})]}),Go=({prompt:e})=>{let[t,n]=B.useState(!1);return(0,V.jsx)(`button`,{className:`button`,style:{minWidth:100},onClick:async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>{n(!1)},3e3)},children:t?`Copied`:`Copy prompt`})},Ko=({diff:e})=>(0,V.jsx)(`div`,{"data-testid":`test-screenshot-error-view`,className:`test-error-view`,children:(0,V.jsx)(Io,{diff:e,hideDetails:!0},`image-diff`)});function qo(e){return zo(e||``,{bg:`var(--color-canvas-subtle)`,fg:`var(--color-fg-default)`})}var Jo=({file:e,projectNames:t,isFileExpanded:n,setFileExpanded:r,footer:i})=>(0,V.jsx)(Oo,{expanded:n?n(e.fileId):void 0,noInsets:!0,setExpanded:r?(t=>r(e.fileId,t)):void 0,header:(0,V.jsx)(`span`,{className:`chip-header-allow-selection`,children:e.fileName}),footer:i,children:(0,V.jsx)(Yo,{tests:e.tests,projectNames:t})}),Yo=({tests:e,projectNames:t,runs:n,selectedTestId:r})=>{let i=H();return(0,V.jsx)(`div`,{role:`list`,children:e.map((e,a)=>{let o=n?.[a],s=co({test:e,result:o===void 0?void 0:e.results[o]},i),c=r===e.testId;return(0,V.jsxs)(`div`,{className:Ia(`test-file-test`,`test-file-test-outcome-`+e.outcome,c&&`test-file-test-selected`),role:`listitem`,"aria-current":c,children:[(0,V.jsxs)(`div`,{className:`hbox`,style:{alignItems:`flex-start`},children:[(0,V.jsxs)(`div`,{className:`hbox`,children:[(0,V.jsx)(`span`,{className:`test-file-test-status-icon`,children:lo(e.outcome)}),(0,V.jsxs)(`span`,{children:[(0,V.jsx)(Ya,{href:s,title:[...e.path,e.title].join(` › `),children:(0,V.jsx)(`span`,{className:`test-file-title`,children:[...e.path,e.title].join(` › `)})}),(0,V.jsx)(Ga,{style:{marginLeft:`6px`},projectNames:t,activeProjectName:e.projectName,otherLabels:e.tags})]})]}),(0,V.jsx)(`span`,{"data-testid":`test-duration`,style:{minWidth:`50px`,textAlign:`right`},children:Ao(e.duration)})]}),(0,V.jsx)(`div`,{className:`test-file-details-row`,children:(0,V.jsxs)(`div`,{className:`test-file-details-row-items`,children:[(0,V.jsx)(Ya,{href:s,title:[...e.path,e.title].join(` › `),className:`test-file-path-link`,children:(0,V.jsxs)(`span`,{className:`test-file-path`,children:[e.location.file,`:`,e.location.line]})}),(0,V.jsx)(Xo,{test:e}),(0,V.jsx)(Zo,{test:e}),(0,V.jsx)($a,{test:e,dim:!0})]})})]},`test-${e.testId}`)})})};function Xo({test:e}){let t=H();for(let n of e.results)for(let r of n.attachments)if(r.contentType.startsWith(`image/`)&&r.name.match(/-(expected|actual|diff)/))return(0,V.jsx)(Xa,{href:co({test:e,result:n,anchor:`attachment-${n.attachments.indexOf(r)}`},t),title:`View images`,dim:!0,children:Ta()})}function Zo({test:e}){let t=H(),n=e.results.find(e=>e.attachments.some(e=>e.name===`video`));return n?(0,V.jsx)(Xa,{href:co({test:e,result:n,anchor:`attachment-video`},t),title:`View video`,dim:!0,children:Ea()}):void 0}var Qo=RegExp(`([\\u001B\\u009B][[\\]()#?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)|(?:(?:\\d{0,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~])))`,`g`);function $o(e){return e.replace(Qo,``)}function es(e,t){let n=new Map;for(let r of e){let e=r.name.match(/^(.*)-(expected|actual|diff|previous)(\.[^.]+)?$/);if(!e)continue;let[,i,a,o=``]=e,s=i+o,c=n.get(s);c||(c={name:s,anchors:[`attachment-${i}`]},n.set(s,c)),c.anchors.push(`attachment-${t.attachments.indexOf(r)}`),a===`actual`&&(c.actual={attachment:r}),a===`expected`&&(c.expected={attachment:r,title:`Expected`}),a===`previous`&&(c.expected={attachment:r,title:`Previous`}),a===`diff`&&(c.diff={attachment:r})}for(let[t,r]of n)!r.actual||!r.expected?n.delete(t):(e.delete(r.actual.attachment),e.delete(r.expected.attachment),e.delete(r.diff?.attachment));return[...n.values()]}var ts=({report:e,test:t,result:n})=>{let{screenshots:r,videos:i,traces:a,otherAttachments:o,diffs:s,errors:c,otherAttachmentAnchors:l,screenshotAnchors:u,errorContext:d}=B.useMemo(()=>{let e=n.attachments.filter(e=>!e.name.startsWith(`_`)),t=new Set(e.filter(e=>e.contentType.startsWith(`image/`))),r=[...t].map(t=>`attachment-${e.indexOf(t)}`),i=e.filter(e=>e.contentType.startsWith(`video/`)),a=e.filter(e=>e.name===`trace`),o=e.find(e=>e.name===`error-context`),s=new Set(e);[...t,...i,...a].forEach(e=>s.delete(e));let c=[...s].map(t=>`attachment-${e.indexOf(t)}`),l=es(t,n),u=n.errors.map(e=>e.message);return{screenshots:[...t],videos:i,traces:a,otherAttachments:s,diffs:l,errors:u,otherAttachmentAnchors:c,screenshotAnchors:r,errorContext:o}},[n]),[f,p]=B.useState(``);B.useEffect(()=>p(``),[n]);let m=B.useMemo(()=>{let e=1/0,t=-1/0,r=n=>{let i=new Date(n.startTime).valueOf();e=Math.min(e,i),t=Math.max(t,i+Math.max(0,n.duration)),n.steps.forEach(r)};return n.steps.forEach(r),{startTime:e,duration:Math.max(1,t-e)}},[n]),h=Ma(async()=>{if(e.json().options?.noCopyPrompt||!d)return;let t=d.path?await fetch(d.path).then(e=>e.text()):d.body;if(!t)return;let r=n.attachments.find(e=>e.name===`stdout`),i=n.attachments.find(e=>e.name===`stderr`),a=r?.body&&r.contentType===`text/plain`?r.body:void 0,o=i?.body&&i.contentType===`text/plain`?i.body:void 0;a&&(t+=`

# Stdout

\`\`\`
`+$o(a)+"\n```"),o&&(t+=`

# Stderr

\`\`\`
`+$o(o)+"\n```");let s=e.json().metadata;return s?.gitDiff&&(t+=`

# Local changes

\`\`\`diff
`+s.gitDiff+"\n```"),t},[d,e,n],void 0);return(0,V.jsxs)(`div`,{className:`test-result`,children:[!!c.length&&(0,V.jsxs)(G,{header:`Errors`,children:[h&&(0,V.jsx)(`div`,{style:{position:`absolute`,right:`16px`,padding:`10px`,zIndex:1},children:(0,V.jsx)(Go,{prompt:h})}),c.map((e,t)=>{let n=ns(e,s);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Wo,{code:e},`test-result-error-message-`+t),n&&(0,V.jsx)(Ko,{diff:n})]})})]}),!!n.steps.length&&(0,V.jsxs)(G,{header:`Test Steps`,children:[(0,V.jsxs)(`form`,{className:`subnav-search step-filter`,onSubmit:e=>e.preventDefault(),children:[ha(),(0,V.jsx)(`input`,{className:`form-control subnav-search-input input-contrast width-full`,type:`search`,spellCheck:!1,placeholder:`Filter steps`,"aria-label":`Filter steps`,value:f,onChange:e=>p(e.target.value)})]}),n.steps.map((e,r)=>(0,V.jsx)(cs,{step:e,result:n,test:t,depth:0,filterText:f,waterfall:m},`step-${r}`))]}),s.map((e,t)=>(0,V.jsx)(so,{id:e.anchors,children:(0,V.jsx)(G,{dataTestId:`test-results-image-diff`,header:`Image mismatch: ${e.name}`,revealOnAnchorId:e.anchors,children:(0,V.jsx)(Io,{diff:e})})},`diff-${t}`)),!!r.length&&(0,V.jsx)(G,{header:`Screenshots`,revealOnAnchorId:u,children:r.map((e,t)=>(0,V.jsxs)(so,{id:`attachment-${n.attachments.indexOf(e)}`,children:[(0,V.jsx)(`a`,{href:Ua(e.path),children:(0,V.jsx)(`img`,{className:`screenshot`,src:Ua(e.path)})}),(0,V.jsx)(Qa,{attachment:e,result:n})]},`screenshot-${t}`))}),!!a.length&&(0,V.jsx)(so,{id:`attachment-trace`,children:(0,V.jsx)(G,{header:`Traces`,revealOnAnchorId:`attachment-trace`,children:a.map((e,t)=>(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`a`,{href:Ua(ro([e])),children:(0,V.jsx)(`img`,{className:`screenshot`,src:`data:image/png;base64,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`,style:{width:192,height:117,marginLeft:20}})}),(0,V.jsx)(Qa,{attachment:e,result:n,linkName:a.length===1?`trace`:`trace-${t+1}`})]},`trace-${t}`))})}),!!i.length&&(0,V.jsx)(so,{id:`attachment-video`,children:(0,V.jsx)(G,{header:`Videos`,revealOnAnchorId:`attachment-video`,children:i.map(e=>(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`video`,{controls:!0,children:(0,V.jsx)(`source`,{src:Ua(e.path),type:e.contentType})}),(0,V.jsx)(Qa,{attachment:e,result:n})]},e.path))})}),!!o.size&&(0,V.jsx)(G,{header:`Attachments`,revealOnAnchorId:l,dataTestId:`attachments`,children:[...o].map((e,t)=>(0,V.jsx)(so,{id:`attachment-${n.attachments.indexOf(e)}`,children:(0,V.jsx)(Qa,{attachment:e,result:n,openInNewTab:e.contentType.startsWith(`text/html`)})},`attachment-link-${t}`))}),(0,V.jsx)(G,{header:`Executed in Worker #${n.workerIndex}`,dataTestId:`worker-test-list`,initialExpanded:!1,noInsets:!0,body:()=>{let r=us(e).get(n.workerIndex)||{tests:[],runs:[]};return(0,V.jsx)(Yo,{tests:r.tests,runs:r.runs,projectNames:e.json().projectNames,selectedTestId:t.testId})}})]})};function ns(e,t){let n=e.split(`
`)[0];if(!(!n.includes(`toHaveScreenshot`)&&!n.includes(`toMatchSnapshot`)))return t.find(t=>e.includes(t.name))}function rs(e,t){return(e.subtitle?`${e.title} ${e.subtitle}`:e.title).toLowerCase().includes(t.toLowerCase())}function is(e,t){return e.steps.some(e=>rs(e,t)||is(e,t))}function as(e,t){let n=e.toLowerCase().split(t.toLowerCase()),r=[],i=0;for(let a=0;a<n.length;a++)a&&(r.push((0,V.jsx)(`span`,{className:`step-title-highlight`,children:e.substring(i,i+t.length)},`highlight-${a}`)),i+=t.length),r.push(e.substring(i,i+n[a].length)),i+=n[a].length;return r}function os(e){return e.steps.some(e=>e.attachments.length>0||os(e))}function ss(e,t){let n=new Date(e.startTime).valueOf()-t.startTime,r=Math.min(100,Math.max(0,n/t.duration*100)),i=Math.min(100-r,Math.max(0,e.duration)/t.duration*100);return{left:`${r}%`,width:`${i}%`}}var cs=({test:e,step:t,result:n,depth:r,filterText:i,waterfall:a})=>{let o=H(),s=!1,c=(0,V.jsx)(`span`,{children:t.title}),l=t.subtitle;if(i){let e=!!i&&rs(t,i),n=!!i&&is(t,i);if(!e&&!n)return null;s=n,e&&(c=as(t.title,i),t.subtitle&&(l=as(t.subtitle,i)))}return(0,V.jsx)(ko,{title:(0,V.jsxs)(`div`,{"aria-label":t.subtitle?`${t.title} ${t.subtitle}`:t.title,className:`step-title-container`,children:[lo(t.error||t.duration===-1?`failed`:t.skipped?`skipped`:`passed`),(0,V.jsxs)(`span`,{className:`step-title-text`,children:[c,t.subtitle&&(0,V.jsxs)(`span`,{className:`step-subtitle`,children:[` `,l]}),t.count>1&&(0,V.jsxs)(V.Fragment,{children:[` ✕ `,(0,V.jsx)(`span`,{className:`test-result-counter`,children:t.count})]}),t.location&&(0,V.jsxs)(`span`,{className:`test-result-path`,children:[`— `,t.location.file,`:`,t.location.line]})]}),(0,V.jsx)(`span`,{className:`step-spacer`}),t.attachments.length>0&&(0,V.jsx)(`a`,{className:`step-attachment-link`,title:`reveal attachment`,href:Ua(co({test:e,result:n,anchor:`attachment-${t.attachments[0]}`},o)),onClick:e=>{e.stopPropagation()},children:ya()}),t.attachments.length===0&&os(t)&&(0,V.jsx)(`span`,{className:`step-indirect-attachment-indicator`,title:`contains attachment`,"aria-label":`contains attachment`,children:ba()}),(0,V.jsx)(`span`,{className:`step-waterfall`,children:(0,V.jsx)(`span`,{className:`step-waterfall-block`,style:ss(t,a)})}),(0,V.jsx)(`span`,{className:`step-duration`,children:Ao(t.duration)})]}),loadChildren:t.steps.length||t.snippet?()=>{let o=t.snippet?[(0,V.jsx)(Wo,{testId:`test-snippet`,code:t.snippet},`line`)]:[],s=t.steps.map((t,o)=>(0,V.jsx)(cs,{step:t,depth:r+1,result:n,test:e,filterText:i,waterfall:a},o));return o.concat(s)}:void 0,depth:r,expandByDefault:s})},ls=Symbol(`workerLists`);function us(e){let t=e[ls];if(!t){let n=new Map;for(let t of e.json().files)for(let e of t.tests)for(let t=0;t<e.results.length;t++){let r=n.get(e.results[t].workerIndex);r||(r=[],n.set(e.results[t].workerIndex,r)),r.push({test:e,time:new Date(e.results[t].startTime).valueOf(),run:t})}t=new Map;for(let[e,r]of n)r.sort((e,t)=>e.time-t.time),t.set(e,{tests:r.map(e=>e.test),runs:r.map(e=>e.run)});e[ls]=t}return t}var ds=({report:e,test:t,run:n,next:r,prev:i})=>{let[a,o]=B.useState(n),s=H(),c=t.annotations.filter(e=>!e.type.startsWith(`_`))??[];return ps(c,t.repeatEachIndex),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(xo,{title:t.title,leftSuperHeader:(0,V.jsx)(`div`,{className:`test-case-path`,children:t.path.join(` › `)}),rightSuperHeader:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:Ia(!i&&`hidden`),children:(0,V.jsx)(Ya,{href:co({test:i},s),children:`« previous`})}),(0,V.jsx)(`div`,{style:{width:10}}),(0,V.jsx)(`div`,{className:Ia(!r&&`hidden`),children:(0,V.jsx)(Ya,{href:co({test:r},s),children:`next »`})})]})}),(0,V.jsxs)(`div`,{className:`hbox`,style:{lineHeight:`24px`},children:[(0,V.jsx)(`div`,{className:`test-case-location`,children:(0,V.jsxs)(ja,{value:`${t.location.file}:${t.location.line}`,children:[t.location.file,`:`,t.location.line]})}),(0,V.jsx)(`div`,{style:{flex:`auto`}}),(0,V.jsx)($a,{test:t,run:a,trailingSeparator:!0}),(0,V.jsx)(`div`,{className:`test-case-duration`,children:Ao(t.duration)})]}),(0,V.jsx)(Ga,{style:{marginLeft:`6px`},projectNames:e.json().projectNames,activeProjectName:t.projectName,otherLabels:t.tags}),t.results.length===0&&c.length!==0&&(0,V.jsx)(G,{header:`Annotations`,dataTestId:`test-case-annotations`,children:c.map((e,t)=>(0,V.jsx)(fs,{annotation:e},t))}),(0,V.jsx)(Do,{tabs:t.results.map((n,r)=>({id:String(r),title:(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[lo(n.status),` `,ms(r),t.results.length>1&&(0,V.jsx)(`span`,{className:`test-case-run-duration`,children:Ao(n.duration)})]}),render:()=>{let r=n.annotations.filter(e=>!e.type.startsWith(`_`));return ps(r,t.repeatEachIndex),(0,V.jsxs)(V.Fragment,{children:[!!r.length&&(0,V.jsx)(G,{header:`Annotations`,dataTestId:`test-case-annotations`,children:r.map((e,t)=>(0,V.jsx)(fs,{annotation:e},t))}),(0,V.jsx)(ts,{test:t,result:n,report:e})]})}}))||[],selectedTab:String(a),setSelectedTab:e=>o(+e)})]})};function fs({annotation:{type:e,description:t}}){return(0,V.jsxs)(`div`,{className:`test-case-annotation`,children:[(0,V.jsx)(`span`,{style:{fontWeight:`bold`},children:e}),t&&(0,V.jsxs)(ja,{value:t,children:[`: `,za(t)]})]})}function ps(e,t){t&&e.push({type:`repeatEachIndex`,description:String(t)})}function ms(e){return e?`Retry #${e}`:`Run`}var hs=class extends B.Component{constructor(...e){super(...e),this.state={error:null,errorInfo:null}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t})}render(){return this.state.error||this.state.errorInfo?(0,V.jsxs)(`div`,{className:`metadata-view p-3`,children:[(0,V.jsx)(`p`,{children:`An error was encountered when trying to render metadata.`}),(0,V.jsx)(`p`,{children:(0,V.jsxs)(`pre`,{style:{overflow:`scroll`},children:[this.state.error?.message,(0,V.jsx)(`br`,{}),this.state.error?.stack,(0,V.jsx)(`br`,{}),this.state.errorInfo?.componentStack]})})]}):this.props.children}},gs=e=>(0,V.jsx)(hs,{children:(0,V.jsx)(_s,{metadata:e.metadata})}),_s=e=>{let t=e.metadata,n=H().has(`show-metadata-other`)?Object.entries(e.metadata).filter(([e])=>!bs.has(e)):[];if(t.ci||t.gitCommit||n.length>0)return(0,V.jsxs)(`div`,{className:`metadata-view`,children:[t.ci&&!t.gitCommit&&(0,V.jsx)(vs,{info:t.ci}),t.gitCommit&&(0,V.jsx)(ys,{ci:t.ci,commit:t.gitCommit}),n.length>0&&(0,V.jsxs)(V.Fragment,{children:[(t.gitCommit||t.ci)&&(0,V.jsx)(`div`,{className:`metadata-separator`}),(0,V.jsx)(`div`,{className:`metadata-section metadata-properties`,role:`list`,children:n.map(([e,t])=>{let n=typeof t!=`object`||!t||t===void 0?String(t):JSON.stringify(t),r=n.length>1e3?n.slice(0,1e3)+`…`:n;return(0,V.jsx)(`div`,{className:`copyable-property`,role:`listitem`,children:(0,V.jsxs)(ja,{value:n,children:[(0,V.jsx)(`span`,{style:{fontWeight:`bold`},title:e,children:e}),`: `,(0,V.jsx)(`span`,{title:r,children:za(r)})]})},e)})})]})]})},vs=({info:e})=>{let t=e.prTitle||`Commit ${e.commitHash}`;return(0,V.jsx)(`div`,{className:`metadata-section`,role:`list`,children:(0,V.jsx)(`div`,{role:`listitem`,children:(0,V.jsx)(`a`,{href:Ua(e.prHref||e.commitHref),target:`_blank`,rel:`noopener noreferrer`,title:t,children:t})})})},ys=({ci:e,commit:t})=>{let n=e?.prTitle||t.subject,r=e?.prHref||e?.commitHref,i=` <${t.author.email}>`,a=`${t.author.name}${i}`,o=Intl.DateTimeFormat(void 0,{dateStyle:`medium`}).format(t.committer.time),s=Intl.DateTimeFormat(void 0,{dateStyle:`full`,timeStyle:`long`}).format(t.committer.time);return(0,V.jsxs)(`div`,{className:`metadata-section`,role:`list`,children:[(0,V.jsxs)(`div`,{role:`listitem`,children:[r&&(0,V.jsx)(`a`,{href:Ua(r),target:`_blank`,rel:`noopener noreferrer`,title:n,children:n}),!r&&(0,V.jsx)(`span`,{title:n,children:n})]}),(0,V.jsxs)(`div`,{role:`listitem`,className:`hbox`,children:[(0,V.jsx)(`span`,{className:`mr-1`,children:a}),(0,V.jsxs)(`span`,{title:s,children:[` on `,o]})]})]})},bs=new Set([`ci`,`gitCommit`,`gitDiff`,`actualWorkers`]),xs=e=>{let t=Object.entries(e).filter(([e])=>!bs.has(e));return!e.ci&&!e.gitCommit&&!t.length},Ss=({files:e,expandedFiles:t,setExpandedFiles:n,projectNames:r})=>{let i=B.useMemo(()=>{let t=[],n=0;for(let r of e)n+=r.tests.length,t.push({file:r,defaultExpanded:n<200});return t},[e]);return(0,V.jsx)(V.Fragment,{children:i.length>0?i.map(({file:e,defaultExpanded:i})=>(0,V.jsx)(Jo,{file:e,projectNames:r,isFileExpanded:e=>{let n=t.get(e);return n===void 0?i:!!n},setFileExpanded:(e,r)=>{let i=new Map(t);i.set(e,r),n(i)}},`file-${e.fileId}`)):(0,V.jsx)(`div`,{className:`chip-header test-file-no-files`,children:`No tests found`})})},Cs=({report:e,filteredStats:t,metadataVisible:n,toggleMetadataVisible:r,errorsVisible:i,setErrorsVisible:a})=>{if(!e)return null;let o=e.projectNames.length===1&&!!e.projectNames[0],s=!o&&!t,c=!xs(e.metadata)&&(0,V.jsxs)(`button`,{type:`button`,className:Ia(`metadata-toggle`,!s&&`metadata-toggle-second-line`),"aria-expanded":n,onClick:r,title:n?`Hide metadata`:`Show metadata`,children:[n?ga():_a(),`Metadata`]}),l=(0,V.jsxs)(`div`,{className:`test-file-header-info`,children:[o&&(0,V.jsxs)(`div`,{"data-testid":`project-name`,children:[`Project: `,e.projectNames[0]]}),t&&(0,V.jsxs)(`div`,{"data-testid":`filtered-tests-count`,children:[`Filtered: `,t.total,` `,!!t.total&&`(`+Ao(t.duration)+`)`]}),s&&c]}),u=(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{"data-testid":`overall-time`,style:{marginRight:`10px`},children:e?new Date(e.startTime).toLocaleString():``}),(0,V.jsxs)(`div`,{"data-testid":`overall-duration`,children:[`Total time: `,Ao(e.duration??0)]})]});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(xo,{title:e.options.title,leftSuperHeader:l,rightSuperHeader:u}),!s&&c,n&&(0,V.jsx)(gs,{metadata:e.metadata}),!!e.errors.length&&(0,V.jsx)(Oo,{header:`Errors`,dataTestId:`report-errors`,expanded:i,setExpanded:a,children:e.errors.map((e,t)=>(0,V.jsx)(Wo,{code:e},`test-report-error-message-`+t))})]})},ws=e=>{let t=Math.round(e/1e3),n=Math.floor(t/60),r=t%60;return n===0?`${r}s`:`${n}m ${r}s`},Ts=({entries:e})=>{let t=Math.max(...e.map(e=>e.label.length))*10,n={top:20,right:20,bottom:40,left:Math.min(800*.5,Math.max(50,t))},r=800-n.left-n.right,i=Math.min(...e.map(e=>e.startTime)),a=Math.max(...e.map(e=>e.startTime+e.duration)),o,s,c=a-i;c<60*1e3?(o=10*1e3,s=!0):c<300*1e3?(o=30*1e3,s=!0):c<1800*1e3?(o=300*1e3,s=!1):(o=600*1e3,s=!1);let l=Math.ceil(i/o)*o,u=(e,t)=>{let n=new Date(e).toLocaleTimeString(void 0,{hour:`2-digit`,minute:`2-digit`,second:s?`2-digit`:void 0});if(t)return n;if(n.endsWith(` AM`)||n.endsWith(` PM`))return n.slice(0,-3)},d=(a-i)*1.1,f=Math.ceil(d/o)*o,p=r/f,m=e.length*28,h=[];for(let e=l;e<=i+f;e+=o){let t=e-i;h.push({x:t*p,label:u(e,e===l)})}return(0,V.jsx)(`svg`,{viewBox:`0 0 800 ${m+n.top+n.bottom}`,preserveAspectRatio:`xMidYMid meet`,style:{width:`100%`,height:`auto`},role:`img`,children:(0,V.jsxs)(`g`,{transform:`translate(${n.left}, ${n.top})`,role:`presentation`,children:[h.map(({x:e,label:t},n)=>(0,V.jsxs)(`g`,{"aria-hidden":`true`,children:[(0,V.jsx)(`line`,{x1:e,y1:0,x2:e,y2:m,stroke:`var(--color-border-muted)`,strokeWidth:`1`}),(0,V.jsx)(`text`,{x:e,y:m+20,textAnchor:`middle`,dominantBaseline:`middle`,fontSize:`12`,fill:`var(--color-fg-muted)`,children:t})]},n)),e.map((e,t)=>{let n=e.startTime-i,r=e.duration*p,a=n*p,o=t*28,s=[`var(--color-scale-blue-2)`,`var(--color-scale-blue-3)`,`var(--color-scale-blue-4)`],c=s[t%s.length];return(0,V.jsxs)(`g`,{role:`listitem`,"aria-label":e.tooltip,children:[(0,V.jsx)(`rect`,{className:`gantt-bar`,x:a,y:o,width:r,height:20,fill:c,rx:`2`,children:(0,V.jsx)(`title`,{children:e.tooltip})}),(0,V.jsx)(`text`,{x:a+r+6,y:o+20/2,dominantBaseline:`middle`,fontSize:`12`,fill:`var(--color-fg-muted)`,"aria-hidden":`true`,children:ws(e.duration)}),(0,V.jsx)(`text`,{x:-10,y:o+20/2,textAnchor:`end`,dominantBaseline:`middle`,fontSize:`12`,fill:`var(--color-fg-muted)`,"aria-hidden":`true`,children:e.label})]},t)}),(0,V.jsx)(`line`,{x1:0,y1:0,x2:0,y2:m,stroke:`var(--color-fg-muted)`,strokeWidth:`1`,"aria-hidden":`true`}),(0,V.jsx)(`line`,{x1:0,y1:m,x2:r,y2:m,stroke:`var(--color-fg-muted)`,strokeWidth:`1`,"aria-hidden":`true`})]})})};function Es({report:e,tests:t}){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Os,{report:e}),(0,V.jsx)(Ds,{report:e,tests:t})]})}function Ds({report:e,tests:t}){let[n,r]=B.useState(50);return(0,V.jsx)(Jo,{file:{fileId:`slowest`,fileName:`Slowest Tests`,tests:t.slice(0,n),stats:null},projectNames:e.json().projectNames,footer:n<t.length?(0,V.jsxs)(`button`,{className:`link-badge fullwidth-link`,style:{padding:`8px 5px`},onClick:()=>r(e=>e+50),children:[ga(),`Show 50 more`]}):void 0})}function Os({report:e}){let t=e.json().machines;return t.length===0?null:(0,V.jsx)(G,{header:`Timeline`,children:(0,V.jsx)(Ts,{entries:t.map(e=>{let t=e.tag.join(` `),n=`${t} started at ${new Date(e.startTime).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`,second:`2-digit`,timeZoneName:`short`})}, runs ${ws(e.duration)}`;return e.shardIndex&&(n+=` (shard ${e.shardIndex})`),{label:t,tooltip:n,startTime:e.startTime,duration:e.duration,shardIndex:e.shardIndex??1}}).sort((e,t)=>e.label.localeCompare(t.label)||e.shardIndex-t.shardIndex)})})}var ks=e=>!e.has(`testId`)&&!e.has(`speedboard`),As=e=>e.has(`testId`),js=e=>e.has(`speedboard`)&&!e.has(`testId`),Ms=({report:e})=>{let t=H(),[n,r]=B.useState(new Map),[i,a]=B.useState(t.get(`q`)||``),[o,s]=B.useState(!1),[c,l]=B.useState(!0),u=t.has(`speedboard`),d=!!e?.json()?.options.mergeFiles,f=t.get(`testId`),p=t.get(`q`)?.toString()||``,m=p?`&q=`+p:``,h=e?.json()?.options.title,g=B.useMemo(()=>{let t=new Map;for(let n of e?.json().files||[])for(let e of n.tests)t.set(e.testId,n.fileId);return t},[e]),_=B.useMemo(()=>sa.parse(i),[i]),v=B.useMemo(()=>_.empty()?void 0:Ps(e?.json().files||[],_),[e,_]),y=B.useMemo(()=>u?Ls(e,_):d?Is(e,_):Fs(e,_),[e,_,d,u]),{prev:b,next:x}=B.useMemo(()=>{let e=y.tests.findIndex(e=>e.testId===f);return{prev:e>0?y.tests[e-1]:void 0,next:e<y.tests.length-1?y.tests[e+1]:void 0}},[f,y]);return B.useEffect(()=>{let e=e=>{if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.shiftKey||e.ctrlKey||e.metaKey||e.altKey)return;let n=new URLSearchParams(t);switch(e.key){case`a`:e.preventDefault(),qa(`#?`);break;case`p`:e.preventDefault(),n.delete(`testId`),n.delete(`speedboard`),qa(da(n,`s:passed`,!1));break;case`f`:e.preventDefault(),n.delete(`testId`),n.delete(`speedboard`),qa(da(n,`s:failed`,!1));break;case`ArrowLeft`:b&&(e.preventDefault(),n.delete(`testId`),qa(co({test:b},n)+m));break;case`ArrowRight`:x&&(e.preventDefault(),n.delete(`testId`),qa(co({test:x},n)+m));break}};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[b,x,m,p,t]),B.useEffect(()=>{h?document.title=h:document.title=`Playwright Test Report`},[h]),(0,V.jsx)(`div`,{className:`htmlreport vbox px-4 pb-4`,children:(0,V.jsxs)(`main`,{children:[e&&(0,V.jsx)(So,{stats:e.json().stats,filterText:i,setFilterText:a}),(0,V.jsxs)(Ja,{predicate:ks,children:[(0,V.jsx)(Cs,{report:e?.json(),filteredStats:v,metadataVisible:o,toggleMetadataVisible:()=>s(e=>!e),errorsVisible:c,setErrorsVisible:l}),(0,V.jsx)(Ss,{files:y.files,expandedFiles:n,setExpandedFiles:r,projectNames:e?.json().projectNames||[]})]}),(0,V.jsxs)(Ja,{predicate:js,children:[(0,V.jsx)(Cs,{report:e?.json(),filteredStats:v,metadataVisible:o,toggleMetadataVisible:()=>s(e=>!e),errorsVisible:c,setErrorsVisible:l}),e&&(0,V.jsx)(Es,{report:e,tests:y.tests})]}),(0,V.jsx)(Ja,{predicate:As,children:e&&(0,V.jsx)(Ns,{report:e,next:x,prev:b,testId:f,testIdToFileIdMap:g})})]})})},Ns=({report:e,testIdToFileIdMap:t,next:n,prev:r,testId:i})=>{let[a,o]=B.useState(`loading`),s=+(H().get(`run`)||`0`);return B.useEffect(()=>{(async()=>{if(!i||typeof a==`object`&&i===a.testId)return;let n=t.get(i);if(!n){o(`not-found`);return}o((await e.entry(`${n}.json`))?.tests.find(e=>e.testId===i)||`not-found`)})()},[a,e,i,t]),a===`loading`?(0,V.jsx)(`div`,{className:`test-case-column`}):a===`not-found`?(0,V.jsxs)(`div`,{className:`test-case-column`,children:[(0,V.jsx)(xo,{title:`Test not found`}),(0,V.jsxs)(`div`,{className:`test-case-location`,children:[`Test ID: `,i]})]}):(0,V.jsx)(`div`,{className:`test-case-column`,children:(0,V.jsx)(ds,{report:e,next:n,prev:r,test:a,run:s})})};function Ps(e,t){let n={total:0,duration:0};for(let r of e){let e=r.tests.filter(e=>t.matches(e));n.total+=e.length;for(let t of e)n.duration+=t.duration}return n}function Fs(e,t){let n={files:[],tests:[]};for(let r of e?.json().files||[]){let e=r.tests.filter(e=>t.matches(e));e.length&&n.files.push({...r,tests:e}),n.tests.push(...e)}return n}function Is(e,t){let n=[],r=new Map;for(let i of e?.json().files||[]){let e=i.tests.filter(e=>t.matches(e));for(let t of e){let e=t.path[0]??`<anonymous>`,i=r.get(e);i||(i={fileId:e,fileName:e,tests:[],stats:{total:0,expected:0,unexpected:0,flaky:0,skipped:0,ok:!0}},r.set(e,i),n.push(i));let a={...t,path:t.path.slice(1)};i.tests.push(a)}}n.sort((e,t)=>e.fileName.localeCompare(t.fileName));let i={files:n,tests:[]};for(let e of n)i.tests.push(...e.tests);return i}function Ls(e,t){let n=(e?.json().files||[]).flatMap(e=>e.tests).filter(e=>t.matches(e));return n.sort((e,t)=>t.duration-e.duration),{files:[],tests:n}}var Rs=`data:image/svg+xml,%3csvg%20width='400'%20height='400'%20viewBox='0%200%20400%20400'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M136.444%20221.556C123.558%20225.213%20115.104%20231.625%20109.535%20238.032C114.869%20233.364%20122.014%20229.08%20131.652%20226.348C141.51%20223.554%20149.92%20223.574%20156.869%20224.915V219.481C150.941%20218.939%20144.145%20219.371%20136.444%20221.556ZM108.946%20175.876L61.0895%20188.484C61.0895%20188.484%2061.9617%20189.716%2063.5767%20191.36L104.153%20180.668C104.153%20180.668%20103.578%20188.077%2098.5847%20194.705C108.03%20187.559%20108.946%20175.876%20108.946%20175.876ZM149.005%20288.347C81.6582%20306.486%2046.0272%20228.438%2035.2396%20187.928C30.2556%20169.229%2028.0799%20155.067%2027.5%20145.928C27.4377%20144.979%2027.4665%20144.179%2027.5336%20143.446C24.04%20143.657%2022.3674%20145.473%2022.7077%20150.721C23.2876%20159.855%2025.4633%20174.016%2030.4473%20192.721C41.2301%20233.225%2076.8659%20311.273%20144.213%20293.134C158.872%20289.185%20169.885%20281.992%20178.152%20272.81C170.532%20279.692%20160.995%20285.112%20149.005%20288.347ZM161.661%20128.11V132.903H188.077C187.535%20131.206%20186.989%20129.677%20186.447%20128.11H161.661Z'%20fill='%232D4552'/%3e%3cpath%20d='M193.981%20167.584C205.861%20170.958%20212.144%20179.287%20215.465%20186.658L228.711%20190.42C228.711%20190.42%20226.904%20164.623%20203.57%20157.995C181.741%20151.793%20168.308%20170.124%20166.674%20172.496C173.024%20167.972%20182.297%20164.268%20193.981%20167.584ZM299.422%20186.777C277.573%20180.547%20264.145%20198.916%20262.535%20201.255C268.89%20196.736%20278.158%20193.031%20289.837%20196.362C301.698%20199.741%20307.976%20208.06%20311.307%20215.436L324.572%20219.212C324.572%20219.212%20322.736%20193.41%20299.422%20186.777ZM286.262%20254.795L176.072%20223.99C176.072%20223.99%20177.265%20230.038%20181.842%20237.869L274.617%20263.805C282.255%20259.386%20286.262%20254.795%20286.262%20254.795ZM209.867%20321.102C122.618%20297.71%20133.166%20186.543%20147.284%20133.865C153.097%20112.156%20159.073%2096.0203%20164.029%2085.204C161.072%2084.5953%20158.623%2086.1529%20156.203%2091.0746C150.941%20101.747%20144.212%20119.124%20137.7%20143.45C123.586%20196.127%20113.038%20307.29%20200.283%20330.682C241.406%20341.699%20273.442%20324.955%20297.323%20298.659C274.655%20319.19%20245.714%20330.701%20209.867%20321.102Z'%20fill='%232D4552'/%3e%3cpath%20d='M161.661%20262.296V239.863L99.3324%20257.537C99.3324%20257.537%20103.938%20230.777%20136.444%20221.556C146.302%20218.762%20154.713%20218.781%20161.661%20220.123V128.11H192.869C189.471%20117.61%20186.184%20109.526%20183.423%20103.909C178.856%2094.612%20174.174%20100.775%20163.545%20109.665C156.059%20115.919%20137.139%20129.261%20108.668%20136.933C80.1966%20144.61%2057.179%20142.574%2047.5752%20140.911C33.9601%20138.562%2026.8387%20135.572%2027.5049%20145.928C28.0847%20155.062%2030.2605%20169.224%2035.2445%20187.928C46.0272%20228.433%2081.663%20306.481%20149.01%20288.342C166.602%20283.602%20179.019%20274.233%20187.626%20262.291H161.661V262.296ZM61.0848%20188.484L108.946%20175.876C108.946%20175.876%20107.551%20194.288%2089.6087%20199.018C71.6614%20203.743%2061.0848%20188.484%2061.0848%20188.484Z'%20fill='%23E2574C'/%3e%3cpath%20d='M341.786%20129.174C329.345%20131.355%20299.498%20134.072%20262.612%20124.185C225.716%20114.304%20201.236%2097.0224%20191.537%2088.8994C177.788%2077.3834%20171.74%2069.3802%20165.788%2081.4857C160.526%2092.163%20153.797%20109.54%20147.284%20133.866C133.171%20186.543%20122.623%20297.706%20209.867%20321.098C297.093%20344.47%20343.53%20242.92%20357.644%20190.238C364.157%20165.917%20367.013%20147.5%20367.799%20135.625C368.695%20122.173%20359.455%20126.078%20341.786%20129.174ZM166.497%20172.756C166.497%20172.756%20180.246%20151.372%20203.565%20158C226.899%20164.628%20228.706%20190.425%20228.706%20190.425L166.497%20172.756ZM223.42%20268.713C182.403%20256.698%20176.077%20223.99%20176.077%20223.99L286.262%20254.796C286.262%20254.791%20264.021%20280.578%20223.42%20268.713ZM262.377%20201.495C262.377%20201.495%20276.107%20180.126%20299.422%20186.773C322.736%20193.411%20324.572%20219.208%20324.572%20219.208L262.377%20201.495Z'%20fill='%232EAD33'/%3e%3cpath%20d='M139.88%20246.04L99.3324%20257.532C99.3324%20257.532%20103.737%20232.44%20133.607%20222.496L110.647%20136.33L108.663%20136.933C80.1918%20144.611%2057.1742%20142.574%2047.5704%20140.911C33.9554%20138.563%2026.834%20135.572%2027.5001%20145.929C28.08%20155.063%2030.2557%20169.224%2035.2397%20187.929C46.0225%20228.433%2081.6583%20306.481%20149.005%20288.342L150.989%20287.719L139.88%20246.04ZM61.0848%20188.485L108.946%20175.876C108.946%20175.876%20107.551%20194.288%2089.6087%20199.018C71.6615%20203.743%2061.0848%20188.485%2061.0848%20188.485Z'%20fill='%23D65348'/%3e%3cpath%20d='M225.27%20269.163L223.415%20268.712C182.398%20256.698%20176.072%20223.99%20176.072%20223.99L232.89%20239.872L262.971%20124.281L262.607%20124.185C225.711%20114.304%20201.232%2097.0224%20191.532%2088.8994C177.783%2077.3834%20171.735%2069.3802%20165.783%2081.4857C160.526%2092.163%20153.797%20109.54%20147.284%20133.866C133.171%20186.543%20122.623%20297.706%20209.867%20321.097L211.655%20321.5L225.27%20269.163ZM166.497%20172.756C166.497%20172.756%20180.246%20151.372%20203.565%20158C226.899%20164.628%20228.706%20190.425%20228.706%20190.425L166.497%20172.756Z'%20fill='%231D8D22'/%3e%3cpath%20d='M141.946%20245.451L131.072%20248.537C133.641%20263.019%20138.169%20276.917%20145.276%20289.195C146.513%20288.922%20147.74%20288.687%20149%20288.342C152.302%20287.451%20155.364%20286.348%20158.312%20285.145C150.371%20273.361%20145.118%20259.789%20141.946%20245.451ZM137.7%20143.451C132.112%20164.307%20127.113%20194.326%20128.489%20224.436C130.952%20223.367%20133.554%20222.371%20136.444%20221.551L138.457%20221.101C136.003%20188.939%20141.308%20156.165%20147.284%20133.866C148.799%20128.225%20150.318%20122.978%20151.832%20118.085C149.393%20119.637%20146.767%20121.228%20143.776%20122.867C141.759%20129.093%20139.722%20135.898%20137.7%20143.451Z'%20fill='%23C04B41'/%3e%3c/svg%3e`,zs=Zi,Bs=document.createElement(`link`);Bs.rel=`shortcut icon`,Bs.href=Rs,document.head.appendChild(Bs);var Vs=()=>{let[e,t]=B.useState();return B.useEffect(()=>{let e=new Hs;e.load().then(()=>{document.getElementById(`playwrightReportBase64`)?.remove(),t(e)})},[]),(0,V.jsx)(to,{children:(0,V.jsx)(Ms,{report:e})})};window.onload=()=>{ho(),oa.createRoot(document.querySelector(`#root`)).render((0,V.jsx)(Vs,{}))};var Hs=class{constructor(){this._entries=new Map}async load(){let e=document.getElementById(`playwrightReportBase64`).content.textContent,t=new zs.ZipReader(new zs.Data64URIReader(e),{useWebWorkers:!1});for(let e of await t.getEntries())this._entries.set(e.filename,e);this._json=await this.entry(`report.json`)}json(){return this._json}async entry(e){let t=this._entries.get(e),n=new zs.TextWriter;return await t.getData(n),JSON.parse(await n.getData())}};</script>
    <style type='text/css'>:root{--color-canvas-default-transparent:#fff0;--color-marketing-icon-primary:#218bff;--color-marketing-icon-secondary:#54aeff;--color-diff-blob-addition-num-text:#24292f;--color-diff-blob-addition-fg:#24292f;--color-diff-blob-addition-num-bg:#ccffd8;--color-diff-blob-addition-line-bg:#e6ffec;--color-diff-blob-addition-word-bg:#abf2bc;--color-diff-blob-deletion-num-text:#24292f;--color-diff-blob-deletion-fg:#24292f;--color-diff-blob-deletion-num-bg:#ffd7d5;--color-diff-blob-deletion-line-bg:#ffebe9;--color-diff-blob-deletion-word-bg:#ff818266;--color-diff-blob-hunk-num-bg:#54aeff66;--color-diff-blob-expander-icon:#57606a;--color-diff-blob-selected-line-highlight-mix-blend-mode:multiply;--color-diffstat-deletion-border:#1b1f2426;--color-diffstat-addition-border:#1b1f2426;--color-diffstat-addition-bg:#2da44e;--color-search-keyword-hl:#fff8c5;--color-prettylights-syntax-comment:#6e7781;--color-prettylights-syntax-constant:#0550ae;--color-prettylights-syntax-entity:#8250df;--color-prettylights-syntax-storage-modifier-import:#24292f;--color-prettylights-syntax-entity-tag:#116329;--color-prettylights-syntax-keyword:#cf222e;--color-prettylights-syntax-string:#0a3069;--color-prettylights-syntax-variable:#953800;--color-prettylights-syntax-brackethighlighter-unmatched:#82071e;--color-prettylights-syntax-invalid-illegal-text:#f6f8fa;--color-prettylights-syntax-invalid-illegal-bg:#82071e;--color-prettylights-syntax-carriage-return-text:#f6f8fa;--color-prettylights-syntax-carriage-return-bg:#cf222e;--color-prettylights-syntax-string-regexp:#116329;--color-prettylights-syntax-markup-list:#3b2300;--color-prettylights-syntax-markup-heading:#0550ae;--color-prettylights-syntax-markup-italic:#24292f;--color-prettylights-syntax-markup-bold:#24292f;--color-prettylights-syntax-markup-deleted-text:#82071e;--color-prettylights-syntax-markup-deleted-bg:#ffebe9;--color-prettylights-syntax-markup-inserted-text:#116329;--color-prettylights-syntax-markup-inserted-bg:#dafbe1;--color-prettylights-syntax-markup-changed-text:#953800;--color-prettylights-syntax-markup-changed-bg:#ffd8b5;--color-prettylights-syntax-markup-ignored-text:#eaeef2;--color-prettylights-syntax-markup-ignored-bg:#0550ae;--color-prettylights-syntax-meta-diff-range:#8250df;--color-prettylights-syntax-brackethighlighter-angle:#57606a;--color-prettylights-syntax-sublimelinter-gutter-mark:#8c959f;--color-prettylights-syntax-constant-other-reference-link:#0a3069;--color-codemirror-text:#24292f;--color-codemirror-bg:#fff;--color-codemirror-gutters-bg:#fff;--color-codemirror-guttermarker-text:#fff;--color-codemirror-guttermarker-subtle-text:#6e7781;--color-codemirror-linenumber-text:#57606a;--color-codemirror-cursor:#24292f;--color-codemirror-selection-bg:#54aeff66;--color-codemirror-activeline-bg:#eaeef280;--color-codemirror-matchingbracket-text:#24292f;--color-codemirror-lines-bg:#fff;--color-codemirror-syntax-comment:#24292f;--color-codemirror-syntax-constant:#0550ae;--color-codemirror-syntax-entity:#8250df;--color-codemirror-syntax-keyword:#cf222e;--color-codemirror-syntax-storage:#cf222e;--color-codemirror-syntax-string:#0a3069;--color-codemirror-syntax-support:#0550ae;--color-codemirror-syntax-variable:#953800;--color-checks-bg:#24292f;--color-checks-run-border-width:0px;--color-checks-container-border-width:0px;--color-checks-text-primary:#f6f8fa;--color-checks-text-secondary:#8c959f;--color-checks-text-link:#54aeff;--color-checks-btn-icon:#afb8c1;--color-checks-btn-hover-icon:#f6f8fa;--color-checks-btn-hover-bg:#ffffff20;--color-checks-input-text:#eaeef2;--color-checks-input-placeholder-text:#8c959f;--color-checks-input-focus-text:#8c959f;--color-checks-input-bg:#32383f;--color-checks-input-shadow:none;--color-checks-donut-error:#fa4549;--color-checks-donut-pending:#bf8700;--color-checks-donut-success:#2da44e;--color-checks-donut-neutral:#afb8c1;--color-checks-dropdown-text:#afb8c1;--color-checks-dropdown-bg:#32383f;--color-checks-dropdown-border:#424a53;--color-checks-dropdown-shadow:#1b1f244d;--color-checks-dropdown-hover-text:#f6f8fa;--color-checks-dropdown-hover-bg:#424a53;--color-checks-dropdown-btn-hover-text:#f6f8fa;--color-checks-dropdown-btn-hover-bg:#32383f;--color-checks-scrollbar-thumb-bg:#57606a;--color-checks-header-label-text:#d0d7de;--color-checks-header-label-open-text:#f6f8fa;--color-checks-header-border:#32383f;--color-checks-header-icon:#8c959f;--color-checks-line-text:#d0d7de;--color-checks-line-num-text:#8c959fbf;--color-checks-line-timestamp-text:#8c959f;--color-checks-line-hover-bg:#32383f;--color-checks-line-selected-bg:#218bff26;--color-checks-line-selected-num-text:#54aeff;--color-checks-line-dt-fm-text:#24292f;--color-checks-line-dt-fm-bg:#9a6700;--color-checks-gate-bg:#7d4e0026;--color-checks-gate-text:#d0d7de;--color-checks-gate-waiting-text:#afb8c1;--color-checks-step-header-open-bg:#32383f;--color-checks-step-error-text:#ff8182;--color-checks-step-warning-text:#d4a72c;--color-checks-logline-text:#8c959f;--color-checks-logline-num-text:#8c959fbf;--color-checks-logline-debug-text:#c297ff;--color-checks-logline-error-text:#d0d7de;--color-checks-logline-error-num-text:#ff8182;--color-checks-logline-error-bg:#a40e2626;--color-checks-logline-warning-text:#d0d7de;--color-checks-logline-warning-num-text:#d4a72c;--color-checks-logline-warning-bg:#7d4e0026;--color-checks-logline-command-text:#54aeff;--color-checks-logline-section-text:#4ac26b;--color-checks-ansi-black:#24292f;--color-checks-ansi-black-bright:#32383f;--color-checks-ansi-white:#d0d7de;--color-checks-ansi-white-bright:#d0d7de;--color-checks-ansi-gray:#8c959f;--color-checks-ansi-red:#ff8182;--color-checks-ansi-red-bright:#ffaba8;--color-checks-ansi-green:#4ac26b;--color-checks-ansi-green-bright:#6fdd8b;--color-checks-ansi-yellow:#d4a72c;--color-checks-ansi-yellow-bright:#eac54f;--color-checks-ansi-blue:#54aeff;--color-checks-ansi-blue-bright:#80ccff;--color-checks-ansi-magenta:#c297ff;--color-checks-ansi-magenta-bright:#d8b9ff;--color-checks-ansi-cyan:#76e3ea;--color-checks-ansi-cyan-bright:#b3f0ff;--color-project-header-bg:#24292f;--color-project-sidebar-bg:#fff;--color-project-gradient-in:#fff;--color-project-gradient-out:#fff0;--color-mktg-success:#249243;--color-mktg-info:#1377ea;--color-mktg-bg-shade-gradient-top:#1b1f2411;--color-mktg-bg-shade-gradient-bottom:#1b1f2400;--color-mktg-btn-bg-top:#617eef;--color-mktg-btn-bg-bottom:#4969ed;--color-mktg-btn-bg-overlay-top:#4968e4;--color-mktg-btn-bg-overlay-bottom:#3355e0;--color-mktg-btn-text:#fff;--color-mktg-btn-primary-bg-top:#34b759;--color-mktg-btn-primary-bg-bottom:#2ea44f;--color-mktg-btn-primary-bg-overlay-top:#279b42;--color-mktg-btn-primary-bg-overlay-bottom:#22863a;--color-mktg-btn-primary-text:#fff;--color-mktg-btn-enterprise-bg-top:#8670ff;--color-mktg-btn-enterprise-bg-bottom:#6f57ff;--color-mktg-btn-enterprise-bg-overlay-top:#7463de;--color-mktg-btn-enterprise-bg-overlay-bottom:#614eda;--color-mktg-btn-enterprise-text:#fff;--color-mktg-btn-outline-text:#4969ed;--color-mktg-btn-outline-border:#4969ed4d;--color-mktg-btn-outline-hover-text:#3355e0;--color-mktg-btn-outline-hover-border:#3355e080;--color-mktg-btn-outline-focus-border:#4969ed;--color-mktg-btn-outline-focus-border-inset:#4969ed80;--color-mktg-btn-dark-text:#fff;--color-mktg-btn-dark-border:#ffffff4d;--color-mktg-btn-dark-hover-text:#fff;--color-mktg-btn-dark-hover-border:#ffffff80;--color-mktg-btn-dark-focus-border:#fff;--color-mktg-btn-dark-focus-border-inset:#ffffff80;--color-avatar-bg:#fff;--color-avatar-border:#1b1f2426;--color-avatar-stack-fade:#afb8c1;--color-avatar-stack-fade-more:#d0d7de;--color-avatar-child-shadow:-2px -2px 0 #fffc;--color-topic-tag-border:#0000;--color-select-menu-backdrop-border:#0000;--color-select-menu-tap-highlight:#afb8c180;--color-select-menu-tap-focus-bg:#b6e3ff;--color-overlay-shadow:0 1px 3px #1b1f241f, 0 8px 24px #424a531f;--color-header-text:#ffffffb3;--color-header-bg:#24292f;--color-header-logo:#fff;--color-header-search-bg:#24292f;--color-header-search-border:#57606a;--color-sidenav-selected-bg:#fff;--color-menu-bg-active:#0000;--color-control-transparent-bg-hover:#818b981a;--color-input-disabled-bg:#afb8c133;--color-timeline-badge-bg:#eaeef2;--color-ansi-black:#24292f;--color-ansi-black-bright:#57606a;--color-ansi-white:#6e7781;--color-ansi-white-bright:#8c959f;--color-ansi-gray:#6e7781;--color-ansi-red:#cf222e;--color-ansi-red-bright:#a40e26;--color-ansi-green:#116329;--color-ansi-green-bright:#1a7f37;--color-ansi-yellow:#4d2d00;--color-ansi-yellow-bright:#633c01;--color-ansi-blue:#0969da;--color-ansi-blue-bright:#218bff;--color-ansi-magenta:#8250df;--color-ansi-magenta-bright:#a475f9;--color-ansi-cyan:#1b7c83;--color-ansi-cyan-bright:#3192aa;--color-btn-text:#24292f;--color-btn-bg:#f6f8fa;--color-btn-border:#1b1f2426;--color-btn-shadow:0 1px 0 #1b1f240a;--color-btn-inset-shadow:inset 0 1px 0 #ffffff40;--color-btn-hover-bg:#f3f4f6;--color-btn-hover-border:#1b1f2426;--color-btn-active-bg:#ebecf0;--color-btn-active-border:#1b1f2426;--color-btn-selected-bg:#eeeff2;--color-btn-focus-bg:#f6f8fa;--color-btn-focus-border:#1b1f2426;--color-btn-focus-shadow:0 0 0 3px #0969da4d;--color-btn-shadow-active:inset 0 .15em .3em #1b1f2426;--color-btn-shadow-input-focus:0 0 0 .2em #0969da4d;--color-btn-counter-bg:#1b1f2414;--color-btn-primary-text:#fff;--color-btn-primary-bg:#2da44e;--color-btn-primary-border:#1b1f2426;--color-btn-primary-shadow:0 1px 0 #1b1f241a;--color-btn-primary-inset-shadow:inset 0 1px 0 #ffffff08;--color-btn-primary-hover-bg:#2c974b;--color-btn-primary-hover-border:#1b1f2426;--color-btn-primary-selected-bg:#298e46;--color-btn-primary-selected-shadow:inset 0 1px 0 #002d1133;--color-btn-primary-disabled-text:#fffc;--color-btn-primary-disabled-bg:#94d3a2;--color-btn-primary-disabled-border:#1b1f2426;--color-btn-primary-focus-bg:#2da44e;--color-btn-primary-focus-border:#1b1f2426;--color-btn-primary-focus-shadow:0 0 0 3px #2da44e66;--color-btn-primary-icon:#fffc;--color-btn-primary-counter-bg:#fff3;--color-btn-outline-text:#0969da;--color-btn-outline-hover-text:#fff;--color-btn-outline-hover-bg:#0969da;--color-btn-outline-hover-border:#1b1f2426;--color-btn-outline-hover-shadow:0 1px 0 #1b1f241a;--color-btn-outline-hover-inset-shadow:inset 0 1px 0 #ffffff08;--color-btn-outline-hover-counter-bg:#fff3;--color-btn-outline-selected-text:#fff;--color-btn-outline-selected-bg:#0965ce;--color-btn-outline-selected-border:#1b1f2426;--color-btn-outline-selected-shadow:inset 0 1px 0 #00215533;--color-btn-outline-disabled-text:#0969da80;--color-btn-outline-disabled-bg:#f6f8fa;--color-btn-outline-disabled-counter-bg:#0969da0d;--color-btn-outline-focus-border:#1b1f2426;--color-btn-outline-focus-shadow:0 0 0 3px #0550ae66;--color-btn-outline-counter-bg:#0969da1a;--color-btn-danger-text:#cf222e;--color-btn-danger-hover-text:#fff;--color-btn-danger-hover-bg:#a40e26;--color-btn-danger-hover-border:#1b1f2426;--color-btn-danger-hover-shadow:0 1px 0 #1b1f241a;--color-btn-danger-hover-inset-shadow:inset 0 1px 0 #ffffff08;--color-btn-danger-hover-counter-bg:#fff3;--color-btn-danger-selected-text:#fff;--color-btn-danger-selected-bg:#c11f2a;--color-btn-danger-selected-border:#1b1f2426;--color-btn-danger-selected-shadow:inset 0 1px 0 #4c001433;--color-btn-danger-disabled-text:#cf222e80;--color-btn-danger-disabled-bg:#f6f8fa;--color-btn-danger-disabled-counter-bg:#cf222e0d;--color-btn-danger-focus-border:#1b1f2426;--color-btn-danger-focus-shadow:0 0 0 3px #a40e2666;--color-btn-danger-counter-bg:#cf222e1a;--color-btn-danger-icon:#cf222e;--color-btn-danger-hover-icon:#fff;--color-underlinenav-icon:#6e7781;--color-underlinenav-border-hover:#afb8c133;--color-fg-default:#24292f;--color-fg-muted:#57606a;--color-fg-subtle:#6e7781;--color-fg-on-emphasis:#fff;--color-canvas-default:#fff;--color-canvas-overlay:#fff;--color-canvas-inset:#f6f8fa;--color-canvas-subtle:#f6f8fa;--color-border-default:#d0d7de;--color-border-muted:#d8dee4;--color-border-subtle:#1b1f2426;--color-shadow-small:0 1px 0 #1b1f240a;--color-shadow-medium:0 3px 6px #8c959f26;--color-shadow-large:0 8px 24px #8c959f33;--color-shadow-extra-large:0 12px 28px #8c959f4d;--color-neutral-emphasis-plus:#24292f;--color-neutral-emphasis:#6e7781;--color-neutral-muted:#afb8c133;--color-neutral-subtle:#eaeef280;--color-accent-fg:#0969da;--color-accent-emphasis:#0969da;--color-accent-muted:#54aeff66;--color-accent-subtle:#ddf4ff;--color-success-fg:#1a7f37;--color-success-emphasis:#2da44e;--color-success-muted:#4ac26b66;--color-success-subtle:#dafbe1;--color-attention-fg:#9a6700;--color-attention-emphasis:#bf8700;--color-attention-muted:#d4a72c66;--color-attention-subtle:#fff8c5;--color-severe-fg:#bc4c00;--color-severe-emphasis:#bc4c00;--color-severe-muted:#fb8f4466;--color-severe-subtle:#fff1e5;--color-danger-fg:#cf222e;--color-danger-emphasis:#cf222e;--color-danger-muted:#ff818266;--color-danger-subtle:#ffebe9;--color-done-fg:#8250df;--color-done-emphasis:#8250df;--color-done-muted:#c297ff66;--color-done-subtle:#fbefff;--color-sponsors-fg:#bf3989;--color-sponsors-emphasis:#bf3989;--color-sponsors-muted:#ff80c866;--color-sponsors-subtle:#ffeff7;--color-primer-canvas-backdrop:#1b1f2480;--color-primer-canvas-sticky:#fffffff2;--color-primer-border-active:#fd8c73;--color-primer-border-contrast:#1b1f241a;--color-primer-shadow-highlight:inset 0 1px 0 #ffffff40;--color-primer-shadow-inset:inset 0 1px 0 #d0d7de33;--color-primer-shadow-focus:0 0 0 3px #0969da4d;--color-scale-black:#1b1f24;--color-scale-white:#fff;--color-scale-gray-0:#f6f8fa;--color-scale-gray-1:#eaeef2;--color-scale-gray-2:#d0d7de;--color-scale-gray-3:#afb8c1;--color-scale-gray-4:#8c959f;--color-scale-gray-5:#6e7781;--color-scale-gray-6:#57606a;--color-scale-gray-7:#424a53;--color-scale-gray-8:#32383f;--color-scale-gray-9:#24292f;--color-scale-blue-0:#ddf4ff;--color-scale-blue-1:#b6e3ff;--color-scale-blue-2:#80ccff;--color-scale-blue-3:#54aeff;--color-scale-blue-4:#218bff;--color-scale-blue-5:#0969da;--color-scale-blue-6:#0550ae;--color-scale-blue-7:#033d8b;--color-scale-blue-8:#0a3069;--color-scale-blue-9:#002155;--color-scale-green-0:#dafbe1;--color-scale-green-1:#aceebb;--color-scale-green-2:#6fdd8b;--color-scale-green-3:#4ac26b;--color-scale-green-4:#2da44e;--color-scale-green-5:#1a7f37;--color-scale-green-6:#116329;--color-scale-green-7:#044f1e;--color-scale-green-8:#003d16;--color-scale-green-9:#002d11;--color-scale-yellow-0:#fff8c5;--color-scale-yellow-1:#fae17d;--color-scale-yellow-2:#eac54f;--color-scale-yellow-3:#d4a72c;--color-scale-yellow-4:#bf8700;--color-scale-yellow-5:#9a6700;--color-scale-yellow-6:#7d4e00;--color-scale-yellow-7:#633c01;--color-scale-yellow-8:#4d2d00;--color-scale-yellow-9:#3b2300;--color-scale-orange-0:#fff1e5;--color-scale-orange-1:#ffd8b5;--color-scale-orange-2:#ffb77c;--color-scale-orange-3:#fb8f44;--color-scale-orange-4:#e16f24;--color-scale-orange-5:#bc4c00;--color-scale-orange-6:#953800;--color-scale-orange-7:#762c00;--color-scale-orange-8:#5c2200;--color-scale-orange-9:#471700;--color-scale-red-0:#ffebe9;--color-scale-red-1:#ffcecb;--color-scale-red-2:#ffaba8;--color-scale-red-3:#ff8182;--color-scale-red-4:#fa4549;--color-scale-red-5:#cf222e;--color-scale-red-6:#a40e26;--color-scale-red-7:#82071e;--color-scale-red-8:#660018;--color-scale-red-9:#4c0014;--color-scale-purple-0:#fbefff;--color-scale-purple-1:#ecd8ff;--color-scale-purple-2:#d8b9ff;--color-scale-purple-3:#c297ff;--color-scale-purple-4:#a475f9;--color-scale-purple-5:#8250df;--color-scale-purple-6:#6639ba;--color-scale-purple-7:#512a97;--color-scale-purple-8:#3e1f79;--color-scale-purple-9:#2e1461;--color-scale-pink-0:#ffeff7;--color-scale-pink-1:#ffd3eb;--color-scale-pink-2:#ffadda;--color-scale-pink-3:#ff80c8;--color-scale-pink-4:#e85aad;--color-scale-pink-5:#bf3989;--color-scale-pink-6:#99286e;--color-scale-pink-7:#772057;--color-scale-pink-8:#611347;--color-scale-pink-9:#4d0336;--color-scale-coral-0:#fff0eb;--color-scale-coral-1:#ffd6cc;--color-scale-coral-2:#ffb4a1;--color-scale-coral-3:#fd8c73;--color-scale-coral-4:#ec6547;--color-scale-coral-5:#c4432b;--color-scale-coral-6:#9e2f1c;--color-scale-coral-7:#801f0f;--color-scale-coral-8:#691105;--color-scale-coral-9:#510901}:root.dark-mode{--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--color-canvas-default-transparent:#0d111700;--color-marketing-icon-primary:#79c0ff;--color-marketing-icon-secondary:#1f6feb;--color-diff-blob-addition-num-text:#c9d1d9;--color-diff-blob-addition-fg:#c9d1d9;--color-diff-blob-addition-num-bg:#3fb9504d;--color-diff-blob-addition-line-bg:#2ea04326;--color-diff-blob-addition-word-bg:#2ea04366;--color-diff-blob-deletion-num-text:#c9d1d9;--color-diff-blob-deletion-fg:#c9d1d9;--color-diff-blob-deletion-num-bg:#f851494d;--color-diff-blob-deletion-line-bg:#f8514926;--color-diff-blob-deletion-word-bg:#f8514966;--color-diff-blob-hunk-num-bg:#388bfd66;--color-diff-blob-expander-icon:#8b949e;--color-diff-blob-selected-line-highlight-mix-blend-mode:screen;--color-diffstat-deletion-border:#f0f6fc1a;--color-diffstat-addition-border:#f0f6fc1a;--color-diffstat-addition-bg:#3fb950;--color-search-keyword-hl:#d2992266;--color-prettylights-syntax-comment:#8b949e;--color-prettylights-syntax-constant:#79c0ff;--color-prettylights-syntax-entity:#d2a8ff;--color-prettylights-syntax-storage-modifier-import:#c9d1d9;--color-prettylights-syntax-entity-tag:#7ee787;--color-prettylights-syntax-keyword:#ff7b72;--color-prettylights-syntax-string:#a5d6ff;--color-prettylights-syntax-variable:#ffa657;--color-prettylights-syntax-brackethighlighter-unmatched:#f85149;--color-prettylights-syntax-invalid-illegal-text:#f0f6fc;--color-prettylights-syntax-invalid-illegal-bg:#8e1519;--color-prettylights-syntax-carriage-return-text:#f0f6fc;--color-prettylights-syntax-carriage-return-bg:#b62324;--color-prettylights-syntax-string-regexp:#7ee787;--color-prettylights-syntax-markup-list:#f2cc60;--color-prettylights-syntax-markup-heading:#1f6feb;--color-prettylights-syntax-markup-italic:#c9d1d9;--color-prettylights-syntax-markup-bold:#c9d1d9;--color-prettylights-syntax-markup-deleted-text:#ffdcd7;--color-prettylights-syntax-markup-deleted-bg:#67060c;--color-prettylights-syntax-markup-inserted-text:#aff5b4;--color-prettylights-syntax-markup-inserted-bg:#033a16;--color-prettylights-syntax-markup-changed-text:#ffdfb6;--color-prettylights-syntax-markup-changed-bg:#5a1e02;--color-prettylights-syntax-markup-ignored-text:#c9d1d9;--color-prettylights-syntax-markup-ignored-bg:#1158c7;--color-prettylights-syntax-meta-diff-range:#d2a8ff;--color-prettylights-syntax-brackethighlighter-angle:#8b949e;--color-prettylights-syntax-sublimelinter-gutter-mark:#484f58;--color-prettylights-syntax-constant-other-reference-link:#a5d6ff;--color-codemirror-text:#c9d1d9;--color-codemirror-bg:#0d1117;--color-codemirror-gutters-bg:#0d1117;--color-codemirror-guttermarker-text:#0d1117;--color-codemirror-guttermarker-subtle-text:#484f58;--color-codemirror-linenumber-text:#8b949e;--color-codemirror-cursor:#c9d1d9;--color-codemirror-selection-bg:#388bfd66;--color-codemirror-activeline-bg:#6e76811a;--color-codemirror-matchingbracket-text:#c9d1d9;--color-codemirror-lines-bg:#0d1117;--color-codemirror-syntax-comment:#8b949e;--color-codemirror-syntax-constant:#79c0ff;--color-codemirror-syntax-entity:#d2a8ff;--color-codemirror-syntax-keyword:#ff7b72;--color-codemirror-syntax-storage:#ff7b72;--color-codemirror-syntax-string:#a5d6ff;--color-codemirror-syntax-support:#79c0ff;--color-codemirror-syntax-variable:#ffa657;--color-checks-bg:#010409;--color-checks-run-border-width:1px;--color-checks-container-border-width:1px;--color-checks-text-primary:#c9d1d9;--color-checks-text-secondary:#8b949e;--color-checks-text-link:#58a6ff;--color-checks-btn-icon:#8b949e;--color-checks-btn-hover-icon:#c9d1d9;--color-checks-btn-hover-bg:#6e76811a;--color-checks-input-text:#8b949e;--color-checks-input-placeholder-text:#484f58;--color-checks-input-focus-text:#c9d1d9;--color-checks-input-bg:#161b22;--color-checks-input-shadow:none;--color-checks-donut-error:#f85149;--color-checks-donut-pending:#d29922;--color-checks-donut-success:#2ea043;--color-checks-donut-neutral:#8b949e;--color-checks-dropdown-text:#c9d1d9;--color-checks-dropdown-bg:#161b22;--color-checks-dropdown-border:#30363d;--color-checks-dropdown-shadow:#0104094d;--color-checks-dropdown-hover-text:#c9d1d9;--color-checks-dropdown-hover-bg:#6e76811a;--color-checks-dropdown-btn-hover-text:#c9d1d9;--color-checks-dropdown-btn-hover-bg:#6e76811a;--color-checks-scrollbar-thumb-bg:#6e768166;--color-checks-header-label-text:#8b949e;--color-checks-header-label-open-text:#c9d1d9;--color-checks-header-border:#21262d;--color-checks-header-icon:#8b949e;--color-checks-line-text:#8b949e;--color-checks-line-num-text:#484f58;--color-checks-line-timestamp-text:#484f58;--color-checks-line-hover-bg:#6e76811a;--color-checks-line-selected-bg:#388bfd26;--color-checks-line-selected-num-text:#58a6ff;--color-checks-line-dt-fm-text:#f0f6fc;--color-checks-line-dt-fm-bg:#9e6a03;--color-checks-gate-bg:#bb800926;--color-checks-gate-text:#8b949e;--color-checks-gate-waiting-text:#d29922;--color-checks-step-header-open-bg:#161b22;--color-checks-step-error-text:#f85149;--color-checks-step-warning-text:#d29922;--color-checks-logline-text:#8b949e;--color-checks-logline-num-text:#484f58;--color-checks-logline-debug-text:#a371f7;--color-checks-logline-error-text:#8b949e;--color-checks-logline-error-num-text:#484f58;--color-checks-logline-error-bg:#f8514926;--color-checks-logline-warning-text:#8b949e;--color-checks-logline-warning-num-text:#d29922;--color-checks-logline-warning-bg:#bb800926;--color-checks-logline-command-text:#58a6ff;--color-checks-logline-section-text:#3fb950;--color-checks-ansi-black:#0d1117;--color-checks-ansi-black-bright:#161b22;--color-checks-ansi-white:#b1bac4;--color-checks-ansi-white-bright:#b1bac4;--color-checks-ansi-gray:#6e7681;--color-checks-ansi-red:#ff7b72;--color-checks-ansi-red-bright:#ffa198;--color-checks-ansi-green:#3fb950;--color-checks-ansi-green-bright:#56d364;--color-checks-ansi-yellow:#d29922;--color-checks-ansi-yellow-bright:#e3b341;--color-checks-ansi-blue:#58a6ff;--color-checks-ansi-blue-bright:#79c0ff;--color-checks-ansi-magenta:#bc8cff;--color-checks-ansi-magenta-bright:#d2a8ff;--color-checks-ansi-cyan:#76e3ea;--color-checks-ansi-cyan-bright:#b3f0ff;--color-project-header-bg:#0d1117;--color-project-sidebar-bg:#161b22;--color-project-gradient-in:#161b22;--color-project-gradient-out:#161b2200;--color-mktg-success:#29933d;--color-mktg-info:#2a7bf3;--color-mktg-bg-shade-gradient-top:#01040911;--color-mktg-bg-shade-gradient-bottom:#01040900;--color-mktg-btn-bg-top:#617eef;--color-mktg-btn-bg-bottom:#4969ed;--color-mktg-btn-bg-overlay-top:#4968e4;--color-mktg-btn-bg-overlay-bottom:#3355e0;--color-mktg-btn-text:#f0f6fc;--color-mktg-btn-primary-bg-top:#34b759;--color-mktg-btn-primary-bg-bottom:#2ea44f;--color-mktg-btn-primary-bg-overlay-top:#279b42;--color-mktg-btn-primary-bg-overlay-bottom:#22863a;--color-mktg-btn-primary-text:#f0f6fc;--color-mktg-btn-enterprise-bg-top:#8670ff;--color-mktg-btn-enterprise-bg-bottom:#6f57ff;--color-mktg-btn-enterprise-bg-overlay-top:#7463de;--color-mktg-btn-enterprise-bg-overlay-bottom:#614eda;--color-mktg-btn-enterprise-text:#f0f6fc;--color-mktg-btn-outline-text:#f0f6fc;--color-mktg-btn-outline-border:#f0f6fc4d;--color-mktg-btn-outline-hover-text:#f0f6fc;--color-mktg-btn-outline-hover-border:#f0f6fc80;--color-mktg-btn-outline-focus-border:#f0f6fc;--color-mktg-btn-outline-focus-border-inset:#f0f6fc80;--color-mktg-btn-dark-text:#f0f6fc;--color-mktg-btn-dark-border:#f0f6fc4d;--color-mktg-btn-dark-hover-text:#f0f6fc;--color-mktg-btn-dark-hover-border:#f0f6fc80;--color-mktg-btn-dark-focus-border:#f0f6fc;--color-mktg-btn-dark-focus-border-inset:#f0f6fc80;--color-avatar-bg:#f0f6fc1a;--color-avatar-border:#f0f6fc1a;--color-avatar-stack-fade:#30363d;--color-avatar-stack-fade-more:#21262d;--color-avatar-child-shadow:-2px -2px 0 #0d1117;--color-topic-tag-border:#0000;--color-select-menu-backdrop-border:#484f58;--color-select-menu-tap-highlight:#30363d80;--color-select-menu-tap-focus-bg:#0c2d6b;--color-overlay-shadow:0 0 0 1px #30363d, 0 16px 32px #010409d9;--color-header-text:#f0f6fcb3;--color-header-bg:#161b22;--color-header-logo:#f0f6fc;--color-header-search-bg:#0d1117;--color-header-search-border:#30363d;--color-sidenav-selected-bg:#21262d;--color-menu-bg-active:#161b22;--color-control-transparent-bg-hover:#656c7633;--color-input-disabled-bg:#6e768100;--color-timeline-badge-bg:#21262d;--color-ansi-black:#484f58;--color-ansi-black-bright:#6e7681;--color-ansi-white:#b1bac4;--color-ansi-white-bright:#f0f6fc;--color-ansi-gray:#6e7681;--color-ansi-red:#ff7b72;--color-ansi-red-bright:#ffa198;--color-ansi-green:#3fb950;--color-ansi-green-bright:#56d364;--color-ansi-yellow:#d29922;--color-ansi-yellow-bright:#e3b341;--color-ansi-blue:#58a6ff;--color-ansi-blue-bright:#79c0ff;--color-ansi-magenta:#bc8cff;--color-ansi-magenta-bright:#d2a8ff;--color-ansi-cyan:#39c5cf;--color-ansi-cyan-bright:#56d4dd;--color-btn-text:#c9d1d9;--color-btn-bg:#21262d;--color-btn-border:#f0f6fc1a;--color-btn-shadow:0 0 transparent;--color-btn-inset-shadow:0 0 transparent;--color-btn-hover-bg:#30363d;--color-btn-hover-border:#8b949e;--color-btn-active-bg:#282e33;--color-btn-active-border:#6e7681;--color-btn-selected-bg:#161b22;--color-btn-focus-bg:#21262d;--color-btn-focus-border:#8b949e;--color-btn-focus-shadow:0 0 0 3px #8b949e4d;--color-btn-shadow-active:inset 0 .15em .3em #01040926;--color-btn-shadow-input-focus:0 0 0 .2em #1f6feb4d;--color-btn-counter-bg:#30363d;--color-btn-primary-text:#fff;--color-btn-primary-bg:#238636;--color-btn-primary-border:#f0f6fc1a;--color-btn-primary-shadow:0 0 transparent;--color-btn-primary-inset-shadow:0 0 transparent;--color-btn-primary-hover-bg:#2ea043;--color-btn-primary-hover-border:#f0f6fc1a;--color-btn-primary-selected-bg:#238636;--color-btn-primary-selected-shadow:0 0 transparent;--color-btn-primary-disabled-text:#f0f6fc80;--color-btn-primary-disabled-bg:#23863699;--color-btn-primary-disabled-border:#f0f6fc1a;--color-btn-primary-focus-bg:#238636;--color-btn-primary-focus-border:#f0f6fc1a;--color-btn-primary-focus-shadow:0 0 0 3px #2ea44f66;--color-btn-primary-icon:#f0f6fc;--color-btn-primary-counter-bg:#f0f6fc33;--color-btn-outline-text:#58a6ff;--color-btn-outline-hover-text:#58a6ff;--color-btn-outline-hover-bg:#30363d;--color-btn-outline-hover-border:#f0f6fc1a;--color-btn-outline-hover-shadow:0 1px 0 #0104091a;--color-btn-outline-hover-inset-shadow:inset 0 1px 0 #f0f6fc08;--color-btn-outline-hover-counter-bg:#f0f6fc33;--color-btn-outline-selected-text:#f0f6fc;--color-btn-outline-selected-bg:#0d419d;--color-btn-outline-selected-border:#f0f6fc1a;--color-btn-outline-selected-shadow:0 0 transparent;--color-btn-outline-disabled-text:#58a6ff80;--color-btn-outline-disabled-bg:#0d1117;--color-btn-outline-disabled-counter-bg:#1f6feb0d;--color-btn-outline-focus-border:#f0f6fc1a;--color-btn-outline-focus-shadow:0 0 0 3px #1158c766;--color-btn-outline-counter-bg:#1f6feb1a;--color-btn-danger-text:#f85149;--color-btn-danger-hover-text:#f0f6fc;--color-btn-danger-hover-bg:#da3633;--color-btn-danger-hover-border:#f85149;--color-btn-danger-hover-shadow:0 0 transparent;--color-btn-danger-hover-inset-shadow:0 0 transparent;--color-btn-danger-hover-icon:#f0f6fc;--color-btn-danger-hover-counter-bg:#fff3;--color-btn-danger-selected-text:#fff;--color-btn-danger-selected-bg:#b62324;--color-btn-danger-selected-border:#ff7b72;--color-btn-danger-selected-shadow:0 0 transparent;--color-btn-danger-disabled-text:#f8514980;--color-btn-danger-disabled-bg:#0d1117;--color-btn-danger-disabled-counter-bg:#da36330d;--color-btn-danger-focus-border:#f85149;--color-btn-danger-focus-shadow:0 0 0 3px #f8514966;--color-btn-danger-counter-bg:#da36331a;--color-btn-danger-icon:#f85149;--color-underlinenav-icon:#484f58;--color-underlinenav-border-hover:#6e768166;--color-fg-default:#c9d1d9;--color-fg-muted:#8b949e;--color-fg-subtle:#484f58;--color-fg-on-emphasis:#f0f6fc;--color-canvas-default:#0d1117;--color-canvas-overlay:#161b22;--color-canvas-inset:#010409;--color-canvas-subtle:#161b22;--color-border-default:#30363d;--color-border-muted:#21262d;--color-border-subtle:#f0f6fc1a;--color-shadow-small:0 0 transparent;--color-shadow-medium:0 3px 6px #010409;--color-shadow-large:0 8px 24px #010409;--color-shadow-extra-large:0 12px 48px #010409;--color-neutral-emphasis-plus:#6e7681;--color-neutral-emphasis:#6e7681;--color-neutral-muted:#6e768166;--color-neutral-subtle:#6e76811a;--color-accent-fg:#58a6ff;--color-accent-emphasis:#1f6feb;--color-accent-muted:#388bfd66;--color-accent-subtle:#388bfd26;--color-success-fg:#3fb950;--color-success-emphasis:#238636;--color-success-muted:#2ea04366;--color-success-subtle:#2ea04326;--color-attention-fg:#d29922;--color-attention-emphasis:#9e6a03;--color-attention-muted:#bb800966;--color-attention-subtle:#bb800926;--color-severe-fg:#db6d28;--color-severe-emphasis:#bd561d;--color-severe-muted:#db6d2866;--color-severe-subtle:#db6d2826;--color-danger-fg:#f85149;--color-danger-emphasis:#da3633;--color-danger-muted:#f8514966;--color-danger-subtle:#f8514926;--color-done-fg:#a371f7;--color-done-emphasis:#8957e5;--color-done-muted:#a371f766;--color-done-subtle:#a371f726;--color-sponsors-fg:#db61a2;--color-sponsors-emphasis:#bf4b8a;--color-sponsors-muted:#db61a266;--color-sponsors-subtle:#db61a226;--color-primer-canvas-backdrop:#010409cc;--color-primer-canvas-sticky:#0d1117f2;--color-primer-border-active:#f78166;--color-primer-border-contrast:#f0f6fc33;--color-primer-shadow-highlight:0 0 transparent;--color-primer-shadow-inset:0 0 transparent;--color-primer-shadow-focus:0 0 0 3px #0c2d6b;--color-scale-black:#010409;--color-scale-white:#f0f6fc;--color-scale-gray-0:#f0f6fc;--color-scale-gray-1:#c9d1d9;--color-scale-gray-2:#b1bac4;--color-scale-gray-3:#8b949e;--color-scale-gray-4:#6e7681;--color-scale-gray-5:#484f58;--color-scale-gray-6:#30363d;--color-scale-gray-7:#21262d;--color-scale-gray-8:#161b22;--color-scale-gray-9:#0d1117;--color-scale-blue-0:#cae8ff;--color-scale-blue-1:#a5d6ff;--color-scale-blue-2:#79c0ff;--color-scale-blue-3:#58a6ff;--color-scale-blue-4:#388bfd;--color-scale-blue-5:#1f6feb;--color-scale-blue-6:#1158c7;--color-scale-blue-7:#0d419d;--color-scale-blue-8:#0c2d6b;--color-scale-blue-9:#051d4d;--color-scale-green-0:#aff5b4;--color-scale-green-1:#7ee787;--color-scale-green-2:#56d364;--color-scale-green-3:#3fb950;--color-scale-green-4:#2ea043;--color-scale-green-5:#238636;--color-scale-green-6:#196c2e;--color-scale-green-7:#0f5323;--color-scale-green-8:#033a16;--color-scale-green-9:#04260f;--color-scale-yellow-0:#f8e3a1;--color-scale-yellow-1:#f2cc60;--color-scale-yellow-2:#e3b341;--color-scale-yellow-3:#d29922;--color-scale-yellow-4:#bb8009;--color-scale-yellow-5:#9e6a03;--color-scale-yellow-6:#845306;--color-scale-yellow-7:#693e00;--color-scale-yellow-8:#4b2900;--color-scale-yellow-9:#341a00;--color-scale-orange-0:#ffdfb6;--color-scale-orange-1:#ffc680;--color-scale-orange-2:#ffa657;--color-scale-orange-3:#f0883e;--color-scale-orange-4:#db6d28;--color-scale-orange-5:#bd561d;--color-scale-orange-6:#9b4215;--color-scale-orange-7:#762d0a;--color-scale-orange-8:#5a1e02;--color-scale-orange-9:#3d1300;--color-scale-red-0:#ffdcd7;--color-scale-red-1:#ffc1ba;--color-scale-red-2:#ffa198;--color-scale-red-3:#ff7b72;--color-scale-red-4:#f85149;--color-scale-red-5:#da3633;--color-scale-red-6:#b62324;--color-scale-red-7:#8e1519;--color-scale-red-8:#67060c;--color-scale-red-9:#490202;--color-scale-purple-0:#eddeff;--color-scale-purple-1:#e2c5ff;--color-scale-purple-2:#d2a8ff;--color-scale-purple-3:#bc8cff;--color-scale-purple-4:#a371f7;--color-scale-purple-5:#8957e5;--color-scale-purple-6:#6e40c9;--color-scale-purple-7:#553098;--color-scale-purple-8:#3c1e70;--color-scale-purple-9:#271052;--color-scale-pink-0:#ffdaec;--color-scale-pink-1:#ffbedd;--color-scale-pink-2:#ff9bce;--color-scale-pink-3:#f778ba;--color-scale-pink-4:#db61a2;--color-scale-pink-5:#bf4b8a;--color-scale-pink-6:#9e3670;--color-scale-pink-7:#7d2457;--color-scale-pink-8:#5e103e;--color-scale-pink-9:#42062a;--color-scale-coral-0:#ffddd2;--color-scale-coral-1:#ffc2b2;--color-scale-coral-2:#ffa28b;--color-scale-coral-3:#f78166;--color-scale-coral-4:#ea6045;--color-scale-coral-5:#cf462d;--color-scale-coral-6:#ac3220;--color-scale-coral-7:#872012;--color-scale-coral-8:#640d04;--color-scale-coral-9:#460701}:root{--box-shadow:#0002 0px 1.6px 3.6px 0px, #0000001c 0px .3px .9px 0px;--box-shadow-thick:#0000001a 0px 1.8px 1.9px, #00000026 0px 6.1px 6.3px, #0000001a 0px -2px 4px, #00000026 0px -6.1px 12px, #00000040 0px 6px 12px}*{box-sizing:border-box;min-width:0;min-height:0}svg{fill:currentColor}.vbox{flex-direction:column;flex:auto;display:flex;position:relative}.hbox{flex:auto;display:flex;position:relative}.hidden{visibility:hidden}.d-flex{display:flex!important}.d-inline{display:inline!important}.m-1{margin:4px}.m-2{margin:8px}.m-3{margin:16px}.m-4{margin:24px}.m-5{margin:32px}.mx-1{margin:0 4px}.mx-2{margin:0 8px}.mx-3{margin:0 16px}.mx-4{margin:0 24px}.mx-5{margin:0 32px}.my-1{margin:4px 0}.my-2{margin:8px 0}.my-3{margin:16px 0}.my-4{margin:24px 0}.my-5{margin:32px 0}.mt-1{margin-top:4px}.mt-2{margin-top:8px}.mt-3{margin-top:16px}.mt-4{margin-top:24px}.mt-5{margin-top:32px}.mr-1{margin-right:4px}.mr-2{margin-right:8px}.mr-3{margin-right:16px}.mr-4{margin-right:24px}.mr-5{margin-right:32px}.mb-1{margin-bottom:4px}.mb-2{margin-bottom:8px}.mb-3{margin-bottom:16px}.mb-4{margin-bottom:24px}.mb-5{margin-bottom:32px}.ml-1{margin-left:4px}.ml-2{margin-left:8px}.ml-3{margin-left:16px}.ml-4{margin-left:24px}.ml-5{margin-left:32px}.p-1{padding:4px}.p-2{padding:8px}.p-3{padding:16px}.p-4{padding:24px}.p-5{padding:32px}.px-1{padding:0 4px}.px-2{padding:0 8px}.px-3{padding:0 16px}.px-4{padding:0 24px}.px-5{padding:0 32px}.py-1{padding:4px 0}.py-2{padding:8px 0}.py-3{padding:16px 0}.py-4{padding:24px 0}.py-5{padding:32px 0}.pt-1{padding-top:4px}.pt-2{padding-top:8px}.pt-3{padding-top:16px}.pt-4{padding-top:24px}.pt-5{padding-top:32px}.pr-1{padding-right:4px}.pr-2{padding-right:8px}.pr-3{padding-right:16px}.pr-4{padding-right:24px}.pr-5{padding-right:32px}.pb-1{padding-bottom:4px}.pb-2{padding-bottom:8px}.pb-3{padding-bottom:16px}.pb-4{padding-bottom:24px}.pb-5{padding-bottom:32px}.pl-1{padding-left:4px}.pl-2{padding-left:8px}.pl-3{padding-left:16px}.pl-4{padding-left:24px}.pl-5{padding-left:32px}.no-wrap{white-space:nowrap!important}.float-left{float:left!important}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}.form-control,.form-select{color:var(--color-fg-default);vertical-align:middle;background-color:var(--color-canvas-default);border:1px solid var(--color-border-default);box-shadow:var(--color-primer-shadow-inset);background-position:right 8px center;background-repeat:no-repeat;border-radius:6px;outline:none;padding:5px 12px;font-size:14px;line-height:20px}.input-contrast{background-color:var(--color-canvas-inset)}.subnav-search{flex:auto;display:flex;position:relative}.subnav-search-input{color:var(--color-fg-muted);flex:auto;padding-left:32px}.subnav-search-icon{color:var(--color-fg-muted);text-align:center;pointer-events:none;display:block;position:absolute;top:9px;left:8px}.subnav-search-context+.subnav-search{margin-left:-1px}.subnav-item{float:left;color:var(--color-fg-default);border:1px solid var(--color-border-default);-webkit-user-select:none;user-select:none;flex:none;padding:5px 8px;font-weight:500;line-height:20px;position:relative}button.subnav-item{font-family:inherit;font-size:inherit;cursor:pointer;background:0 0}.subnav-item:hover{background-color:var(--color-canvas-subtle)}.subnav-item:focus-visible{outline-color:var(--color-accent-fg);z-index:1}.subnav-item[aria-selected=true]{background:var(--color-control-transparent-bg-hover)}.subnav-item:first-child{border-top-left-radius:6px;border-bottom-left-radius:6px}.subnav-item:last-child{border-top-right-radius:6px;border-bottom-right-radius:6px}.subnav-item+.subnav-item{margin-left:-1px}.subnav-item .octicon,.subnav-item-label{margin-right:8px}.counter{min-width:20px;color:var(--color-fg-default);text-align:center;background-color:var(--color-neutral-muted);border:1px solid #0000;border-radius:2em;padding:0 6px;font-size:12px;font-weight:500;line-height:18px;display:inline-block}.color-icon-success{color:var(--color-success-fg)!important}.color-text-danger{color:var(--color-danger-fg)!important}.color-text-warning{color:var(--color-checks-step-warning-text)!important}.color-fg-muted{color:var(--color-fg-muted)!important}.octicon{vertical-align:text-bottom;fill:currentColor;flex:none;margin-right:7px;display:inline-block;overflow:visible!important}.button{border:1px solid var(--color-btn-border);height:24px;color:var(--color-btn-text);background:var(--color-btn-bg);cursor:pointer;border-radius:4px;outline:none;flex:none;justify-content:center;align-items:center;padding:4px;display:inline-flex}.button:not(:disabled):hover{border-color:var(--color-btn-hover-border);background-color:var(--color-btn-hover-bg)}input[type=checkbox]{outline:var(--color-focus-border);height:24px}dialog{background-color:var(--color-canvas-subtle);border:1px solid var(--color-border-default);border-radius:6px;padding:6px}.subnav-item .octicon.octicon-settings{margin-right:0}.subnav-item .octicon.octicon-clock{margin-right:0;color:var(--color-fg-default)!important}@media only screen and (width<=600px){.subnav-item,.form-control{border-radius:0!important}.subnav-item{border:none}.subnav-search-input{border-left:0;border-right:0}}.header-view-status-container{float:right}.header-view{padding:12px 8px 0}.header-view div{flex-wrap:wrap;flex-shrink:0}.header-superheader{color:var(--color-fg-muted)}.header-title{flex:none;font-size:32px;font-weight:400;line-height:1.25}.header-setting-theme{margin-left:22px;display:grid}@media only screen and (width<=600px){.header-view{padding:0}.header-view div{flex-shrink:1}.header-view-status-container{float:none;overflow:hidden;margin:0 0 10px!important}.header-view-status-container .subnav-search-input{border-left:none;border-right:none}.header-title,.header-superheader{margin:0 8px}}.copy-icon{width:24px;height:24px;color:var(--color-fg-muted);cursor:pointer;background:0 0;border:none;border-radius:4px;outline:none;flex:none;justify-content:center;align-items:center;padding:4px;display:inline-flex}.copy-icon svg{margin:0}.copy-icon:not(:disabled):hover{background-color:var(--color-border-default)}.copy-button-container{visibility:hidden;vertical-align:bottom;margin-left:8px;display:inline-flex}.copy-value-container:hover .copy-button-container{visibility:visible}.attachment-body{white-space:pre-wrap;background-color:var(--color-canvas-subtle);margin-left:24px;padding:8px;font-family:monospace;line-height:normal;position:relative}.attachment-body .copy-icon{position:absolute;top:5px;right:5px}.attachment-flash{animation:2s attachmentflash-bg}@keyframes attachmentflash-bg{0%{background:var(--color-attention-subtle)}to{background:0 0}}.link-badge{-webkit-user-select:none;user-select:none;background-color:#0000;border-color:#0000;flex:none}.link-badge-dim span{color:var(--color-fg-muted)}.link-badge:hover{cursor:pointer}.link-badge svg{fill:var(--color-fg-default)}.link-badge-dim svg,.link-badge-dim:hover svg{fill:var(--color-fg-muted)}.fullwidth-link{text-align:left;width:100%}.fullwidth-link:hover{background-color:var(--color-canvas-subtle)}.trace-link{margin-right:3px}.trace-link-separator{color:var(--color-fg-muted);-webkit-user-select:none;user-select:none}.expandable-summary{cursor:pointer;white-space:nowrap;padding-left:4px;list-style:none}.label{background-color:var(--color-scale-gray-4);color:#fff;cursor:pointer;border:1px solid #0000;border-radius:2em;flex:none;margin:0 10px;padding:0 8px;font-size:12px;font-weight:600;line-height:18px;display:inline-block}.label-anchor{color:var(--color-fg-default);text-decoration:none}:root.light-mode .label-color-0{background-color:var(--color-scale-blue-0);color:var(--color-scale-blue-6);border:1px solid var(--color-scale-blue-4)}:root.light-mode .label-color-1{background-color:var(--color-scale-yellow-0);color:var(--color-scale-yellow-6);border:1px solid var(--color-scale-yellow-4)}:root.light-mode .label-color-2{background-color:var(--color-scale-purple-0);color:var(--color-scale-purple-6);border:1px solid var(--color-scale-purple-4)}:root.light-mode .label-color-3{background-color:var(--color-scale-pink-0);color:var(--color-scale-pink-6);border:1px solid var(--color-scale-pink-4)}:root.light-mode .label-color-4{background-color:var(--color-scale-coral-0);color:var(--color-scale-coral-6);border:1px solid var(--color-scale-coral-4)}:root.light-mode .label-color-5{background-color:var(--color-scale-orange-0);color:var(--color-scale-orange-6);border:1px solid var(--color-scale-orange-4)}:root.dark-mode .label-color-0{background-color:var(--color-scale-blue-9);color:var(--color-scale-blue-2);border:1px solid var(--color-scale-blue-4)}:root.dark-mode .label-color-1{background-color:var(--color-scale-yellow-9);color:var(--color-scale-yellow-2);border:1px solid var(--color-scale-yellow-4)}:root.dark-mode .label-color-2{background-color:var(--color-scale-purple-9);color:var(--color-scale-purple-2);border:1px solid var(--color-scale-purple-4)}:root.dark-mode .label-color-3{background-color:var(--color-scale-pink-9);color:var(--color-scale-pink-2);border:1px solid var(--color-scale-pink-4)}:root.dark-mode .label-color-4{background-color:var(--color-scale-coral-9);color:var(--color-scale-coral-2);border:1px solid var(--color-scale-coral-4)}:root.dark-mode .label-color-5{background-color:var(--color-scale-orange-9);color:var(--color-scale-orange-2);border:1px solid var(--color-scale-orange-4)}.label-row .label{margin:0}.label-row .label:not(:first-child){margin-left:6px}html,body{overscroll-behavior-x:none;width:100%;height:100%;margin:0;padding:0}body{width:100%;max-width:1024px;margin:0 auto;overflow:auto}.test-file-test:not(:first-child){border-top:1px solid var(--color-border-default)}@media only screen and (width<=600px){.htmlreport{padding:0!important}}.tabbed-pane{flex:auto;display:flex;overflow:hidden}.tabbed-pane-tab-strip{z-index:2;width:100%;color:var(--color-fg-default);flex:none;align-items:center;min-width:70px;height:48px;padding-right:10px;font-size:14px;line-height:32px;display:flex;box-shadow:inset 0 -1px 0 var(--color-border-muted)!important}.tabbed-pane-tab-strip:focus{outline:none}.tabbed-pane-tab-element{cursor:pointer;-webkit-user-select:none;user-select:none;color:inherit;font:inherit;background:0 0;border:none;border-bottom:2px solid #0000;outline:none;flex:none;justify-content:center;align-items:center;height:100%;margin-right:4px;padding:4px 8px 0;display:flex}.tabbed-pane-tab-element:focus-visible{outline:1px solid var(--color-accent-fg);outline-offset:-1px}.tabbed-pane-tab-label{white-space:pre;text-overflow:ellipsis;border-radius:6px;max-width:250px;height:30px;padding:0 8px;display:inline-block;overflow:hidden}.tabbed-pane-tab-label:hover{background-color:var(--color-control-transparent-bg-hover)}.tabbed-pane-tab-element.selected{-webkit-text-stroke:.5px currentColor;border-bottom-color:#666}.chip-header{border:1px solid var(--color-border-default);background-color:var(--color-canvas-subtle);width:100%;color:inherit;font:inherit;text-align:left;white-space:nowrap;text-overflow:ellipsis;-webkit-user-select:none;user-select:none;border-bottom:none;border-top-left-radius:6px;border-top-right-radius:6px;margin:12px 0 0;padding:0 8px;font-weight:600;line-height:38px;display:block;overflow:hidden}.chip-header:focus-visible{outline:1px solid var(--color-accent-fg);outline-offset:-1px}.chip-header-allow-selection{-webkit-user-select:text;user-select:text}.chip-header.expanded-false{border:1px solid var(--color-border-default);border-radius:6px}.chip-header.expanded-false,.chip-header.expanded-true{cursor:pointer}.chip-body{border:1px solid var(--color-border-default);border-bottom-right-radius:6px;border-bottom-left-radius:6px;margin-bottom:12px;padding:16px;overflow:hidden}.chip-body-no-insets{padding:0}.chip-footer{border-top:1px solid var(--color-border-default)}@media only screen and (width<=600px){.chip-header{border-left:none;border-right:none;border-radius:0}.chip-body{border-left:none;border-right:none;border-radius:0;padding:8px}.chip-body-no-insets{padding:0}}.test-case-column{border-radius:6px;margin-bottom:24px}.test-case-column .tab-element.selected{border-bottom-color:var(--color-primer-border-active);font-weight:600}.test-case-column .tab-element{color:var(--color-fg-default);border:none;border-bottom:2px solid #0000}.test-case-column .tab-element:hover{color:var(--color-fg-default)}.test-case-location,.test-case-duration{flex:none;align-items:center;padding:0 8px 8px}.selected .test-case-run-duration{-webkit-text-stroke:0}.test-case-run-duration{color:var(--color-fg-muted);padding-left:8px}.header-view .test-case-path{flex:0 auto;align-items:center;padding-right:8px}.test-case-annotation{white-space:pre-wrap;flex:none;align-items:center;padding:0 8px;line-height:24px}@media only screen and (width<=600px){.test-case-column{border-radius:0!important;margin:0!important}}.tree-item{flex-direction:column;min-width:0;line-height:38px;display:flex;overflow:hidden}.tree-item-title{cursor:pointer;text-overflow:ellipsis;align-items:center;min-width:0;display:flex;overflow:hidden}.tree-item-body{min-height:18px}.yellow-flash{animation:2s yellowflash-bg}@keyframes yellowflash-bg{0%{background:var(--color-attention-subtle)}to{background:0 0}}.image-diff-mode{all:unset;cursor:pointer;-webkit-user-select:none;user-select:none;border-radius:4px;flex:none;margin:0 10px}.image-diff-mode:focus-visible{outline:1px solid var(--vscode-focusBorder,var(--color-accent-fg));outline-offset:2px}:root{--vscode-font-family:system-ui, "Ubuntu", "Droid Sans", sans-serif;--vscode-font-weight:normal;--vscode-font-size:13px;--vscode-editor-font-family:"Droid Sans Mono", "monospace", monospace;--vscode-editor-font-weight:normal;--vscode-editor-font-size:14px;--vscode-foreground:#616161;--vscode-disabledForeground:#61616180;--vscode-errorForeground:#a1260d;--vscode-descriptionForeground:#717171;--vscode-icon-foreground:#424242;--vscode-focusBorder:#0090f1;--vscode-textSeparator-foreground:#0000002e;--vscode-textLink-foreground:#006ab1;--vscode-textLink-activeForeground:#006ab1;--vscode-textPreformat-foreground:#a31515;--vscode-textBlockQuote-background:#7f7f7f1a;--vscode-textBlockQuote-border:#007acc80;--vscode-textCodeBlock-background:#dcdcdc66;--vscode-widget-shadow:#00000029;--vscode-input-background:#fff;--vscode-input-foreground:#616161;--vscode-inputOption-activeBorder:#007acc;--vscode-inputOption-hoverBackground:#b8b8b84f;--vscode-inputOption-activeBackground:#0090f133;--vscode-inputOption-activeForeground:#000;--vscode-input-placeholderForeground:#767676;--vscode-inputValidation-infoBackground:#d6ecf2;--vscode-inputValidation-infoBorder:#007acc;--vscode-inputValidation-warningBackground:#f6f5d2;--vscode-inputValidation-warningBorder:#b89500;--vscode-inputValidation-errorBackground:#f2dede;--vscode-inputValidation-errorBorder:#be1100;--vscode-dropdown-background:#fff;--vscode-dropdown-border:#cecece;--vscode-checkbox-background:#fff;--vscode-checkbox-border:#cecece;--vscode-button-foreground:#fff;--vscode-button-separator:#fff6;--vscode-button-background:#007acc;--vscode-button-hoverBackground:#0062a3;--vscode-button-secondaryForeground:#fff;--vscode-button-secondaryBackground:#5f6a79;--vscode-button-secondaryHoverBackground:#4c5561;--vscode-badge-background:#c4c4c4;--vscode-badge-foreground:#333;--vscode-scrollbar-shadow:#ddd;--vscode-scrollbarSlider-background:#64646466;--vscode-scrollbarSlider-hoverBackground:#646464b3;--vscode-scrollbarSlider-activeBackground:#0009;--vscode-progressBar-background:#0e70c0;--vscode-editorError-foreground:#e51400;--vscode-editorWarning-foreground:#bf8803;--vscode-editorInfo-foreground:#1a85ff;--vscode-editorHint-foreground:#6c6c6c;--vscode-sash-hoverBorder:#0090f1;--vscode-editor-background:#fff;--vscode-editor-foreground:#000;--vscode-editorStickyScroll-background:#fff;--vscode-editorStickyScrollHover-background:#f0f0f0;--vscode-editorWidget-background:#f3f3f3;--vscode-editorWidget-foreground:#616161;--vscode-editorWidget-border:#c8c8c8;--vscode-quickInput-background:#f3f3f3;--vscode-quickInput-foreground:#616161;--vscode-quickInputTitle-background:#0000000f;--vscode-pickerGroup-foreground:#0066bf;--vscode-pickerGroup-border:#cccedb;--vscode-keybindingLabel-background:#ddd6;--vscode-keybindingLabel-foreground:#555;--vscode-keybindingLabel-border:#ccc6;--vscode-keybindingLabel-bottomBorder:#bbb6;--vscode-editor-selectionBackground:#add6ff;--vscode-editor-inactiveSelectionBackground:#e5ebf1;--vscode-editor-selectionHighlightBackground:#add6ff80;--vscode-editor-findMatchBackground:#a8ac94;--vscode-editor-findMatchHighlightBackground:#ea5c0054;--vscode-editor-findRangeHighlightBackground:#b4b4b44d;--vscode-searchEditor-findMatchBackground:#ea5c0038;--vscode-editor-hoverHighlightBackground:#add6ff26;--vscode-editorHoverWidget-background:#f3f3f3;--vscode-editorHoverWidget-foreground:#616161;--vscode-editorHoverWidget-border:#c8c8c8;--vscode-editorHoverWidget-statusBarBackground:#e7e7e7;--vscode-editorLink-activeForeground:#00f;--vscode-editorInlayHint-foreground:#333c;--vscode-editorInlayHint-background:#c4c4c44d;--vscode-editorInlayHint-typeForeground:#333c;--vscode-editorInlayHint-typeBackground:#c4c4c44d;--vscode-editorInlayHint-parameterForeground:#333c;--vscode-editorInlayHint-parameterBackground:#c4c4c44d;--vscode-editorLightBulb-foreground:#ddb100;--vscode-editorLightBulbAutoFix-foreground:#007acc;--vscode-diffEditor-insertedTextBackground:#9ccc2c66;--vscode-diffEditor-removedTextBackground:#ff00004d;--vscode-diffEditor-insertedLineBackground:#9bb95533;--vscode-diffEditor-removedLineBackground:#f003;--vscode-diffEditor-diagonalFill:#2223;--vscode-list-focusOutline:#0090f1;--vscode-list-focusAndSelectionOutline:#90c2f9;--vscode-list-activeSelectionBackground:#0060c0;--vscode-list-activeSelectionForeground:#fff;--vscode-list-activeSelectionIconForeground:#fff;--vscode-list-inactiveSelectionBackground:#e4e6f1;--vscode-list-hoverBackground:#e8e8e8;--vscode-list-dropBackground:#d6ebff;--vscode-list-highlightForeground:#0066bf;--vscode-list-focusHighlightForeground:#bbe7ff;--vscode-list-invalidItemForeground:#b89500;--vscode-list-errorForeground:#b01011;--vscode-list-warningForeground:#855f00;--vscode-listFilterWidget-background:#f3f3f3;--vscode-listFilterWidget-outline:#0000;--vscode-listFilterWidget-noMatchesOutline:#be1100;--vscode-listFilterWidget-shadow:#00000029;--vscode-list-filterMatchBackground:#ea5c0054;--vscode-tree-indentGuidesStroke:#a9a9a9;--vscode-tree-tableColumnsBorder:#61616121;--vscode-tree-tableOddRowsBackground:#6161610a;--vscode-list-deemphasizedForeground:#8e8e90;--vscode-quickInputList-focusForeground:#fff;--vscode-quickInputList-focusIconForeground:#fff;--vscode-quickInputList-focusBackground:#0060c0;--vscode-menu-foreground:#616161;--vscode-menu-background:#fff;--vscode-menu-selectionForeground:#fff;--vscode-menu-selectionBackground:#0060c0;--vscode-menu-separatorBackground:#d4d4d4;--vscode-toolbar-hoverBackground:#b8b8b84f;--vscode-toolbar-activeBackground:#a6a6a64f;--vscode-editor-snippetTabstopHighlightBackground:#0a326433;--vscode-editor-snippetFinalTabstopHighlightBorder:#0a326480;--vscode-breadcrumb-foreground:#616161cc;--vscode-breadcrumb-background:#fff;--vscode-breadcrumb-focusForeground:#4e4e4e;--vscode-breadcrumb-activeSelectionForeground:#4e4e4e;--vscode-breadcrumbPicker-background:#f3f3f3;--vscode-merge-currentHeaderBackground:#40c8ae80;--vscode-merge-currentContentBackground:#40c8ae33;--vscode-merge-incomingHeaderBackground:#40a6ff80;--vscode-merge-incomingContentBackground:#40a6ff33;--vscode-merge-commonHeaderBackground:#60606066;--vscode-merge-commonContentBackground:#60606029;--vscode-editorOverviewRuler-currentContentForeground:#40c8ae80;--vscode-editorOverviewRuler-incomingContentForeground:#40a6ff80;--vscode-editorOverviewRuler-commonContentForeground:#60606066;--vscode-editorOverviewRuler-findMatchForeground:#d186167d;--vscode-editorOverviewRuler-selectionHighlightForeground:#a0a0a0cc;--vscode-minimap-findMatchHighlight:#d18616;--vscode-minimap-selectionOccurrenceHighlight:#c9c9c9;--vscode-minimap-selectionHighlight:#add6ff;--vscode-minimap-errorHighlight:#ff1212b3;--vscode-minimap-warningHighlight:#bf8803;--vscode-minimap-foregroundOpacity:#000;--vscode-minimapSlider-background:#64646433;--vscode-minimapSlider-hoverBackground:#64646459;--vscode-minimapSlider-activeBackground:#0000004d;--vscode-problemsErrorIcon-foreground:#e51400;--vscode-problemsWarningIcon-foreground:#bf8803;--vscode-problemsInfoIcon-foreground:#1a85ff;--vscode-charts-foreground:#616161;--vscode-charts-lines:#61616180;--vscode-charts-red:#e51400;--vscode-charts-blue:#1a85ff;--vscode-charts-yellow:#bf8803;--vscode-charts-orange:#d18616;--vscode-charts-green:#388a34;--vscode-charts-purple:#652d90;--vscode-editor-lineHighlightBorder:#eee;--vscode-editor-rangeHighlightBackground:#fdff0033;--vscode-editor-symbolHighlightBackground:#ea5c0054;--vscode-editorCursor-foreground:#000;--vscode-editorWhitespace-foreground:#3333;--vscode-editorIndentGuide-background:#d3d3d3;--vscode-editorIndentGuide-activeBackground:#939393;--vscode-editorLineNumber-foreground:#237893;--vscode-editorActiveLineNumber-foreground:#0b216f;--vscode-editorLineNumber-activeForeground:#0b216f;--vscode-editorRuler-foreground:#d3d3d3;--vscode-editorCodeLens-foreground:#919191;--vscode-editorBracketMatch-background:#0064001a;--vscode-editorBracketMatch-border:#b9b9b9;--vscode-editorOverviewRuler-border:#7f7f7f4d;--vscode-editorGutter-background:#fff;--vscode-editorUnnecessaryCode-opacity:#00000078;--vscode-editorGhostText-foreground:#00000078;--vscode-editorOverviewRuler-rangeHighlightForeground:#007acc99;--vscode-editorOverviewRuler-errorForeground:#ff1212b3;--vscode-editorOverviewRuler-warningForeground:#bf8803;--vscode-editorOverviewRuler-infoForeground:#1a85ff;--vscode-editorBracketHighlight-foreground1:#0431fa;--vscode-editorBracketHighlight-foreground2:#319331;--vscode-editorBracketHighlight-foreground3:#7b3814;--vscode-editorBracketHighlight-foreground4:#0000;--vscode-editorBracketHighlight-foreground5:#0000;--vscode-editorBracketHighlight-foreground6:#0000;--vscode-editorBracketHighlight-unexpectedBracket\.foreground:#ff1212cc;--vscode-editorBracketPairGuide-background1:#0000;--vscode-editorBracketPairGuide-background2:#0000;--vscode-editorBracketPairGuide-background3:#0000;--vscode-editorBracketPairGuide-background4:#0000;--vscode-editorBracketPairGuide-background5:#0000;--vscode-editorBracketPairGuide-background6:#0000;--vscode-editorBracketPairGuide-activeBackground1:#0000;--vscode-editorBracketPairGuide-activeBackground2:#0000;--vscode-editorBracketPairGuide-activeBackground3:#0000;--vscode-editorBracketPairGuide-activeBackground4:#0000;--vscode-editorBracketPairGuide-activeBackground5:#0000;--vscode-editorBracketPairGuide-activeBackground6:#0000;--vscode-editorUnicodeHighlight-border:#cea33d;--vscode-editorUnicodeHighlight-background:#cea33d14;--vscode-symbolIcon-arrayForeground:#616161;--vscode-symbolIcon-booleanForeground:#616161;--vscode-symbolIcon-classForeground:#d67e00;--vscode-symbolIcon-colorForeground:#616161;--vscode-symbolIcon-constantForeground:#616161;--vscode-symbolIcon-constructorForeground:#652d90;--vscode-symbolIcon-enumeratorForeground:#d67e00;--vscode-symbolIcon-enumeratorMemberForeground:#007acc;--vscode-symbolIcon-eventForeground:#d67e00;--vscode-symbolIcon-fieldForeground:#007acc;--vscode-symbolIcon-fileForeground:#616161;--vscode-symbolIcon-folderForeground:#616161;--vscode-symbolIcon-functionForeground:#652d90;--vscode-symbolIcon-interfaceForeground:#007acc;--vscode-symbolIcon-keyForeground:#616161;--vscode-symbolIcon-keywordForeground:#616161;--vscode-symbolIcon-methodForeground:#652d90;--vscode-symbolIcon-moduleForeground:#616161;--vscode-symbolIcon-namespaceForeground:#616161;--vscode-symbolIcon-nullForeground:#616161;--vscode-symbolIcon-numberForeground:#616161;--vscode-symbolIcon-objectForeground:#616161;--vscode-symbolIcon-operatorForeground:#616161;--vscode-symbolIcon-packageForeground:#616161;--vscode-symbolIcon-propertyForeground:#616161;--vscode-symbolIcon-referenceForeground:#616161;--vscode-symbolIcon-snippetForeground:#616161;--vscode-symbolIcon-stringForeground:#616161;--vscode-symbolIcon-structForeground:#616161;--vscode-symbolIcon-textForeground:#616161;--vscode-symbolIcon-typeParameterForeground:#616161;--vscode-symbolIcon-unitForeground:#616161;--vscode-symbolIcon-variableForeground:#007acc;--vscode-editorHoverWidget-highlightForeground:#0066bf;--vscode-editorOverviewRuler-bracketMatchForeground:#a0a0a0;--vscode-editor-foldBackground:#add6ff4d;--vscode-editorGutter-foldingControlForeground:#424242;--vscode-editor-linkedEditingBackground:#ff00004d;--vscode-editor-wordHighlightBackground:#57575740;--vscode-editor-wordHighlightStrongBackground:#0e639c40;--vscode-editorOverviewRuler-wordHighlightForeground:#a0a0a0cc;--vscode-editorOverviewRuler-wordHighlightStrongForeground:#c0a0c0cc;--vscode-peekViewTitle-background:#1a85ff1a;--vscode-peekViewTitleLabel-foreground:#000;--vscode-peekViewTitleDescription-foreground:#616161;--vscode-peekView-border:#1a85ff;--vscode-peekViewResult-background:#f3f3f3;--vscode-peekViewResult-lineForeground:#646465;--vscode-peekViewResult-fileForeground:#1e1e1e;--vscode-peekViewResult-selectionBackground:#39f3;--vscode-peekViewResult-selectionForeground:#6c6c6c;--vscode-peekViewEditor-background:#f2f8fc;--vscode-peekViewEditorGutter-background:#f2f8fc;--vscode-peekViewResult-matchHighlightBackground:#ea5c004d;--vscode-peekViewEditor-matchHighlightBackground:#f5d802de;--vscode-editorMarkerNavigationError-background:#e51400;--vscode-editorMarkerNavigationError-headerBackground:#e514001a;--vscode-editorMarkerNavigationWarning-background:#bf8803;--vscode-editorMarkerNavigationWarning-headerBackground:#bf88031a;--vscode-editorMarkerNavigationInfo-background:#1a85ff;--vscode-editorMarkerNavigationInfo-headerBackground:#1a85ff1a;--vscode-editorMarkerNavigation-background:#fff;--vscode-editorSuggestWidget-background:#f3f3f3;--vscode-editorSuggestWidget-border:#c8c8c8;--vscode-editorSuggestWidget-foreground:#000;--vscode-editorSuggestWidget-selectedForeground:#fff;--vscode-editorSuggestWidget-selectedIconForeground:#fff;--vscode-editorSuggestWidget-selectedBackground:#0060c0;--vscode-editorSuggestWidget-highlightForeground:#0066bf;--vscode-editorSuggestWidget-focusHighlightForeground:#bbe7ff;--vscode-editorSuggestWidgetStatus-foreground:#00000080;--vscode-tab-activeBackground:#fff;--vscode-tab-unfocusedActiveBackground:#fff;--vscode-tab-inactiveBackground:#ececec;--vscode-tab-unfocusedInactiveBackground:#ececec;--vscode-tab-activeForeground:#333;--vscode-tab-inactiveForeground:#333333b3;--vscode-tab-unfocusedActiveForeground:#333333b3;--vscode-tab-unfocusedInactiveForeground:#33333359;--vscode-tab-border:#f3f3f3;--vscode-tab-lastPinnedBorder:#61616130;--vscode-tab-activeModifiedBorder:#3ae;--vscode-tab-inactiveModifiedBorder:#33aaee80;--vscode-tab-unfocusedActiveModifiedBorder:#33aaeeb3;--vscode-tab-unfocusedInactiveModifiedBorder:#33aaee40;--vscode-editorPane-background:#fff;--vscode-editorGroupHeader-tabsBackground:#f3f3f3;--vscode-editorGroupHeader-noTabsBackground:#fff;--vscode-editorGroup-border:#e7e7e7;--vscode-editorGroup-dropBackground:#2677cb2e;--vscode-editorGroup-dropIntoPromptForeground:#616161;--vscode-editorGroup-dropIntoPromptBackground:#f3f3f3;--vscode-sideBySideEditor-horizontalBorder:#e7e7e7;--vscode-sideBySideEditor-verticalBorder:#e7e7e7;--vscode-panel-background:#fff;--vscode-panel-border:#80808059;--vscode-panelTitle-activeForeground:#424242;--vscode-panelTitle-inactiveForeground:#424242bf;--vscode-panelTitle-activeBorder:#424242;--vscode-panelInput-border:#ddd;--vscode-panel-dropBorder:#424242;--vscode-panelSection-dropBackground:#2677cb2e;--vscode-panelSectionHeader-background:#80808033;--vscode-panelSection-border:#80808059;--vscode-banner-background:#004386;--vscode-banner-foreground:#fff;--vscode-banner-iconForeground:#1a85ff;--vscode-statusBar-foreground:#fff;--vscode-statusBar-noFolderForeground:#fff;--vscode-statusBar-background:#007acc;--vscode-statusBar-noFolderBackground:#68217a;--vscode-statusBar-focusBorder:#fff;--vscode-statusBarItem-activeBackground:#ffffff2e;--vscode-statusBarItem-focusBorder:#fff;--vscode-statusBarItem-hoverBackground:#ffffff1f;--vscode-statusBarItem-compactHoverBackground:#fff3;--vscode-statusBarItem-prominentForeground:#fff;--vscode-statusBarItem-prominentBackground:#00000080;--vscode-statusBarItem-prominentHoverBackground:#0000004d;--vscode-statusBarItem-errorBackground:#c72e0f;--vscode-statusBarItem-errorForeground:#fff;--vscode-statusBarItem-warningBackground:#725102;--vscode-statusBarItem-warningForeground:#fff;--vscode-activityBar-background:#2c2c2c;--vscode-activityBar-foreground:#fff;--vscode-activityBar-inactiveForeground:#fff6;--vscode-activityBar-activeBorder:#fff;--vscode-activityBar-dropBorder:#fff;--vscode-activityBarBadge-background:#007acc;--vscode-activityBarBadge-foreground:#fff;--vscode-statusBarItem-remoteBackground:#16825d;--vscode-statusBarItem-remoteForeground:#fff;--vscode-extensionBadge-remoteBackground:#007acc;--vscode-extensionBadge-remoteForeground:#fff;--vscode-sideBar-background:#f3f3f3;--vscode-sideBarTitle-foreground:#6f6f6f;--vscode-sideBar-dropBackground:#2677cb2e;--vscode-sideBarSectionHeader-background:#0000;--vscode-sideBarSectionHeader-border:#61616130;--vscode-titleBar-activeForeground:#333;--vscode-titleBar-inactiveForeground:#3339;--vscode-titleBar-activeBackground:#ddd;--vscode-titleBar-inactiveBackground:#ddd9;--vscode-menubar-selectionForeground:#333;--vscode-menubar-selectionBackground:#b8b8b84f;--vscode-notifications-foreground:#616161;--vscode-notifications-background:#f3f3f3;--vscode-notificationLink-foreground:#006ab1;--vscode-notificationCenterHeader-background:#e7e7e7;--vscode-notifications-border:#e7e7e7;--vscode-notificationsErrorIcon-foreground:#e51400;--vscode-notificationsWarningIcon-foreground:#bf8803;--vscode-notificationsInfoIcon-foreground:#1a85ff;--vscode-commandCenter-foreground:#333;--vscode-commandCenter-activeForeground:#333;--vscode-commandCenter-activeBackground:#b8b8b84f;--vscode-commandCenter-border:#80808059;--vscode-editorCommentsWidget-resolvedBorder:#61616180;--vscode-editorCommentsWidget-unresolvedBorder:#1a85ff;--vscode-editorCommentsWidget-rangeBackground:#1a85ff1a;--vscode-editorCommentsWidget-rangeBorder:#1a85ff66;--vscode-editorCommentsWidget-rangeActiveBackground:#1a85ff1a;--vscode-editorCommentsWidget-rangeActiveBorder:#1a85ff66;--vscode-editorGutter-commentRangeForeground:#d5d8e9;--vscode-debugToolBar-background:#f3f3f3;--vscode-debugIcon-startForeground:#388a34;--vscode-editor-stackFrameHighlightBackground:#ffff6673;--vscode-editor-focusedStackFrameHighlightBackground:#cee7ce73;--vscode-mergeEditor-change\.background:#9bb95533;--vscode-mergeEditor-change\.word\.background:#9ccc2c66;--vscode-mergeEditor-conflict\.unhandledUnfocused\.border:#ffa6007a;--vscode-mergeEditor-conflict\.unhandledFocused\.border:#ffa600;--vscode-mergeEditor-conflict\.handledUnfocused\.border:#8686864a;--vscode-mergeEditor-conflict\.handledFocused\.border:#c1c1c1cc;--vscode-mergeEditor-conflict\.handled\.minimapOverViewRuler:#adaca8ed;--vscode-mergeEditor-conflict\.unhandled\.minimapOverViewRuler:#fcba03;--vscode-mergeEditor-conflictingLines\.background:#ffea0047;--vscode-settings-headerForeground:#444;--vscode-settings-modifiedItemIndicator:#66afe0;--vscode-settings-headerBorder:#80808059;--vscode-settings-sashBorder:#80808059;--vscode-settings-dropdownBackground:#fff;--vscode-settings-dropdownBorder:#cecece;--vscode-settings-dropdownListBorder:#c8c8c8;--vscode-settings-checkboxBackground:#fff;--vscode-settings-checkboxBorder:#cecece;--vscode-settings-textInputBackground:#fff;--vscode-settings-textInputForeground:#616161;--vscode-settings-textInputBorder:#cecece;--vscode-settings-numberInputBackground:#fff;--vscode-settings-numberInputForeground:#616161;--vscode-settings-numberInputBorder:#cecece;--vscode-settings-focusedRowBackground:#e8e8e899;--vscode-settings-rowHoverBackground:#e8e8e84d;--vscode-settings-focusedRowBorder:#0000001f;--vscode-terminal-foreground:#333;--vscode-terminal-selectionBackground:#add6ff;--vscode-terminal-inactiveSelectionBackground:#e5ebf1;--vscode-terminalCommandDecoration-defaultBackground:#00000040;--vscode-terminalCommandDecoration-successBackground:#2090d3;--vscode-terminalCommandDecoration-errorBackground:#e51400;--vscode-terminalOverviewRuler-cursorForeground:#a0a0a0cc;--vscode-terminal-border:#80808059;--vscode-terminal-findMatchBackground:#a8ac94;--vscode-terminal-findMatchHighlightBackground:#ea5c0054;--vscode-terminalOverviewRuler-findMatchForeground:#d186167d;--vscode-terminal-dropBackground:#2677cb2e;--vscode-testing-iconFailed:#f14c4c;--vscode-testing-iconErrored:#f14c4c;--vscode-testing-iconPassed:#73c991;--vscode-testing-runAction:#73c991;--vscode-testing-iconQueued:#cca700;--vscode-testing-iconUnset:#848484;--vscode-testing-iconSkipped:#848484;--vscode-testing-peekBorder:#e51400;--vscode-testing-peekHeaderBackground:#e514001a;--vscode-testing-message\.error\.decorationForeground:#e51400;--vscode-testing-message\.error\.lineBackground:#f003;--vscode-testing-message\.info\.decorationForeground:#00000080;--vscode-welcomePage-tileBackground:#f3f3f3;--vscode-welcomePage-tileHoverBackground:#dbdbdb;--vscode-welcomePage-tileShadow:#00000029;--vscode-welcomePage-progress\.background:#fff;--vscode-welcomePage-progress\.foreground:#006ab1;--vscode-debugExceptionWidget-border:#a31515;--vscode-debugExceptionWidget-background:#f1dfde;--vscode-ports-iconRunningProcessForeground:#369432;--vscode-statusBar-debuggingBackground:#c63;--vscode-statusBar-debuggingForeground:#fff;--vscode-editor-inlineValuesForeground:#00000080;--vscode-editor-inlineValuesBackground:#ffc80033;--vscode-editorGutter-modifiedBackground:#2090d3;--vscode-editorGutter-addedBackground:#48985d;--vscode-editorGutter-deletedBackground:#e51400;--vscode-minimapGutter-modifiedBackground:#2090d3;--vscode-minimapGutter-addedBackground:#48985d;--vscode-minimapGutter-deletedBackground:#e51400;--vscode-editorOverviewRuler-modifiedForeground:#2090d399;--vscode-editorOverviewRuler-addedForeground:#48985d99;--vscode-editorOverviewRuler-deletedForeground:#e5140099;--vscode-debugIcon-breakpointForeground:#e51400;--vscode-debugIcon-breakpointDisabledForeground:#848484;--vscode-debugIcon-breakpointUnverifiedForeground:#848484;--vscode-debugIcon-breakpointCurrentStackframeForeground:#be8700;--vscode-debugIcon-breakpointStackframeForeground:#89d185;--vscode-notebook-cellBorderColor:#e8e8e8;--vscode-notebook-focusedEditorBorder:#0090f1;--vscode-notebookStatusSuccessIcon-foreground:#388a34;--vscode-notebookStatusErrorIcon-foreground:#a1260d;--vscode-notebookStatusRunningIcon-foreground:#616161;--vscode-notebook-cellToolbarSeparator:#80808059;--vscode-notebook-selectedCellBackground:#c8ddf14f;--vscode-notebook-selectedCellBorder:#e8e8e8;--vscode-notebook-focusedCellBorder:#0090f1;--vscode-notebook-inactiveFocusedCellBorder:#e8e8e8;--vscode-notebook-cellStatusBarItemHoverBackground:#00000014;--vscode-notebook-cellInsertionIndicator:#0090f1;--vscode-notebookScrollbarSlider-background:#64646466;--vscode-notebookScrollbarSlider-hoverBackground:#646464b3;--vscode-notebookScrollbarSlider-activeBackground:#0009;--vscode-notebook-symbolHighlightBackground:#fdff0033;--vscode-notebook-cellEditorBackground:#f3f3f3;--vscode-notebook-editorBackground:#fff;--vscode-keybindingTable-headerBackground:#6161610a;--vscode-keybindingTable-rowsBackground:#6161610a;--vscode-scm-providerBorder:#c8c8c8;--vscode-searchEditor-textInputBorder:#cecece;--vscode-debugTokenExpression-name:#9b46b0;--vscode-debugTokenExpression-value:#6c6c6ccc;--vscode-debugTokenExpression-string:#a31515;--vscode-debugTokenExpression-boolean:#00f;--vscode-debugTokenExpression-number:#098658;--vscode-debugTokenExpression-error:#e51400;--vscode-debugView-exceptionLabelForeground:#fff;--vscode-debugView-exceptionLabelBackground:#a31515;--vscode-debugView-stateLabelForeground:#616161;--vscode-debugView-stateLabelBackground:#88888845;--vscode-debugView-valueChangedHighlight:#569cd6;--vscode-debugConsole-infoForeground:#1a85ff;--vscode-debugConsole-warningForeground:#bf8803;--vscode-debugConsole-errorForeground:#a1260d;--vscode-debugConsole-sourceForeground:#616161;--vscode-debugConsoleInputIcon-foreground:#616161;--vscode-debugIcon-pauseForeground:#007acc;--vscode-debugIcon-stopForeground:#a1260d;--vscode-debugIcon-disconnectForeground:#a1260d;--vscode-debugIcon-restartForeground:#388a34;--vscode-debugIcon-stepOverForeground:#007acc;--vscode-debugIcon-stepIntoForeground:#007acc;--vscode-debugIcon-stepOutForeground:#007acc;--vscode-debugIcon-continueForeground:#007acc;--vscode-debugIcon-stepBackForeground:#007acc;--vscode-extensionButton-prominentBackground:#007acc;--vscode-extensionButton-prominentForeground:#fff;--vscode-extensionButton-prominentHoverBackground:#0062a3;--vscode-extensionIcon-starForeground:#df6100;--vscode-extensionIcon-verifiedForeground:#006ab1;--vscode-extensionIcon-preReleaseForeground:#1d9271;--vscode-extensionIcon-sponsorForeground:#b51e78;--vscode-terminal-ansiBlack:#000;--vscode-terminal-ansiRed:#cd3131;--vscode-terminal-ansiGreen:#00bc00;--vscode-terminal-ansiYellow:#949800;--vscode-terminal-ansiBlue:#0451a5;--vscode-terminal-ansiMagenta:#bc05bc;--vscode-terminal-ansiCyan:#0598bc;--vscode-terminal-ansiWhite:#555;--vscode-terminal-ansiBrightBlack:#666;--vscode-terminal-ansiBrightRed:#cd3131;--vscode-terminal-ansiBrightGreen:#14ce14;--vscode-terminal-ansiBrightYellow:#b5ba00;--vscode-terminal-ansiBrightBlue:#0451a5;--vscode-terminal-ansiBrightMagenta:#bc05bc;--vscode-terminal-ansiBrightCyan:#0598bc;--vscode-terminal-ansiBrightWhite:#a5a5a5;--vscode-interactive-activeCodeBorder:#1a85ff;--vscode-interactive-inactiveCodeBorder:#e4e6f1;--vscode-gitDecoration-addedResourceForeground:#587c0c;--vscode-gitDecoration-modifiedResourceForeground:#895503;--vscode-gitDecoration-deletedResourceForeground:#ad0707;--vscode-gitDecoration-renamedResourceForeground:#007100;--vscode-gitDecoration-untrackedResourceForeground:#007100;--vscode-gitDecoration-ignoredResourceForeground:#8e8e90;--vscode-gitDecoration-stageModifiedResourceForeground:#895503;--vscode-gitDecoration-stageDeletedResourceForeground:#ad0707;--vscode-gitDecoration-conflictingResourceForeground:#ad0707;--vscode-gitDecoration-submoduleResourceForeground:#1258a7}:root.light-mode{--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark-mode{--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--vscode-font-family:system-ui, "Ubuntu", "Droid Sans", sans-serif;--vscode-font-weight:normal;--vscode-font-size:13px;--vscode-editor-font-family:"Droid Sans Mono", "monospace", monospace;--vscode-editor-font-weight:normal;--vscode-editor-font-size:14px;--vscode-foreground:#ccc;--vscode-disabledForeground:#cccccc80;--vscode-errorForeground:#f48771;--vscode-descriptionForeground:#ccccccb3;--vscode-icon-foreground:#c5c5c5;--vscode-focusBorder:#007fd4;--vscode-textSeparator-foreground:#ffffff2e;--vscode-textLink-foreground:#3794ff;--vscode-textLink-activeForeground:#3794ff;--vscode-textPreformat-foreground:#d7ba7d;--vscode-textBlockQuote-background:#7f7f7f1a;--vscode-textBlockQuote-border:#007acc80;--vscode-textCodeBlock-background:#0a0a0a66;--vscode-widget-shadow:#0000005c;--vscode-input-background:#3c3c3c;--vscode-input-foreground:#ccc;--vscode-inputOption-activeBorder:#007acc;--vscode-inputOption-hoverBackground:#5a5d5e80;--vscode-inputOption-activeBackground:#007fd466;--vscode-inputOption-activeForeground:#fff;--vscode-input-placeholderForeground:#a6a6a6;--vscode-inputValidation-infoBackground:#063b49;--vscode-inputValidation-infoBorder:#007acc;--vscode-inputValidation-warningBackground:#352a05;--vscode-inputValidation-warningBorder:#b89500;--vscode-inputValidation-errorBackground:#5a1d1d;--vscode-inputValidation-errorBorder:#be1100;--vscode-dropdown-background:#3c3c3c;--vscode-dropdown-foreground:#f0f0f0;--vscode-dropdown-border:#3c3c3c;--vscode-checkbox-background:#3c3c3c;--vscode-checkbox-foreground:#f0f0f0;--vscode-checkbox-border:#3c3c3c;--vscode-button-foreground:#fff;--vscode-button-separator:#fff6;--vscode-button-background:#0e639c;--vscode-button-hoverBackground:#17b;--vscode-button-secondaryForeground:#fff;--vscode-button-secondaryBackground:#3a3d41;--vscode-button-secondaryHoverBackground:#45494e;--vscode-badge-background:#4d4d4d;--vscode-badge-foreground:#fff;--vscode-scrollbar-shadow:#000;--vscode-scrollbarSlider-background:#79797966;--vscode-scrollbarSlider-hoverBackground:#646464b3;--vscode-scrollbarSlider-activeBackground:#bfbfbf66;--vscode-progressBar-background:#0e70c0;--vscode-editorError-foreground:#f14c4c;--vscode-editorWarning-foreground:#cca700;--vscode-editorInfo-foreground:#3794ff;--vscode-editorHint-foreground:#eeeeeeb3;--vscode-sash-hoverBorder:#007fd4;--vscode-editor-background:#1e1e1e;--vscode-editor-foreground:#d4d4d4;--vscode-editorStickyScroll-background:#1e1e1e;--vscode-editorStickyScrollHover-background:#2a2d2e;--vscode-editorWidget-background:#252526;--vscode-editorWidget-foreground:#ccc;--vscode-editorWidget-border:#454545;--vscode-quickInput-background:#252526;--vscode-quickInput-foreground:#ccc;--vscode-quickInputTitle-background:#ffffff1a;--vscode-pickerGroup-foreground:#3794ff;--vscode-pickerGroup-border:#3f3f46;--vscode-keybindingLabel-background:#8080802b;--vscode-keybindingLabel-foreground:#ccc;--vscode-keybindingLabel-border:#3339;--vscode-keybindingLabel-bottomBorder:#4449;--vscode-editor-selectionBackground:#264f78;--vscode-editor-inactiveSelectionBackground:#3a3d41;--vscode-editor-selectionHighlightBackground:#add6ff26;--vscode-editor-findMatchBackground:#515c6a;--vscode-editor-findMatchHighlightBackground:#ea5c0054;--vscode-editor-findRangeHighlightBackground:#3a3d4166;--vscode-searchEditor-findMatchBackground:#ea5c0038;--vscode-editor-hoverHighlightBackground:#264f7840;--vscode-editorHoverWidget-background:#252526;--vscode-editorHoverWidget-foreground:#ccc;--vscode-editorHoverWidget-border:#454545;--vscode-editorHoverWidget-statusBarBackground:#2c2c2d;--vscode-editorLink-activeForeground:#4e94ce;--vscode-editorInlayHint-foreground:#fffc;--vscode-editorInlayHint-background:#4d4d4d99;--vscode-editorInlayHint-typeForeground:#fffc;--vscode-editorInlayHint-typeBackground:#4d4d4d99;--vscode-editorInlayHint-parameterForeground:#fffc;--vscode-editorInlayHint-parameterBackground:#4d4d4d99;--vscode-editorLightBulb-foreground:#fc0;--vscode-editorLightBulbAutoFix-foreground:#75beff;--vscode-diffEditor-insertedTextBackground:#9ccc2c33;--vscode-diffEditor-removedTextBackground:#f006;--vscode-diffEditor-insertedLineBackground:#9bb95533;--vscode-diffEditor-removedLineBackground:#f003;--vscode-diffEditor-diagonalFill:#ccc3;--vscode-list-focusOutline:#007fd4;--vscode-list-activeSelectionBackground:#04395e;--vscode-list-activeSelectionForeground:#fff;--vscode-list-activeSelectionIconForeground:#fff;--vscode-list-inactiveSelectionBackground:#37373d;--vscode-list-hoverBackground:#2a2d2e;--vscode-list-dropBackground:#383b3d;--vscode-list-highlightForeground:#2aaaff;--vscode-list-focusHighlightForeground:#2aaaff;--vscode-list-invalidItemForeground:#b89500;--vscode-list-errorForeground:#f88070;--vscode-list-warningForeground:#cca700;--vscode-listFilterWidget-background:#252526;--vscode-listFilterWidget-outline:#0000;--vscode-listFilterWidget-noMatchesOutline:#be1100;--vscode-listFilterWidget-shadow:#0000005c;--vscode-list-filterMatchBackground:#ea5c0054;--vscode-tree-indentGuidesStroke:#585858;--vscode-tree-tableColumnsBorder:#cccccc21;--vscode-tree-tableOddRowsBackground:#cccccc0a;--vscode-list-deemphasizedForeground:#8c8c8c;--vscode-quickInputList-focusForeground:#fff;--vscode-quickInputList-focusIconForeground:#fff;--vscode-quickInputList-focusBackground:#04395e;--vscode-menu-foreground:#ccc;--vscode-menu-background:#303031;--vscode-menu-selectionForeground:#fff;--vscode-menu-selectionBackground:#04395e;--vscode-menu-separatorBackground:#606060;--vscode-toolbar-hoverBackground:#5a5d5e4f;--vscode-toolbar-activeBackground:#6366674f;--vscode-editor-snippetTabstopHighlightBackground:#7c7c7c4d;--vscode-editor-snippetFinalTabstopHighlightBorder:#525252;--vscode-breadcrumb-foreground:#cccc;--vscode-breadcrumb-background:#1e1e1e;--vscode-breadcrumb-focusForeground:#e0e0e0;--vscode-breadcrumb-activeSelectionForeground:#e0e0e0;--vscode-breadcrumbPicker-background:#252526;--vscode-merge-currentHeaderBackground:#40c8ae80;--vscode-merge-currentContentBackground:#40c8ae33;--vscode-merge-incomingHeaderBackground:#40a6ff80;--vscode-merge-incomingContentBackground:#40a6ff33;--vscode-merge-commonHeaderBackground:#60606066;--vscode-merge-commonContentBackground:#60606029;--vscode-editorOverviewRuler-currentContentForeground:#40c8ae80;--vscode-editorOverviewRuler-incomingContentForeground:#40a6ff80;--vscode-editorOverviewRuler-commonContentForeground:#60606066;--vscode-editorOverviewRuler-findMatchForeground:#d186167d;--vscode-editorOverviewRuler-selectionHighlightForeground:#a0a0a0cc;--vscode-minimap-findMatchHighlight:#d18616;--vscode-minimap-selectionOccurrenceHighlight:#676767;--vscode-minimap-selectionHighlight:#264f78;--vscode-minimap-errorHighlight:#ff1212b3;--vscode-minimap-warningHighlight:#cca700;--vscode-minimap-foregroundOpacity:#000;--vscode-minimapSlider-background:#79797933;--vscode-minimapSlider-hoverBackground:#64646459;--vscode-minimapSlider-activeBackground:#bfbfbf33;--vscode-problemsErrorIcon-foreground:#f14c4c;--vscode-problemsWarningIcon-foreground:#cca700;--vscode-problemsInfoIcon-foreground:#3794ff;--vscode-charts-foreground:#ccc;--vscode-charts-lines:#cccccc80;--vscode-charts-red:#f14c4c;--vscode-charts-blue:#3794ff;--vscode-charts-yellow:#cca700;--vscode-charts-orange:#d18616;--vscode-charts-green:#89d185;--vscode-charts-purple:#b180d7;--vscode-editor-lineHighlightBorder:#282828;--vscode-editor-rangeHighlightBackground:#ffffff0a;--vscode-editor-symbolHighlightBackground:#ea5c0054;--vscode-editorCursor-foreground:#aeafad;--vscode-editorWhitespace-foreground:#e3e4e229;--vscode-editorIndentGuide-background:#404040;--vscode-editorIndentGuide-activeBackground:#707070;--vscode-editorLineNumber-foreground:#858585;--vscode-editorActiveLineNumber-foreground:#c6c6c6;--vscode-editorLineNumber-activeForeground:#c6c6c6;--vscode-editorRuler-foreground:#5a5a5a;--vscode-editorCodeLens-foreground:#999;--vscode-editorBracketMatch-background:#0064001a;--vscode-editorBracketMatch-border:#888;--vscode-editorOverviewRuler-border:#7f7f7f4d;--vscode-editorGutter-background:#1e1e1e;--vscode-editorUnnecessaryCode-opacity:#000000ab;--vscode-editorGhostText-foreground:#ffffff57;--vscode-editorOverviewRuler-rangeHighlightForeground:#007acc99;--vscode-editorOverviewRuler-errorForeground:#ff1212b3;--vscode-editorOverviewRuler-warningForeground:#cca700;--vscode-editorOverviewRuler-infoForeground:#3794ff;--vscode-editorBracketHighlight-foreground1:gold;--vscode-editorBracketHighlight-foreground2:orchid;--vscode-editorBracketHighlight-foreground3:#179fff;--vscode-editorBracketHighlight-foreground4:#0000;--vscode-editorBracketHighlight-foreground5:#0000;--vscode-editorBracketHighlight-foreground6:#0000;--vscode-editorBracketHighlight-unexpectedBracket\.foreground:#ff1212cc;--vscode-editorBracketPairGuide-background1:#0000;--vscode-editorBracketPairGuide-background2:#0000;--vscode-editorBracketPairGuide-background3:#0000;--vscode-editorBracketPairGuide-background4:#0000;--vscode-editorBracketPairGuide-background5:#0000;--vscode-editorBracketPairGuide-background6:#0000;--vscode-editorBracketPairGuide-activeBackground1:#0000;--vscode-editorBracketPairGuide-activeBackground2:#0000;--vscode-editorBracketPairGuide-activeBackground3:#0000;--vscode-editorBracketPairGuide-activeBackground4:#0000;--vscode-editorBracketPairGuide-activeBackground5:#0000;--vscode-editorBracketPairGuide-activeBackground6:#0000;--vscode-editorUnicodeHighlight-border:#bd9b03;--vscode-editorUnicodeHighlight-background:#bd9b0326;--vscode-symbolIcon-arrayForeground:#ccc;--vscode-symbolIcon-booleanForeground:#ccc;--vscode-symbolIcon-classForeground:#ee9d28;--vscode-symbolIcon-colorForeground:#ccc;--vscode-symbolIcon-constantForeground:#ccc;--vscode-symbolIcon-constructorForeground:#b180d7;--vscode-symbolIcon-enumeratorForeground:#ee9d28;--vscode-symbolIcon-enumeratorMemberForeground:#75beff;--vscode-symbolIcon-eventForeground:#ee9d28;--vscode-symbolIcon-fieldForeground:#75beff;--vscode-symbolIcon-fileForeground:#ccc;--vscode-symbolIcon-folderForeground:#ccc;--vscode-symbolIcon-functionForeground:#b180d7;--vscode-symbolIcon-interfaceForeground:#75beff;--vscode-symbolIcon-keyForeground:#ccc;--vscode-symbolIcon-keywordForeground:#ccc;--vscode-symbolIcon-methodForeground:#b180d7;--vscode-symbolIcon-moduleForeground:#ccc;--vscode-symbolIcon-namespaceForeground:#ccc;--vscode-symbolIcon-nullForeground:#ccc;--vscode-symbolIcon-numberForeground:#ccc;--vscode-symbolIcon-objectForeground:#ccc;--vscode-symbolIcon-operatorForeground:#ccc;--vscode-symbolIcon-packageForeground:#ccc;--vscode-symbolIcon-propertyForeground:#ccc;--vscode-symbolIcon-referenceForeground:#ccc;--vscode-symbolIcon-snippetForeground:#ccc;--vscode-symbolIcon-stringForeground:#ccc;--vscode-symbolIcon-structForeground:#ccc;--vscode-symbolIcon-textForeground:#ccc;--vscode-symbolIcon-typeParameterForeground:#ccc;--vscode-symbolIcon-unitForeground:#ccc;--vscode-symbolIcon-variableForeground:#75beff;--vscode-editorHoverWidget-highlightForeground:#2aaaff;--vscode-editorOverviewRuler-bracketMatchForeground:#a0a0a0;--vscode-editor-foldBackground:#264f784d;--vscode-editorGutter-foldingControlForeground:#c5c5c5;--vscode-editor-linkedEditingBackground:#ff00004d;--vscode-editor-wordHighlightBackground:#575757b8;--vscode-editor-wordHighlightStrongBackground:#004972b8;--vscode-editorOverviewRuler-wordHighlightForeground:#a0a0a0cc;--vscode-editorOverviewRuler-wordHighlightStrongForeground:#c0a0c0cc;--vscode-peekViewTitle-background:#3794ff1a;--vscode-peekViewTitleLabel-foreground:#fff;--vscode-peekViewTitleDescription-foreground:#ccccccb3;--vscode-peekView-border:#3794ff;--vscode-peekViewResult-background:#252526;--vscode-peekViewResult-lineForeground:#bbb;--vscode-peekViewResult-fileForeground:#fff;--vscode-peekViewResult-selectionBackground:#39f3;--vscode-peekViewResult-selectionForeground:#fff;--vscode-peekViewEditor-background:#001f33;--vscode-peekViewEditorGutter-background:#001f33;--vscode-peekViewResult-matchHighlightBackground:#ea5c004d;--vscode-peekViewEditor-matchHighlightBackground:#ff8f0099;--vscode-editorMarkerNavigationError-background:#f14c4c;--vscode-editorMarkerNavigationError-headerBackground:#f14c4c1a;--vscode-editorMarkerNavigationWarning-background:#cca700;--vscode-editorMarkerNavigationWarning-headerBackground:#cca7001a;--vscode-editorMarkerNavigationInfo-background:#3794ff;--vscode-editorMarkerNavigationInfo-headerBackground:#3794ff1a;--vscode-editorMarkerNavigation-background:#1e1e1e;--vscode-editorSuggestWidget-background:#252526;--vscode-editorSuggestWidget-border:#454545;--vscode-editorSuggestWidget-foreground:#d4d4d4;--vscode-editorSuggestWidget-selectedForeground:#fff;--vscode-editorSuggestWidget-selectedIconForeground:#fff;--vscode-editorSuggestWidget-selectedBackground:#04395e;--vscode-editorSuggestWidget-highlightForeground:#2aaaff;--vscode-editorSuggestWidget-focusHighlightForeground:#2aaaff;--vscode-editorSuggestWidgetStatus-foreground:#d4d4d480;--vscode-tab-activeBackground:#1e1e1e;--vscode-tab-unfocusedActiveBackground:#1e1e1e;--vscode-tab-inactiveBackground:#2d2d2d;--vscode-tab-unfocusedInactiveBackground:#2d2d2d;--vscode-tab-activeForeground:#fff;--vscode-tab-inactiveForeground:#ffffff80;--vscode-tab-unfocusedActiveForeground:#ffffff80;--vscode-tab-unfocusedInactiveForeground:#ffffff40;--vscode-tab-border:#252526;--vscode-tab-lastPinnedBorder:#ccc3;--vscode-tab-activeModifiedBorder:#39c;--vscode-tab-inactiveModifiedBorder:#3399cc80;--vscode-tab-unfocusedActiveModifiedBorder:#3399cc80;--vscode-tab-unfocusedInactiveModifiedBorder:#3399cc40;--vscode-editorPane-background:#1e1e1e;--vscode-editorGroupHeader-tabsBackground:#252526;--vscode-editorGroupHeader-noTabsBackground:#1e1e1e;--vscode-editorGroup-border:#444;--vscode-editorGroup-dropBackground:#53595d80;--vscode-editorGroup-dropIntoPromptForeground:#ccc;--vscode-editorGroup-dropIntoPromptBackground:#252526;--vscode-sideBySideEditor-horizontalBorder:#444;--vscode-sideBySideEditor-verticalBorder:#444;--vscode-panel-background:#1e1e1e;--vscode-panel-border:#80808059;--vscode-panelTitle-activeForeground:#e7e7e7;--vscode-panelTitle-inactiveForeground:#e7e7e799;--vscode-panelTitle-activeBorder:#e7e7e7;--vscode-panel-dropBorder:#e7e7e7;--vscode-panelSection-dropBackground:#53595d80;--vscode-panelSectionHeader-background:#80808033;--vscode-panelSection-border:#80808059;--vscode-banner-background:#04395e;--vscode-banner-foreground:#fff;--vscode-banner-iconForeground:#3794ff;--vscode-statusBar-foreground:#fff;--vscode-statusBar-noFolderForeground:#fff;--vscode-statusBar-background:#007acc;--vscode-statusBar-noFolderBackground:#68217a;--vscode-statusBar-focusBorder:#fff;--vscode-statusBarItem-activeBackground:#ffffff2e;--vscode-statusBarItem-focusBorder:#fff;--vscode-statusBarItem-hoverBackground:#ffffff1f;--vscode-statusBarItem-compactHoverBackground:#fff3;--vscode-statusBarItem-prominentForeground:#fff;--vscode-statusBarItem-prominentBackground:#00000080;--vscode-statusBarItem-prominentHoverBackground:#0000004d;--vscode-statusBarItem-errorBackground:#c72e0f;--vscode-statusBarItem-errorForeground:#fff;--vscode-statusBarItem-warningBackground:#7a6400;--vscode-statusBarItem-warningForeground:#fff;--vscode-activityBar-background:#333;--vscode-activityBar-foreground:#fff;--vscode-activityBar-inactiveForeground:#fff6;--vscode-activityBar-activeBorder:#fff;--vscode-activityBar-dropBorder:#fff;--vscode-activityBarBadge-background:#007acc;--vscode-activityBarBadge-foreground:#fff;--vscode-statusBarItem-remoteBackground:#16825d;--vscode-statusBarItem-remoteForeground:#fff;--vscode-extensionBadge-remoteBackground:#007acc;--vscode-extensionBadge-remoteForeground:#fff;--vscode-sideBar-background:#252526;--vscode-sideBarTitle-foreground:#bbb;--vscode-sideBar-dropBackground:#53595d80;--vscode-sideBarSectionHeader-background:#0000;--vscode-sideBarSectionHeader-border:#ccc3;--vscode-titleBar-activeForeground:#ccc;--vscode-titleBar-inactiveForeground:#ccc9;--vscode-titleBar-activeBackground:#3c3c3c;--vscode-titleBar-inactiveBackground:#3c3c3c99;--vscode-menubar-selectionForeground:#ccc;--vscode-menubar-selectionBackground:#5a5d5e4f;--vscode-notifications-foreground:#ccc;--vscode-notifications-background:#252526;--vscode-notificationLink-foreground:#3794ff;--vscode-notificationCenterHeader-background:#303031;--vscode-notifications-border:#303031;--vscode-notificationsErrorIcon-foreground:#f14c4c;--vscode-notificationsWarningIcon-foreground:#cca700;--vscode-notificationsInfoIcon-foreground:#3794ff;--vscode-commandCenter-foreground:#ccc;--vscode-commandCenter-activeForeground:#ccc;--vscode-commandCenter-activeBackground:#5a5d5e4f;--vscode-commandCenter-border:#80808059;--vscode-editorCommentsWidget-resolvedBorder:#cccccc80;--vscode-editorCommentsWidget-unresolvedBorder:#3794ff;--vscode-editorCommentsWidget-rangeBackground:#3794ff1a;--vscode-editorCommentsWidget-rangeBorder:#3794ff66;--vscode-editorCommentsWidget-rangeActiveBackground:#3794ff1a;--vscode-editorCommentsWidget-rangeActiveBorder:#3794ff66;--vscode-editorGutter-commentRangeForeground:#37373d;--vscode-debugToolBar-background:#333;--vscode-debugIcon-startForeground:#89d185;--vscode-editor-stackFrameHighlightBackground:#ff03;--vscode-editor-focusedStackFrameHighlightBackground:#7abd7a4d;--vscode-mergeEditor-change\.background:#9bb95533;--vscode-mergeEditor-change\.word\.background:#9ccc2c33;--vscode-mergeEditor-conflict\.unhandledUnfocused\.border:#ffa6007a;--vscode-mergeEditor-conflict\.unhandledFocused\.border:#ffa600;--vscode-mergeEditor-conflict\.handledUnfocused\.border:#8686864a;--vscode-mergeEditor-conflict\.handledFocused\.border:#c1c1c1cc;--vscode-mergeEditor-conflict\.handled\.minimapOverViewRuler:#adaca8ed;--vscode-mergeEditor-conflict\.unhandled\.minimapOverViewRuler:#fcba03;--vscode-mergeEditor-conflictingLines\.background:#ffea0047;--vscode-settings-headerForeground:#e7e7e7;--vscode-settings-modifiedItemIndicator:#0c7d9d;--vscode-settings-headerBorder:#80808059;--vscode-settings-sashBorder:#80808059;--vscode-settings-dropdownBackground:#3c3c3c;--vscode-settings-dropdownForeground:#f0f0f0;--vscode-settings-dropdownBorder:#3c3c3c;--vscode-settings-dropdownListBorder:#454545;--vscode-settings-checkboxBackground:#3c3c3c;--vscode-settings-checkboxForeground:#f0f0f0;--vscode-settings-checkboxBorder:#3c3c3c;--vscode-settings-textInputBackground:#3c3c3c;--vscode-settings-textInputForeground:#ccc;--vscode-settings-numberInputBackground:#3c3c3c;--vscode-settings-numberInputForeground:#ccc;--vscode-settings-focusedRowBackground:#2a2d2e99;--vscode-settings-rowHoverBackground:#2a2d2e4d;--vscode-settings-focusedRowBorder:#ffffff1f;--vscode-terminal-foreground:#ccc;--vscode-terminal-selectionBackground:#264f78;--vscode-terminal-inactiveSelectionBackground:#3a3d41;--vscode-terminalCommandDecoration-defaultBackground:#ffffff40;--vscode-terminalCommandDecoration-successBackground:#1b81a8;--vscode-terminalCommandDecoration-errorBackground:#f14c4c;--vscode-terminalOverviewRuler-cursorForeground:#a0a0a0cc;--vscode-terminal-border:#80808059;--vscode-terminal-findMatchBackground:#515c6a;--vscode-terminal-findMatchHighlightBackground:#ea5c0054;--vscode-terminalOverviewRuler-findMatchForeground:#d186167d;--vscode-terminal-dropBackground:#53595d80;--vscode-testing-iconFailed:#f14c4c;--vscode-testing-iconErrored:#f14c4c;--vscode-testing-iconPassed:#73c991;--vscode-testing-runAction:#73c991;--vscode-testing-iconQueued:#cca700;--vscode-testing-iconUnset:#848484;--vscode-testing-iconSkipped:#848484;--vscode-testing-peekBorder:#f14c4c;--vscode-testing-peekHeaderBackground:#f14c4c1a;--vscode-testing-message\.error\.decorationForeground:#f14c4c;--vscode-testing-message\.error\.lineBackground:#f003;--vscode-testing-message\.info\.decorationForeground:#d4d4d480;--vscode-welcomePage-tileBackground:#252526;--vscode-welcomePage-tileHoverBackground:#2c2c2d;--vscode-welcomePage-tileShadow:#0000005c;--vscode-welcomePage-progress\.background:#3c3c3c;--vscode-welcomePage-progress\.foreground:#3794ff;--vscode-debugExceptionWidget-border:#a31515;--vscode-debugExceptionWidget-background:#420b0d;--vscode-ports-iconRunningProcessForeground:#369432;--vscode-statusBar-debuggingBackground:#c63;--vscode-statusBar-debuggingForeground:#fff;--vscode-editor-inlineValuesForeground:#ffffff80;--vscode-editor-inlineValuesBackground:#ffc80033;--vscode-editorGutter-modifiedBackground:#1b81a8;--vscode-editorGutter-addedBackground:#487e02;--vscode-editorGutter-deletedBackground:#f14c4c;--vscode-minimapGutter-modifiedBackground:#1b81a8;--vscode-minimapGutter-addedBackground:#487e02;--vscode-minimapGutter-deletedBackground:#f14c4c;--vscode-editorOverviewRuler-modifiedForeground:#1b81a899;--vscode-editorOverviewRuler-addedForeground:#487e0299;--vscode-editorOverviewRuler-deletedForeground:#f14c4c99;--vscode-debugIcon-breakpointForeground:#e51400;--vscode-debugIcon-breakpointDisabledForeground:#848484;--vscode-debugIcon-breakpointUnverifiedForeground:#848484;--vscode-debugIcon-breakpointCurrentStackframeForeground:#fc0;--vscode-debugIcon-breakpointStackframeForeground:#89d185;--vscode-notebook-cellBorderColor:#37373d;--vscode-notebook-focusedEditorBorder:#007fd4;--vscode-notebookStatusSuccessIcon-foreground:#89d185;--vscode-notebookStatusErrorIcon-foreground:#f48771;--vscode-notebookStatusRunningIcon-foreground:#ccc;--vscode-notebook-cellToolbarSeparator:#80808059;--vscode-notebook-selectedCellBackground:#37373d;--vscode-notebook-selectedCellBorder:#37373d;--vscode-notebook-focusedCellBorder:#007fd4;--vscode-notebook-inactiveFocusedCellBorder:#37373d;--vscode-notebook-cellStatusBarItemHoverBackground:#ffffff26;--vscode-notebook-cellInsertionIndicator:#007fd4;--vscode-notebookScrollbarSlider-background:#79797966;--vscode-notebookScrollbarSlider-hoverBackground:#646464b3;--vscode-notebookScrollbarSlider-activeBackground:#bfbfbf66;--vscode-notebook-symbolHighlightBackground:#ffffff0a;--vscode-notebook-cellEditorBackground:#252526;--vscode-notebook-editorBackground:#1e1e1e;--vscode-keybindingTable-headerBackground:#cccccc0a;--vscode-keybindingTable-rowsBackground:#cccccc0a;--vscode-scm-providerBorder:#454545;--vscode-debugTokenExpression-name:#c586c0;--vscode-debugTokenExpression-value:#ccc9;--vscode-debugTokenExpression-string:#ce9178;--vscode-debugTokenExpression-boolean:#4e94ce;--vscode-debugTokenExpression-number:#b5cea8;--vscode-debugTokenExpression-error:#f48771;--vscode-debugView-exceptionLabelForeground:#ccc;--vscode-debugView-exceptionLabelBackground:#6c2022;--vscode-debugView-stateLabelForeground:#ccc;--vscode-debugView-stateLabelBackground:#88888845;--vscode-debugView-valueChangedHighlight:#569cd6;--vscode-debugConsole-infoForeground:#3794ff;--vscode-debugConsole-warningForeground:#cca700;--vscode-debugConsole-errorForeground:#f48771;--vscode-debugConsole-sourceForeground:#ccc;--vscode-debugConsoleInputIcon-foreground:#ccc;--vscode-debugIcon-pauseForeground:#75beff;--vscode-debugIcon-stopForeground:#f48771;--vscode-debugIcon-disconnectForeground:#f48771;--vscode-debugIcon-restartForeground:#89d185;--vscode-debugIcon-stepOverForeground:#75beff;--vscode-debugIcon-stepIntoForeground:#75beff;--vscode-debugIcon-stepOutForeground:#75beff;--vscode-debugIcon-continueForeground:#75beff;--vscode-debugIcon-stepBackForeground:#75beff;--vscode-extensionButton-prominentBackground:#0e639c;--vscode-extensionButton-prominentForeground:#fff;--vscode-extensionButton-prominentHoverBackground:#17b;--vscode-extensionIcon-starForeground:#ff8e00;--vscode-extensionIcon-verifiedForeground:#3794ff;--vscode-extensionIcon-preReleaseForeground:#1d9271;--vscode-extensionIcon-sponsorForeground:#d758b3;--vscode-terminal-ansiBlack:#000;--vscode-terminal-ansiRed:#cd3131;--vscode-terminal-ansiGreen:#0dbc79;--vscode-terminal-ansiYellow:#e5e510;--vscode-terminal-ansiBlue:#2472c8;--vscode-terminal-ansiMagenta:#bc3fbc;--vscode-terminal-ansiCyan:#11a8cd;--vscode-terminal-ansiWhite:#e5e5e5;--vscode-terminal-ansiBrightBlack:#666;--vscode-terminal-ansiBrightRed:#f14c4c;--vscode-terminal-ansiBrightGreen:#23d18b;--vscode-terminal-ansiBrightYellow:#f5f543;--vscode-terminal-ansiBrightBlue:#3b8eea;--vscode-terminal-ansiBrightMagenta:#d670d6;--vscode-terminal-ansiBrightCyan:#29b8db;--vscode-terminal-ansiBrightWhite:#e5e5e5;--vscode-interactive-activeCodeBorder:#3794ff;--vscode-interactive-inactiveCodeBorder:#37373d;--vscode-gitDecoration-addedResourceForeground:#81b88b;--vscode-gitDecoration-modifiedResourceForeground:#e2c08d;--vscode-gitDecoration-deletedResourceForeground:#c74e39;--vscode-gitDecoration-renamedResourceForeground:#73c991;--vscode-gitDecoration-untrackedResourceForeground:#73c991;--vscode-gitDecoration-ignoredResourceForeground:#8c8c8c;--vscode-gitDecoration-stageModifiedResourceForeground:#e2c08d;--vscode-gitDecoration-stageDeletedResourceForeground:#c74e39;--vscode-gitDecoration-conflictingResourceForeground:#e4676b;--vscode-gitDecoration-submoduleResourceForeground:#8db9e2}.test-error-container{white-space:pre;background-color:var(--color-canvas-subtle);line-height:initial;border-radius:6px;flex:none;margin-bottom:6px;padding:0;position:relative}.test-error-view{padding:16px;overflow:auto}.test-error-text{font-family:monospace}.test-result{flex-direction:column;flex:auto;margin-bottom:24px;display:flex}.test-result>div{flex:none}.test-result video,.test-result img.screenshot{box-shadow:var(--box-shadow-thick);flex:none;min-width:200px;max-width:80%;margin:24px auto}.test-result-path{color:var(--color-fg-muted);padding:0 0 0 5px}.test-result-counter{color:var(--color-canvas-default);border-radius:12px;padding:2px 8px;line-height:normal}.step-title-container{flex:auto;align-items:center;min-width:0;display:flex}.step-title-container>*{flex-shrink:0}.step-title-text{text-overflow:ellipsis;white-space:nowrap;flex-shrink:1;min-width:0;overflow:hidden}.step-title-highlight{background:var(--color-attention-subtle)}.step-subtitle{color:var(--color-fg-muted)}.step-spacer{flex:auto}.step-attachment-link{border-radius:4px;flex:none;padding:4px;display:flex}.step-attachment-link:hover{background-color:var(--color-neutral-muted)}.step-attachment-link .octicon{margin-right:0}.step-indirect-attachment-indicator{opacity:.5;flex:none;padding:4px;display:flex}.step-indirect-attachment-indicator .octicon{margin-right:0}.step-duration{white-space:nowrap;text-align:right;flex:none;min-width:48px;margin-left:4px}.step-waterfall{background-color:var(--color-canvas-subtle);border-radius:4px;flex:none;width:80px;height:20px;margin-left:4px;position:relative;overflow:hidden}.step-waterfall-block{background-color:var(--color-severe-muted);min-width:2px;position:absolute;top:0;bottom:0}:root.light-mode .test-result-counter{background:var(--color-scale-gray-5)}:root.dark-mode .test-result-counter{background:var(--color-scale-gray-3)}.step-filter{margin-bottom:8px}@media only screen and (width<=600px){.test-result{padding:0!important}}.test-file-test{text-overflow:ellipsis;align-items:center;padding:2px 8px;line-height:32px;overflow:hidden}.test-file-test-selected,.test-file-test:hover{background-color:var(--color-canvas-subtle)}.test-file-title{font-size:16px;font-weight:600}.test-file-details-row{color:var(--color-fg-muted);align-items:center;margin:0 0 0 15px;padding:0 0 6px 8px;font-weight:400;line-height:16px;display:flex}.test-file-details-row-items{height:16px;display:flex}.test-file-details-row-items>.link-badge{margin-top:-2px}.test-file-details-row-items>.trace-link{margin-top:-4px}.test-file-path{text-overflow:ellipsis;color:var(--color-fg-muted);overflow:hidden}.test-file-path-link{margin-right:10px}.test-file-test-outcome-skipped{color:var(--color-fg-muted)}.test-file-test-status-icon{flex:none}.test-file-header-info{color:var(--color-fg-muted);align-items:center;gap:4px 8px;display:flex}.test-file-header-br{flex-basis:100%;height:0}.test-file-no-files{color:var(--color-fg-muted);background-color:unset;font-weight:unset;border:1px solid var(--color-border-default);border-bottom-right-radius:6px;border-bottom-left-radius:6px;margin-top:12px}#root{color:var(--color-fg-default);-webkit-font-smoothing:antialiased;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;font-size:14px}.metadata-toggle{all:unset;box-sizing:border-box;cursor:pointer;-webkit-user-select:none;user-select:none;color:var(--color-fg-default);border-radius:4px;align-items:center;display:inline-flex}.metadata-toggle:focus-visible{outline:1px solid var(--color-accent-fg);outline-offset:2px}.metadata-toggle-second-line{margin-top:8px;margin-left:8px}.metadata-view{border:1px solid var(--color-border-default);border-radius:6px;margin-top:12px}.metadata-view .metadata-section{margin:8px 10px 8px 32px}.metadata-view span:not(.copy-button-container),.metadata-view a{line-height:24px;display:inline-block}.metadata-properties{flex-direction:column;align-items:normal;gap:8px;display:flex}.metadata-properties>div{height:24px}.metadata-separator{border-bottom:1px solid var(--color-border-default);height:1px}.metadata-view a{color:var(--color-fg-default)}.copyable-property{white-space:pre}.copyable-property>span{align-items:center;display:flex}.gantt-bar{cursor:pointer;outline:none;transition:opacity .2s}.gantt-bar:hover,.gantt-bar:focus{opacity:.8;stroke:var(--color-fg-default);stroke-width:2px}
/*$vite$:1*/</style>
  </head>
  <body>
    <div id='root'></div>
  </body>
</html>
<template id="playwrightReportBase64">data:application/zip;base64,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</template>
```

## public
### favicon.ico
```ico
[Бинарный файл или ошибка чтения]
```

### index.html
```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <div id="modals"></div>
    <script src="/bundle.js"></script>
  </body>
</html>

```

### manifest.json
```json
{
  "short_name": "Stellar Burger",
  "name": "Stellar Burger",
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

### robots.txt
```txt
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

```

## src
### global.d.ts
```ts
import 'react';

declare module 'react' {
  interface HTMLAttributes<T> {
    onPointerEnterCapture?: (e: React.PointerEvent<T>) => void;
    onPointerLeaveCapture?: (e: React.PointerEvent<T>) => void;
  }
  interface RefAttributes<T> {
    onPointerEnterCapture?: (e: React.PointerEvent<T>) => void;
    onPointerLeaveCapture?: (e: React.PointerEvent<T>) => void;
  }
}

```

### index.css
```css
body {
  margin: 0;
}

```

### index.tsx
```tsx
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import store from './services/store';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

```

### styles.d.ts
```ts
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

```

### svg.d.ts
```ts
declare module '*.svg' {
  const content: string;
  export default content;
}

```

### components
#### index.ts
```ts
export * from './app-header';
export * from './burger-constructor';
export * from './burger-constructor-element';
export * from './burger-ingredient';
export * from './burger-ingredients';
export * from './feed-info';
export * from './ingredient-details';
export * from './ingredients-category';
export * from './modal';
export * from './order-card';
export * from './order-info';
export * from './order-status';
export * from './orders-list';
export * from './profile-menu';

```

#### app
##### app.module.css
```css
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #131316;
  color: #f2f2f3;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #2f2f37;
}

::-webkit-scrollbar-thumb {
  border: 3px solid #8585ad;
  background: #8585ad;
}

.detailPageWrap {
  margin: 120px auto;
}

.detailHeader {
  text-align: center;
}

.title {
  margin: 0 auto;
}

.error {
  margin: 0 auto;
  color: red;
}
```

##### app.tsx
```tsx
import {
  ConstructorPage,
  Feed,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  Profile,
  ProfileOrders,
  NotFound404
} from '@pages';
import { AppHeader, Modal, OrderInfo, IngredientDetails } from '@components';
import { ProtectedRoute } from '../protected-route';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from '../../services/hooks';
import { fetchIngredients } from '../../services/slices/ingredientsSlice';
import { getUser } from '../../services/slices/userSlice';
import {
  ingredientsLoadingSelector,
  ingredientsSelector,
  errorSelector
} from '../../services/slices/ingredientsSlice';
import { Preloader } from '@ui';
import { LocationState } from '../../utils/types';
import '../../index.css';
import styles from './app.module.css';
import { useEffect } from 'react';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const background = (location.state as LocationState)?.background;

  const isLoading = useSelector(ingredientsLoadingSelector);
  const ingredients = useSelector(ingredientsSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(getUser());
  }, [dispatch]);

  const handleModalClose = () => {
    navigate(-1);
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <div className={`${styles.error} text text_type_main-medium pt-4`}>
          {error}
        </div>
      ) : ingredients.length > 0 ? (
        <>
          <Routes location={background || location}>
            <Route path='/' element={<ConstructorPage />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/feed/:number' element={<OrderInfo />} />
            <Route path='/ingredients/:id' element={<IngredientDetails />} />
            <Route
              path='/login'
              element={
                <ProtectedRoute onlyUnAuth>
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path='/register'
              element={
                <ProtectedRoute onlyUnAuth>
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route
              path='/forgot-password'
              element={
                <ProtectedRoute onlyUnAuth>
                  <ForgotPassword />
                </ProtectedRoute>
              }
            />
            <Route
              path='/reset-password'
              element={
                <ProtectedRoute onlyUnAuth>
                  <ResetPassword />
                </ProtectedRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path='/profile/orders'
              element={
                <ProtectedRoute>
                  <ProfileOrders />
                </ProtectedRoute>
              }
            />
            <Route
              path='/profile/orders/:number'
              element={
                <ProtectedRoute>
                  <OrderInfo />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<NotFound404 />} />
          </Routes>

          {background && (
            <Routes>
              <Route
                path='/feed/:number'
                element={
                  <Modal title='Детали заказа' onClose={handleModalClose}>
                    <OrderInfo />
                  </Modal>
                }
              />
              <Route
                path='/ingredients/:id'
                element={
                  <Modal title='Детали ингредиента' onClose={handleModalClose}>
                    <IngredientDetails />
                  </Modal>
                }
              />
              <Route
                path='/profile/orders/:number'
                element={
                  <ProtectedRoute>
                    <Modal title='Детали заказа' onClose={handleModalClose}>
                      <OrderInfo />
                    </Modal>
                  </ProtectedRoute>
                }
              />
            </Routes>
          )}
        </>
      ) : (
        <div className={`${styles.title} text text_type_main-medium pt-4`}>
          Нет ингредиентов
        </div>
      )}
    </div>
  );
};

export default App;

```

#### app-header
##### app-header.tsx
```tsx
import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useSelector } from '../../services/hooks';
import { userSelector } from '../../services/slices/userSlice';

export const AppHeader: FC = () => {
  const user = useSelector(userSelector);
  return <AppHeaderUI userName={user?.name || ''} />;
};

```

##### index.ts
```ts
export { AppHeader } from './app-header';

```

#### burger-constructor
##### burger-constructor.tsx
```tsx
import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useDispatch, useSelector } from '../../services/hooks';
import {
  constructorItemsSelector,
  clearConstructor
} from '../../services/slices/burgerConstructorSlice';
import {
  orderRequestSelector,
  orderModalDataSelector,
  createOrder,
  clearOrderData
} from '../../services/slices/orderSlice';
import { useNavigate } from 'react-router-dom';
import { isAuthenticatedSelector } from '../../services/slices/userSlice';

export const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const constructorItems = useSelector(constructorItemsSelector);
  const orderRequest = useSelector(orderRequestSelector);
  const orderModalData = useSelector(orderModalDataSelector);
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return;
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    const ingredientsIds = [
      constructorItems.bun._id,
      ...constructorItems.ingredients.map((i) => i._id),
      constructorItems.bun._id
    ];
    dispatch(createOrder(ingredientsIds))
      .unwrap()
      .then(() => {
        dispatch(clearConstructor());
      })
      .catch(() => {});
  };

  const closeOrderModal = () => {
    dispatch(clearOrderData());
  };

  const price = useMemo(() => {
    const bunPrice = constructorItems.bun ? constructorItems.bun.price * 2 : 0;
    const ingredientsPrice = constructorItems.ingredients.reduce(
      (sum: number, item: TConstructorIngredient) => sum + item.price,
      0
    );
    return bunPrice + ingredientsPrice;
  }, [constructorItems]);

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};

```

##### index.ts
```ts
export { BurgerConstructor } from './burger-constructor';

```

#### burger-constructor-element
##### burger-constructor-element.tsx
```tsx
import { FC, memo } from 'react';
import { BurgerConstructorElementUI } from '@ui';
import { BurgerConstructorElementProps } from './type';
import { useDispatch } from '../../services/hooks';
import {
  removeIngredient,
  moveIngredient
} from '../../services/slices/burgerConstructorSlice';

export const BurgerConstructorElement: FC<BurgerConstructorElementProps> = memo(
  ({ ingredient, index, totalItems }) => {
    const dispatch = useDispatch();

    const handleMoveDown = () => {
      if (index < totalItems - 1) {
        dispatch(moveIngredient({ from: index, to: index + 1 }));
      }
    };

    const handleMoveUp = () => {
      if (index > 0) {
        dispatch(moveIngredient({ from: index, to: index - 1 }));
      }
    };

    const handleClose = () => {
      dispatch(removeIngredient(ingredient.id));
    };

    return (
      <BurgerConstructorElementUI
        ingredient={ingredient}
        index={index}
        totalItems={totalItems}
        handleMoveUp={handleMoveUp}
        handleMoveDown={handleMoveDown}
        handleClose={handleClose}
      />
    );
  }
);

```

##### index.ts
```ts
export { BurgerConstructorElement } from './burger-constructor-element';

```

##### type.ts
```ts
import { TConstructorIngredient } from '@utils-types';

export type BurgerConstructorElementProps = {
  ingredient: TConstructorIngredient;
  index: number;
  totalItems: number;
};

```

#### burger-ingredient
##### burger-ingredient.tsx
```tsx
import { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { BurgerIngredientUI } from '@ui';
import { TBurgerIngredientProps } from './type';
import { useDispatch } from '../../services/hooks';
import { addIngredient } from '../../services/slices/burgerConstructorSlice';

export const BurgerIngredient: FC<TBurgerIngredientProps> = memo(
  ({ ingredient, count }) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const handleAdd = () => {
      dispatch(addIngredient(ingredient));
    };

    return (
      <BurgerIngredientUI
        ingredient={ingredient}
        count={count}
        locationState={{ background: location }}
        handleAdd={handleAdd}
      />
    );
  }
);

```

##### index.ts
```ts
export { BurgerIngredient } from './burger-ingredient';

```

##### type.ts
```ts
import { TIngredient } from '@utils-types';

export type TBurgerIngredientProps = {
  ingredient: TIngredient;
  count: number;
};

```

#### burger-ingredients
##### burger-ingredients.tsx
```tsx
import { useState, useRef, useEffect, FC, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { TTabMode } from '@utils-types';
import { BurgerIngredientsUI } from '../ui/burger-ingredients';
import { useSelector } from '../../services/hooks';
import { ingredientsSelector } from '../../services/slices/ingredientsSlice';

export const BurgerIngredients: FC = () => {
  const ingredients = useSelector(ingredientsSelector);

  const buns = useMemo(
    () => ingredients.filter((i) => i.type === 'bun'),
    [ingredients]
  );
  const mains = useMemo(
    () => ingredients.filter((i) => i.type === 'main'),
    [ingredients]
  );
  const sauces = useMemo(
    () => ingredients.filter((i) => i.type === 'sauce'),
    [ingredients]
  );

  const [currentTab, setCurrentTab] = useState<TTabMode>('bun');
  const titleBunRef = useRef<HTMLHeadingElement>(null);
  const titleMainRef = useRef<HTMLHeadingElement>(null);
  const titleSaucesRef = useRef<HTMLHeadingElement>(null);

  const [bunsRef, inViewBuns] = useInView({ threshold: 0 });
  const [mainsRef, inViewFilling] = useInView({ threshold: 0 });
  const [saucesRef, inViewSauces] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inViewBuns) setCurrentTab('bun');
    else if (inViewSauces) setCurrentTab('sauce');
    else if (inViewFilling) setCurrentTab('main');
  }, [inViewBuns, inViewFilling, inViewSauces]);

  const onTabClick = (tab: string) => {
    setCurrentTab(tab as TTabMode);
    if (tab === 'bun')
      titleBunRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (tab === 'main')
      titleMainRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (tab === 'sauce')
      titleSaucesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <BurgerIngredientsUI
      currentTab={currentTab}
      buns={buns}
      mains={mains}
      sauces={sauces}
      titleBunRef={titleBunRef}
      titleMainRef={titleMainRef}
      titleSaucesRef={titleSaucesRef}
      bunsRef={bunsRef}
      mainsRef={mainsRef}
      saucesRef={saucesRef}
      onTabClick={onTabClick}
    />
  );
};

```

##### index.ts
```ts
export { BurgerIngredients } from './burger-ingredients';

```

#### feed-info
##### feed-info.tsx
```tsx
import { FC } from 'react';
import { TOrder } from '@utils-types';
import { FeedInfoUI } from '../ui/feed-info';
import { useSelector } from '../../services/hooks';
import {
  feedOrdersSelector,
  feedTotalSelector,
  feedTotalTodaySelector
} from '../../services/slices/feedSlice';

const getOrders = (orders: TOrder[], status: string): number[] =>
  orders
    .filter((item) => item.status === status)
    .map((item) => item.number)
    .slice(0, 20);

export const FeedInfo: FC = () => {
  const orders = useSelector(feedOrdersSelector);
  const total = useSelector(feedTotalSelector);
  const totalToday = useSelector(feedTotalTodaySelector);

  const readyOrders = getOrders(orders, 'done');
  const pendingOrders = getOrders(orders, 'pending');

  const feed = { total, totalToday };

  return (
    <FeedInfoUI
      readyOrders={readyOrders}
      pendingOrders={pendingOrders}
      feed={feed}
    />
  );
};

```

##### index.ts
```ts
export { FeedInfo } from './feed-info';

```

#### ingredient-details
##### index.ts
```ts
export { IngredientDetails } from './ingredient-details';

```

##### ingredient-details.tsx
```tsx
import { FC } from 'react';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useSelector } from '../../services/hooks';
import { ingredientsSelector } from '../../services/slices/ingredientsSlice';
import { useParams } from 'react-router-dom';

export const IngredientDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const ingredients = useSelector(ingredientsSelector);
  const ingredientData = ingredients.find((item) => item._id === id);

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};

```

#### ingredients-category
##### index.ts
```ts
export { IngredientsCategory } from './ingredients-category';

```

##### ingredients-category.tsx
```tsx
import { forwardRef, useMemo } from 'react';
import { TIngredientsCategoryProps } from './type';
import { TIngredient } from '@utils-types';
import { IngredientsCategoryUI } from '../ui/ingredients-category';
import { useSelector } from '../../services/hooks';
import { constructorItemsSelector } from '../../services/slices/burgerConstructorSlice';

export const IngredientsCategory = forwardRef<
  HTMLUListElement,
  TIngredientsCategoryProps
>(({ title, titleRef, ingredients }, ref) => {
  const constructorItems = useSelector(constructorItemsSelector);

  const ingredientsCounters = useMemo(() => {
    const counters: { [key: string]: number } = {};
    constructorItems.ingredients.forEach((ingredient: TIngredient) => {
      counters[ingredient._id] = (counters[ingredient._id] || 0) + 1;
    });
    if (constructorItems.bun) {
      counters[constructorItems.bun._id] = 2;
    }
    return counters;
  }, [constructorItems]);

  return (
    <IngredientsCategoryUI
      title={title}
      titleRef={titleRef}
      ingredients={ingredients}
      ingredientsCounters={ingredientsCounters}
      ref={ref}
    />
  );
});

```

##### type.ts
```ts
import { TIngredient } from '@utils-types';

export type TIngredientsCategoryProps = {
  title: string;
  titleRef: React.RefObject<HTMLHeadingElement>;
  ingredients: TIngredient[];
};

```

#### modal
##### index.ts
```ts
export { Modal } from './modal';

```

##### modal.tsx
```tsx
import { FC, memo, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { TModalProps } from './type';
import { ModalUI } from '@ui';

const modalRoot = document.getElementById('modals');

export const Modal: FC<TModalProps> = memo(({ title, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      e.key === 'Escape' && onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <ModalUI title={title} onClose={onClose}>
      {children}
    </ModalUI>,
    modalRoot as HTMLDivElement
  );
});

```

##### type.ts
```ts
import { ReactNode } from 'react';

export type TModalProps = {
  title: string;
  onClose: () => void;
  children?: ReactNode;
};

```

#### order-card
##### index.ts
```ts
export { OrderCard } from './order-card';

```

##### order-card.tsx
```tsx
import { FC, memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { OrderCardProps } from './type';
import { OrderCardUI } from '../ui/order-card';
import { useSelector } from '../../services/hooks';
import { ingredientsSelector } from '../../services/slices/ingredientsSlice';
import { getIngredientsInfo, formatDate } from '../../utils/order-helpers';

const maxIngredients = 6;

export const OrderCard: FC<OrderCardProps> = memo(({ order }) => {
  const location = useLocation();
  const allIngredients = useSelector(ingredientsSelector);

  const orderInfo = useMemo(() => {
    if (!allIngredients.length) return null;

    const { ingredientsInfo, total } = getIngredientsInfo(
      order,
      allIngredients
    );

    const ingredientsToShow = ingredientsInfo.slice(0, maxIngredients);
    const remains =
      ingredientsInfo.length > maxIngredients
        ? ingredientsInfo.length - maxIngredients
        : 0;

    const date = formatDate(order.createdAt);

    return {
      ...order,
      ingredientsInfo,
      ingredientsToShow,
      remains,
      total,
      date
    };
  }, [order, allIngredients]);

  if (!orderInfo) return null;

  return (
    <OrderCardUI
      orderInfo={orderInfo}
      maxIngredients={maxIngredients}
      locationState={{ background: location }}
    />
  );
});

```

##### type.ts
```ts
import { TOrder } from '@utils-types';

export type OrderCardProps = {
  order: TOrder;
};

```

#### order-info
##### index.ts
```ts
export { OrderInfo } from './order-info';

```

##### order-info.tsx
```tsx
import { FC, useMemo, useEffect } from 'react';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient } from '@utils-types';
import { useSelector, useDispatch } from '../../services/hooks';
import { ingredientsSelector } from '../../services/slices/ingredientsSlice';
import { feedOrdersSelector } from '../../services/slices/feedSlice';
import { profileOrdersSelector } from '../../services/slices/profileOrdersSlice';
import {
  fetchOrderByNumber,
  orderDetailsSelector,
  orderDetailsLoadingSelector,
  orderDetailsErrorSelector,
  clearOrderDetails
} from '../../services/slices/orderDetailsSlice';
import { useParams } from 'react-router-dom';
import { getIngredientsWithCount, formatDate } from '../../utils/order-helpers';

export const OrderInfo: FC = () => {
  const { number } = useParams<{ number: string }>();
  const dispatch = useDispatch();
  const allIngredients = useSelector(ingredientsSelector);
  const feedOrders = useSelector(feedOrdersSelector);
  const profileOrders = useSelector(profileOrdersSelector);
  const orderDetails = useSelector(orderDetailsSelector);
  const orderDetailsLoading = useSelector(orderDetailsLoadingSelector);
  const orderDetailsError = useSelector(orderDetailsErrorSelector);

  const orderData = useMemo(() => {
    if (!number) return null;
    const num = Number(number);
    const fromFeed = feedOrders.find((order) => order.number === num);
    if (fromFeed) return fromFeed;
    const fromProfile = profileOrders.find((order) => order.number === num);
    if (fromProfile) return fromProfile;
    if (orderDetails && orderDetails.number === num) return orderDetails;
    return null;
  }, [number, feedOrders, profileOrders, orderDetails]);

  useEffect(() => {
    if (!number) return;
    const num = Number(number);
    const existsInFeed = feedOrders.some((order) => order.number === num);
    const existsInProfile = profileOrders.some((order) => order.number === num);
    const existsInDetails = orderDetails && orderDetails.number === num;

    if (existsInFeed || existsInProfile || existsInDetails) return;
    if (orderDetailsLoading || orderDetailsError) return;

    dispatch(fetchOrderByNumber(num));
  }, [
    number,
    feedOrders,
    profileOrders,
    orderDetails,
    orderDetailsLoading,
    orderDetailsError,
    dispatch
  ]);

  // eslint-disable-next-line arrow-body-style
  useEffect(() => () => void dispatch(clearOrderDetails()), [dispatch]);

  const orderInfo = useMemo(() => {
    if (!orderData || !allIngredients.length) return null;

    const ingredientsInfo = getIngredientsWithCount(orderData, allIngredients);
    const total = Object.values(ingredientsInfo).reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    const date = formatDate(orderData.createdAt);

    return {
      ...orderData,
      ingredientsInfo,
      date,
      total
    };
  }, [orderData, allIngredients]);

  if (orderDetailsError) {
    return (
      <div className='text text_type_main-medium pt-4' style={{ color: 'red' }}>
        Ошибка загрузки заказа: {orderDetailsError}
      </div>
    );
  }

  if (!orderData && !orderDetailsLoading) {
    return (
      <div className='text text_type_main-medium pt-4'>
        Заказ с номером #{number} не найден
      </div>
    );
  }

  if (orderDetailsLoading || !allIngredients.length || !orderInfo) {
    return <Preloader />;
  }

  return <OrderInfoUI orderInfo={orderInfo} />;
};

```

#### order-status
##### index.ts
```ts
export { OrderStatus } from './order-status';

```

##### order-status.tsx
```tsx
import React, { FC } from 'react';
import { OrderStatusProps } from './type';
import { OrderStatusUI } from '@ui';

const statusText: { [key: string]: string } = {
  pending: 'Готовится',
  done: 'Выполнен',
  created: 'Создан'
};

export const OrderStatus: FC<OrderStatusProps> = ({ status }) => {
  let textStyle = '';
  switch (status) {
    case 'pending':
      textStyle = '#E52B1A';
      break;
    case 'done':
      textStyle = '#00CCCC';
      break;
    default:
      textStyle = '#F2F2F3';
  }

  return <OrderStatusUI textStyle={textStyle} text={statusText[status]} />;
};

```

##### type.ts
```ts
export type OrderStatusProps = {
  status: string;
};

```

#### orders-list
##### index.ts
```ts
export { OrdersList } from './orders-list';

```

##### orders-list.tsx
```tsx
import { FC, memo } from 'react';

import { OrdersListProps } from './type';
import { OrdersListUI } from '@ui';

export const OrdersList: FC<OrdersListProps> = memo(({ orders }) => {
  const orderByDate = [...orders].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return <OrdersListUI orderByDate={orderByDate} />;
});

```

##### type.ts
```ts
import { TOrder } from '@utils-types';

export type OrdersListProps = {
  orders: TOrder[];
};

```

#### profile-menu
##### index.ts
```ts
export { ProfileMenu } from './profile-menu';

```

##### profile-menu.tsx
```tsx
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { ProfileMenuUI } from '@ui';
import { useDispatch } from '../../services/hooks';
import { logoutUser } from '../../services/slices/userSlice';

export const ProfileMenu: FC = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return <ProfileMenuUI handleLogout={handleLogout} pathname={pathname} />;
};

```

#### protected-route
##### index.ts
```ts
export { ProtectedRoute } from './protected-route';

```

##### protected-route.tsx
```tsx
import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from '../../services/hooks';
import {
  isAuthCheckedSelector,
  userSelector
} from '../../services/slices/userSlice';
import { Preloader } from '@ui';
import { LocationState } from '../../utils/types';

type TProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: ReactNode;
};

export const ProtectedRoute: FC<TProtectedRouteProps> = ({
  onlyUnAuth = false,
  children
}) => {
  const isAuthChecked = useSelector(isAuthCheckedSelector);
  const user = useSelector(userSelector);
  const location = useLocation();
  const state = location.state as LocationState;

  if (!isAuthChecked) {
    return <Preloader />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  if (onlyUnAuth && user) {
    const from = state?.from || { pathname: '/' };
    return <Navigate to={from} replace />;
  }

  return <>{children}</>;
};

```

#### ui
##### index.ts
```ts
export * from './app-header';
export * from './burger-constructor';
export * from './burger-constructor-element';
export * from './burger-ingredient';
export * from './burger-ingredients';
export * from './feed-info';
export * from './ingredient-details';
export * from './ingredients-category';
export * from './modal';
export * from './modal-overlay';
export * from './order-card';
export * from './order-details';
export * from './order-info';
export * from './order-status';
export * from './orders-list';
export * from './preloader';
export * from './profile-menu';

```

##### app-header
###### app-header.module.css
```css
.header {
  background-color: var(--background);
}
.menu {
  display: flex;
  align-items: center;
  max-width: 1240px;
  height: 56px;
  margin: 0 auto;
}

.menu_part_left {
  display: flex;
  flex-basis: 35%;
}

.link {
  display: flex;
  text-decoration: none;
  color: var(--text-inactive-color);
}

.link_active {
  color: var(--text-primary-color);
}

.link_position_last {
  display: flex;
  justify-content: flex-end;
  flex-basis: 35%;
}

.logo {
  display: flex;
  align-items: center;
  margin: 0 auto;
}

```

###### app-header.tsx
```tsx
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => (
  <header className={styles.header}>
    <nav className={`${styles.menu} p-4`}>
      <div className={styles.menu_part_left}>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.link_active : ''}`
          }
        >
          {({ isActive }) => (
            <>
              <BurgerIcon type={isActive ? 'primary' : 'secondary'} />
              <p className='text text_type_main-default ml-2 mr-10'>
                Конструктор
              </p>
            </>
          )}
        </NavLink>
        <NavLink
          to='/feed'
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.link_active : ''}`
          }
        >
          {({ isActive }) => (
            <>
              <ListIcon type={isActive ? 'primary' : 'secondary'} />
              <p className='text text_type_main-default ml-2'>Лента заказов</p>
            </>
          )}
        </NavLink>
      </div>
      <div className={styles.logo}>
        <Logo className='' />
      </div>
      <div className={styles.link_position_last}>
        <NavLink
          to='/profile'
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.link_active : ''}`
          }
        >
          {({ isActive }) => (
            <>
              <ProfileIcon type={isActive ? 'primary' : 'secondary'} />
              <p className='text text_type_main-default ml-2'>
                {userName || 'Личный кабинет'}
              </p>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  </header>
);

```

###### index.ts
```ts
export { AppHeaderUI } from './app-header';

```

###### type.ts
```ts
export type TAppHeaderUIProps = {
  userName: string | undefined;
};

```

##### burger-constructor
###### burger-constructor.module.css
```css
.burger_constructor {
  width: 600px;
  color: #f2f2f3;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}

.elements {
  min-height: 100px;

  overflow-y: scroll;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.total {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.cost {
  display: flex;
  align-items: center;
}

.text {
  font-family: Iceland;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 36px;
}

.noBuns {
  box-sizing: border-box;
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--common-border-radius-s);
  background: var(--background-element);
  min-height: 80px;
  font-family: 'Jet Brains Mono';
  font-size: 16px;
  line-height: 24px;
  color: #f2f2f3;
  margin-left: 44px;
}

.noBunsTop {
  border-radius: var(--top-constructor-item-border-radius);
}

.noBunsBottom {
  border-radius: var(--bottom-constructor-item-border-radius);
}

.element {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.element:last-child {
  margin-bottom: 0;
}

.element_fullwidth {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 536px;
}

```

###### burger-constructor.tsx
```tsx
import React, { FC } from 'react';
import {
  Button,
  ConstructorElement,
  CurrencyIcon
} from '@zlden/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import { BurgerConstructorUIProps } from './type';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorElement, Modal } from '@components';
import { Preloader, OrderDetailsUI } from '@ui';

export const BurgerConstructorUI: FC<BurgerConstructorUIProps> = ({
  constructorItems,
  orderRequest,
  price,
  orderModalData,
  onOrderClick,
  closeOrderModal
}) => (
  <section className={styles.burger_constructor}>
    {constructorItems.bun ? (
      <div className={`${styles.element} mb-4 mr-4`}>
        <ConstructorElement
          type='top'
          isLocked
          text={`${constructorItems.bun.name} (верх)`}
          price={constructorItems.bun.price}
          thumbnail={constructorItems.bun.image}
        />
      </div>
    ) : (
      <div
        className={`${styles.noBuns} ${styles.noBunsTop} ml-8 mb-4 mr-5 text text_type_main-default`}
      >
        Выберите булки
      </div>
    )}
    <ul className={styles.elements}>
      {constructorItems.ingredients.length > 0 ? (
        constructorItems.ingredients.map(
          (item: TConstructorIngredient, index: number) => (
            <BurgerConstructorElement
              ingredient={item}
              index={index}
              totalItems={constructorItems.ingredients.length}
              key={item.id}
            />
          )
        )
      ) : (
        <div
          className={`${styles.noBuns} ml-8 mb-4 mr-5 text text_type_main-default`}
        >
          Выберите начинку
        </div>
      )}
    </ul>
    {constructorItems.bun ? (
      <div className={`${styles.element} mt-4 mr-4`}>
        <ConstructorElement
          type='bottom'
          isLocked
          text={`${constructorItems.bun.name} (низ)`}
          price={constructorItems.bun.price}
          thumbnail={constructorItems.bun.image}
        />
      </div>
    ) : (
      <div
        className={`${styles.noBuns} ${styles.noBunsBottom} ml-8 mb-4 mr-5 text text_type_main-default`}
      >
        Выберите булки
      </div>
    )}
    <div className={`${styles.total} mt-10 mr-4`}>
      <div className={`${styles.cost} mr-10`}>
        <p className={`text ${styles.text} mr-2`}>{price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <Button
        htmlType='button'
        type='primary'
        size='large'
        children='Оформить заказ'
        onClick={onOrderClick}
      />
    </div>

    {orderRequest && (
      <Modal onClose={closeOrderModal} title={'Оформляем заказ...'}>
        <Preloader />
      </Modal>
    )}

    {orderModalData && (
      <Modal
        onClose={closeOrderModal}
        title={orderRequest ? 'Оформляем заказ...' : ''}
      >
        <OrderDetailsUI orderNumber={orderModalData.number} />
      </Modal>
    )}
  </section>
);

```

###### index.ts
```ts
export { BurgerConstructorUI } from './burger-constructor';

```

###### type.ts
```ts
import { TOrder, TConstructorIngredient } from '@utils-types';

export type BurgerConstructorUIProps = {
  constructorItems: {
    bun: TConstructorIngredient | null;
    ingredients: TConstructorIngredient[];
  };
  orderRequest: boolean;
  price: number;
  orderModalData: TOrder | null;
  onOrderClick: () => void;
  closeOrderModal: () => void;
};

```

##### burger-constructor-element
###### burger-constructor-element.module.css
```css
.element {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.element:last-child {
  margin-bottom: 0;
}

.element_fullwidth {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 536px;
}

```

###### burger-constructor-element.tsx
```tsx
import React, { FC, memo } from 'react';
import styles from './burger-constructor-element.module.css';
import { ConstructorElement } from '@zlden/react-developer-burger-ui-components';
import { BurgerConstructorElementUIProps } from './type';
import { MoveButton } from '@zlden/react-developer-burger-ui-components';

export const BurgerConstructorElementUI: FC<BurgerConstructorElementUIProps> =
  memo(
    ({
      ingredient,
      index,
      totalItems,
      handleMoveUp,
      handleMoveDown,
      handleClose
    }) => (
      <li className={`${styles.element} mb-4 mr-2`}>
        <MoveButton
          handleMoveDown={handleMoveDown}
          handleMoveUp={handleMoveUp}
          isUpDisabled={index === 0}
          isDownDisabled={index === totalItems - 1}
        />
        <div className={`${styles.element_fullwidth} ml-2`}>
          <ConstructorElement
            text={ingredient.name}
            price={ingredient.price}
            thumbnail={ingredient.image}
            handleClose={handleClose}
          />
        </div>
      </li>
    )
  );

```

###### index.ts
```ts
export { BurgerConstructorElementUI } from './burger-constructor-element';

```

###### type.ts
```ts
import { TConstructorIngredient } from '@utils-types';

export type BurgerConstructorElementUIProps = {
  ingredient: TConstructorIngredient;
  index: number;
  totalItems: number;
  handleMoveUp: () => void;
  handleMoveDown: () => void;
  handleClose: () => void;
};

```

##### burger-ingredient
###### burger-ingredient.module.css
```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.article {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 260px;
  cursor: pointer;
  text-decoration: none;
  color: #ffff;
}

.cost {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text {
  text-align: center;
}

.addButton {
  width: 260px;
  justify-content: center;
}

```

###### burger-ingredient.tsx
```tsx
import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './burger-ingredient.module.css';

import {
  Counter,
  CurrencyIcon,
  AddButton
} from '@zlden/react-developer-burger-ui-components';

import { TBurgerIngredientUIProps } from './type';

export const BurgerIngredientUI: FC<TBurgerIngredientUIProps> = memo(
  ({ ingredient, count, handleAdd, locationState }) => {
    const { image, price, name, _id } = ingredient;

    return (
      <li className={styles.container}>
        <Link
          className={styles.article}
          to={`/ingredients/${_id}`}
          state={locationState}
        >
          {count && <Counter count={count} />}
          <img className={styles.img} src={image} alt='картинка ингредиента.' />
          <div className={`${styles.cost} mt-2 mb-2`}>
            <p className='text text_type_digits-default mr-2'>{price}</p>
            <CurrencyIcon type='primary' />
          </div>
          <p className={`text text_type_main-default ${styles.text}`}>{name}</p>
        </Link>
        <AddButton
          text='Добавить'
          onClick={handleAdd}
          extraClass={`${styles.addButton} mt-8`}
        />
      </li>
    );
  }
);

```

###### index.ts
```ts
export { BurgerIngredientUI } from './burger-ingredient';

```

###### type.ts
```ts
import { Location } from 'react-router-dom';
import { TIngredient } from '@utils-types';

export type TBurgerIngredientUIProps = {
  ingredient: TIngredient;
  count: number;
  locationState: { background: Location };
  handleAdd: () => void;
};

```

##### burger-ingredients
###### burger-ingredients.module.css
```css
.burger_ingredients {
  font-family: 'Jet Brains Mono';
  color: #f2f2f3;
  max-width: 600px;

  display: flex;
  flex-direction: column;
}

p {
  margin: 0;
}

.tab {
  width: 120px;
}

.content {
  overflow-y: scroll;
}

.menu {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.categories {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
}

```

###### burger-ingredients.tsx
```tsx
import React, { FC, memo } from 'react';
import { Tab } from '@zlden/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';
import { BurgerIngredientsUIProps } from './type';
import { IngredientsCategory } from '@components';

export const BurgerIngredientsUI: FC<BurgerIngredientsUIProps> = memo(
  ({
    currentTab,
    buns,
    mains,
    sauces,
    titleBunRef,
    titleMainRef,
    titleSaucesRef,
    bunsRef,
    mainsRef,
    saucesRef,
    onTabClick
  }) => (
    <>
      <section className={styles.burger_ingredients}>
        <nav>
          <ul className={styles.menu}>
            <Tab value='bun' active={currentTab === 'bun'} onClick={onTabClick}>
              Булки
            </Tab>
            <Tab
              value='main'
              active={currentTab === 'main'}
              onClick={onTabClick}
            >
              Начинки
            </Tab>
            <Tab
              value='sauce'
              active={currentTab === 'sauce'}
              onClick={onTabClick}
            >
              Соусы
            </Tab>
          </ul>
        </nav>
        <div className={styles.content}>
          <IngredientsCategory
            title='Булки'
            titleRef={titleBunRef}
            ingredients={buns}
            ref={bunsRef}
          />
          <IngredientsCategory
            title='Начинки'
            titleRef={titleMainRef}
            ingredients={mains}
            ref={mainsRef}
          />
          <IngredientsCategory
            title='Соусы'
            titleRef={titleSaucesRef}
            ingredients={sauces}
            ref={saucesRef}
          />
        </div>
      </section>
    </>
  )
);

```

###### index.ts
```ts
export { BurgerIngredientsUI } from './burger-ingredients';

```

###### type.ts
```ts
import { RefObject } from 'react';
import { TIngredient, TTabMode } from '@utils-types';

export type BurgerIngredientsUIProps = {
  currentTab: TTabMode;
  buns: TIngredient[];
  mains: TIngredient[];
  sauces: TIngredient[];
  titleBunRef: RefObject<HTMLHeadingElement>;
  titleMainRef: RefObject<HTMLHeadingElement>;
  titleSaucesRef: RefObject<HTMLHeadingElement>;
  bunsRef: (node?: Element | null | undefined) => void;
  mainsRef: (node?: Element | null | undefined) => void;
  saucesRef: (node?: Element | null | undefined) => void;
  onTabClick: (val: string) => void;
};

```

##### feed-info
###### feed-info.module.css
```css
.columns {
  display: flex;
  justify-content: left;
  align-items: flex-start;
}
.column {
  display: inline;
  min-width: 50%;
}

.list {
  list-style: none;
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 180px;
  overflow: hidden;
}

.title {
  margin: 0;
  text-align: left;
}

.list_item {
  text-align: left;
  min-width: 50%;
}

.content {
  text-align: left;
}

```

###### feed-info.tsx
```tsx
import React, { FC, memo } from 'react';

import styles from './feed-info.module.css';

import { FeedInfoUIProps, HalfColumnProps, TColumnProps } from './type';

export const FeedInfoUI: FC<FeedInfoUIProps> = memo(
  ({ feed, readyOrders, pendingOrders }) => {
    const { total, totalToday } = feed;

    return (
      <section>
        <div className={styles.columns}>
          <HalfColumn
            orders={readyOrders}
            title={'Готовы'}
            textColor={'blue'}
          />
          <HalfColumn orders={pendingOrders} title={'В работе'} />
        </div>
        <Column title={'Выполнено за все время'} content={total} />
        <Column title={'Выполнено за сегодня'} content={totalToday} />
      </section>
    );
  }
);

const HalfColumn: FC<HalfColumnProps> = ({ orders, title, textColor }) => (
  <div className={`pr-6 ${styles.column}`}>
    <h3 className={`text text_type_main-medium ${styles.title}`}>{title}:</h3>
    <ul className={`pt-6  ${styles.list}`}>
      {orders.map((item, index) => (
        <li
          className={`text text_type_digits-default ${styles.list_item}`}
          style={{ color: textColor === 'blue' ? '#00cccc' : '#F2F2F3' }}
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Column: FC<TColumnProps> = ({ title, content }) => (
  <>
    <h3 className={`pt-15 text text_type_main-medium ${styles.title}`}>
      {title}:
    </h3>
    <p className={`text text_type_digits-large ${styles.content}`}>{content}</p>
  </>
);

```

###### index.ts
```ts
export { FeedInfoUI } from './feed-info';

```

###### type.ts
```ts
export type FeedInfoUIProps = {
  feed: {
    total: number;
    totalToday: number;
  };
  readyOrders: number[];
  pendingOrders: number[];
};

export type HalfColumnProps = {
  orders: number[];
  title: string;
  textColor?: string;
};

export type TColumnProps = {
  title: string;
  content: number;
};

```

##### ingredient-details
###### index.ts
```ts
export { IngredientDetailsUI } from './ingredient-details';

```

###### ingredient-details.module.css
```css
.content {
  margin: 0 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 520px;
}

.nutritional_values {
  display: flex;
  justify-content: space-between;
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: #8585ad;
}

.nutritional_value {
  display: flex;
  flex-direction: column;
  align-items: center;
}

```

###### ingredient-details.tsx
```tsx
import React, { FC, memo } from 'react';
import styles from './ingredient-details.module.css';
import { IngredientDetailsUIProps } from './type';

export const IngredientDetailsUI: FC<IngredientDetailsUIProps> = memo(
  ({ ingredientData }) => {
    const { name, image_large, calories, proteins, fat, carbohydrates } =
      ingredientData;

    return (
      <div className={styles.content}>
        <img
          className={styles.img}
          alt='изображение ингредиента.'
          src={image_large}
        />
        <h3 className='text text_type_main-medium mt-2 mb-4'>{name}</h3>
        <ul className={`${styles.nutritional_values} text_type_main-default`}>
          <li className={styles.nutritional_value}>
            <p className={`text mb-2 ${styles.text}`}>Калории, ккал</p>
            <p className={`text text_type_digits-default`}>{calories}</p>
          </li>
          <li className={styles.nutritional_value}>
            <p className={`text mb-2 ${styles.text}`}>Белки, г</p>
            <p className={`text text_type_digits-default`}>{proteins}</p>
          </li>
          <li className={styles.nutritional_value}>
            <p className={`text mb-2 ${styles.text}`}>Жиры, г</p>
            <p className={`text text_type_digits-default`}>{fat}</p>
          </li>
          <li className={styles.nutritional_value}>
            <p className={`text mb-2 ${styles.text}`}>Углеводы, г</p>
            <p className={`text text_type_digits-default`}>{carbohydrates}</p>
          </li>
        </ul>
      </div>
    );
  }
);

```

###### type.ts
```ts
import { TIngredient } from '@utils-types';

export type IngredientDetailsUIProps = {
  ingredientData: TIngredient;
};

```

##### ingredients-category
###### index.ts
```ts
export { IngredientsCategoryUI } from './ingredients-category';

```

###### ingredients-category.module.css
```css
.items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 40px;
  margin: 0;
  padding: 0;
}

```

###### ingredients-category.tsx
```tsx
import styles from './ingredients-category.module.css';
import { forwardRef } from 'react';
import { TIngredientsCategoryUIProps } from './type';
import { BurgerIngredient } from '@components';

export const IngredientsCategoryUI = forwardRef<
  HTMLUListElement,
  TIngredientsCategoryUIProps
>(({ title, titleRef, ingredients, ingredientsCounters }, ref) => (
  <>
    <h3 className='text text_type_main-medium mt-10 mb-6' ref={titleRef}>
      {title}
    </h3>
    <ul className={styles.items} ref={ref}>
      {ingredients.map((ingredient) => (
        <BurgerIngredient
          ingredient={ingredient}
          key={ingredient._id}
          count={ingredientsCounters[ingredient._id]}
        />
      ))}
    </ul>
  </>
));

```

###### type.ts
```ts
import { TIngredient } from '@utils-types';

export type TIngredientsCategoryUIProps = {
  title: string;
  titleRef: React.RefObject<HTMLHeadingElement>;
  ingredients: TIngredient[];
  ingredientsCounters: Record<string, number>;
};

```

##### modal
###### index.ts
```ts
export { ModalUI } from './modal';

```

###### modal.module.css
```css
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  margin: auto;
  padding: 40px 40px 60px;
  background-color: #1c1c21;
  border-radius: 40px;
  box-shadow:
    0px 24px 32px rgba(0, 0, 0, 0.04),
    0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 4px 8px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
}

.header {
  display: flex;
  align-items: center;
  min-height: 64px;
}

.button {
  display: flex;
  width: 24px;
  height: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  margin-left: auto;
  padding: 0;
}

.img {
  margin: auto;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

```

###### modal.tsx
```tsx
import { FC, memo } from 'react';

import styles from './modal.module.css';

import { CloseIcon } from '@zlden/react-developer-burger-ui-components';
import { TModalUIProps } from './type';
import { ModalOverlayUI } from '@ui';

export const ModalUI: FC<TModalUIProps> = memo(
  ({ title, onClose, children }) => (
    <>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3 className={`${styles.title} text text_type_main-large`}>
            {title}
          </h3>
          <button className={styles.button} type='button'>
            <CloseIcon type='primary' onClick={onClose} />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
      <ModalOverlayUI onClick={onClose} />
    </>
  )
);

```

###### type.ts
```ts
import { ReactNode } from 'react';

export type TModalUIProps = {
  title: string;
  onClose: () => void;
  children?: ReactNode;
};

```

##### modal-overlay
###### index.ts
```ts
export { ModalOverlayUI } from './modal-overlay';

```

###### modal-overlay.module.css
```css
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
}

```

###### modal-overlay.tsx
```tsx
import styles from './modal-overlay.module.css';

export const ModalOverlayUI = ({ onClick }: { onClick: () => void }) => (
  <div className={styles.overlay} onClick={onClick} />
);

```

##### order-card
###### index.ts
```ts
export { OrderCardUI } from './order-card';

```

###### order-card.module.css
```css
.ingredients {
  display: flex;
  padding: 0;
  margin: 0;
}

.order {
  display: block;
  text-decoration: none;
  color: unset;
  background-color: #1c1c21;
  border-radius: 40px;
  min-width: 576px;
  box-sizing: border-box;
}

.order_info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order_name {
  text-align: left;
}

.order_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.order_total {
  vertical-align: top;
}

.img_wrap {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: #801ab3 solid 2px;
  background-color: #1c1c21;
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
}

.img_wrap:nth-child(n + 2) {
  position: relative;
  right: 25px;
}

.img {
  position: relative;
  right: 25px;
  width: 112px;
  height: 56px;
}

.remains {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

```

###### order-card.tsx
```tsx
import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import {
  CurrencyIcon,
  FormattedDate
} from '@zlden/react-developer-burger-ui-components';

import styles from './order-card.module.css';

import { OrderCardUIProps } from './type';
import { OrderStatus } from '@components';

export const OrderCardUI: FC<OrderCardUIProps> = memo(
  ({ orderInfo, maxIngredients, locationState }) => (
    <Link
      to={orderInfo.number.toString()}
      relative='path'
      state={locationState}
      className={`p-6 mb-4 mr-2 ${styles.order}`}
    >
      <div className={styles.order_info}>
        <span className={`text text_type_digits-default ${styles.number}`}>
          #{String(orderInfo.number).padStart(6, '0')}
        </span>
        <span className='text text_type_main-default text_color_inactive'>
          <FormattedDate date={orderInfo.date} />
        </span>
      </div>
      <h4 className={`pt-6 text text_type_main-medium ${styles.order_name}`}>
        {orderInfo.name}
      </h4>
      {location.pathname === '/profile/orders' && (
        <OrderStatus status={orderInfo.status} />
      )}
      <div className={`pt-6 ${styles.order_content}`}>
        <ul className={styles.ingredients}>
          {orderInfo.ingredientsToShow.map((ingredient, index) => {
            let zIndex = maxIngredients - index;
            let right = 20 * index;
            return (
              <li
                className={styles.img_wrap}
                style={{ zIndex: zIndex, right: right }}
                key={index}
              >
                <img
                  style={{
                    opacity:
                      orderInfo.remains && maxIngredients === index + 1
                        ? '0.5'
                        : '1'
                  }}
                  className={styles.img}
                  src={ingredient.image_mobile}
                  alt={ingredient.name}
                />
                {maxIngredients === index + 1 ? (
                  <span
                    className={`text text_type_digits-default ${styles.remains}`}
                  >
                    {orderInfo.remains > 0 ? `+${orderInfo.remains}` : null}
                  </span>
                ) : null}
              </li>
            );
          })}
        </ul>
        <div>
          <span
            className={`text text_type_digits-default pr-1 ${styles.order_total}`}
          >
            {orderInfo.total}
          </span>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </Link>
  )
);

```

###### type.ts
```ts
import { Location } from 'react-router-dom';
import { TIngredient } from '@utils-types';

export type OrderCardUIProps = {
  orderInfo: TOrderInfo;
  maxIngredients: number;
  locationState: { background: Location };
};

type TOrderInfo = {
  ingredientsInfo: TIngredient[];
  ingredientsToShow: TIngredient[];
  remains: number;
  total: number;
  date: Date;
  _id: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  ingredients: string[];
};

```

##### order-details
###### index.ts
```ts
export { OrderDetailsUI } from './order-details';

```

###### order-details.module.css
```css
.img {
  margin: 61px 0;
}

.title {
  text-shadow:
    0px 0px 16px rgba(51, 51, 255, 0.25),
    0px 0px 8px rgba(51, 51, 255, 0.25),
    0px 4px 32px rgba(51, 51, 255, 0.5);
}

.text {
  color: #8585ad;
}

```

###### order-details.tsx
```tsx
import React from 'react';
import styles from './order-details.module.css';
import doneImg from '../../../images/done.svg';
import { OrderDetailsUIProps } from './type';

export const OrderDetailsUI: React.FC<OrderDetailsUIProps> = ({
  orderNumber
}) => (
  <>
    <h2 className={`${styles.title} text text_type_digits-large mt-2 mb-4`}>
      {orderNumber}
    </h2>
    <p className='text text_type_main-medium'>идентификатор заказа</p>
    <img
      className={styles.img}
      src={doneImg}
      alt='изображение статуса заказа.'
    />
    <p className='text text_type_main-default mb-1'>
      Ваш заказ начали готовить
    </p>
    <p className={`${styles.text} text text_type_main-default`}>
      Дождитесь готовности на орбитальной станции
    </p>
  </>
);

```

###### type.ts
```ts
export type OrderDetailsUIProps = {
  orderNumber: number;
};

```

##### order-info
###### index.ts
```ts
export { OrderInfoUI } from './order-info';

```

###### order-info.module.css
```css
.wrap {
  margin: 0 auto;
  width: 640px;
}
.number {
  text-align: center;
}

.status {
  color: #00cccc;
}

.header {
  margin: 0;
}

.img_wrap {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(63.18deg, #801ab3 0%, #4c4cff 100%);
  position: relative;
}

.border {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #1c1c21;
  position: absolute;
  left: 2px;
  top: 2px;
  text-align: center;
}

.img {
  position: relative;
  right: 25px;
  width: 112px;
  height: 56px;
}

.item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.quantity {
  margin-left: auto;
}

.list {
  list-style: none;
  padding: 0;
  overflow-y: auto;
  max-height: 320px;
}

.list::-webkit-scrollbar {
  width: 8px;
  background-color: #2f2f37;
}

.list::-webkit-scrollbar-thumb {
  background-color: #8585ad;
}

.bottom {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.total {
  margin-left: auto;
}

```

###### order-info.tsx
```tsx
import React, { FC, memo } from 'react';
import {
  CurrencyIcon,
  FormattedDate
} from '@zlden/react-developer-burger-ui-components';

import styles from './order-info.module.css';

import { OrderInfoUIProps } from './type';
import { OrderStatus } from '@components';

export const OrderInfoUI: FC<OrderInfoUIProps> = memo(({ orderInfo }) => (
  <div className={styles.wrap}>
    <h3 className={`text text_type_main-medium  pb-3 pt-10 ${styles.header}`}>
      {orderInfo.name}
    </h3>
    <OrderStatus status={orderInfo.status} />
    <p className={`text text_type_main-medium pt-15 pb=6`}>Состав:</p>
    <ul className={`${styles.list} mb-8`}>
      {Object.values(orderInfo.ingredientsInfo).map((item, index) => (
        <li className={`pb-4 pr-6 ${styles.item}`} key={index}>
          <div className={styles.img_wrap}>
            <div className={styles.border}>
              <img
                className={styles.img}
                src={item.image_mobile}
                alt={item.name}
              />
            </div>
          </div>
          <span className='text text_type_main-default pl-4'>{item.name}</span>
          <span
            className={`text text_type_digits-default pl-4 pr-4 ${styles.quantity}`}
          >
            {item.count} x {item.price}
          </span>
          <CurrencyIcon type={'primary'} />
        </li>
      ))}
    </ul>
    <div className={styles.bottom}>
      <p className='text text_type_main-default text_color_inactive'>
        <FormattedDate date={orderInfo.date} />
      </p>
      <span className={`text text_type_digits-default pr-4 ${styles.total}`}>
        {orderInfo.total}
      </span>
      <CurrencyIcon type={'primary'} />
    </div>
  </div>
));

```

###### type.ts
```ts
import { TIngredient } from '@utils-types';

export type OrderInfoUIProps = {
  orderInfo: TOrderInfo;
};

type TOrderInfo = {
  ingredientsInfo: {
    [key: string]: TIngredient & { count: number };
  };
  date: Date;
  total: number;
  _id: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  ingredients: string[];
};

```

##### order-status
###### index.ts
```ts
export { OrderStatusUI } from './order-status';

```

###### order-status.tsx
```tsx
import React, { FC } from 'react';
import { OrderStatusUIProps } from './type';

export const OrderStatusUI: FC<OrderStatusUIProps> = ({ textStyle, text }) => (
  <span
    className='text text_type_main-default pt-2'
    style={{ color: textStyle }}
  >
    {text}
  </span>
);

```

###### type.ts
```ts
export type OrderStatusUIProps = {
  textStyle: string;
  text: string;
};

```

##### orders-list
###### index.ts
```ts
export { OrdersListUI } from './orders-list';

```

###### orders-list.module.css
```css
.content {
  overflow-y: scroll;
  width: 100%;
  height: 100%;
}

```

###### orders-list.tsx
```tsx
import { FC } from 'react';

import styles from './orders-list.module.css';

import { OrdersListUIProps } from './type';
import { OrderCard } from '@components';

export const OrdersListUI: FC<OrdersListUIProps> = ({ orderByDate }) => (
  <div className={`${styles.content}`}>
    {orderByDate.map((order) => (
      <OrderCard order={order} key={order._id} />
    ))}
  </div>
);

```

###### type.ts
```ts
import { TOrder } from '@utils-types';

export type OrdersListUIProps = {
  orderByDate: TOrder[];
};

```

##### pages
###### common-type.ts
```ts
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';

export type PageUIProps = {
  errorText: string | undefined;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: SyntheticEvent) => void;
};

```

###### common.module.css
```css
.container {
  display: flex;
  max-width: 1240px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.wrapCenter {
  margin: auto;
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form {
  width: 100%;
}

.form div {
  width: 100%;
  text-align: right;
}

.title {
  margin: 0;
}

.button {
  display: flex;
  justify-content: center;
}

.question {
  color: #8585ad;
}

.link {
  color: #4c4cff;
  text-decoration: none;
}

.error {
  color: #ff0000;
  text-align: center;
}

```

###### index.ts
```ts
export * from './constructor-page';
export * from './feed';
export * from './forgot-password';
export * from './login';
export * from './profile';
export * from './profile-orders';
export * from './register';
export * from './reset-password';

```

###### constructor-page
####### constructor-page.module.css
```css
.containerMain {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 1240px;
  margin: 0 auto;
}

.title {
  width: 100%;
  max-width: 1260px;
  margin-left: auto;
  margin-right: auto;
}

.main {
  display: flex;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
}

```

####### constructor-page.tsx
```tsx
import { FC } from 'react';

import styles from './constructor-page.module.css';

import { ConstructorPageUIProps } from './type';
import { Preloader } from '@ui';
import { BurgerIngredients, BurgerConstructor } from '@components';

export const ConstructorPageUI: FC<ConstructorPageUIProps> = ({
  isIngredientsLoading
}) => (
  <>
    {isIngredientsLoading ? (
      <Preloader />
    ) : (
      <main className={styles.containerMain}>
        <h1
          className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}
        >
          Соберите бургер
        </h1>
        <div className={`${styles.main} pl-5 pr-5`}>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </main>
    )}
  </>
);

```

####### index.ts
```ts
export { ConstructorPageUI } from './constructor-page';

```

####### type.ts
```ts
export type ConstructorPageUIProps = {
  isIngredientsLoading: boolean;
};

```

###### feed
####### feed.module.css
```css
.containerMain {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
}

.titleBox {
  width: 100%;
  max-width: 1240px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.main {
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 1240px;
  overflow: hidden;
}

.columnOrders {
  width: 608px;
}

.columnInfo {
  overflow-y: auto;
  overflow-x: hidden;
  width: 580px;
}

```

####### feed.tsx
```tsx
import { FC, memo } from 'react';

import styles from './feed.module.css';

import { FeedUIProps } from './type';
import { OrdersList, FeedInfo } from '@components';
import { RefreshButton } from '@zlden/react-developer-burger-ui-components';

export const FeedUI: FC<FeedUIProps> = memo(({ orders, handleGetFeeds }) => (
  <main className={styles.containerMain}>
    <div className={`${styles.titleBox} mt-10 mb-5`}>
      <h1 className={`${styles.title} text text_type_main-large`}>
        Лента заказов
      </h1>
      <RefreshButton
        text='Обновить'
        onClick={handleGetFeeds}
        extraClass={'ml-30'}
      />
    </div>
    <div className={styles.main}>
      <div className={styles.columnOrders}>
        <OrdersList orders={orders} />
      </div>
      <div className={styles.columnInfo}>
        <FeedInfo />
      </div>
    </div>
  </main>
));

```

####### index.ts
```ts
export { FeedUI } from './feed';

```

####### type.ts
```ts
import { TOrder } from '@utils-types';

export type FeedUIProps = {
  orders: TOrder[];
  handleGetFeeds: () => void;
};

```

###### forgot-password
####### forgot-password.tsx
```tsx
import { FC } from 'react';

import { Input, Button } from '@zlden/react-developer-burger-ui-components';
import styles from '../common.module.css';
import { Link } from 'react-router-dom';
import { PageUIProps } from '../common-type';

export const ForgotPasswordUI: FC<PageUIProps> = ({
  errorText,
  email,
  setEmail,
  handleSubmit
}) => (
  <main className={styles.container}>
    <div className={`pt-6 ${styles.wrapCenter}`}>
      <h3 className='pb-6 text text_type_main-medium'>Восстановление пароля</h3>
      <form
        className={`pb-15 ${styles.form}`}
        name='login'
        onSubmit={handleSubmit}
      >
        <div className='pb-6'>
          <Input
            type='email'
            placeholder='Укажите e-mail'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name='email'
            error={false}
            errorText=''
            size='default'
          />
        </div>
        <div className={`pb-6 ${styles.button}`}>
          <Button type='primary' size='medium' htmlType='submit'>
            Восстановить
          </Button>
        </div>
        {errorText && (
          <p className={`${styles.error} text text_type_main-default pb-6`}>
            {errorText}
          </p>
        )}
      </form>
      <div className={`${styles.question} text text_type_main-default pb-6`}>
        Вспомнили пароль?
        <Link to={'/login'} className={`pl-2 ${styles.link}`}>
          Войти
        </Link>
      </div>
    </div>
  </main>
);

```

####### index.ts
```ts
export { ForgotPasswordUI } from './forgot-password';

```

###### login
####### index.ts
```ts
export { LoginUI } from './login';

```

####### login.tsx
```tsx
import { FC, useState } from 'react';
import {
  Input,
  Button,
  PasswordInput
} from '@zlden/react-developer-burger-ui-components';
import styles from '../common.module.css';
import { Link } from 'react-router-dom';
import { LoginUIProps } from './type';

export const LoginUI: FC<LoginUIProps> = ({
  email,
  setEmail,
  errorText,
  handleSubmit,
  password,
  setPassword
}) => (
  <main className={styles.container}>
    <div className={`pt-6 ${styles.wrapCenter}`}>
      <h3 className='pb-6 text text_type_main-medium'>Вход</h3>
      <form
        className={`pb-15 ${styles.form}`}
        name='login'
        onSubmit={handleSubmit}
      >
        <>
          <div className='pb-6'>
            <Input
              type='email'
              placeholder='E-mail'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name='email'
              error={false}
              errorText=''
              size='default'
            />
          </div>
          <div className='pb-6'>
            <PasswordInput
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name='password'
            />
          </div>
          <div className={`pb-6 ${styles.button}`}>
            <Button type='primary' size='medium' htmlType='submit'>
              Войти
            </Button>
          </div>
          {errorText && (
            <p className={`${styles.error} text text_type_main-default pb-6`}>
              {errorText}
            </p>
          )}
        </>
      </form>
      <div className={`pb-4 ${styles.question} text text_type_main-default`}>
        Вы - новый пользователь?
        <Link to='/register' className={`pl-2 ${styles.link}`}>
          Зарегистрироваться
        </Link>
      </div>
      <div className={`${styles.question} text text_type_main-default pb-6`}>
        Забыли пароль?
        <Link to={'/forgot-password'} className={`pl-2 ${styles.link}`}>
          Восстановить пароль
        </Link>
      </div>
    </div>
  </main>
);

```

####### type.ts
```ts
import { Dispatch, SetStateAction } from 'react';
import { PageUIProps } from '../common-type';

export type LoginUIProps = PageUIProps & {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
};

```

###### profile
####### index.ts
```ts
export { ProfileUI } from './profile';

```

####### profile.module.css
```css
.menu {
  width: 320px;
}

.form {
  max-width: 480px;
}

```

####### profile.tsx
```tsx
import { FC } from 'react';

import { Button, Input } from '@zlden/react-developer-burger-ui-components';
import styles from './profile.module.css';
import commonStyles from '../common.module.css';

import { ProfileUIProps } from './type';
import { ProfileMenu } from '@components';

export const ProfileUI: FC<ProfileUIProps> = ({
  formValue,
  isFormChanged,
  updateUserError,
  handleSubmit,
  handleCancel,
  handleInputChange
}) => (
  <main className={`${commonStyles.container}`}>
    <div className={`mt-30 mr-15 ${styles.menu}`}>
      <ProfileMenu />
    </div>
    <form
      className={`mt-30 ${styles.form} ${commonStyles.form}`}
      onSubmit={handleSubmit}
    >
      <>
        <div className='pb-6'>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={handleInputChange}
            value={formValue.name}
            name={'name'}
            error={false}
            errorText={''}
            size={'default'}
            icon={'EditIcon'}
          />
        </div>
        <div className='pb-6'>
          <Input
            type={'email'}
            placeholder={'E-mail'}
            onChange={handleInputChange}
            value={formValue.email}
            name={'email'}
            error={false}
            errorText={''}
            size={'default'}
            icon={'EditIcon'}
          />
        </div>
        <div className='pb-6'>
          <Input
            type={'password'}
            placeholder={'Пароль'}
            onChange={handleInputChange}
            value={formValue.password}
            name={'password'}
            error={false}
            errorText={''}
            size={'default'}
            icon={'EditIcon'}
          />
        </div>
        {isFormChanged && (
          <div className={styles.button}>
            <Button
              type='secondary'
              htmlType='button'
              size='medium'
              onClick={handleCancel}
            >
              Отменить
            </Button>
            <Button type='primary' size='medium' htmlType='submit'>
              Сохранить
            </Button>
          </div>
        )}
        {updateUserError && (
          <p
            className={`${commonStyles.error} pt-5 text text_type_main-default`}
          >
            {updateUserError}
          </p>
        )}
      </>
    </form>
  </main>
);

```

####### type.ts
```ts
import { ChangeEvent, SyntheticEvent } from 'react';

export type ProfileUIProps = {
  formValue: {
    name: string;
    email: string;
    password: string;
  };
  isFormChanged: boolean;
  handleSubmit: (e: SyntheticEvent) => void;
  handleCancel: (e: SyntheticEvent) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  updateUserError?: string;
};

```

###### profile-orders
####### index.ts
```ts
export { ProfileOrdersUI } from './profile-orders';

```

####### profile-orders.module.css
```css
.menu {
  width: 320px;
}

.main {
  display: flex;
  height: 100%;
  width: 1240px;
  overflow: hidden;
  margin: 0 auto;
}

.orders {
  width: 100%;
}

```

####### profile-orders.tsx
```tsx
import { FC } from 'react';

import styles from './profile-orders.module.css';

import { ProfileOrdersUIProps } from './type';
import { ProfileMenu, OrdersList } from '@components';

export const ProfileOrdersUI: FC<ProfileOrdersUIProps> = ({ orders }) => (
  <main className={`${styles.main}`}>
    <div className={`mt-30 mr-15 ${styles.menu}`}>
      <ProfileMenu />
    </div>
    <div className={`mt-10 ${styles.orders}`}>
      <OrdersList orders={orders} />
    </div>
  </main>
);

```

####### type.ts
```ts
import { TOrder } from '@utils-types';

export type ProfileOrdersUIProps = {
  orders: TOrder[];
};

```

###### register
####### index.ts
```ts
export { RegisterUI } from './register';

```

####### register.tsx
```tsx
import { FC, useState } from 'react';
import {
  Input,
  Button,
  PasswordInput
} from '@zlden/react-developer-burger-ui-components';
import styles from '../common.module.css';
import { Link } from 'react-router-dom';
import { RegisterUIProps } from './type';

export const RegisterUI: FC<RegisterUIProps> = ({
  errorText,
  email,
  setEmail,
  handleSubmit,
  password,
  setPassword,
  userName,
  setUserName
}) => (
  <main className={styles.container}>
    <div className={`pt-6 ${styles.wrapCenter}`}>
      <h3 className='pb-6 text text_type_main-medium'>Регистрация</h3>
      <form
        className={`pb-15 ${styles.form}`}
        name='register'
        onSubmit={handleSubmit}
      >
        <>
          <div className='pb-6'>
            <Input
              type='text'
              placeholder='Имя'
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              name='name'
              error={false}
              errorText=''
              size='default'
            />
          </div>
          <div className='pb-6'>
            <Input
              type='email'
              placeholder='E-mail'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name={'email'}
              error={false}
              errorText=''
              size={'default'}
            />
          </div>
          <div className='pb-6'>
            <PasswordInput
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name='password'
            />
          </div>
          <div className={`pb-6 ${styles.button}`}>
            <Button type='primary' size='medium' htmlType='submit'>
              Зарегистрироваться
            </Button>
          </div>
          {errorText && (
            <p className={`${styles.error} text text_type_main-default pb-6`}>
              {errorText}
            </p>
          )}
        </>
      </form>
      <div className={`${styles.question} text text_type_main-default pb-6`}>
        Уже зарегистрированы?
        <Link to='/login' className={`pl-2 ${styles.link}`}>
          Войти
        </Link>
      </div>
    </div>
  </main>
);

```

####### type.ts
```ts
import { Dispatch, SetStateAction } from 'react';
import { PageUIProps } from '../common-type';

export type RegisterUIProps = PageUIProps & {
  password: string;
  userName: string;
  setPassword: Dispatch<SetStateAction<string>>;
  setUserName: Dispatch<SetStateAction<string>>;
};

```

###### reset-password
####### index.ts
```ts
export { ResetPasswordUI } from './reset-password';

```

####### reset-password.tsx
```tsx
import { FC } from 'react';
import {
  Input,
  Button,
  PasswordInput
} from '@zlden/react-developer-burger-ui-components';
import styles from '../common.module.css';
import { Link } from 'react-router-dom';
import { ResetPasswordUIProps } from './type';

export const ResetPasswordUI: FC<ResetPasswordUIProps> = ({
  errorText,
  password,
  setPassword,
  handleSubmit,
  token,
  setToken
}) => (
  <main className={styles.container}>
    <div className={`pt-6 ${styles.wrapCenter}`}>
      <h3 className='pb-6 text text_type_main-medium'>Восстановление пароля</h3>
      <form
        className={`pb-15 ${styles.form}`}
        name='login'
        onSubmit={handleSubmit}
      >
        <div className='pb-6'>
          <PasswordInput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name='password'
          />
        </div>
        <div className='pb-6'>
          <Input
            type='text'
            placeholder='Введите код из письма'
            onChange={(e) => setToken(e.target.value)}
            value={token}
            name='token'
            error={false}
            errorText=''
            size='default'
          />
        </div>
        <div className={`pb-6 ${styles.button}`}>
          <Button type='primary' size='medium' htmlType='submit'>
            Сохранить
          </Button>
        </div>
        {errorText && (
          <p className={`${styles.error} text text_type_main-default pb-6`}>
            {errorText}
          </p>
        )}
      </form>
      <div className={`${styles.question} text text_type_main-default pb-6`}>
        Вспомнили пароль?
        <Link to='/login' className={`pl-2 ${styles.link}`}>
          Войти
        </Link>
      </div>
    </div>
  </main>
);

```

####### type.ts
```ts
import { Dispatch, SetStateAction } from 'react';
import { PageUIProps } from '../common-type';

export type ResetPasswordUIProps = Omit<PageUIProps, 'email' | 'setEmail'> & {
  password: string;
  token: string;
  setPassword: Dispatch<SetStateAction<string>>;
  setToken: Dispatch<SetStateAction<string>>;
};

```

##### preloader
###### index.ts
```ts
export { Preloader } from './preloader';

```

###### preloader.module.css
```css
.preloader {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preloader_circle {
  display: block;
  width: 74px;
  height: 74px;
  border: 1px solid;
  border-color: #d1d2d6 #9fa0a5 #626368 #1a1b22;

  border-radius: 50%;

  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  animation: spin 0.75s infinite linear;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

```

###### preloader.tsx
```tsx
import React from 'react';
import styles from './preloader.module.css';

export const Preloader = () => (
  <div className={styles.preloader}>
    <div className={styles.preloader_circle} />
  </div>
);

```

##### profile-menu
###### index.ts
```ts
export { ProfileMenuUI } from './profile-menu';

```

###### profile-menu.module.css
```css
.link {
  display: block;
  width: 100%;
  text-decoration: none;
  display: block;
  color: #8585ad;
}

.link_active {
  color: #f2f2f3;
}

.button {
  text-decoration: none;
  display: block;
  color: #8585ad;
  background-color: unset;
  border: none;
}

.button:hover {
  cursor: pointer;
}

```

###### profile-menu.tsx
```tsx
import React, { FC } from 'react';
import styles from './profile-menu.module.css';
import { NavLink } from 'react-router-dom';
import { ProfileMenuUIProps } from './type';

export const ProfileMenuUI: FC<ProfileMenuUIProps> = ({
  pathname,
  handleLogout
}) => (
  <>
    <NavLink
      to={'/profile'}
      className={({ isActive }) =>
        `text text_type_main-medium text_color_inactive pt-4 pb-4 ${
          styles.link
        } ${isActive ? styles.link_active : ''}`
      }
      end
    >
      Профиль
    </NavLink>
    <NavLink
      to={'/profile/orders'}
      className={({ isActive }) =>
        `text text_type_main-medium text_color_inactive pt-4 pb-4 ${
          styles.link
        } ${isActive ? styles.link_active : ''}`
      }
    >
      История заказов
    </NavLink>
    <button
      className={`text text_type_main-medium text_color_inactive pt-4 pb-4 ${styles.button}`}
      onClick={handleLogout}
    >
      Выход
    </button>
    <p className='pt-20 text text_type_main-default text_color_inactive'>
      {pathname === '/profile'
        ? 'В этом разделе вы можете изменить свои персональные данные'
        : 'В этом разделе вы можете просмотреть свою историю заказов'}
    </p>
  </>
);

```

###### type.ts
```ts
export type ProfileMenuUIProps = {
  pathname: string;
  handleLogout: () => void;
};

```

### images
#### done.svg
```xml
<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="120" height="120" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0" transform="translate(-0.156667) scale(0.00333333)"/>
</pattern>
<image id="image0" width="394" height="300" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>

```

### pages
#### index.ts
```ts
export * from './constructor-page';
export * from './feed';
export * from './forgot-password';
export * from './login';
export * from './not-fount-404';
export * from './profile';
export * from './profile-orders';
export * from './register';
export * from './reset-password';

```

#### constructor-page
##### constructor-page.module.css
```css
.containerMain {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 1240px;
  margin: 0 auto;
}

.title {
  width: 100%;
  max-width: 1260px;
  margin-left: auto;
  margin-right: auto;
}

.main {
  display: flex;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
}

```

##### constructor-page.tsx
```tsx
import styles from './constructor-page.module.css';
import { BurgerIngredients } from '../../components';
import { BurgerConstructor } from '../../components';
import { FC } from 'react';

export const ConstructorPage: FC = () => (
  <main className={styles.containerMain}>
    <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}>
      Соберите бургер
    </h1>
    <div className={`${styles.main} pl-5 pr-5`}>
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  </main>
);

```

##### index.ts
```ts
export { ConstructorPage } from './constructor-page';

```

#### feed
##### feed.tsx
```tsx
import { FC, useEffect } from 'react';
import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { useDispatch, useSelector } from '../../services/hooks';
import {
  fetchFeeds,
  feedOrdersSelector,
  feedLoadingSelector
} from '../../services/slices/feedSlice';

export const Feed: FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector(feedOrdersSelector);
  const isLoading = useSelector(feedLoadingSelector);

  useEffect(() => {
    dispatch(fetchFeeds());
  }, [dispatch]);

  const handleGetFeeds = () => {
    dispatch(fetchFeeds());
  };

  if (isLoading) {
    return <Preloader />;
  }

  return <FeedUI orders={orders} handleGetFeeds={handleGetFeeds} />;
};

```

##### index.ts
```ts
export { Feed } from './feed';

```

#### forgot-password
##### forgot-password.tsx
```tsx
import { FC, useState, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordUI } from '@ui-pages';
import { useDispatch, useSelector } from '../../services/hooks';
import {
  forgotPassword,
  forgotPasswordErrorSelector
} from '../../services/slices/userSlice';

export const ForgotPassword: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const forgotPasswordError = useSelector(forgotPasswordErrorSelector);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(forgotPassword({ email }))
      .unwrap()
      .then(() => {
        localStorage.setItem('resetPassword', 'true');
        navigate('/reset-password', { replace: true });
      })
      .catch(() => {});
  };

  return (
    <ForgotPasswordUI
      errorText={forgotPasswordError ?? undefined}
      email={email}
      setEmail={setEmail}
      handleSubmit={handleSubmit}
    />
  );
};

```

##### index.ts
```ts
export { ForgotPassword } from './forgot-password';

```

#### login
##### index.ts
```ts
export { Login } from './login';

```

##### login.tsx
```tsx
import { FC, SyntheticEvent, useState } from 'react';
import { LoginUI } from '@ui-pages';
import { useDispatch, useSelector } from '../../services/hooks';
import {
  loginUser,
  loginUserErrorSelector
} from '../../services/slices/userSlice';

export const Login: FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUserError = useSelector(loginUserErrorSelector);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
      .unwrap()
      .catch(() => {});
  };

  return (
    <LoginUI
      errorText={loginUserError ?? undefined}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};

```

#### not-fount-404
##### index.ts
```ts
export { NotFound404 } from './not-fount-404';

```

##### not-fount-404.tsx
```tsx
import { FC } from 'react';

export const NotFound404: FC = () => (
  <h3 className={`pb-6 text text_type_main-large`}>
    Страница не найдена. Ошибка 404.
  </h3>
);

```

#### profile
##### index.ts
```ts
export { Profile } from './profile';

```

##### profile.tsx
```tsx
import { ProfileUI } from '@ui-pages';
import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from '../../services/hooks';
import {
  userSelector,
  updateUser,
  updateUserErrorSelector
} from '../../services/slices/userSlice';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const updateUserError = useSelector(updateUserErrorSelector);

  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    if (user) {
      setFormValue({
        name: user.name,
        email: user.email,
        password: ''
      });
    }
  }, [user]);

  const isFormChanged =
    formValue.name !== user?.name ||
    formValue.email !== user?.email ||
    !!formValue.password;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const data: Partial<{ name: string; email: string; password: string }> = {};
    if (formValue.name !== user?.name) data.name = formValue.name;
    if (formValue.email !== user?.email) data.email = formValue.email;
    if (formValue.password) data.password = formValue.password;

    if (Object.keys(data).length > 0) {
      dispatch(updateUser(data));
    }
  };

  const handleCancel = (e: SyntheticEvent) => {
    e.preventDefault();
    if (user) {
      setFormValue({
        name: user.name,
        email: user.email,
        password: ''
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <ProfileUI
      formValue={formValue}
      isFormChanged={isFormChanged}
      handleCancel={handleCancel}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      updateUserError={updateUserError ?? undefined}
    />
  );
};

```

#### profile-orders
##### index.ts
```ts
export { ProfileOrders } from './profile-orders';

```

##### profile-orders.tsx
```tsx
import { FC, useEffect } from 'react';
import { ProfileOrdersUI } from '@ui-pages';
import { useSelector, useDispatch } from '../../services/hooks';
import {
  profileOrdersSelector,
  profileOrdersLoadingSelector,
  fetchProfileOrders
} from '../../services/slices/profileOrdersSlice';
import { Preloader } from '@ui';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector(profileOrdersSelector);
  const isLoading = useSelector(profileOrdersLoadingSelector);

  useEffect(() => {
    dispatch(fetchProfileOrders());
  }, [dispatch]);

  if (isLoading) {
    return <Preloader />;
  }

  return <ProfileOrdersUI orders={orders} />;
};

```

#### register
##### index.ts
```ts
export { Register } from './register';

```

##### register.tsx
```tsx
import { FC, SyntheticEvent, useState } from 'react';
import { RegisterUI } from '@ui-pages';
import { useDispatch, useSelector } from '../../services/hooks';
import {
  registerUser,
  registerUserErrorSelector
} from '../../services/slices/userSlice';

export const Register: FC = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUserError = useSelector(registerUserErrorSelector);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(registerUser({ name: userName, email, password }))
      .unwrap()
      .catch(() => {});
  };

  return (
    <RegisterUI
      errorText={registerUserError ?? undefined}
      email={email}
      userName={userName}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      setUserName={setUserName}
      handleSubmit={handleSubmit}
    />
  );
};

```

#### reset-password
##### index.ts
```ts
export { ResetPassword } from './reset-password';

```

##### reset-password.tsx
```tsx
import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResetPasswordUI } from '@ui-pages';
import { useDispatch, useSelector } from '../../services/hooks';
import {
  resetPassword,
  resetPasswordErrorSelector
} from '../../services/slices/userSlice';

export const ResetPassword: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const resetPasswordError = useSelector(resetPasswordErrorSelector);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(resetPassword({ password, token }))
      .unwrap()
      .then(() => {
        localStorage.removeItem('resetPassword');
        navigate('/login');
      })
      .catch(() => {});
  };

  useEffect(() => {
    if (!localStorage.getItem('resetPassword')) {
      navigate('/forgot-password', { replace: true });
    }
  }, [navigate]);

  return (
    <ResetPasswordUI
      errorText={resetPasswordError ?? undefined}
      password={password}
      token={token}
      setPassword={setPassword}
      setToken={setToken}
      handleSubmit={handleSubmit}
    />
  );
};

```

### services
#### hooks.ts
```ts
import {
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { AppDispatch, RootState } from './store';

export const useDispatch = dispatchHook.withTypes<AppDispatch>();
export const useSelector = selectorHook.withTypes<RootState>();

```

#### store.ts
```ts
import { configureStore, combineSlices } from '@reduxjs/toolkit';
import { ingredientsSlice } from './slices/ingredientsSlice';
import { burgerConstructorSlice } from './slices/burgerConstructorSlice';
import { orderSlice } from './slices/orderSlice';
import { feedSlice } from './slices/feedSlice';
import { userSlice } from './slices/userSlice';
import { profileOrdersSlice } from './slices/profileOrdersSlice';
import { orderDetailsSlice } from './slices/orderDetailsSlice';

const rootReducer = combineSlices(
  ingredientsSlice,
  burgerConstructorSlice,
  orderSlice,
  feedSlice,
  userSlice,
  profileOrdersSlice,
  orderDetailsSlice
);

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;

```

#### slices
##### actions.ts
```ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getIngredientsApi } from '@api';

export const getIngredients = createAsyncThunk(
  'burgerConstructor/getIngredients',
  async () => {
    const res = await getIngredientsApi();
    return res;
  }
);

```

##### burgerConstructorSlice.ts
```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient } from '@utils-types';
import { generateId } from '../../utils/generate-id';
import { getIngredients } from './actions';

type TConstructorState = {
  bun: TConstructorIngredient | null;
  ingredients: TConstructorIngredient[];
  isLoading: boolean;
};

const initialState: TConstructorState = {
  bun: null,
  ingredients: [],
  isLoading: false
};

export const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    addIngredient: {
      reducer: (state, action: PayloadAction<TConstructorIngredient>) => {
        if (action.payload.type === 'bun') {
          state.bun = action.payload;
        } else {
          state.ingredients.push(action.payload);
        }
      },
      prepare: (ingredient: TIngredient) => ({
        payload: { ...ingredient, id: generateId() }
      })
    },
    removeIngredient: (state, action: PayloadAction<string>) => {
      state.ingredients = state.ingredients.filter(
        (item) => item.id !== action.payload
      );
    },
    moveIngredient: (
      state,
      action: PayloadAction<{ from: number; to: number }>
    ) => {
      const { from, to } = action.payload;
      const ingredient = state.ingredients.splice(from, 1)[0];
      state.ingredients.splice(to, 0, ingredient);
    },
    clearConstructor: (state) => {
      state.bun = null;
      state.ingredients = [];
    }
  },
  selectors: {
    constructorItemsSelector: (state) => state,
    bunSelector: (state) => state.bun,
    ingredientsSelector: (state) => state.ingredients,
    areIngredientsLoading: (state) => state.isLoading
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = action.payload.map((ing) => ({
          ...ing,
          id: generateId()
        }));
      })
      .addCase(getIngredients.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

export const {
  addIngredient,
  removeIngredient,
  moveIngredient,
  clearConstructor
} = burgerConstructorSlice.actions;

export const {
  constructorItemsSelector,
  bunSelector,
  ingredientsSelector,
  areIngredientsLoading
} = burgerConstructorSlice.selectors;

```

##### feedSlice.ts
```ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFeedsApi } from '@api';
import { TOrder, TRequestState } from '@utils-types';

type TFeedState = TRequestState & {
  orders: TOrder[];
  total: number;
  totalToday: number;
};

const initialState: TFeedState = {
  orders: [],
  total: 0,
  totalToday: 0,
  loading: false,
  error: null
};

export const fetchFeeds = createAsyncThunk('feed/fetchAll', async () => {
  const data = await getFeedsApi();
  return data;
});

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {},
  selectors: {
    feedOrdersSelector: (state) => state.orders,
    feedTotalSelector: (state) => state.total,
    feedTotalTodaySelector: (state) => state.totalToday,
    feedLoadingSelector: (state) => state.loading,
    feedErrorSelector: (state) => state.error
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeeds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeeds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки ленты';
      })
      .addCase(fetchFeeds.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.orders;
        state.total = action.payload.total;
        state.totalToday = action.payload.totalToday;
      });
  }
});

export const {
  feedOrdersSelector,
  feedTotalSelector,
  feedTotalTodaySelector,
  feedLoadingSelector,
  feedErrorSelector
} = feedSlice.selectors;

```

##### ingredientsSlice.ts
```ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getIngredientsApi } from '@api';
import { TIngredient, TRequestState } from '@utils-types';

type TIngredientsState = TRequestState & {
  ingredients: TIngredient[];
};

const initialState: TIngredientsState = {
  ingredients: [],
  loading: false,
  error: null
};

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchAll',
  async () => {
    const data = await getIngredientsApi();
    return data;
  }
);

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  selectors: {
    ingredientsSelector: (state) => state.ingredients,
    ingredientsLoadingSelector: (state) => state.loading,
    errorSelector: (state) => state.error
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки ингредиентов';
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.loading = false;
        state.ingredients = action.payload;
      });
  }
});

export const {
  ingredientsSelector,
  ingredientsLoadingSelector,
  errorSelector
} = ingredientsSlice.selectors;

```

##### orderDetailsSlice.ts
```ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getOrderByNumberApi } from '@api';
import { TOrder, TRequestState } from '@utils-types';

type TOrderDetailsState = TRequestState & {
  order: TOrder | null;
};

const initialState: TOrderDetailsState = {
  order: null,
  loading: false,
  error: null
};

export const fetchOrderByNumber = createAsyncThunk<TOrder, number>(
  'orderDetails/fetchByNumber',
  async (number: number) => {
    const response = await getOrderByNumberApi(number);
    if (response?.orders?.[0]) {
      return response.orders[0];
    }
    throw new Error('Заказ не найден');
  }
);

export const orderDetailsSlice = createSlice({
  name: 'orderDetails',
  initialState,
  reducers: {
    clearOrderDetails: (state) => {
      state.order = null;
      state.error = null;
    }
  },
  selectors: {
    orderDetailsSelector: (state) => state.order,
    orderDetailsLoadingSelector: (state) => state.loading,
    orderDetailsErrorSelector: (state) => state.error
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderByNumber.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderByNumber.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки заказа';
      })
      .addCase(fetchOrderByNumber.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      });
  }
});

export const { clearOrderDetails } = orderDetailsSlice.actions;
export const {
  orderDetailsSelector,
  orderDetailsLoadingSelector,
  orderDetailsErrorSelector
} = orderDetailsSlice.selectors;

```

##### orderSlice.ts
```ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { orderBurgerApi } from '@api';
import { TOrder, TRequestState } from '@utils-types';

type TOrderState = TRequestState & {
  orderRequest: boolean;
  orderModalData: TOrder | null;
};

const initialState: TOrderState = {
  orderRequest: false,
  orderModalData: null,
  loading: false,
  error: null
};

export const createOrder = createAsyncThunk<TOrder, string[]>(
  'order/create',
  async (data: string[]) => {
    const res = await orderBurgerApi(data);
    return {
      ...res.order,
      ingredients: []
    } as TOrder;
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    clearOrderData: (state) => {
      state.orderModalData = null;
      state.error = null;
    }
  },
  selectors: {
    orderRequestSelector: (state) => state.orderRequest,
    orderModalDataSelector: (state) => state.orderModalData,
    orderErrorSelector: (state) => state.error
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.orderRequest = true;
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.orderRequest = false;
        state.loading = false;
        state.error = action.error.message || 'Ошибка создания заказа';
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.loading = false;
        state.orderModalData = action.payload;
      });
  }
});

export const { clearOrderData } = orderSlice.actions;
export const {
  orderRequestSelector,
  orderModalDataSelector,
  orderErrorSelector
} = orderSlice.selectors;

```

##### profileOrdersSlice.ts
```ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getOrdersApi } from '@api';
import { TOrder, TRequestState } from '@utils-types';

type TProfileOrdersState = TRequestState & {
  orders: TOrder[];
};

const initialState: TProfileOrdersState = {
  orders: [],
  loading: false,
  error: null
};

export const fetchProfileOrders = createAsyncThunk<TOrder[]>(
  'profileOrders/fetchAll',
  async () => {
    const data = await getOrdersApi();
    return data;
  }
);

export const profileOrdersSlice = createSlice({
  name: 'profileOrders',
  initialState,
  reducers: {},
  selectors: {
    profileOrdersSelector: (state) => state.orders,
    profileOrdersLoadingSelector: (state) => state.loading,
    profileOrdersErrorSelector: (state) => state.error
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfileOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки истории заказов';
      })
      .addCase(fetchProfileOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      });
  }
});

export const {
  profileOrdersSelector,
  profileOrdersLoadingSelector,
  profileOrdersErrorSelector
} = profileOrdersSlice.selectors;

```

##### userSlice.ts
```ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {
  loginUserApi,
  registerUserApi,
  getUserApi,
  updateUserApi,
  logoutApi,
  forgotPasswordApi,
  resetPasswordApi,
  TRegisterData,
  TLoginData
} from '@api';
import { TUser } from '@utils-types';
import { setCookie, deleteCookie } from '../../utils/cookie';

type TUserState = {
  isAuthChecked: boolean;
  isAuthenticated: boolean;
  user: TUser | null;
  loginUserRequest: boolean;
  loginUserError: string | null;
  registerUserRequest: boolean;
  registerUserError: string | null;
  updateUserRequest: boolean;
  updateUserError: string | null;
  forgotPasswordRequest: boolean;
  forgotPasswordError: string | null;
  resetPasswordRequest: boolean;
  resetPasswordError: string | null;
};

const initialState: TUserState = {
  isAuthChecked: false,
  isAuthenticated: false,
  user: null,
  loginUserRequest: false,
  loginUserError: null,
  registerUserRequest: false,
  registerUserError: null,
  updateUserRequest: false,
  updateUserError: null,
  forgotPasswordRequest: false,
  forgotPasswordError: null,
  resetPasswordRequest: false,
  resetPasswordError: null
};

export const registerUser = createAsyncThunk(
  'user/register',
  async (data: TRegisterData) => {
    const res = await registerUserApi(data);
    setCookie('accessToken', res.accessToken);
    localStorage.setItem('refreshToken', res.refreshToken);
    return res.user;
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (data: TLoginData) => {
    const res = await loginUserApi(data);
    setCookie('accessToken', res.accessToken);
    localStorage.setItem('refreshToken', res.refreshToken);
    return res.user;
  }
);

export const getUser = createAsyncThunk('user/get', async () => {
  const res = await getUserApi();
  return res.user;
});

export const updateUser = createAsyncThunk(
  'user/update',
  async (data: Partial<TRegisterData>) => {
    const res = await updateUserApi(data);
    return res.user;
  }
);

export const logoutUser = createAsyncThunk('user/logout', async () => {
  await logoutApi();
  deleteCookie('accessToken');
  localStorage.removeItem('refreshToken');
});

export const forgotPassword = createAsyncThunk(
  'user/forgotPassword',
  async (data: { email: string }) => {
    await forgotPasswordApi(data);
  }
);

export const resetPassword = createAsyncThunk(
  'user/resetPassword',
  async (data: { password: string; token: string }) => {
    await resetPasswordApi(data);
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthChecked: (state, action: PayloadAction<boolean>) => {
      state.isAuthChecked = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  },
  selectors: {
    userSelector: (state) => state.user,
    isAuthCheckedSelector: (state) => state.isAuthChecked,
    isAuthenticatedSelector: (state) => state.isAuthenticated,
    loginUserRequestSelector: (state) => state.loginUserRequest,
    loginUserErrorSelector: (state) => state.loginUserError,
    registerUserRequestSelector: (state) => state.registerUserRequest,
    registerUserErrorSelector: (state) => state.registerUserError,
    updateUserRequestSelector: (state) => state.updateUserRequest,
    updateUserErrorSelector: (state) => state.updateUserError,
    forgotPasswordRequestSelector: (state) => state.forgotPasswordRequest,
    forgotPasswordErrorSelector: (state) => state.forgotPasswordError,
    resetPasswordRequestSelector: (state) => state.resetPasswordRequest,
    resetPasswordErrorSelector: (state) => state.resetPasswordError
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.registerUserRequest = true;
        state.registerUserError = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerUserRequest = false;
        state.registerUserError = action.error.message || 'Ошибка регистрации';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerUserRequest = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isAuthChecked = true;
      })
      .addCase(loginUser.pending, (state) => {
        state.loginUserRequest = true;
        state.loginUserError = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginUserRequest = false;
        state.loginUserError = action.error.message || 'Ошибка входа';
        state.isAuthChecked = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginUserRequest = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isAuthChecked = true;
      })
      .addCase(getUser.pending, (state) => {})
      .addCase(getUser.rejected, (state) => {
        state.isAuthChecked = true;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isAuthChecked = true;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.updateUserRequest = true;
        state.updateUserError = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.updateUserRequest = false;
        state.updateUserError = action.error.message || 'Ошибка обновления';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.updateUserRequest = false;
        state.user = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isAuthChecked = true;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.forgotPasswordRequest = true;
        state.forgotPasswordError = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.forgotPasswordRequest = false;
        state.forgotPasswordError =
          action.error.message || 'Ошибка восстановления';
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.forgotPasswordRequest = false;
      })
      .addCase(resetPassword.pending, (state) => {
        state.resetPasswordRequest = true;
        state.resetPasswordError = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.resetPasswordRequest = false;
        state.resetPasswordError =
          action.error.message || 'Ошибка сброса пароля';
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.resetPasswordRequest = false;
      });
  }
});

export const { setAuthChecked, clearUser } = userSlice.actions;
export const {
  userSelector,
  isAuthCheckedSelector,
  isAuthenticatedSelector,
  loginUserRequestSelector,
  loginUserErrorSelector,
  registerUserRequestSelector,
  registerUserErrorSelector,
  updateUserRequestSelector,
  updateUserErrorSelector,
  forgotPasswordRequestSelector,
  forgotPasswordErrorSelector,
  resetPasswordRequestSelector,
  resetPasswordErrorSelector
} = userSlice.selectors;

```

##### __tests__
###### burgerConstructorSlice.test.ts
```ts
import { describe, expect, test, jest } from '@jest/globals';
import {
  burgerConstructorSlice,
  addIngredient,
  removeIngredient,
  moveIngredient,
  clearConstructor,
  constructorItemsSelector,
  bunSelector,
  ingredientsSelector,
  areIngredientsLoading
} from '../burgerConstructorSlice';
import { getIngredients } from '../actions';
import { TIngredient } from '@utils-types';
import { store } from '../../store';
import { api } from '../../../utils/burger-api';

// Мокаем API
jest.mock('../../../utils/burger-api');

const mockBun: TIngredient = {
  _id: 'bun1',
  name: 'Булка',
  type: 'bun',
  proteins: 10,
  fat: 5,
  carbohydrates: 20,
  calories: 100,
  price: 50,
  image: 'url',
  image_large: 'url',
  image_mobile: 'url'
};

const mockIngredient1: TIngredient = {
  _id: 'ing1',
  name: 'Начинка 1',
  type: 'main',
  proteins: 15,
  fat: 10,
  carbohydrates: 30,
  calories: 200,
  price: 75,
  image: 'url',
  image_large: 'url',
  image_mobile: 'url'
};

const mockIngredient2: TIngredient = {
  _id: 'ing2',
  name: 'Начинка 2',
  type: 'main',
  proteins: 20,
  fat: 12,
  carbohydrates: 25,
  calories: 180,
  price: 60,
  image: 'url',
  image_large: 'url',
  image_mobile: 'url'
};

describe('burgerConstructorSlice', () => {
  const initialState = {
    bun: null,
    ingredients: [],
    isLoading: false
  };

  test('should return initial state with unknown action', () => {
    const state = burgerConstructorSlice.reducer(undefined, {
      type: 'UNKNOWN'
    });
    expect(state).toEqual(initialState);
  });

  describe('addIngredient', () => {
    test('should add bun', () => {
      const state = burgerConstructorSlice.reducer(
        initialState,
        addIngredient(mockBun)
      );
      expect(state.bun).toEqual({ ...mockBun, id: expect.any(String) });
      expect(state.ingredients).toHaveLength(0);
      expect(state.isLoading).toBe(false);
    });

    test('should add ingredient', () => {
      const state = burgerConstructorSlice.reducer(
        initialState,
        addIngredient(mockIngredient1)
      );
      expect(state.bun).toBeNull();
      expect(state.ingredients).toHaveLength(1);
      expect(state.ingredients[0]).toEqual({
        ...mockIngredient1,
        id: expect.any(String)
      });
    });
  });

  describe('removeIngredient', () => {
    test('should remove ingredient by id', () => {
      const stateWithIngredient = burgerConstructorSlice.reducer(
        initialState,
        addIngredient(mockIngredient1)
      );
      const id = stateWithIngredient.ingredients[0].id;
      const newState = burgerConstructorSlice.reducer(
        stateWithIngredient,
        removeIngredient(id)
      );
      expect(newState.ingredients).toHaveLength(0);
    });
  });

  describe('moveIngredient', () => {
    test('should move ingredient from index 0 to 1', () => {
      let state = burgerConstructorSlice.reducer(
        initialState,
        addIngredient(mockIngredient1)
      );
      state = burgerConstructorSlice.reducer(
        state,
        addIngredient(mockIngredient2)
      );
      expect(state.ingredients[0]._id).toBe('ing1');
      expect(state.ingredients[1]._id).toBe('ing2');
      const newState = burgerConstructorSlice.reducer(
        state,
        moveIngredient({ from: 0, to: 1 })
      );
      expect(newState.ingredients[0]._id).toBe('ing2');
      expect(newState.ingredients[1]._id).toBe('ing1');
    });
  });

  describe('clearConstructor', () => {
    test('should clear bun and ingredients', () => {
      let state = burgerConstructorSlice.reducer(
        initialState,
        addIngredient(mockBun)
      );
      state = burgerConstructorSlice.reducer(
        state,
        addIngredient(mockIngredient1)
      );
      const newState = burgerConstructorSlice.reducer(
        state,
        clearConstructor()
      );
      expect(newState).toEqual(initialState);
    });
  });

  describe('async thunk getIngredients', () => {
    const mockIngredients = [mockBun, mockIngredient1, mockIngredient2];

    test('pending', () => {
      const state = burgerConstructorSlice.reducer(
        initialState,
        getIngredients.pending('', undefined)
      );
      expect(state.isLoading).toBe(true);
    });

    test('fulfilled', () => {
      const state = burgerConstructorSlice.reducer(
        initialState,
        getIngredients.fulfilled(mockIngredients, '', undefined)
      );
      expect(state.isLoading).toBe(false);
      expect(state.ingredients).toHaveLength(3);
      state.ingredients.forEach((item) => {
        expect(item.id).toBeDefined();
      });
    });

    test('rejected', () => {
      const error = new Error('Network error');
      const state = burgerConstructorSlice.reducer(
        initialState,
        getIngredients.rejected(error, '', undefined)
      );
      expect(state.isLoading).toBe(false);
      expect(state.ingredients).toEqual([]);
    });

    test('should fetch ingredients via store', async () => {
      const getIngredientsSpy = jest
        .spyOn(api, 'getIngredients')
        .mockResolvedValue(mockIngredients);
      await store.dispatch(getIngredients());
      const state = store.getState().burgerConstructor;
      expect(state.ingredients).toHaveLength(3);
      expect(getIngredientsSpy).toHaveBeenCalledTimes(1);
      expect(state.isLoading).toBe(false);
    });
  });

  describe('selectors', () => {
    const state = {
      burgerConstructor: {
        bun: { ...mockBun, id: 'bun-id' },
        ingredients: [
          { ...mockIngredient1, id: 'ing-id-1' },
          { ...mockIngredient2, id: 'ing-id-2' }
        ],
        isLoading: false
      }
    };

    test('constructorItemsSelector should return full state', () => {
      expect(constructorItemsSelector(state)).toEqual(state.burgerConstructor);
    });

    test('bunSelector should return bun', () => {
      expect(bunSelector(state)).toEqual(state.burgerConstructor.bun);
    });

    test('ingredientsSelector should return ingredients', () => {
      expect(ingredientsSelector(state)).toEqual(
        state.burgerConstructor.ingredients
      );
    });

    test('areIngredientsLoading should return isLoading', () => {
      expect(areIngredientsLoading(state)).toBe(false);
    });
  });
});

```

###### ingredientsSlice.test.ts
```ts
import { describe, expect, test } from '@jest/globals';
import { ingredientsSlice, fetchIngredients } from '../ingredientsSlice';
import { TIngredient } from '@utils-types';

const mockIngredients: TIngredient[] = [
  {
    _id: '1',
    name: 'Булка',
    type: 'bun',
    proteins: 10,
    fat: 5,
    carbohydrates: 20,
    calories: 100,
    price: 50,
    image: 'url',
    image_large: 'url',
    image_mobile: 'url'
  },
  {
    _id: '2',
    name: 'Начинка',
    type: 'main',
    proteins: 15,
    fat: 10,
    carbohydrates: 30,
    calories: 200,
    price: 75,
    image: 'url',
    image_large: 'url',
    image_mobile: 'url'
  }
];

describe('ingredientsSlice', () => {
  const initialState = {
    ingredients: [],
    loading: false,
    error: null
  };

  test('should return initial state with unknown action', () => {
    const state = ingredientsSlice.reducer(undefined, { type: 'UNKNOWN' });
    expect(state).toEqual(initialState);
  });

  test('should handle fetchIngredients.pending', () => {
    const state = ingredientsSlice.reducer(
      initialState,
      fetchIngredients.pending('', undefined)
    );
    expect(state).toEqual({
      ...initialState,
      loading: true,
      error: null
    });
  });

  test('should handle fetchIngredients.fulfilled', () => {
    const state = ingredientsSlice.reducer(
      initialState,
      fetchIngredients.fulfilled(mockIngredients, '', undefined)
    );
    expect(state).toEqual({
      ...initialState,
      loading: false,
      ingredients: mockIngredients
    });
  });

  test('should handle fetchIngredients.rejected', () => {
    const error = new Error('Network error');
    const state = ingredientsSlice.reducer(
      initialState,
      fetchIngredients.rejected(error, '', undefined)
    );
    expect(state).toEqual({
      ...initialState,
      loading: false,
      error: error.message
    });
  });

  test('selectors should return correct data', () => {
    const state = {
      ingredients: mockIngredients,
      loading: false,
      error: null
    };
    const { ingredientsSelector, ingredientsLoadingSelector, errorSelector } =
      ingredientsSlice.selectors;
    expect(ingredientsSelector({ ingredients: state })).toEqual(
      mockIngredients
    );
    expect(ingredientsLoadingSelector({ ingredients: state })).toBe(false);
    expect(errorSelector({ ingredients: state })).toBe(null);
  });
});

```

### stories
#### BurgerConstructor.stories.ts
```ts
import { BurgerConstructorUI } from '@ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/BurgerConstructor',
  component: BurgerConstructorUI,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
} satisfies Meta<typeof BurgerConstructorUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultConstructor: Story = {
  args: {
    constructorItems: { bun: null, ingredients: [] },
    orderRequest: false,
    price: 0,
    orderModalData: null,
    onOrderClick: () => {},
    closeOrderModal: () => {}
  }
};

```

#### BurgerConstructorElement.stories.ts
```ts
import { BurgerConstructorElementUI } from '@ui';
import type { Meta, StoryObj } from '@storybook/react';
import { totalmem } from 'os';

const meta = {
  title: 'Example/BurgerConstructorElement',
  component: BurgerConstructorElementUI,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
} satisfies Meta<typeof BurgerConstructorElementUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultElement: Story = {
  args: {
    ingredient: {
      _id: '111',
      id: '222',
      name: 'Булка',
      type: 'top',
      proteins: 12,
      fat: 33,
      carbohydrates: 22,
      calories: 33,
      price: 123,
      image: '',
      image_large: '',
      image_mobile: ''
    },
    index: 0,
    totalItems: 1,
    handleMoveUp: () => {},
    handleMoveDown: () => {},
    handleClose: () => {}
  }
};

```

#### BurgerIngredient.stories.tsx
```tsx
import React from 'react';
import { BurgerIngredientUI } from '@ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/BurgerIngredient',
  component: BurgerIngredientUI,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => (
      <div style={{ width: 'fit-content', margin: 20 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof BurgerIngredientUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultIngredient: Story = {
  args: {
    ingredient: {
      _id: '111',
      name: 'Булка',
      type: 'top',
      proteins: 12,
      fat: 33,
      carbohydrates: 22,
      calories: 33,
      price: 123,
      image: '',
      image_large: '',
      image_mobile: ''
    },
    count: 2,
    locationState: {
      background: {
        hash: '',
        key: 'eitkep27',
        pathname: '/',
        search: '',
        state: null
      }
    },
    handleAdd: () => {}
  }
};

```

#### Configure.mdx
```mdx
import { Meta } from '@storybook/blocks';

import Github from './assets/github.svg';
import Discord from './assets/discord.svg';
import Youtube from './assets/youtube.svg';
import Tutorials from './assets/tutorials.svg';
import Styling from './assets/styling.png';
import Context from './assets/context.png';
import Assets from './assets/assets.png';
import Docs from './assets/docs.png';
import Share from './assets/share.png';
import FigmaPlugin from './assets/figma-plugin.png';
import Testing from './assets/testing.png';
import Accessibility from './assets/accessibility.png';
import Theming from './assets/theming.png';
import AddonLibrary from './assets/addon-library.png';

export const RightArrow = () => (
  <svg
    viewBox='0 0 14 14'
    width='8px'
    height='14px'
    style={{
      marginLeft: '4px',
      display: 'inline-block',
      shapeRendering: 'inherit',
      verticalAlign: 'middle',
      fill: 'currentColor',
      'path fill': 'currentColor'
    }}
  >
    <path d='m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z' />
  </svg>
);

<Meta title='Configure your project' />

<div className="sb-container">
  <div className='sb-section-title'>
    # Configure your project

    Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community.

  </div>
  <div className="sb-section">
    <div className="sb-section-item">
      <img
        src={Styling}
        alt="A wall of logos representing different styling technologies"
      />
      <h4 className="sb-section-item-heading">Add styling and CSS</h4>
      <p className="sb-section-item-paragraph">Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook.</p>
      <a
        href="https://storybook.js.org/docs/react/configure/styling-and-css"
        target="_blank"
      >Learn more<RightArrow /></a>
    </div>
    <div className="sb-section-item">
      <img
        src={Context}
        alt="An abstraction representing the composition of data for a component"
      />
      <h4 className="sb-section-item-heading">Provide context and mocking</h4>
      <p className="sb-section-item-paragraph">Often when a story doesn't render, it's because your component is expecting a specific environment or context (like a theme provider) to be available.</p>
      <a
        href="https://storybook.js.org/docs/react/writing-stories/decorators#context-for-mocking"
        target="_blank"
      >Learn more<RightArrow /></a>
    </div>
    <div className="sb-section-item">
      <img src={Assets} alt="A representation of typography and image assets" />
      <div>
        <h4 className="sb-section-item-heading">Load assets and resources</h4>
        <p className="sb-section-item-paragraph">To link static files (like fonts) to your projects and stories, use the
        `staticDirs` configuration option to specify folders to load when
        starting Storybook.</p>
        <a
          href="https://storybook.js.org/docs/react/configure/images-and-assets"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
    </div>
  </div>
</div>
<div className="sb-container">
  <div className='sb-section-title'>
    # Do more with Storybook

    Now that you know the basics, let's explore other parts of Storybook that will improve your experience. This list is just to get you started. You can customise Storybook in many ways to fit your needs.

  </div>

  <div className="sb-section">
    <div className="sb-features-grid">
      <div className="sb-grid-item">
        <img src={Docs} alt="A screenshot showing the autodocs tag being set, pointing a docs page being generated" />
        <h4 className="sb-section-item-heading">Autodocs</h4>
        <p className="sb-section-item-paragraph">Auto-generate living,
          interactive reference documentation from your components and stories.</p>
        <a
          href="https://storybook.js.org/docs/react/writing-docs/autodocs"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <img src={Share} alt="A browser window showing a Storybook being published to a chromatic.com URL" />
        <h4 className="sb-section-item-heading">Publish to Chromatic</h4>
        <p className="sb-section-item-paragraph">Publish your Storybook to review and collaborate with your entire team.</p>
        <a
          href="https://storybook.js.org/docs/react/sharing/publish-storybook#publish-storybook-with-chromatic"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <img src={FigmaPlugin} alt="Windows showing the Storybook plugin in Figma" />
        <h4 className="sb-section-item-heading">Figma Plugin</h4>
        <p className="sb-section-item-paragraph">Embed your stories into Figma to cross-reference the design and live
          implementation in one place.</p>
        <a
          href="https://storybook.js.org/docs/react/sharing/design-integrations#embed-storybook-in-figma-with-the-plugin"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <img src={Testing} alt="Screenshot of tests passing and failing" />
        <h4 className="sb-section-item-heading">Testing</h4>
        <p className="sb-section-item-paragraph">Use stories to test a component in all its variations, no matter how
          complex.</p>
        <a
          href="https://storybook.js.org/docs/react/writing-tests"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <img src={Accessibility} alt="Screenshot of accessibility tests passing and failing" />
        <h4 className="sb-section-item-heading">Accessibility</h4>
        <p className="sb-section-item-paragraph">Automatically test your components for a11y issues as you develop.</p>
        <a
          href="https://storybook.js.org/docs/react/writing-tests/accessibility-testing"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <img src={Theming} alt="Screenshot of Storybook in light and dark mode" />
        <h4 className="sb-section-item-heading">Theming</h4>
        <p className="sb-section-item-paragraph">Theme Storybook's UI to personalize it to your project.</p>
        <a
          href="https://storybook.js.org/docs/react/configure/theming"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
    </div>
  </div>
</div>
<div className='sb-addon'>
  <div className='sb-addon-text'>
    <h4>Addons</h4>
    <p className="sb-section-item-paragraph">Integrate your tools with Storybook to connect workflows.</p>
    <a
        href="https://storybook.js.org/integrations/"
        target="_blank"
      >Discover all addons<RightArrow /></a>
  </div>
  <div className='sb-addon-img'>
    <img src={AddonLibrary} alt="Integrate your tools with Storybook to connect workflows." />
  </div>
</div>

<div className="sb-section sb-socials">
    <div className="sb-section-item">
      <img src={Github} alt="Github logo" className="sb-explore-image"/>
      Join our contributors building the future of UI development.

      <a
        href="https://github.com/storybookjs/storybook"
        target="_blank"
      >Star on GitHub<RightArrow /></a>
    </div>
    <div className="sb-section-item">
      <img src={Discord} alt="Discord logo" className="sb-explore-image"/>
      <div>
        Get support and chat with frontend developers.

        <a
          href="https://discord.gg/storybook"
          target="_blank"
        >Join Discord server<RightArrow /></a>
      </div>
    </div>
    <div className="sb-section-item">
      <img src={Youtube} alt="Youtube logo" className="sb-explore-image"/>
      <div>
        Watch tutorials, feature previews and interviews.

        <a
          href="https://www.youtube.com/@chromaticui"
          target="_blank"
        >Watch on YouTube<RightArrow /></a>
      </div>
    </div>
    <div className="sb-section-item">
      <img src={Tutorials} alt="A book" className="sb-explore-image"/>
      <p>Follow guided walkthroughs on for key workflows.</p>

      <a
          href="https://storybook.js.org/tutorials/"
          target="_blank"
        >Discover tutorials<RightArrow /></a>
    </div>

</div>

<style>
  {`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  img {
    object-fit: cover;
  }

  .sb-section-title {
    margin-bottom: 32px;
  }

  .sb-section a:not(h1 a, h2 a, h3 a) {
    font-size: 14px;
  }

  .sb-section-item, .sb-grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sb-section-item-heading {
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  .sb-section-item-paragraph {
    margin: 0;
    padding-bottom: 10px;
  }

  .sb-chevron {
    margin-left: 5px;
  }

  .sb-features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px 20px;
  }

  .sb-socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sb-socials p {
    margin-bottom: 10px;
  }

  .sb-explore-image {
    max-height: 32px;
    align-self: flex-start;
  }

  .sb-addon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #EEF3F8;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #EEF3F8;
    height: 180px;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 48px;
    max-width: 240px;
  }

  .sb-addon-text h4 {
    padding-top: 0px;
  }

  .sb-addon-img {
    position: absolute;
    left: 345px;
    top: 0;
    height: 100%;
    width: 200%;
    overflow: hidden;
  }

  .sb-addon-img img {
    width: 650px;
    transform: rotate(-15deg);
    margin-left: 40px;
    margin-top: -72px;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .sb-addon-img {
      left: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .sb-section {
      flex-direction: column;
    }

    .sb-features-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .sb-socials {
      grid-template-columns: repeat(2, 1fr);
    }

    .sb-addon {
      height: 280px;
      align-items: flex-start;
      padding-top: 32px;
      overflow: hidden;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }
  }
  `}
</style>

```

#### FeedInfo.stories.ts
```ts
import { FeedInfoUI } from '@ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/FeedInfo',
  component: FeedInfoUI,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
} satisfies Meta<typeof FeedInfoUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFeedInfo: Story = {
  args: {
    feed: {
      total: 12,
      totalToday: 2
    },
    readyOrders: [123, 124, 125],
    pendingOrders: [126, 127]
  }
};

```

#### Header.stories.ts
```ts
import type { Meta, StoryObj } from '@storybook/react';

import { AppHeaderUI } from '@ui';

const meta = {
  title: 'Example/Header',
  component: AppHeaderUI,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
} satisfies Meta<typeof AppHeaderUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    userName: 'John Doe'
  }
};

export const LoggedOut: Story = {
  args: {
    userName: undefined
  }
};

```

#### IngredientDetails.stories.ts
```ts
import { IngredientDetailsUI } from '@ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/IngredientDetails',
  component: IngredientDetailsUI,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
} satisfies Meta<typeof IngredientDetailsUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultIngredientDetails: Story = {
  args: {
    ingredientData: {
      _id: '111',
      name: 'Начинка',
      type: 'main',
      proteins: 23,
      fat: 34,
      carbohydrates: 45,
      calories: 56,
      price: 67,
      image: '',
      image_large: '',
      image_mobile: ''
    }
  }
};

```

#### OrderCard.stories.ts
```ts
import { OrderCardUI } from '@ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/OrderCard',
  component: OrderCardUI,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
} satisfies Meta<typeof OrderCardUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultOrderCard: Story = {
  args: {
    orderInfo: {
      ingredientsInfo: [
        {
          _id: '111',
          name: 'Булка',
          type: 'top',
          proteins: 12,
          fat: 33,
          carbohydrates: 22,
          calories: 33,
          price: 123,
          image: '',
          image_large: '',
          image_mobile: ''
        }
      ],
      ingredientsToShow: [
        {
          _id: '111',
          name: 'Булка',
          type: 'top',
          proteins: 12,
          fat: 33,
          carbohydrates: 22,
          calories: 33,
          price: 123,
          image: '',
          image_large: '',
          image_mobile: ''
        },
        {
          _id: '111',
          name: 'Начинка',
          type: 'top',
          proteins: 12,
          fat: 33,
          carbohydrates: 22,
          calories: 33,
          price: 123,
          image: '',
          image_large: '',
          image_mobile: ''
        }
      ],
      remains: 2,
      total: 2,
      date: new Date('2024-01-25'),
      _id: '32',
      status: 'ready',
      name: 'Начинка',
      createdAt: '',
      updatedAt: '',
      number: 3,
      ingredients: ['Булка', 'Начинка']
    },
    maxIngredients: 5,
    locationState: {
      background: {
        hash: '',
        key: 'eitkep27',
        pathname: '/',
        search: '',
        state: null
      }
    }
  }
};

```

#### OrderDetails.stories.tsx
```tsx
import React from 'react';
import { OrderDetailsUI } from '@ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/OrderDetails',
  component: OrderDetailsUI,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: 'fit-content',
          margin: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof OrderDetailsUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultOrderDetails: Story = {
  args: {
    orderNumber: 12
  }
};

```

#### OrderInfo.stories.ts
```ts
import { OrderInfoUI } from '@ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/OrderInfo',
  component: OrderInfoUI,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
} satisfies Meta<typeof OrderInfoUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultOrderInfo: Story = {
  args: {
    orderInfo: {
      ingredientsInfo: {
        bun: {
          _id: '211',
          name: 'Булка',
          type: 'bun',
          proteins: 12,
          fat: 23,
          carbohydrates: 45,
          calories: 56,
          price: 67,
          image: '',
          image_large: '',
          image_mobile: '',
          count: 2
        }
      },
      date: new Date('2024-01-25'),
      total: 134,
      _id: '233',
      status: 'ready',
      name: 'Order',
      createdAt: '',
      updatedAt: '',
      number: 2,
      ingredients: ['Булка', 'Начинка']
    }
  }
};

```

#### OrderStatus.stories.tsx
```tsx
import React from 'react';
import { OrderStatusUI } from '@ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/OrderStatus',
  component: OrderStatusUI,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => (
      <div style={{ width: 'fit-content', margin: 20 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof OrderStatusUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultOrderStatus: Story = {
  args: {
    textStyle: '#E52B1A',
    text: 'Готовится'
  }
};

```

#### Preloader.stories.ts
```ts
import { Preloader } from '@ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/Preloader',
  component: Preloader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Preloader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultPreloader: Story = {
  args: {}
};

```

#### ProfileMenu.stories.ts
```ts
import { ProfileMenuUI } from '@ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/ProfileMenu',
  component: ProfileMenuUI,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
} satisfies Meta<typeof ProfileMenuUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultProfileMenu: Story = {
  args: {
    pathname: '/profile',
    handleLogout: () => {}
  }
};

```

#### assets
##### accessibility.png
```png
[Бинарный файл или ошибка чтения]
```

##### accessibility.svg
```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <title>Accessibility</title>
  <circle cx="24.334" cy="24" r="24" fill="#A849FF" fill-opacity="0.3"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8609 11.585C27.8609 9.59506 26.2497 7.99023 24.2519 7.99023C22.254 7.99023 20.6429 9.65925 20.6429 11.585C20.6429 13.575 22.254 15.1799 24.2519 15.1799C26.2497 15.1799 27.8609 13.575 27.8609 11.585ZM21.8922 22.6473C21.8467 23.9096 21.7901 25.4788 21.5897 26.2771C20.9853 29.0462 17.7348 36.3314 17.3325 37.2275C17.1891 37.4923 17.1077 37.7955 17.1077 38.1178C17.1077 39.1519 17.946 39.9902 18.9802 39.9902C19.6587 39.9902 20.253 39.6293 20.5814 39.0889L20.6429 38.9874L24.2841 31.22C24.2841 31.22 27.5529 37.9214 27.9238 38.6591C28.2948 39.3967 28.8709 39.9902 29.7168 39.9902C30.751 39.9902 31.5893 39.1519 31.5893 38.1178C31.5893 37.7951 31.3639 37.2265 31.3639 37.2265C30.9581 36.3258 27.698 29.0452 27.0938 26.2771C26.8975 25.4948 26.847 23.9722 26.8056 22.7236C26.7927 22.333 26.7806 21.9693 26.7653 21.6634C26.7008 21.214 27.0231 20.8289 27.4097 20.7005L35.3366 18.3253C36.3033 18.0685 36.8834 16.9773 36.6256 16.0144C36.3678 15.0515 35.2722 14.4737 34.3055 14.7305C34.3055 14.7305 26.8619 17.1057 24.2841 17.1057C21.7062 17.1057 14.456 14.7947 14.456 14.7947C13.4893 14.5379 12.3937 14.9873 12.0715 15.9502C11.7493 16.9131 12.3293 18.0044 13.3604 18.3253L21.2873 20.7005C21.674 20.8289 21.9318 21.214 21.9318 21.6634C21.9174 21.9493 21.9053 22.2857 21.8922 22.6473Z" fill="#A470D5"/>
</svg>
```

##### addon-library.png
```png
[Бинарный файл или ошибка чтения]
```

##### assets.png
```png
[Бинарный файл или ошибка чтения]
```

##### avif-test-image.avif
```avif
[Бинарный файл или ошибка чтения]
```

##### context.png
```png
[Бинарный файл или ошибка чтения]
```

##### discord.svg
```xml
<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_10031_177575)">
<mask id="mask0_10031_177575" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="4" width="33" height="25">
<path d="M32.5034 4.00195H0.503906V28.7758H32.5034V4.00195Z" fill="white"/>
</mask>
<g mask="url(#mask0_10031_177575)">
<path d="M27.5928 6.20817C25.5533 5.27289 23.3662 4.58382 21.0794 4.18916C21.0378 4.18154 20.9962 4.20057 20.9747 4.23864C20.6935 4.73863 20.3819 5.3909 20.1637 5.90358C17.7042 5.53558 15.2573 5.53558 12.8481 5.90358C12.6299 5.37951 12.307 4.73863 12.0245 4.23864C12.003 4.20184 11.9614 4.18281 11.9198 4.18916C9.63431 4.58255 7.44721 5.27163 5.40641 6.20817C5.38874 6.21578 5.3736 6.22848 5.36355 6.24497C1.21508 12.439 0.078646 18.4809 0.636144 24.4478C0.638667 24.477 0.655064 24.5049 0.677768 24.5227C3.41481 26.5315 6.06609 27.7511 8.66815 28.5594C8.70979 28.5721 8.75392 28.5569 8.78042 28.5226C9.39594 27.6826 9.94461 26.7968 10.4151 25.8653C10.4428 25.8107 10.4163 25.746 10.3596 25.7244C9.48927 25.3945 8.66058 24.9922 7.86343 24.5354C7.80038 24.4986 7.79533 24.4084 7.85333 24.3653C8.02108 24.2397 8.18888 24.109 8.34906 23.977C8.37804 23.9529 8.41842 23.9478 8.45249 23.963C13.6894 26.3526 19.359 26.3526 24.5341 23.963C24.5682 23.9465 24.6086 23.9516 24.6388 23.9757C24.799 24.1077 24.9668 24.2397 25.1358 24.3653C25.1938 24.4084 25.19 24.4986 25.127 24.5354C24.3298 25.0011 23.5011 25.3945 22.6296 25.7232C22.5728 25.7447 22.5476 25.8107 22.5754 25.8653C23.0559 26.7955 23.6046 27.6812 24.2087 28.5213C24.234 28.5569 24.2794 28.5721 24.321 28.5594C26.9357 27.7511 29.5869 26.5315 32.324 24.5227C32.348 24.5049 32.3631 24.4783 32.3656 24.4491C33.0328 17.5506 31.2481 11.5584 27.6344 6.24623C27.6256 6.22848 27.6105 6.21578 27.5928 6.20817ZM11.1971 20.8146C9.62043 20.8146 8.32129 19.3679 8.32129 17.5913C8.32129 15.8146 9.59523 14.368 11.1971 14.368C12.8115 14.368 14.0981 15.8273 14.0729 17.5913C14.0729 19.3679 12.7989 20.8146 11.1971 20.8146ZM21.8299 20.8146C20.2533 20.8146 18.9541 19.3679 18.9541 17.5913C18.9541 15.8146 20.228 14.368 21.8299 14.368C23.4444 14.368 24.7309 15.8273 24.7057 17.5913C24.7057 19.3679 23.4444 20.8146 21.8299 20.8146Z" fill="#5865F2"/>
</g>
</g>
<defs>
<clipPath id="clip0_10031_177575">
<rect width="31.9995" height="32" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>

```

##### docs.png
```png
[Бинарный файл или ошибка чтения]
```

##### figma-plugin.png
```png
[Бинарный файл или ошибка чтения]
```

##### github.svg
```xml
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0001 0C7.16466 0 0 7.17472 0 16.0256C0 23.1061 4.58452 29.1131 10.9419 31.2322C11.7415 31.3805 12.0351 30.8845 12.0351 30.4613C12.0351 30.0791 12.0202 28.8167 12.0133 27.4776C7.56209 28.447 6.62283 25.5868 6.62283 25.5868C5.89499 23.7345 4.8463 23.2419 4.8463 23.2419C3.39461 22.2473 4.95573 22.2678 4.95573 22.2678C6.56242 22.3808 7.40842 23.9192 7.40842 23.9192C8.83547 26.3691 11.1514 25.6609 12.0645 25.2514C12.2081 24.2156 12.6227 23.5087 13.0803 23.1085C9.52648 22.7032 5.7906 21.3291 5.7906 15.1886C5.7906 13.4389 6.41563 12.0094 7.43916 10.8871C7.27303 10.4834 6.72537 8.85349 7.59415 6.64609C7.59415 6.64609 8.93774 6.21539 11.9953 8.28877C13.2716 7.9337 14.6404 7.75563 16.0001 7.74953C17.3599 7.75563 18.7297 7.9337 20.0084 8.28877C23.0623 6.21539 24.404 6.64609 24.404 6.64609C25.2749 8.85349 24.727 10.4834 24.5608 10.8871C25.5868 12.0094 26.2075 13.4389 26.2075 15.1886C26.2075 21.3437 22.4645 22.699 18.9017 23.0957C19.4756 23.593 19.9869 24.5683 19.9869 26.0634C19.9869 28.2077 19.9684 29.9334 19.9684 30.4613C19.9684 30.8877 20.2564 31.3874 21.0674 31.2301C27.4213 29.1086 32 23.1037 32 16.0256C32 7.17472 24.8364 0 16.0001 0ZM5.99257 22.8288C5.95733 22.9084 5.83227 22.9322 5.71834 22.8776C5.60229 22.8253 5.53711 22.7168 5.57474 22.6369C5.60918 22.5549 5.7345 22.5321 5.85029 22.587C5.9666 22.6393 6.03284 22.7489 5.99257 22.8288ZM6.7796 23.5321C6.70329 23.603 6.55412 23.5701 6.45291 23.4581C6.34825 23.3464 6.32864 23.197 6.40601 23.125C6.4847 23.0542 6.62937 23.0874 6.73429 23.1991C6.83895 23.3121 6.85935 23.4605 6.7796 23.5321ZM7.31953 24.4321C7.2215 24.5003 7.0612 24.4363 6.96211 24.2938C6.86407 24.1513 6.86407 23.9804 6.96422 23.9119C7.06358 23.8435 7.2215 23.905 7.32191 24.0465C7.41968 24.1914 7.41968 24.3623 7.31953 24.4321ZM8.23267 25.4743C8.14497 25.5712 7.95818 25.5452 7.82146 25.413C7.68156 25.2838 7.64261 25.1004 7.73058 25.0035C7.81934 24.9064 8.00719 24.9337 8.14497 25.0648C8.28381 25.1938 8.3262 25.3785 8.23267 25.4743ZM9.41281 25.8262C9.37413 25.9517 9.19423 26.0088 9.013 25.9554C8.83203 25.9005 8.7136 25.7535 8.75016 25.6266C8.78778 25.5003 8.96848 25.4408 9.15104 25.4979C9.33174 25.5526 9.45044 25.6985 9.41281 25.8262ZM10.7559 25.9754C10.7604 26.1076 10.6067 26.2172 10.4165 26.2196C10.2252 26.2238 10.0704 26.1169 10.0683 25.9868C10.0683 25.8534 10.2185 25.7448 10.4098 25.7416C10.6001 25.7379 10.7559 25.8441 10.7559 25.9754ZM12.0753 25.9248C12.0981 26.0537 11.9658 26.1862 11.7769 26.2215C11.5912 26.2554 11.4192 26.1758 11.3957 26.0479C11.3726 25.9157 11.5072 25.7833 11.6927 25.7491C11.8819 25.7162 12.0512 25.7937 12.0753 25.9248Z" fill="#161614"/>
</svg>

```

##### share.png
```png
[Бинарный файл или ошибка чтения]
```

##### styling.png
```png
[Бинарный файл или ошибка чтения]
```

##### testing.png
```png
[Бинарный файл или ошибка чтения]
```

##### theming.png
```png
[Бинарный файл или ошибка чтения]
```

##### tutorials.svg
```xml
<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_10031_177597)">
<path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M17 7.87059C17 6.48214 17.9812 5.28722 19.3431 5.01709L29.5249 2.99755C31.3238 2.64076 33 4.01717 33 5.85105V22.1344C33 23.5229 32.0188 24.7178 30.6569 24.9879L20.4751 27.0074C18.6762 27.3642 17 25.9878 17 24.1539L17 7.87059Z" fill="#B7F0EF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 5.85245C1 4.01857 2.67623 2.64215 4.47507 2.99895L14.6569 5.01848C16.0188 5.28861 17 6.48354 17 7.87198V24.1553C17 25.9892 15.3238 27.3656 13.5249 27.0088L3.34311 24.9893C1.98119 24.7192 1 23.5242 1 22.1358V5.85245Z" fill="#87E6E5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.543 5.71289C15.543 5.71289 16.8157 5.96289 17.4002 6.57653C17.9847 7.19016 18.4521 9.03107 18.4521 9.03107C18.4521 9.03107 18.4521 25.1106 18.4521 26.9629C18.4521 28.8152 19.3775 31.4174 19.3775 31.4174L17.4002 28.8947L16.2575 31.4174C16.2575 31.4174 15.543 29.0765 15.543 27.122C15.543 25.1674 15.543 5.71289 15.543 5.71289Z" fill="#61C1FD"/>
</g>
<defs>
<clipPath id="clip0_10031_177597">
<rect width="32" height="32" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>

```

##### youtube.svg
```xml
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.3313 8.44657C30.9633 7.08998 29.8791 6.02172 28.5022 5.65916C26.0067 5.00026 16 5.00026 16 5.00026C16 5.00026 5.99333 5.00026 3.4978 5.65916C2.12102 6.02172 1.03665 7.08998 0.668678 8.44657C0 10.9053 0 16.0353 0 16.0353C0 16.0353 0 21.1652 0.668678 23.6242C1.03665 24.9806 2.12102 26.0489 3.4978 26.4116C5.99333 27.0703 16 27.0703 16 27.0703C16 27.0703 26.0067 27.0703 28.5022 26.4116C29.8791 26.0489 30.9633 24.9806 31.3313 23.6242C32 21.1652 32 16.0353 32 16.0353C32 16.0353 32 10.9053 31.3313 8.44657Z" fill="#ED1D24"/>
<path d="M12.7266 20.6934L21.0902 16.036L12.7266 11.3781V20.6934Z" fill="white"/>
</svg>

```

### utils
#### burger-api.ts
```ts
import { setCookie, getCookie } from './cookie';
import { TIngredient, TOrder, TOrdersData, TUser } from './types';

const URL = process.env.BURGER_API_URL;

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

type TServerResponse<T> = {
  success: boolean;
} & T;

type TRefreshResponse = TServerResponse<{
  refreshToken: string;
  accessToken: string;
}>;

export const refreshToken = (): Promise<TRefreshResponse> =>
  fetch(`${URL}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    })
  })
    .then((res) => checkResponse<TRefreshResponse>(res))
    .then((refreshData) => {
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem('refreshToken', refreshData.refreshToken);
      setCookie('accessToken', refreshData.accessToken);
      return refreshData;
    });

export const fetchWithRefresh = async <T>(
  url: RequestInfo,
  options: RequestInit
) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse<T>(res);
  } catch (err) {
    if ((err as { message: string }).message === 'jwt expired') {
      const refreshData = await refreshToken();
      if (options.headers) {
        (options.headers as { [key: string]: string }).authorization =
          refreshData.accessToken;
      }
      const res = await fetch(url, options);
      return await checkResponse<T>(res);
    } else {
      return Promise.reject(err);
    }
  }
};

type TIngredientsResponse = TServerResponse<{
  data: TIngredient[];
}>;

type TFeedsResponse = TServerResponse<{
  orders: TOrder[];
  total: number;
  totalToday: number;
}>;

type TOrdersResponse = TServerResponse<{
  data: TOrder[];
}>;

export const getIngredientsApi = () =>
  fetch(`${URL}/ingredients`)
    .then((res) => checkResponse<TIngredientsResponse>(res))
    .then((data) => {
      if (data?.success) return data.data;
      return Promise.reject(data);
    });

export const getFeedsApi = () =>
  fetch(`${URL}/orders/all`)
    .then((res) => checkResponse<TFeedsResponse>(res))
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });

export const getOrdersApi = () =>
  fetchWithRefresh<TFeedsResponse>(`${URL}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: getCookie('accessToken')
    } as HeadersInit
  }).then((data) => {
    if (data?.success) return data.orders;
    return Promise.reject(data);
  });

type TOwner = {
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

type TNewOrder = {
  _id: string;
  status: string;
  name: string;
  owner: TOwner;
  createdAt: string;
  updatedAt: string;
  number: number;
  price: number;
};

type TNewOrderResponse = TServerResponse<{
  order: TNewOrder;
  name: string;
}>;

export const orderBurgerApi = (data: string[]) =>
  fetchWithRefresh<TNewOrderResponse>(`${URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: getCookie('accessToken')
    } as HeadersInit,
    body: JSON.stringify({
      ingredients: data
    })
  }).then((data) => {
    if (data?.success) return data;
    return Promise.reject(data);
  });

type TOrderResponse = TServerResponse<{
  orders: TOrder[];
}>;

export const getOrderByNumberApi = (number: number) =>
  fetch(`${URL}/orders/${number}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => checkResponse<TOrderResponse>(res));

export type TRegisterData = {
  email: string;
  name: string;
  password: string;
};

type TAuthResponse = TServerResponse<{
  refreshToken: string;
  accessToken: string;
  user: TUser;
}>;

export const registerUserApi = (data: TRegisterData) =>
  fetch(`${URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then((res) => checkResponse<TAuthResponse>(res))
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });

export type TLoginData = {
  email: string;
  password: string;
};

export const loginUserApi = (data: TLoginData) =>
  fetch(`${URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then((res) => checkResponse<TAuthResponse>(res))
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });

export const forgotPasswordApi = (data: { email: string }) =>
  fetch(`${URL}/password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then((res) => checkResponse<TServerResponse<{}>>(res))
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });

export const resetPasswordApi = (data: { password: string; token: string }) =>
  fetch(`${URL}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then((res) => checkResponse<TServerResponse<{}>>(res))
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });

type TUserResponse = TServerResponse<{ user: TUser }>;

export const getUserApi = () =>
  fetchWithRefresh<TUserResponse>(`${URL}/auth/user`, {
    headers: {
      authorization: getCookie('accessToken')
    } as HeadersInit
  });

export const updateUserApi = (user: Partial<TRegisterData>) =>
  fetchWithRefresh<TUserResponse>(`${URL}/auth/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: getCookie('accessToken')
    } as HeadersInit,
    body: JSON.stringify(user)
  });

export const logoutApi = () =>
  fetch(`${URL}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    })
  }).then((res) => checkResponse<TServerResponse<{}>>(res));

// Экспортируем объект api для удобного мокирования в тестах
export const api = {
  getIngredients: getIngredientsApi,
  getFeeds: getFeedsApi,
  getOrders: getOrdersApi,
  orderBurger: orderBurgerApi,
  getOrderByNumber: getOrderByNumberApi,
  registerUser: registerUserApi,
  loginUser: loginUserApi,
  forgotPassword: forgotPasswordApi,
  resetPassword: resetPasswordApi,
  getUser: getUserApi,
  updateUser: updateUserApi,
  logout: logoutApi
};

```

#### cookie.ts
```ts
export function getCookie(name: string): string | undefined {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        // eslint-disable-next-line no-useless-escape
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(
  name: string,
  value: string,
  props: { [key: string]: string | number | Date | boolean } = {}
) {
  props = {
    path: '/',
    ...props
  };

  let exp = props.expires;
  if (exp && typeof exp === 'number') {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }

  if (exp && exp instanceof Date) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function deleteCookie(name: string) {
  setCookie(name, '', { expires: -1 });
}

```

#### generate-id.ts
```ts
export const generateId = (): string => {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

```

#### order-helpers.ts
```ts
import { TIngredient, TOrder } from './types';

export const getIngredientsInfo = (
  order: TOrder,
  allIngredients: TIngredient[]
) => {
  const ingredientsInfo = order.ingredients
    .map((id) => allIngredients.find((ing) => ing._id === id))
    .filter((ing): ing is TIngredient => !!ing);

  const total = ingredientsInfo.reduce((sum, ing) => sum + ing.price, 0);

  return { ingredientsInfo, total };
};

export const getIngredientsWithCount = (
  order: TOrder,
  allIngredients: TIngredient[]
) => {
  const result: { [key: string]: TIngredient & { count: number } } = {};
  order.ingredients.forEach((id) => {
    const ingredient = allIngredients.find((ing) => ing._id === id);
    if (ingredient) {
      if (result[id]) {
        result[id].count++;
      } else {
        result[id] = { ...ingredient, count: 1 };
      }
    }
  });
  return result;
};

export const formatDate = (dateString: string) => new Date(dateString);

```

#### types.ts
```ts
import { Location } from 'react-router-dom';

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_large: string;
  image_mobile: string;
};

export type TConstructorIngredient = TIngredient & {
  id: string;
};

export type TOrder = {
  _id: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  ingredients: string[];
};

export type TOrdersData = {
  orders: TOrder[];
  total: number;
  totalToday: number;
};

export type TUser = {
  email: string;
  name: string;
};

export type TTabMode = 'bun' | 'sauce' | 'main';

export type LocationState = {
  background?: Location;
  from?: { pathname: string };
};

export type TRequestState = {
  loading: boolean;
  error: string | null;
};

```

## test-results
### .last-run.json
```json
{
  "status": "passed",
  "failedTests": []
}
```

## tests
### constructor.spec.ts
```ts
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

```

### record-har.spec.ts.txt
```txt
import { test, expect } from '@playwright/test';

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
    test.setTimeout(60000);

    // 1. Логин через API
    const loginResponse = await page.request.post(
      'https://norma.education-services.ru/api/auth/login',
      {
        data: {
          email: 'as-test-user@test.com',
          password: '123'
        }
      }
    );

    const loginData = await loginResponse.json();
    console.log('Login response:', loginData);

    if (!loginData.success) {
      throw new Error(`Login failed: ${loginData.message || 'Unknown error'}`);
    }

    // 2. Устанавливаем токены
    const accessToken = loginData.accessToken;
    const refreshToken = loginData.refreshToken;

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

    // 3. Включаем запись HAR
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

    // 4. Открываем страницу
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // 5. Ждём загрузки ингредиентов
    await page.waitForSelector('button:has-text("Добавить")', {
      timeout: 15000
    });

    // 6. Добавляем булку и ДВЕ начинки
    const addButtons = page.getByRole('button', { name: 'Добавить' });
    await addButtons.first().click(); // булка
    await addButtons.nth(2).click(); // первая начинка
    await addButtons.nth(3).click(); // вторая начинка

    // 7. Ждём, пока кнопка "Оформить заказ" станет активной
    const orderButton = page.locator('button:has-text("Оформить заказ")');
    await expect(orderButton).toBeEnabled({ timeout: 10000 });

    // 8. Оформляем заказ
    await orderButton.click();

    // 9. Ждём появления модального окна (просто по классу .modal)
    await page.waitForSelector('.modal', {
      state: 'visible',
      timeout: 30000
    });

    // 10. Даём время на запись HAR (закрывать модалку не обязательно)
    await page.waitForTimeout(3000);

    console.log('✅ HAR files generated successfully!');
  });
});

```

### hars
#### 02614ee0f5add0cdfb4018a5f07331e39c319823.json
```json
{"success":true,"name":"Люминесцентный био-марсианский краторный бургер","order":{"ingredients":[{"_id":"643d69a5c3f7b9001cfa093c","name":"Краторная булка N-200i","type":"bun","proteins":80,"fat":24,"carbohydrates":53,"calories":420,"price":1255,"image":"https://code.s3.yandex.net/react/code/bun-02.png","image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png","image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa0941","name":"Биокотлета из марсианской Магнолии","type":"main","proteins":420,"fat":142,"carbohydrates":242,"calories":4242,"price":424,"image":"https://code.s3.yandex.net/react/code/meat-01.png","image_mobile":"https://code.s3.yandex.net/react/code/meat-01-mobile.png","image_large":"https://code.s3.yandex.net/react/code/meat-01-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa093e","name":"Филе Люминесцентного тетраодонтимформа","type":"main","proteins":44,"fat":26,"carbohydrates":85,"calories":643,"price":988,"image":"https://code.s3.yandex.net/react/code/meat-03.png","image_mobile":"https://code.s3.yandex.net/react/code/meat-03-mobile.png","image_large":"https://code.s3.yandex.net/react/code/meat-03-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa093c","name":"Краторная булка N-200i","type":"bun","proteins":80,"fat":24,"carbohydrates":53,"calories":420,"price":1255,"image":"https://code.s3.yandex.net/react/code/bun-02.png","image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png","image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png","__v":0}],"_id":"6aa002c66a172d001b994755","owner":{"name":"as-test-user","email":"as-test-user@test.com","createdAt":"2026-09-08T12:06:25.826Z","updatedAt":"2026-09-08T12:06:25.826Z"},"status":"done","name":"Люминесцентный био-марсианский краторный бургер","createdAt":"2026-09-08T12:42:46.463Z","updatedAt":"2026-09-08T12:42:46.557Z","number":109956,"price":3922}}
```

#### 483e26d8b2986ce14b0ba28dad65b2657456da9f.json
```json
{"success":true,"name":"Люминесцентный био-марсианский краторный бургер","order":{"ingredients":[{"_id":"643d69a5c3f7b9001cfa093c","name":"Краторная булка N-200i","type":"bun","proteins":80,"fat":24,"carbohydrates":53,"calories":420,"price":1255,"image":"https://code.s3.yandex.net/react/code/bun-02.png","image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png","image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa0941","name":"Биокотлета из марсианской Магнолии","type":"main","proteins":420,"fat":142,"carbohydrates":242,"calories":4242,"price":424,"image":"https://code.s3.yandex.net/react/code/meat-01.png","image_mobile":"https://code.s3.yandex.net/react/code/meat-01-mobile.png","image_large":"https://code.s3.yandex.net/react/code/meat-01-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa093e","name":"Филе Люминесцентного тетраодонтимформа","type":"main","proteins":44,"fat":26,"carbohydrates":85,"calories":643,"price":988,"image":"https://code.s3.yandex.net/react/code/meat-03.png","image_mobile":"https://code.s3.yandex.net/react/code/meat-03-mobile.png","image_large":"https://code.s3.yandex.net/react/code/meat-03-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa093c","name":"Краторная булка N-200i","type":"bun","proteins":80,"fat":24,"carbohydrates":53,"calories":420,"price":1255,"image":"https://code.s3.yandex.net/react/code/bun-02.png","image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png","image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png","__v":0}],"_id":"6aa001fb6a172d001b994753","owner":{"name":"as-test-user","email":"as-test-user@test.com","createdAt":"2026-09-08T12:06:25.826Z","updatedAt":"2026-09-08T12:06:25.826Z"},"status":"done","name":"Люминесцентный био-марсианский краторный бургер","createdAt":"2026-09-08T12:39:23.317Z","updatedAt":"2026-09-08T12:39:23.409Z","number":109955,"price":3922}}
```

#### 4c2807cd5bf97b719de5bb9377003e9e6d0ca492.json
```json
{"ingredients":["643d69a5c3f7b9001cfa093c","643d69a5c3f7b9001cfa0941","643d69a5c3f7b9001cfa093e","643d69a5c3f7b9001cfa093c"]}
```

#### d865ae765d0bd24d2055469500cc7f17b1056715.json
```json
{"success":true,"data":[{"_id":"643d69a5c3f7b9001cfa093c","name":"Краторная булка N-200i","type":"bun","proteins":80,"fat":24,"carbohydrates":53,"calories":420,"price":1255,"image":"https://code.s3.yandex.net/react/code/bun-02.png","image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png","image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa0941","name":"Биокотлета из марсианской Магнолии","type":"main","proteins":420,"fat":142,"carbohydrates":242,"calories":4242,"price":424,"image":"https://code.s3.yandex.net/react/code/meat-01.png","image_mobile":"https://code.s3.yandex.net/react/code/meat-01-mobile.png","image_large":"https://code.s3.yandex.net/react/code/meat-01-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa093e","name":"Филе Люминесцентного тетраодонтимформа","type":"main","proteins":44,"fat":26,"carbohydrates":85,"calories":643,"price":988,"image":"https://code.s3.yandex.net/react/code/meat-03.png","image_mobile":"https://code.s3.yandex.net/react/code/meat-03-mobile.png","image_large":"https://code.s3.yandex.net/react/code/meat-03-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa0942","name":"Соус Spicy-X","type":"sauce","proteins":30,"fat":20,"carbohydrates":40,"calories":30,"price":90,"image":"https://code.s3.yandex.net/react/code/sauce-02.png","image_mobile":"https://code.s3.yandex.net/react/code/sauce-02-mobile.png","image_large":"https://code.s3.yandex.net/react/code/sauce-02-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa0943","name":"Соус фирменный Space Sauce","type":"sauce","proteins":50,"fat":22,"carbohydrates":11,"calories":14,"price":80,"image":"https://code.s3.yandex.net/react/code/sauce-04.png","image_mobile":"https://code.s3.yandex.net/react/code/sauce-04-mobile.png","image_large":"https://code.s3.yandex.net/react/code/sauce-04-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa093f","name":"Мясо бессмертных моллюсков Protostomia","type":"main","proteins":433,"fat":244,"carbohydrates":33,"calories":420,"price":1337,"image":"https://code.s3.yandex.net/react/code/meat-02.png","image_mobile":"https://code.s3.yandex.net/react/code/meat-02-mobile.png","image_large":"https://code.s3.yandex.net/react/code/meat-02-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa0940","name":"Говяжий метеорит (отбивная)","type":"main","proteins":800,"fat":800,"carbohydrates":300,"calories":2674,"price":3000,"image":"https://code.s3.yandex.net/react/code/meat-04.png","image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png","image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa093d","name":"Флюоресцентная булка R2-D3","type":"bun","proteins":44,"fat":26,"carbohydrates":85,"calories":643,"price":988,"image":"https://code.s3.yandex.net/react/code/bun-01.png","image_mobile":"https://code.s3.yandex.net/react/code/bun-01-mobile.png","image_large":"https://code.s3.yandex.net/react/code/bun-01-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa0944","name":"Соус традиционный галактический","type":"sauce","proteins":42,"fat":24,"carbohydrates":42,"calories":99,"price":15,"image":"https://code.s3.yandex.net/react/code/sauce-03.png","image_mobile":"https://code.s3.yandex.net/react/code/sauce-03-mobile.png","image_large":"https://code.s3.yandex.net/react/code/sauce-03-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa0945","name":"Соус с шипами Антарианского плоскоходца","type":"sauce","proteins":101,"fat":99,"carbohydrates":100,"calories":100,"price":88,"image":"https://code.s3.yandex.net/react/code/sauce-01.png","image_mobile":"https://code.s3.yandex.net/react/code/sauce-01-mobile.png","image_large":"https://code.s3.yandex.net/react/code/sauce-01-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa0946","name":"Хрустящие минеральные кольца","type":"main","proteins":808,"fat":689,"carbohydrates":609,"calories":986,"price":300,"image":"https://code.s3.yandex.net/react/code/mineral_rings.png","image_mobile":"https://code.s3.yandex.net/react/code/mineral_rings-mobile.png","image_large":"https://code.s3.yandex.net/react/code/mineral_rings-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa0947","name":"Плоды Фалленианского дерева","type":"main","proteins":20,"fat":5,"carbohydrates":55,"calories":77,"price":874,"image":"https://code.s3.yandex.net/react/code/sp_1.png","image_mobile":"https://code.s3.yandex.net/react/code/sp_1-mobile.png","image_large":"https://code.s3.yandex.net/react/code/sp_1-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa0948","name":"Кристаллы марсианских альфа-сахаридов","type":"main","proteins":234,"fat":432,"carbohydrates":111,"calories":189,"price":762,"image":"https://code.s3.yandex.net/react/code/core.png","image_mobile":"https://code.s3.yandex.net/react/code/core-mobile.png","image_large":"https://code.s3.yandex.net/react/code/core-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa0949","name":"Мини-салат Экзо-Плантаго","type":"main","proteins":1,"fat":2,"carbohydrates":3,"calories":6,"price":4400,"image":"https://code.s3.yandex.net/react/code/salad.png","image_mobile":"https://code.s3.yandex.net/react/code/salad-mobile.png","image_large":"https://code.s3.yandex.net/react/code/salad-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa094a","name":"Сыр с астероидной плесенью","type":"main","proteins":84,"fat":48,"carbohydrates":420,"calories":3377,"price":4142,"image":"https://code.s3.yandex.net/react/code/cheese.png","image_mobile":"https://code.s3.yandex.net/react/code/cheese-mobile.png","image_large":"https://code.s3.yandex.net/react/code/cheese-large.png","__v":0}]}
```

#### e798c28fb79c703dca973374d87435d9e78c87a0.json
```json
{"success":true,"user":{"email":"as-test-user@test.com","name":"as-test-user"}}
```

#### f83c68134738db910c736ba5f61157d5f4551de9.json
```json
{"success":true,"name":"Люминесцентный био-марсианский краторный бургер","order":{"ingredients":[{"_id":"643d69a5c3f7b9001cfa093c","name":"Краторная булка N-200i","type":"bun","proteins":80,"fat":24,"carbohydrates":53,"calories":420,"price":1255,"image":"https://code.s3.yandex.net/react/code/bun-02.png","image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png","image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa0941","name":"Биокотлета из марсианской Магнолии","type":"main","proteins":420,"fat":142,"carbohydrates":242,"calories":4242,"price":424,"image":"https://code.s3.yandex.net/react/code/meat-01.png","image_mobile":"https://code.s3.yandex.net/react/code/meat-01-mobile.png","image_large":"https://code.s3.yandex.net/react/code/meat-01-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa093e","name":"Филе Люминесцентного тетраодонтимформа","type":"main","proteins":44,"fat":26,"carbohydrates":85,"calories":643,"price":988,"image":"https://code.s3.yandex.net/react/code/meat-03.png","image_mobile":"https://code.s3.yandex.net/react/code/meat-03-mobile.png","image_large":"https://code.s3.yandex.net/react/code/meat-03-large.png","__v":0},{"_id":"643d69a5c3f7b9001cfa093c","name":"Краторная булка N-200i","type":"bun","proteins":80,"fat":24,"carbohydrates":53,"calories":420,"price":1255,"image":"https://code.s3.yandex.net/react/code/bun-02.png","image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png","image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png","__v":0}],"_id":"6aa0009f6a172d001b994751","owner":{"name":"as-test-user","email":"as-test-user@test.com","createdAt":"2026-09-08T12:06:25.826Z","updatedAt":"2026-09-08T12:06:25.826Z"},"status":"done","name":"Люминесцентный био-марсианский краторный бургер","createdAt":"2026-09-08T12:33:35.292Z","updatedAt":"2026-09-08T12:33:35.385Z","number":109954,"price":3922}}
```

#### ingredients.har
```har
{"log":{"version":"1.2","creator":{"name":"Playwright","version":"1.63.0"},"browser":{"name":"chromium","version":"153.0.8010.12"},"entries":[{"startedDateTime":"2026-09-08T12:42:41.946Z","time":2.66,"request":{"method":"GET","url":"https://norma.education-services.ru/api/ingredients","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":":authority","value":"norma.education-services.ru"},{"name":":method","value":"GET"},{"name":":path","value":"/api/ingredients"},{"name":":scheme","value":"https"},{"name":"accept","value":"*/*"},{"name":"accept-encoding","value":"gzip, deflate, br, zstd"},{"name":"accept-language","value":"en-US"},{"name":"origin","value":"http://localhost:4000"},{"name":"priority","value":"u=1, i"},{"name":"referer","value":"http://localhost:4000/"},{"name":"sec-ch-ua","value":"\"HeadlessChrome\";v=\"153\", \"Not_A Brand\";v=\"8\", \"Chromium\";v=\"153\""},{"name":"sec-ch-ua-mobile","value":"?0"},{"name":"sec-ch-ua-platform","value":"\"Windows\""},{"name":"sec-fetch-dest","value":"empty"},{"name":"sec-fetch-mode","value":"cors"},{"name":"sec-fetch-site","value":"cross-site"},{"name":"user-agent","value":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.8010.12 Safari/537.36"}],"queryString":[],"headersSize":-1,"bodySize":-1},"response":{"status":200,"statusText":"","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":"access-control-allow-origin","value":"*"},{"name":"content-length","value":"5957"},{"name":"content-type","value":"application/json; charset=utf-8"},{"name":"date","value":"Tue, 08 Sep 2026 12:42:42 GMT"},{"name":"etag","value":"W/\"1745-2GWudl0L0k0gVUaVAMx/F7EFZxU\""},{"name":"server","value":"nginx"},{"name":"x-powered-by","value":"Express"}],"content":{"size":-1,"mimeType":"application/json; charset=utf-8","_file":"d865ae765d0bd24d2055469500cc7f17b1056715.json"},"headersSize":-1,"bodySize":-1,"redirectURL":""},"cache":{},"timings":{"send":-1,"wait":-1,"receive":2.66},"_frameref":"frame@77f0eb1e964d089457620d6830d98879","_monotonicTime":24038.222,"_resourceType":"fetch"},{"startedDateTime":"2026-09-08T12:42:41.952Z","time":4.017,"request":{"method":"GET","url":"https://norma.education-services.ru/api/ingredients","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":":authority","value":"norma.education-services.ru"},{"name":":method","value":"GET"},{"name":":path","value":"/api/ingredients"},{"name":":scheme","value":"https"},{"name":"accept","value":"*/*"},{"name":"accept-encoding","value":"gzip, deflate, br, zstd"},{"name":"accept-language","value":"en-US"},{"name":"if-none-match","value":"W/\"1745-2GWudl0L0k0gVUaVAMx/F7EFZxU\""},{"name":"origin","value":"http://localhost:4000"},{"name":"priority","value":"u=1, i"},{"name":"referer","value":"http://localhost:4000/"},{"name":"sec-ch-ua","value":"\"HeadlessChrome\";v=\"153\", \"Not_A Brand\";v=\"8\", \"Chromium\";v=\"153\""},{"name":"sec-ch-ua-mobile","value":"?0"},{"name":"sec-ch-ua-platform","value":"\"Windows\""},{"name":"sec-fetch-dest","value":"empty"},{"name":"sec-fetch-mode","value":"cors"},{"name":"sec-fetch-site","value":"cross-site"},{"name":"user-agent","value":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.8010.12 Safari/537.36"}],"queryString":[],"headersSize":-1,"bodySize":-1},"response":{"status":200,"statusText":"","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":"access-control-allow-origin","value":"*"},{"name":"date","value":"Tue, 08 Sep 2026 12:42:42 GMT"},{"name":"etag","value":"W/\"1745-2GWudl0L0k0gVUaVAMx/F7EFZxU\""},{"name":"server","value":"nginx"},{"name":"x-powered-by","value":"Express"}],"content":{"size":-1,"mimeType":"application/json; charset=utf-8","_file":"d865ae765d0bd24d2055469500cc7f17b1056715.json"},"headersSize":-1,"bodySize":-1,"redirectURL":""},"cache":{},"timings":{"send":-1,"wait":-1,"receive":4.017},"_frameref":"frame@77f0eb1e964d089457620d6830d98879","_monotonicTime":24044.915,"_resourceType":"fetch"},{"startedDateTime":"2026-09-08T12:42:42.005Z","time":2.347,"request":{"method":"GET","url":"https://norma.education-services.ru/api/ingredients","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":":authority","value":"norma.education-services.ru"},{"name":":method","value":"GET"},{"name":":path","value":"/api/ingredients"},{"name":":scheme","value":"https"},{"name":"accept","value":"*/*"},{"name":"accept-encoding","value":"gzip, deflate, br, zstd"},{"name":"accept-language","value":"en-US"},{"name":"if-none-match","value":"W/\"1745-2GWudl0L0k0gVUaVAMx/F7EFZxU\""},{"name":"origin","value":"http://localhost:4000"},{"name":"priority","value":"u=1, i"},{"name":"referer","value":"http://localhost:4000/"},{"name":"sec-ch-ua","value":"\"HeadlessChrome\";v=\"153\", \"Not_A Brand\";v=\"8\", \"Chromium\";v=\"153\""},{"name":"sec-ch-ua-mobile","value":"?0"},{"name":"sec-ch-ua-platform","value":"\"Windows\""},{"name":"sec-fetch-dest","value":"empty"},{"name":"sec-fetch-mode","value":"cors"},{"name":"sec-fetch-site","value":"cross-site"},{"name":"user-agent","value":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.8010.12 Safari/537.36"}],"queryString":[],"headersSize":-1,"bodySize":-1},"response":{"status":200,"statusText":"","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":"access-control-allow-origin","value":"*"},{"name":"date","value":"Tue, 08 Sep 2026 12:42:43 GMT"},{"name":"etag","value":"W/\"1745-2GWudl0L0k0gVUaVAMx/F7EFZxU\""},{"name":"server","value":"nginx"},{"name":"x-powered-by","value":"Express"}],"content":{"size":-1,"mimeType":"application/json; charset=utf-8","_file":"d865ae765d0bd24d2055469500cc7f17b1056715.json"},"headersSize":-1,"bodySize":-1,"redirectURL":""},"cache":{},"timings":{"send":-1,"wait":-1,"receive":2.347},"_frameref":"frame@77f0eb1e964d089457620d6830d98879","_monotonicTime":24093.592,"_resourceType":"fetch"},{"startedDateTime":"2026-09-08T12:42:42.007Z","time":2.24,"request":{"method":"GET","url":"https://norma.education-services.ru/api/ingredients","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":":authority","value":"norma.education-services.ru"},{"name":":method","value":"GET"},{"name":":path","value":"/api/ingredients"},{"name":":scheme","value":"https"},{"name":"accept","value":"*/*"},{"name":"accept-encoding","value":"gzip, deflate, br, zstd"},{"name":"accept-language","value":"en-US"},{"name":"if-none-match","value":"W/\"1745-2GWudl0L0k0gVUaVAMx/F7EFZxU\""},{"name":"origin","value":"http://localhost:4000"},{"name":"priority","value":"u=1, i"},{"name":"referer","value":"http://localhost:4000/"},{"name":"sec-ch-ua","value":"\"HeadlessChrome\";v=\"153\", \"Not_A Brand\";v=\"8\", \"Chromium\";v=\"153\""},{"name":"sec-ch-ua-mobile","value":"?0"},{"name":"sec-ch-ua-platform","value":"\"Windows\""},{"name":"sec-fetch-dest","value":"empty"},{"name":"sec-fetch-mode","value":"cors"},{"name":"sec-fetch-site","value":"cross-site"},{"name":"user-agent","value":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.8010.12 Safari/537.36"}],"queryString":[],"headersSize":-1,"bodySize":-1},"response":{"status":200,"statusText":"","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":"access-control-allow-origin","value":"*"},{"name":"date","value":"Tue, 08 Sep 2026 12:42:43 GMT"},{"name":"etag","value":"W/\"1745-2GWudl0L0k0gVUaVAMx/F7EFZxU\""},{"name":"server","value":"nginx"},{"name":"x-powered-by","value":"Express"}],"content":{"size":-1,"mimeType":"application/json; charset=utf-8","_file":"d865ae765d0bd24d2055469500cc7f17b1056715.json"},"headersSize":-1,"bodySize":-1,"redirectURL":""},"cache":{},"timings":{"send":-1,"wait":-1,"receive":2.24},"_frameref":"frame@77f0eb1e964d089457620d6830d98879","_monotonicTime":24096.97,"_resourceType":"fetch"}]}}
```

#### order.har
```har
{"log":{"version":"1.2","creator":{"name":"Playwright","version":"1.63.0"},"browser":{"name":"chromium","version":"153.0.8010.12"},"entries":[{"startedDateTime":"2026-09-08T12:42:46.282Z","time":74.521,"request":{"method":"POST","url":"https://norma.education-services.ru/api/orders","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":":authority","value":"norma.education-services.ru"},{"name":":method","value":"POST"},{"name":":path","value":"/api/orders"},{"name":":scheme","value":"https"},{"name":"accept","value":"*/*"},{"name":"accept-encoding","value":"gzip, deflate, br, zstd"},{"name":"accept-language","value":"en-US"},{"name":"authorization","value":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhOWZmYTQxNmExNzJkMDAxYjk5NDczYiIsImlhdCI6MTc4ODg3MTM2MSwiZXhwIjoxNzg4ODcyNTYxfQ.jXNze7DbTXp6VaITxex4B3SbZRcBS1ggcsLHkcPDuU0"},{"name":"content-length","value":"125"},{"name":"content-type","value":"application/json;charset=utf-8"},{"name":"origin","value":"http://localhost:4000"},{"name":"priority","value":"u=1, i"},{"name":"referer","value":"http://localhost:4000/"},{"name":"sec-ch-ua","value":"\"HeadlessChrome\";v=\"153\", \"Not_A Brand\";v=\"8\", \"Chromium\";v=\"153\""},{"name":"sec-ch-ua-mobile","value":"?0"},{"name":"sec-ch-ua-platform","value":"\"Windows\""},{"name":"sec-fetch-dest","value":"empty"},{"name":"sec-fetch-mode","value":"cors"},{"name":"sec-fetch-site","value":"cross-site"},{"name":"user-agent","value":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.8010.12 Safari/537.36"}],"queryString":[],"headersSize":-1,"bodySize":-1,"postData":{"mimeType":"application/json;charset=utf-8","text":"","params":[],"_file":"4c2807cd5bf97b719de5bb9377003e9e6d0ca492.json"}},"response":{"status":200,"statusText":"","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":"access-control-allow-origin","value":"*"},{"name":"content-length","value":"2117"},{"name":"content-type","value":"application/json; charset=utf-8"},{"name":"date","value":"Tue, 08 Sep 2026 12:43:01 GMT"},{"name":"etag","value":"W/\"845-AmFO4PWt0M37QBil8HMx45wxmCM\""},{"name":"server","value":"nginx"},{"name":"x-powered-by","value":"Express"}],"content":{"size":-1,"mimeType":"application/json; charset=utf-8","_file":"02614ee0f5add0cdfb4018a5f07331e39c319823.json"},"headersSize":-1,"bodySize":-1,"redirectURL":""},"cache":{},"timings":{"send":-1,"wait":-1,"receive":74.521},"_frameref":"frame@77f0eb1e964d089457620d6830d98879","_monotonicTime":28373.27,"_resourceType":"fetch"}]}}
```

#### user.har
```har
{"log":{"version":"1.2","creator":{"name":"Playwright","version":"1.63.0"},"browser":{"name":"chromium","version":"153.0.8010.12"},"entries":[{"startedDateTime":"2026-09-08T12:42:41.950Z","time":681.84,"request":{"method":"GET","url":"https://norma.education-services.ru/api/auth/user","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":":authority","value":"norma.education-services.ru"},{"name":":method","value":"GET"},{"name":":path","value":"/api/auth/user"},{"name":":scheme","value":"https"},{"name":"accept","value":"*/*"},{"name":"accept-encoding","value":"gzip, deflate, br, zstd"},{"name":"accept-language","value":"en-US"},{"name":"authorization","value":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhOWZmYTQxNmExNzJkMDAxYjk5NDczYiIsImlhdCI6MTc4ODg3MTM2MSwiZXhwIjoxNzg4ODcyNTYxfQ.jXNze7DbTXp6VaITxex4B3SbZRcBS1ggcsLHkcPDuU0"},{"name":"origin","value":"http://localhost:4000"},{"name":"priority","value":"u=1, i"},{"name":"referer","value":"http://localhost:4000/"},{"name":"sec-ch-ua","value":"\"HeadlessChrome\";v=\"153\", \"Not_A Brand\";v=\"8\", \"Chromium\";v=\"153\""},{"name":"sec-ch-ua-mobile","value":"?0"},{"name":"sec-ch-ua-platform","value":"\"Windows\""},{"name":"sec-fetch-dest","value":"empty"},{"name":"sec-fetch-mode","value":"cors"},{"name":"sec-fetch-site","value":"cross-site"},{"name":"user-agent","value":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.8010.12 Safari/537.36"}],"queryString":[],"headersSize":-1,"bodySize":-1},"response":{"status":200,"statusText":"","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":"access-control-allow-origin","value":"*"},{"name":"content-length","value":"79"},{"name":"content-type","value":"application/json; charset=utf-8"},{"name":"date","value":"Tue, 08 Sep 2026 12:42:42 GMT"},{"name":"etag","value":"W/\"4f-55jCj7eccD3KlzN02HQ12eeMh6A\""},{"name":"server","value":"nginx"},{"name":"x-powered-by","value":"Express"}],"content":{"size":-1,"mimeType":"application/json; charset=utf-8","_file":"e798c28fb79c703dca973374d87435d9e78c87a0.json"},"headersSize":-1,"bodySize":-1,"redirectURL":""},"cache":{},"timings":{"send":-1,"wait":-1,"receive":681.84},"_frameref":"frame@77f0eb1e964d089457620d6830d98879","_monotonicTime":24038.965,"_resourceType":"fetch"},{"startedDateTime":"2026-09-08T12:42:41.953Z","time":679.184,"request":{"method":"GET","url":"https://norma.education-services.ru/api/auth/user","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":":authority","value":"norma.education-services.ru"},{"name":":method","value":"GET"},{"name":":path","value":"/api/auth/user"},{"name":":scheme","value":"https"},{"name":"accept","value":"*/*"},{"name":"accept-encoding","value":"gzip, deflate, br, zstd"},{"name":"accept-language","value":"en-US"},{"name":"authorization","value":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhOWZmYTQxNmExNzJkMDAxYjk5NDczYiIsImlhdCI6MTc4ODg3MTM2MSwiZXhwIjoxNzg4ODcyNTYxfQ.jXNze7DbTXp6VaITxex4B3SbZRcBS1ggcsLHkcPDuU0"},{"name":"if-none-match","value":"W/\"4f-55jCj7eccD3KlzN02HQ12eeMh6A\""},{"name":"origin","value":"http://localhost:4000"},{"name":"priority","value":"u=1, i"},{"name":"referer","value":"http://localhost:4000/"},{"name":"sec-ch-ua","value":"\"HeadlessChrome\";v=\"153\", \"Not_A Brand\";v=\"8\", \"Chromium\";v=\"153\""},{"name":"sec-ch-ua-mobile","value":"?0"},{"name":"sec-ch-ua-platform","value":"\"Windows\""},{"name":"sec-fetch-dest","value":"empty"},{"name":"sec-fetch-mode","value":"cors"},{"name":"sec-fetch-site","value":"cross-site"},{"name":"user-agent","value":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.8010.12 Safari/537.36"}],"queryString":[],"headersSize":-1,"bodySize":-1},"response":{"status":200,"statusText":"","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":"access-control-allow-origin","value":"*"},{"name":"date","value":"Tue, 08 Sep 2026 12:42:43 GMT"},{"name":"etag","value":"W/\"4f-55jCj7eccD3KlzN02HQ12eeMh6A\""},{"name":"server","value":"nginx"},{"name":"x-powered-by","value":"Express"}],"content":{"size":-1,"mimeType":"application/json; charset=utf-8","_file":"e798c28fb79c703dca973374d87435d9e78c87a0.json"},"headersSize":-1,"bodySize":-1,"redirectURL":""},"cache":{},"timings":{"send":-1,"wait":-1,"receive":679.184},"_frameref":"frame@77f0eb1e964d089457620d6830d98879","_monotonicTime":24045.323,"_resourceType":"fetch"},{"startedDateTime":"2026-09-08T12:42:42.006Z","time":627.245,"request":{"method":"GET","url":"https://norma.education-services.ru/api/auth/user","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":":authority","value":"norma.education-services.ru"},{"name":":method","value":"GET"},{"name":":path","value":"/api/auth/user"},{"name":":scheme","value":"https"},{"name":"accept","value":"*/*"},{"name":"accept-encoding","value":"gzip, deflate, br, zstd"},{"name":"accept-language","value":"en-US"},{"name":"authorization","value":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhOWZmYTQxNmExNzJkMDAxYjk5NDczYiIsImlhdCI6MTc4ODg3MTM2MSwiZXhwIjoxNzg4ODcyNTYxfQ.jXNze7DbTXp6VaITxex4B3SbZRcBS1ggcsLHkcPDuU0"},{"name":"if-none-match","value":"W/\"4f-55jCj7eccD3KlzN02HQ12eeMh6A\""},{"name":"origin","value":"http://localhost:4000"},{"name":"priority","value":"u=1, i"},{"name":"referer","value":"http://localhost:4000/"},{"name":"sec-ch-ua","value":"\"HeadlessChrome\";v=\"153\", \"Not_A Brand\";v=\"8\", \"Chromium\";v=\"153\""},{"name":"sec-ch-ua-mobile","value":"?0"},{"name":"sec-ch-ua-platform","value":"\"Windows\""},{"name":"sec-fetch-dest","value":"empty"},{"name":"sec-fetch-mode","value":"cors"},{"name":"sec-fetch-site","value":"cross-site"},{"name":"user-agent","value":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.8010.12 Safari/537.36"}],"queryString":[],"headersSize":-1,"bodySize":-1},"response":{"status":200,"statusText":"","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":"access-control-allow-origin","value":"*"},{"name":"date","value":"Tue, 08 Sep 2026 12:42:44 GMT"},{"name":"etag","value":"W/\"4f-55jCj7eccD3KlzN02HQ12eeMh6A\""},{"name":"server","value":"nginx"},{"name":"x-powered-by","value":"Express"}],"content":{"size":-1,"mimeType":"application/json; charset=utf-8","_file":"e798c28fb79c703dca973374d87435d9e78c87a0.json"},"headersSize":-1,"bodySize":-1,"redirectURL":""},"cache":{},"timings":{"send":-1,"wait":-1,"receive":627.245},"_frameref":"frame@77f0eb1e964d089457620d6830d98879","_monotonicTime":24093.951,"_resourceType":"fetch"},{"startedDateTime":"2026-09-08T12:42:42.008Z","time":625.824,"request":{"method":"GET","url":"https://norma.education-services.ru/api/auth/user","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":":authority","value":"norma.education-services.ru"},{"name":":method","value":"GET"},{"name":":path","value":"/api/auth/user"},{"name":":scheme","value":"https"},{"name":"accept","value":"*/*"},{"name":"accept-encoding","value":"gzip, deflate, br, zstd"},{"name":"accept-language","value":"en-US"},{"name":"authorization","value":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhOWZmYTQxNmExNzJkMDAxYjk5NDczYiIsImlhdCI6MTc4ODg3MTM2MSwiZXhwIjoxNzg4ODcyNTYxfQ.jXNze7DbTXp6VaITxex4B3SbZRcBS1ggcsLHkcPDuU0"},{"name":"if-none-match","value":"W/\"4f-55jCj7eccD3KlzN02HQ12eeMh6A\""},{"name":"origin","value":"http://localhost:4000"},{"name":"priority","value":"u=1, i"},{"name":"referer","value":"http://localhost:4000/"},{"name":"sec-ch-ua","value":"\"HeadlessChrome\";v=\"153\", \"Not_A Brand\";v=\"8\", \"Chromium\";v=\"153\""},{"name":"sec-ch-ua-mobile","value":"?0"},{"name":"sec-ch-ua-platform","value":"\"Windows\""},{"name":"sec-fetch-dest","value":"empty"},{"name":"sec-fetch-mode","value":"cors"},{"name":"sec-fetch-site","value":"cross-site"},{"name":"user-agent","value":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.8010.12 Safari/537.36"}],"queryString":[],"headersSize":-1,"bodySize":-1},"response":{"status":200,"statusText":"","httpVersion":"HTTP/2.0","cookies":[],"headers":[{"name":"access-control-allow-origin","value":"*"},{"name":"date","value":"Tue, 08 Sep 2026 12:42:43 GMT"},{"name":"etag","value":"W/\"4f-55jCj7eccD3KlzN02HQ12eeMh6A\""},{"name":"server","value":"nginx"},{"name":"x-powered-by","value":"Express"}],"content":{"size":-1,"mimeType":"application/json; charset=utf-8","_file":"e798c28fb79c703dca973374d87435d9e78c87a0.json"},"headersSize":-1,"bodySize":-1,"redirectURL":""},"cache":{},"timings":{"send":-1,"wait":-1,"receive":625.824},"_frameref":"frame@77f0eb1e964d089457620d6830d98879","_monotonicTime":24097.302,"_resourceType":"fetch"}]}}
```
