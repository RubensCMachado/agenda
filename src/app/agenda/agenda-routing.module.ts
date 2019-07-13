import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgendaComponent} from './containers/agenda/agenda.component';
import {EventoComponent} from './containers/evento/evento.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'agenda'},
  {path: 'agenda', component: AgendaComponent},
  {path: 'evento', component: EventoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
