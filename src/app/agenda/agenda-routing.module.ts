import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventoListComponent} from './components/evento-list/evento-list.component';
import {EventoDetailComponent} from './components/evento-detail/evento-detail.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'agenda', component: EventoListComponent},
  {path: 'evento', component: EventoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
