import { createReducer, on } from '@ngrx/store';

import { loadItem, loadItems } from './brewery.actions';
import { Brewery } from 'src/shared/classes/Brewery';

export interface State {
  [x: string]: any;
  items: Brewery[];
  selected: Brewery | null;
  error: any;
}

export const initialState: State = {
  items: [],
  selected: null,
  error: null,
};

export const breweryReducer = createReducer(
  initialState,
  on(loadItems, (state, action) => {
    return {
      ...state,
      items: action.items,
    };
  }),
  on(loadItem, (state, action) => {
    return {
      ...state,
      selected: action.selected,
    };
  })
);
