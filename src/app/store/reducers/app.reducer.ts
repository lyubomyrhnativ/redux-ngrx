import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { userReducer } from './user.reducer';
import { configReducers } from './config.reducer';

export const appReducers: ActionReducerMap<IAppState> = {
  user: userReducer,
  config: configReducers,
  router: routerReducer
}
