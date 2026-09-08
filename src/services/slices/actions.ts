import { createAsyncThunk } from '@reduxjs/toolkit';
import { getIngredientsApi } from '@api';

export const getIngredients = createAsyncThunk(
  'burgerConstructor/getIngredients',
  async () => {
    const res = await getIngredientsApi();
    return res;
  }
);
