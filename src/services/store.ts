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
