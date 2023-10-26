import client from './client';
import { AxiosResponse } from 'axios';
import { AuthState, LoginState, registerState } from '../../modules/auth/type';
import { UserState } from '../../modules/user/type';
export const Login = (login: LoginState): Promise<AxiosResponse> => {
  console.log('loginform==============', login);
  return client.post('/auth/login', login);
};

export const Register = (register: registerState): Promise<AxiosResponse> => {
  console.log('signup=============>', register);
  return client.post('/auth/signup', register);
};

export const check = () => client.get('/auth/check');

export const logout = () => client.post('/auth/logout');

export const userupdate = (user: UserState) => {
  console.log('userupdate==========>');
  return client.post('/auth/userupdate', user);
};
