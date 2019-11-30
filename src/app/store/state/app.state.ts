import { initialUserState, IUserState } from './user.state';
import { IConfigState, initialConfigState } from './config.state';
import { RouterReducerState } from '@ngrx/router-store';

export interface IAppState {
  user: IUserState;
  config: IConfigState;
  router?: RouterReducerState;
}

export const initialAppState: IAppState = {
  user: initialUserState,
  config: initialConfigState
}

export function getInitialState(): IAppState {
  return initialAppState;
}
