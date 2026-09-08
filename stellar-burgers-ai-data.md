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
tsconfig.json
webpack.config.js
.storybook
    main.ts
    preview.tsx
    storybook-config-entry.js
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
    "test": "jest"
  },
  "eslintConfig": {
    "extends": [
      "plugin:storybook/recommended"
    ]
  }
}

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

type TConstructorState = {
  bun: TConstructorIngredient | null;
  ingredients: TConstructorIngredient[];
};

const initialState: TConstructorState = {
  bun: null,
  ingredients: []
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
    ingredientsSelector: (state) => state.ingredients
  }
});

export const {
  addIngredient,
  removeIngredient,
  moveIngredient,
  clearConstructor
} = burgerConstructorSlice.actions;

export const { constructorItemsSelector, bunSelector, ingredientsSelector } =
  burgerConstructorSlice.selectors;

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
import { describe, expect, test } from '@jest/globals';
import {
  burgerConstructorSlice,
  sortIngredients,
  withoutBuns,
  allIngredients,
  areIngredientsLoading
} from '../burgerConstructorSlice';
import { getIngredients } from '../actions';
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
  },
  {
    _id: '3',
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
  }
];

describe('burgerConstructorSlice', () => {
  const initialState = {
    ingredients: [],
    isLoading: false
  };

  test('should return initial state with unknown action', () => {
    const state = burgerConstructorSlice.reducer(undefined, {
      type: 'UNKNOWN'
    });
    expect(state).toEqual(initialState);
  });

  test('should handle sortIngredients', () => {
    const stateBefore = {
      ...initialState,
      ingredients: mockIngredients
    };
    // Перемещаем элемент с индексом 0 на позицию 2
    const stateAfter = burgerConstructorSlice.reducer(
      stateBefore,
      sortIngredients({ from: 0, to: 2 })
    );
    expect(stateAfter.ingredients).toEqual([
      mockIngredients[1],
      mockIngredients[2],
      mockIngredients[0]
    ]);
  });

  test('should handle getIngredients.pending', () => {
    const state = burgerConstructorSlice.reducer(
      initialState,
      getIngredients.pending('', undefined)
    );
    expect(state).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  test('should handle getIngredients.fulfilled', () => {
    const state = burgerConstructorSlice.reducer(
      initialState,
      getIngredients.fulfilled(mockIngredients, '', undefined)
    );
    expect(state).toEqual({
      ...initialState,
      isLoading: false,
      ingredients: mockIngredients
    });
  });

  test('should handle getIngredients.rejected', () => {
    const error = new Error('Network error');
    const state = burgerConstructorSlice.reducer(
      initialState,
      getIngredients.rejected(error, '', undefined)
    );
    expect(state).toEqual({
      ...initialState,
      isLoading: false
    });
  });

  test('selectors should return correct data', () => {
    const state = {
      burgerConstructor: {
        ingredients: mockIngredients,
        isLoading: false
      }
    };
    // безBuns должен исключить булки (type === 'bun')
    expect(withoutBuns(state)).toEqual(
      mockIngredients.filter((i) => i.type !== 'bun')
    );
    expect(allIngredients(state)).toEqual(mockIngredients);
    expect(areIngredientsLoading(state)).toBe(false);
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
    // Селекторы из слайса тоже доступны
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
