import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Evento} from '../../model/evento.model';
import {Action, select, Store} from '@ngrx/store';
import {AgendaState} from '../../store/reducers/global.reducer';
import {getAllEventos, getSelectedEvento} from '../../store/selectors/eventos.selectors';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  evento$: Observable<Evento>;

  constructor(private store: Store<AgendaState>) { }


  ngOnInit() {
    this.evento$ = this.store.pipe(select(getSelectedEvento));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
