import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaListComponent } from './containers/agenda-list/agenda-list.component';
import { AgendaDetailComponent } from './containers/agenda-detail/agenda-detail.component';


@NgModule({
  declarations: [AgendaListComponent, AgendaDetailComponent],
  imports: [
    CommonModule,
    AgendaRoutingModule
  ]
})
export class AgendaModule { }
