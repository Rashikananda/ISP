import { createAction, props } from '@ngrx/store';

export const loadIspss = createAction(
  '[Isps] Load Ispss'
);

export const loadIspssSuccess = createAction(
  '[Isps] Load Ispss Success',
  props<{ data: any }>()
);

export const loadIspssFailure = createAction(
  '[Isps] Load Ispss Failure',
  props<{ error: any }>()
);

export const updateSelectedIsp = createAction(
  '[Isps] Load Selected Isp',
  props<{ name: string }>()
);
