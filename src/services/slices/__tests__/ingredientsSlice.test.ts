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
