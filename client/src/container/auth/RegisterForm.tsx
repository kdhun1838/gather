import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { changeField, initializeForm, signup } from '../../modules/auth/action';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user/action';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, auth, authError, user } = useSelector((state: RootState) => ({
    form: state.auth.register,
    auth: state.auth.auth,
    authError: state.auth.authError,
    user: state.user.user,
  }));

  const onChange = (data: { key: string; value: string | number }) => {
    dispatch(
      changeField({
        name: 'register',
        key: data.key,
        value: String(data.value),
      })
    );
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      id,
      password,
      passwordConfirm,
      name,
      nick,
      email,
      tel,
      age,
      addr,
      gender,
    } = form;

    if (
      [
        id,
        password,
        passwordConfirm,
        name,
        nick,
        email,
        tel,
        age,
        addr,
        gender,
      ].includes('')
    ) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }

    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({ name: 'register', key: 'password', value: '' }));
      dispatch(
        changeField({ name: 'register', key: 'passwordConfirm', value: '' })
      );
      return;
    }
    dispatch(signup(form));
  };
  useEffect(() => {
    dispatch(initializeForm(form));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정명입니다.');
        return;
      }
      setError('회원가입 실패');
    }
    if (auth) {
      dispatch(check(user));
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      navigate('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [navigate, user]);

  return (
    <AuthForm
      type="register"
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      form={form}
    />
  );
};

export default RegisterForm;
