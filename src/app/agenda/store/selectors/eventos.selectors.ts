import {createSelector} from '@ngrx/store';
import {getAgendaState} from '../reducers/feature.reducers';
import {eventoAdapter} from '../reducers/eventos.reducer';

export const getEventosState = createSelector(
  getAgendaState,
  state => state.eventos
)

export const getAllEventos = createSelector(
  getEventosState,
  state => eventoAdapter.getSelectors().selectAll(state)
)

export const getSelectedEvento = createSelector(
  getEventosState,
  state => state.evento
)
