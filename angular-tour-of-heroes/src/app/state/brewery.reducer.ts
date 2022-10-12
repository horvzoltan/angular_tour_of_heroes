import { createReducer, on } from '@ngrx/store';
import { Brewery } from 'src/shared/interfaces/brewery';
import { loadItem, loadItems } from './brewery.actions';

export interface State {
  [x: string]: any;
  brewerys: {
    items: Brewery[];
    selected: Brewery | null;
    error: any;
  };
}

export const initialState: State = {
  brewerys: { items: [], selected: null, error: null },
};

export const breweryReducer = createReducer(
  initialState,
  on(loadItems, (state, action) => ({
    ...state,
    items: action.items,
  })),
  on(loadItem, (state, action) => ({
    ...state,
    selected: action.item,
  }))
);
