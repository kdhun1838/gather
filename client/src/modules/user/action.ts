import { UserState } from './type';
import { createRequestActionTypes } from '../../lib/function/createRequestSaga';

export const TEMP_SET_USER = 'user/TEMP_USER' as const;
export const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createRequestActionTypes('user/CHECK');
export const LOGOUT = 'user/LOGOUT' as const;
export const [USER_UPDATE, USER_UPDATE_SUCCESS, USER_UPDATE_FAILURE] =
  createRequestActionTypes('user/USER_UPDATE');

export const tempSetUser = (user: UserState) => ({
  type: TEMP_SET_USER,
  payload: user,
});

export const check = (user: UserState) => ({
  type: CHECK,
  payload: user,
});

export const logout = (user: UserState) => ({
  type: LOGOUT,
  payload: user,
});

export const userupdate = (user: UserState) => ({
  type: USER_UPDATE,
  payload: user,
});
