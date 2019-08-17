import {AuthState, authReducer} from './auth.reducers';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface CoreState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<CoreState> = {
  auth: authReducer
};

export const getCoreState = createFeatureSelector<CoreState>(
  'core'
);
