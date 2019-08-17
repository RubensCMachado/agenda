import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CoreState} from '../../store/reducers/feature.reducers';
import {Store} from '@ngrx/store';
import {signInEmail, signInGoogle} from '../../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group( {
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(private fb: FormBuilder, private store: Store<CoreState>) {
  }

  ngOnInit() {
  }

  login() {
     if (this.loginForm.valid) {
       this.store.dispatch(signInEmail(this.loginForm.value));
     }
  }

  google() {
    this.store.dispatch(signInGoogle());
  }

}
