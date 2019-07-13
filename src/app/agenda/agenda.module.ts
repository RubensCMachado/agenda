import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './containers/agenda/agenda.component';
import { EventoComponent } from './containers/evento/evento.component';
import { EventoListComponent } from './components/evento-list/evento-list.component';
import { EventoDetailComponent } from './components/evento-detail/evento-detail.component';
import {SharedModule} from '../core/shared/shared.module';



@NgModule({
  declarations: [ AgendaComponent, EventoComponent, EventoListComponent, EventoDetailComponent],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    SharedModule
  ]
})
export class AgendaModule { }
