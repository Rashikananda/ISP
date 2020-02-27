import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable, of,  } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { loadIspss, loadIspssSuccess } from '../actions/isps.actions';
import { FetchService } from 'src/app/fetch.service';



@Injectable()
export class IspsEffects {


  constructor(private actions$: Actions, private _fetchService: FetchService) {}

  @Effect()
  loadAuths$: Observable<Action> = this.actions$.pipe(
    ofType(loadIspss),
    switchMap(() => {
      return this._fetchService.getISPDetails()
        .pipe(
          map((isps) => {
            return  loadIspssSuccess({data : isps});
          })
        )
      // return of(loadIspssSuccess({data : this.ispLists}))
    })
  );

}
