import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Brewery } from 'src/shared/classes/Brewery';

export const productsFeatureSelector = createFeatureSelector<{
  items: Array<Brewery>;
}>('brewerys');

export const selectBrews = (state: { items: Array<Brewery> }) => state.items;
export const selectBrewerys = createSelector(
  productsFeatureSelector,
  selectBrews
);
