import { createAction, props } from '@ngrx/store';
import { Brewery } from 'src/shared/interfaces/brewery';

export const NAMES = {
  RETRIEVE_ITEMS: '[Product List/API] Retrieve Products',
  ERROR_ITEM: '[Product List/API] Error',
  RETRIEVE_ITEM: '[Product List/API] Retrieve Products',
  LOAD_ITEM: '[Product] Load Product',
  RETRIEVE_ITEMS_SUCCESS: '[Product List/API] Retrieve Products Success',
};

// Reducer oriented actions
export const loadItem = createAction(
  NAMES.LOAD_ITEM,
  props<{ item: Brewery }>()
);

export const loadItems = createAction(
  NAMES.RETRIEVE_ITEMS_SUCCESS,
  props<{ items: ReadonlyArray<Brewery> }>()
);

// Effect actions.
export const getItems = createAction(NAMES.RETRIEVE_ITEMS);

export const getItem = createAction(
  NAMES.RETRIEVE_ITEM,
  props<{ id: number }>()
);
