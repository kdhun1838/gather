import { AuthState, LoginState, registerState } from './type';
import { createRequestActionTypes } from '../../lib/function/createRequestSaga';

export const CHANGE_FIELD = 'auth/CHANGE_FIELD' as const;
export const INITIALIZE_FORM = 'auth/INITIALIZE_FORM' as const;
export const FIND_ID = 'auth/FIND_ID' as const;
export const FIND_PASSWORD = 'auth/FIND_PASSWORD' as const;

export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('auth/LOGIN');
export const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] =
  createRequestActionTypes('auth/SIGNUP');

export const changeField = ({
  name,
  key,
  value,
}: {
  name: string;
  key: string;
  value: string;
}) => ({
  type: CHANGE_FIELD,
  payload: {
    name,
    key,
    value,
  },
});

export const initializeForm = (
  form: AuthState['login'] | AuthState['register']
) => ({
  type: INITIALIZE_FORM,
  payload: form,
});

export const login = (login: LoginState) => ({
  type: LOGIN,
  payload: {
    login,
  },
});

export const signup = (register: registerState) => ({
  type: SIGNUP,
  payload: register,
});

export const findid = () => ({
  type: FIND_ID,
});

export const findpassword = () => ({
  type: FIND_PASSWORD,
});
