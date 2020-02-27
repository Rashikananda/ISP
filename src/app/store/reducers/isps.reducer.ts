import { Action, createReducer, on } from '@ngrx/store';
import { loadIspssSuccess } from '../actions/isps.actions';
  import * as  ispActions  from '../actions/isps.actions';

export const ispsFeatureKey = 'isps';

export interface State {
  ispList: string[],
  selectedISP: Object

}

export const initialState: State = {
  ispList: new Array(),
  selectedISP: new Object()

};


export const getispList = (state: State) => state.ispList;
export const getSelectedIsp = (state: State) => state.selectedISP;

const ispsReducer = createReducer(
  initialState,
  on(
    ispActions.loadIspssSuccess,
    (state, { data }) => ({ ...state, ispList: data })
  ),
  on(ispActions.updateSelectedIsp, (state, {name}) => {
    const selectedISP = state.ispList.find( isp => isp.name === name)
    return { ...state, selectedISP: selectedISP }
  })

);

export function reducer(state: State | undefined, action: Action) {
  return ispsReducer(state, action);
}
