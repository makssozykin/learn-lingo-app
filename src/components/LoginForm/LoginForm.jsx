import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button } from '../Button/Button.jsx';
import sprite from '/icons/sprite.svg';
import css from './LoginForm.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig.js';

export const LoginForm = ({ closeModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const schema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = data => {
    const { email, password } = data;
    console.log(data);
    signInWithEmailAndPassword(auth, email, password);
    reset();
    closeModal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.loginForm}>
      <div className={css.loginFormTitle}>
        <h1>Log In</h1>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
      </div>
      <div className={css.loginFormInputs}>
        <input
          type="email"
          autoComplete="email"
          placeholder="Email"
          {...register('email')}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <div className={css.passCont}>
          <input
            type={showPassword ? 'text' : 'password'}
            autoComplete="password"
            placeholder="Password"
            {...register('password')}
          />
          <button type="button" onClick={togglePassword} className={css.btnEye}>
            <svg className={css.iconEye}>
              <use
                xlinkHref={`${sprite}#${
                  showPassword ? 'icon-eye' : 'icon-eye-off'
                }`}
              />
            </svg>
          </button>
        </div>
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <Button type="submit" title="login">
        Log In
      </Button>
    </form>
  );
};
