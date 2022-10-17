import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { BreweryService } from 'src/shared/services/brewery.service';
import * as fromActions from 'src/app/state/brewery.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Brewery } from 'src/shared/classes/Brewery';

@Injectable()
export class BreweryEffects {
  getItems$ = createEffect((): Observable<Action> => {
    return this.actions$.pipe(
      ofType(fromActions.getItems),
      switchMap(() => this.httpService.getAllBrews()),
      map((items) => fromActions.loadItems({ items })),
      catchError((error) => of({ type: fromActions.NAMES.ERROR_ITEM, error }))
    );
  });

  constructor(
    private actions$: Actions,
    private httpService: BreweryService<Brewery>
  ) {}
}
