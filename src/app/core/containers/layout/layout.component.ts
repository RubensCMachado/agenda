import { Component, OnInit } from '@angular/core';
import {CoreState} from '../../store/reducers/feature.reducers';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {signOut} from '../../store/actions/auth.actions';
import {isAuthenticated} from '../../store/selectors/auth.selectors';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store<CoreState> ) {
  }

  ngOnInit() {
    this.isAuthenticated$ = this.store.pipe(select(isAuthenticated));
  }

  logout() {
    this.store.dispatch(signOut());
  }
}
