import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './containers/layout/layout.component';
import { HomeComponent } from './containers/home/home.component';
import {EffectsModule} from '@ngrx/effects';
import {CoreEffects} from './store/effects/core.effects';
import {AuthGuard} from './guard/auth.guard';
import {LoginComponent} from './containers/login/login.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers/feature.reducers';
import {AuthEffects} from './store/effects/auth.effects';



@NgModule({
  declarations: [LayoutComponent, HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    EffectsModule.forFeature([CoreEffects, AuthEffects]),
    StoreModule.forFeature('core', reducers),
  ],
  providers: [AuthGuard]
})
export class CoreModule { }
