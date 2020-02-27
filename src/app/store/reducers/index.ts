import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromIsps from './isps.reducer';


export interface State {

  [fromIsps.ispsFeatureKey]: fromIsps.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromIsps.ispsFeatureKey]: fromIsps.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectISPState = createFeatureSelector<fromIsps.State>('isps');
export const getispList = createSelector(selectISPState, fromIsps.getispList);
export const getSelctedIsp = createSelector(selectISPState, fromIsps.getSelectedIsp);

