import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgendaListComponent} from './containers/agenda-list/agenda-list.component';
import {AgendaDetailComponent} from './containers/agenda-detail/agenda-detail.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: AgendaListComponent},
  {path: 'detail', component: AgendaDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
