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
