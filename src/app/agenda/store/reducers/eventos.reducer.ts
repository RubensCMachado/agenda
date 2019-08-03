import {Evento} from '../../model/evento.model';
import {Action, createReducer, on} from '@ngrx/store';
import {createEvento, deleteEvento, selectEvento, unselectEvento, updateEvento} from '../actions/eventos.actions';
import {createEntityAdapter, EntityState} from '@ngrx/entity';

export const eventoAdapter = createEntityAdapter<Evento>(
  { sortComparer: (a: Evento, b: Evento) => a.descricao.localeCompare(b.descricao)}
);

export interface EventosState extends EntityState<Evento> {
  evento?: Evento;
}

const pag = [
  {id: 1, descricao: 'Reuniao manha'},
  {id: 2, descricao: 'Reuniao tarde'},
  {id: 3, descricao: 'Reuniao noite'},
  {id: 4, descricao: 'Reuniao amanhã'},
];

// const initialState = eventoAdapter.getInitialState();
const initialState = eventoAdapter.addAll(pag, eventoAdapter.getInitialState());

const reducer = createReducer(
  initialState,
  on(selectEvento, (state, {evento}) => ({...state, evento})),
  on(unselectEvento, (state: EventosState) => {
    const {evento, ...rest} = state;
    return rest;
  }),
  on(createEvento, (state, {evento}) => eventoAdapter.addOne(evento, state)),
  on(updateEvento, (state, {evento}) => eventoAdapter.updateOne({id: evento.id, changes: evento}, state)),
  on(deleteEvento, (state, {id}) => eventoAdapter.removeOne(id, state)),
);

export function reducerEventos(state: EventosState, action: Action) {
  return reducer(state, action);
}
