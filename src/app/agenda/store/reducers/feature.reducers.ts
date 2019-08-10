import {EventosState, reducerEventos} from './eventos.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface AgendaState {
  eventos: EventosState;
}

export const agendaReducer: ActionReducerMap<AgendaState> = {
  eventos: reducerEventos
};

export const getAgendaState = createFeatureSelector<AgendaState>('agenda');
