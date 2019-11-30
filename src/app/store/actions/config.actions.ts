import { Action } from '@ngrx/store';
import { IConfig } from '../../models/config.interface';
import {GetUser, GetUsers} from './user.actions';

export enum EConfigActions {
  GetConfig = '[Config] GetConfig',
  GetConfigSuccess = '[Config] GetConfigSuccess'
}

export class GetConfig implements Action {
  public readonly type = EConfigActions.GetConfig;
}

export class GetConfigSuccess implements Action {
  public readonly type = EConfigActions.GetConfigSuccess;
  constructor(public payload: IConfig) {}
}

export type ConfigActions = GetConfig | GetConfigSuccess;
