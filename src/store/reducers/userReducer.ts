import { IUserState, UserAction, UserActionTypes } from '../../utils/types/user.types';

const initialState: IUserState = {
  currentUser: null,
};

export const userReducer = (state = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
