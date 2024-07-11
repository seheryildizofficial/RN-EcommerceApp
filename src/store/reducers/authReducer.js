import {
  FETCH_USER_LOGIN,
  USER_LOGIN_PENDING,
  USER_LOGIN_REJECT,
} from '../types/authTypes';

const initialState = {
  isLogin: false,
  loginPending: false,
  loginError: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
        loginPending: false,
      };
    case USER_LOGIN_PENDING:
      return {
        ...state,
        loginPending: true,
      };
    case USER_LOGIN_REJECT:
      return {
        ...state,
        loginPending: false,
        loginError: true,
      };
    default:
      return state;
  }
};
export default authReducer;
