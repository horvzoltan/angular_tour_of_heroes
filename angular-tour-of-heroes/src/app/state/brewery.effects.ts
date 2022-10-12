import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { BreweryService } from 'src/shared/services/brewery.service';
import * as fromActions from './brewery.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class BreweryEffects {
  getItems$ = createEffect((): Observable<Action> => {
    return this.actions$.pipe(
      ofType(fromActions.getItems),
      switchMap(() => this.httpService.getAllBrews()),
      map((items) => ({
        type: fromActions.NAMES.RETRIEVE_ITEMS_SUCCESS,
        items: items,
      })),
      catchError((error) => of({ type: fromActions.NAMES.ERROR_ITEM, error }))
    );
  });

  constructor(
    private actions$: Actions,
    private httpService: BreweryService,
    private store$: Store<any>,
    private ar: ActivatedRoute
  ) {}
}
