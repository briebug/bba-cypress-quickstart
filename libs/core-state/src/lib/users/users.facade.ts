import { Injectable } from '@angular/core';
import { User } from '@bba/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as UsersActions from './users.actions';
import * as UsersSelectors from './users.selectors';
import * as fromUsers from './users.reducer';

@Injectable({
  providedIn: 'root',
})
export class UsersFacade {
  loaded$ = this.store.pipe(select(UsersSelectors.getUsersLoaded));
  allUsers$ = this.store.pipe(select(UsersSelectors.getAllUsers));
  selectedUser$ = this.store.pipe(select(UsersSelectors.getSelectedUser));

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === UsersActions.createUser({} as any).type ||
        action.type === UsersActions.updateUser({} as any).type ||
        action.type === UsersActions.deleteUser({} as any).type
    )
  );

  constructor(
    private store: Store<fromUsers.UsersPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectUser(selectedId: string) {
    this.dispatch(UsersActions.selectUser({ selectedId }));
  }

  loadUsers() {
    this.dispatch(UsersActions.loadUsers());
  }

  loadUser(userId: string) {
    this.dispatch(UsersActions.loadUser({ userId }));
  }

  createUser(user: User) {
    this.dispatch(UsersActions.createUser({ user }));
  }

  updateUser(user: User) {
    this.dispatch(UsersActions.updateUser({ user }));
  }

  deleteUser(user: User) {
    this.dispatch(UsersActions.deleteUser({ user }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
