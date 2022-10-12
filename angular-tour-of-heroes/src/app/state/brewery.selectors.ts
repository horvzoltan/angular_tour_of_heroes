import { State } from './brewery.reducer';

export const selectBrewerys = (state: State) => state.brewerys.items;

export const selectOneBrewery = (state: State) => state.brewerys.selected;
