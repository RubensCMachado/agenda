import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Evento} from '../../model/evento.model';
import {updateEventosList, updateEvento, deleteEvento, createEvento} from '../actions/eventos.actions';
import {catchError, concatMap, exhaustMap, map} from 'rxjs/operators';
import {navigateTo} from '../../../store/actions/app.actions';
import {from, of} from 'rxjs';
import {showSnackBar} from '../../../core/store/actions/core.actions';


@Injectable ()
export class EventosEffects {

  updateEventosList$ = createEffect(() =>
    this.firestore.collection<Evento>('eventos').valueChanges().pipe(
      map( eventos => updateEventosList({eventos})),
  ));

  updateEvento$ = createEffect(() => this.action$.pipe(
    ofType(updateEvento),
    exhaustMap((action) =>
      from(this.firestore.doc(`eventos/${action.evento.id}`).set(action.evento)).pipe(
        concatMap(() => from( [
          navigateTo({commands: ['core', 'layout', 'agenda']}),
          showSnackBar({message: `${action.evento.titulo} atualizado`, config: {}})
        ])),
        catchError(() => of(showSnackBar({
          message: 'Ops, algo deu errado.', config: {
            duration: 5000
            }
          })))
      )
    ),
  ));

  deleteEvento$ = createEffect(() => this.action$.pipe(
    ofType(deleteEvento),
    exhaustMap((action) =>
      from(this.firestore.doc(`eventos/${action.id}`).delete()).pipe(
        concatMap(() => from( [
          navigateTo({commands: ['core', 'layout', 'agenda']}),
          showSnackBar({message: `Evento excluído`, config: {}})
        ])),
        catchError(() => of(showSnackBar({
          message: 'Ops, algo deu errado.', config: {
            duration: 5000
          }
        })))
      )
    ),
  ));

  createEvento$ = createEffect(() => this.action$.pipe(
    ofType(createEvento),
    exhaustMap((action) =>
      from(this.firestore.doc(`eventos/${this.createId()}`).set({
        id: this.novoId,
        titulo: action.evento.titulo,
        descricao: action.evento.descricao,
        finalizado: action.evento.finalizado}
        )).pipe(
        concatMap(() => from( [
          navigateTo({commands: ['core', 'layout', 'agenda']}),
          showSnackBar({message: `${action.evento.titulo} criado`, config: {}})
        ])),
        catchError(() => of(showSnackBar({
          message: 'Ops, algo deu errado.', config: {
            duration: 5000
          }
        })))
      )
    ),
  ));

  constructor(private action$: Actions, private firestore: AngularFirestore) {
  }

  novoId: string;
  private createId() {
    this.novoId = this.firestore.createId();
    return this.novoId;
  }

}
