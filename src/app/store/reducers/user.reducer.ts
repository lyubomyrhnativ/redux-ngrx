import { initialUserState, IUserState } from '../state/user.state';
import { EUserActions, UserActions } from '../actions/user.actions';


export const userReducer = (state = initialUserState, action: UserActions): IUserState => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload
      };
    }
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    case EUserActions.AddUser: {
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    }
    case EUserActions.DeleteUser: {
      const index = state.users.indexOf(action.payload);
      state.users.splice(index, 1);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

