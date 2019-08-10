import { Component, OnInit } from '@angular/core';
import {AgendaState} from '../../store/reducers/feature.reducers';
import {Observable} from 'rxjs';
import {Evento} from '../../model/evento.model';
import {getAllEventos} from '../../store/selectors/eventos.selectors';
import {Store, select, Action} from '@ngrx/store';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  eventos$: Observable<Evento[]>;

  constructor(private store: Store<AgendaState>) { }

  ngOnInit() {
    this.eventos$ = this.store.pipe(select(getAllEventos));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

}
