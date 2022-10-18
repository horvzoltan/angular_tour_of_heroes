import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Brewery } from 'src/shared/classes/Brewery';

// items
export const productsFeatureSelector = createFeatureSelector<{
  items: Array<Brewery>;
  selected: Brewery;
}>('brewerys');

export const selectBrews = (state: { items: Array<Brewery> }) => state.items;
export const selectBrew = (state: { selected: Brewery }) => state.selected;

export const selectBrewerys = createSelector(
  productsFeatureSelector,
  selectBrews
);

export const selectBrewery = createSelector(
  productsFeatureSelector,
  selectBrew
);
