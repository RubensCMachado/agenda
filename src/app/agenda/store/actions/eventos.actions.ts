import {createAction, props} from '@ngrx/store';
import {Evento} from '../../model/evento.model';

export const selectEvento = createAction(
  '[Eventos] Select evento.',
  props<{evento: Evento}>()
);

export const unselectEvento = createAction(
  '[Eventos] Unselect evento.'
);

export const createEvento = createAction(
  '[Eventos] Create evento.',
  props<{evento: Evento}>()
);

export const updateEvento = createAction(
  '[Eventos] Update evento.',
  props<{evento: Evento}>()
);

export const deleteEvento = createAction(
  '[Eventos] Delete eventos.',
  props<{id: number}>()
);
