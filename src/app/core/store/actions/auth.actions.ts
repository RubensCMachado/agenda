import {createAction, props} from '@ngrx/store';
import {UserInfo} from 'firebase';

export const signInEmail = createAction(
  '[Core - Auth] Sign in with email and password.',
  props<{email: string, senha: string}>()
);

export const signInGoogle = createAction(
  '[Core - Auth] Sign in with Google.',
);

export const updateUserInfo = createAction(
  '[Core - Auth] Update User .Info',
  props<{user?: UserInfo}>()
);

export const signOut = createAction(
  '[Core - Auth] Sign out',
);

export const signOutSucess = createAction(
  '[Core - Auth] Sign out sucessfully.',
);
