import {Evento} from '../../model/evento.model';
import {Action, createReducer, on} from '@ngrx/store';
import {
  createEvento,
  deleteEvento,
  selectEvento,
  unselectEvento,
  updateEvento,
  updateEventosList
} from '../actions/eventos.actions';
import {createEntityAdapter, EntityState} from '@ngrx/entity';

export const eventoAdapter = createEntityAdapter<Evento>(
  { sortComparer: (a: Evento, b: Evento) => a.titulo.localeCompare(b.titulo)}
);

export interface EventosState extends EntityState<Evento> {
  evento?: Evento;
}

const initialState = eventoAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(updateEventosList, (state, {eventos}) => eventoAdapter.addAll(eventos, state)),
  on(selectEvento, (state, {evento}) => ({...state, evento})),
  on(unselectEvento, updateEvento, (state: EventosState) => {
    const {evento, ...rest} = state;
    return rest;
  }),
  on(createEvento, (state, {evento}) => eventoAdapter.addOne(evento, state)),
  on(deleteEvento, (state, {id}) => eventoAdapter.removeOne(id, state)),
);

export function reducerEventos(state: EventosState, action: Action) {
  return reducer(state, action);
}
