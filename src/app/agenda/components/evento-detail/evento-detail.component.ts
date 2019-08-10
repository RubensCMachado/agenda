import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Evento} from '../../model/evento.model';
import {selectEvento, unselectEvento, updateEvento} from '../../store/actions/eventos.actions';
import {Action} from '@ngrx/store';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.scss']
})
export class EventoDetailComponent implements OnInit {

  eventoForm = this.fb.group( {
    id: [''],
    titulo: [''],
    descricao: [''],
  });

  @Input()
  set evento(evento: Evento) {
    if (evento) {
      this.eventoForm.patchValue(evento);
    }
  }

  @Output()
  actionEmiter = new EventEmitter<Action>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  unselect() {
    this.actionEmiter.emit(unselectEvento());
  }

  update() {
    this.actionEmiter.emit(updateEvento({evento: this.eventoForm.value}));
  }
}
