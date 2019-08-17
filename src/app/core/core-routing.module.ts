import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './containers/layout/layout.component';
import {HomeComponent} from './containers/home/home.component';
import {AuthGuard} from './guard/auth.guard';
import {LoginComponent} from './containers/login/login.component';
import {redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'layout'},
  {path: 'layout', component: LayoutComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'agenda', canActivate: [AuthGuard], canLoad: [AuthGuard],
        loadChildren: () => import('../agenda/agenda.module').then(mod => mod.AgendaModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
