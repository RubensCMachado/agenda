import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Evento} from '../../model/evento.model';
import {Action} from '@ngrx/store';
import {selectEvento} from '../../store/actions/eventos.actions';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss']
})
export class EventoListComponent implements OnInit {

  @Input()
  eventos: Evento[];

  @Output()
  actionEmiter = new EventEmitter<Action>();

  constructor() { }

  ngOnInit() {
  }

  select(evento: Evento) {
    this.actionEmiter.emit(selectEvento({evento}));
  }

}
