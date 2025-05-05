import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button } from '../Button/Button.jsx';
import sprite from '/icons/sprite.svg';
import css from './RegistrationForm.module.css';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebaseConfig.js';

export const RegistrationForm = ({ closeModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const schema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Name is required'),
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

  const onSubmit = async data => {
    const { name, email, password } = data;
    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      await updateProfile(user, {
        displayName: name,
      });

      reset();
      closeModal();
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.registerForm}>
      <div className={css.registerFormTitle}>
        <h1>Registration</h1>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
      </div>
      <div className={css.registerFormInputs}>
        <input
          type="text"
          autoComplete="name"
          placeholder="Name"
          {...register('name')}
        />
        {errors.name && <p>{errors.name.message}</p>}
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
      <Button type="submit" title="register">
        Registration
      </Button>
    </form>
  );
};
