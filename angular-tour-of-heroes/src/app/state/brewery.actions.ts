import { createAction, props } from '@ngrx/store';
import { Brewery } from 'src/shared/classes/Brewery';

export const NAMES = {
  ADD_ITEM: '[Brewery List] Add Brewery',
  LOAD_ITEM: '[Brewery] Load Brewery',
  RETRIEVE_ITEMS_SUCCESS: '[Brewery List/API] Retrieve Brewerys Success',
  ERROR_ITEM: '[Brewery List/API] Error',
  RETRIEVE_ITEMS: '[Brewery List/API] Retrieve Brewerys',
  RETRIEVE_ITEM: '[Brewery List/API] Retrieve Brewery',
  LOAD_SELECTED: '[Brewery] Load Selected',
  LOG_EVENT: '[Brewery] Log Event',
};

export const loadItems = createAction(
  NAMES.RETRIEVE_ITEMS_SUCCESS,
  props<{ items: Array<Brewery> }>()
);

// Effect actions.
export const getItems = createAction(NAMES.RETRIEVE_ITEMS);

// Log.
export const logEvent = createAction(
  NAMES.LOG_EVENT,
  props<{ message: string }>()
);
