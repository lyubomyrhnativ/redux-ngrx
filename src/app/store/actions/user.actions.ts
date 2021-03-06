import { Action } from '@ngrx/store';
import { IUser } from '../../models/user.interface';

export enum EUserActions {
  GetUsers = '[User] GetUsers',
  GetUsersSuccess = '[User] GetUsersSuccess',
  GetUser = '[User] GetUser',
  GetUserSuccess = '[User] GetUserSuccess',
  AddUser = '[User] AddUser',
  DeleteUser = '[User] DeleteUser'
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: IUser[]) {}
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: IUser) {}
}

export class AddUser implements Action {
  public readonly type = EUserActions.AddUser;
  constructor(public payload: IUser) {}
}

export class DeleteUser implements Action {
  public readonly type = EUserActions.DeleteUser;
  constructor(public payload: IUser) {}
}

export type UserActions = GetUser |
  GetUsers | GetUsersSuccess | GetUserSuccess | AddUser | DeleteUser;
