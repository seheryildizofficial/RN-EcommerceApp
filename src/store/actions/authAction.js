import {LOGIN_URL} from '../../service/urls';
import {postRequest} from '../../service/verb';
import {
  FETCH_USER_LOGIN,
  USER_LOGIN_PENDING,
  USER_LOGIN_REJECT,
} from '../types/authTypes';

export const userLogin = payload => {
  return async dispatch => {
    dispatch({type: USER_LOGIN_PENDING});
    try {
      const response = await postRequest(LOGIN_URL, payload);
      dispatch({
        type: FETCH_USER_LOGIN,
        payload: false,
      });
    } catch (error) {
      dispatch({type: USER_LOGIN_REJECT});
    }
  };
};
