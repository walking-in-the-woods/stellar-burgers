import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
import { setCookie, deleteCookie, getCookie } from '../../utils/cookie';

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

// Thunk для регистрации
export const registerUser = createAsyncThunk(
  'user/register',
  async (data: TRegisterData) => {
    const res = await registerUserApi(data);
    setCookie('accessToken', res.accessToken);
    localStorage.setItem('refreshToken', res.refreshToken);
    return res.user;
  }
);

// Thunk для входа
export const loginUser = createAsyncThunk(
  'user/login',
  async (data: TLoginData) => {
    const res = await loginUserApi(data);
    setCookie('accessToken', res.accessToken);
    localStorage.setItem('refreshToken', res.refreshToken);
    return res.user;
  }
);

// Thunk для получения данных пользователя (проверка авторизации)
export const getUser = createAsyncThunk('user/get', async () => {
  const res = await getUserApi();
  return res.user;
});

// Thunk для обновления данных пользователя
export const updateUser = createAsyncThunk(
  'user/update',
  async (data: Partial<TRegisterData>) => {
    const res = await updateUserApi(data);
    return res.user;
  }
);

// Thunk для выхода
export const logoutUser = createAsyncThunk('user/logout', async () => {
  await logoutApi();
  deleteCookie('accessToken');
  localStorage.removeItem('refreshToken');
});

// Thunk для забытого пароля
export const forgotPassword = createAsyncThunk(
  'user/forgotPassword',
  async (data: { email: string }) => {
    await forgotPasswordApi(data);
  }
);

// Thunk для сброса пароля
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
    // Регистрация
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
      });

    // Вход
    builder
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
      });

    // Получение пользователя
    builder
      .addCase(getUser.pending, (state) => {
        // Можно добавить флаг загрузки, но мы используем isAuthChecked
      })
      .addCase(getUser.rejected, (state) => {
        state.isAuthChecked = true;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isAuthChecked = true;
        state.isAuthenticated = true;
        state.user = action.payload;
      });

    // Обновление пользователя
    builder
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
      });

    // Выход
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isAuthChecked = true;
    });

    // Забытый пароль
    builder
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
      });

    // Сброс пароля
    builder
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
