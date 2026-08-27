import { FC, useState, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordUI } from '@ui-pages';
import { useDispatch, useSelector } from '../../services/hooks';
import {
  forgotPassword,
  forgotPasswordRequestSelector,
  forgotPasswordErrorSelector
} from '../../services/slices/userSlice';

export const ForgotPassword: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const forgotPasswordRequest = useSelector(forgotPasswordRequestSelector);
  const forgotPasswordError = useSelector(forgotPasswordErrorSelector);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(forgotPassword({ email }))
      .unwrap()
      .then(() => {
        localStorage.setItem('resetPassword', 'true');
        navigate('/reset-password', { replace: true });
      });
  };

  return (
    <ForgotPasswordUI
      errorText={forgotPasswordError ?? undefined}
      email={email}
      setEmail={setEmail}
      handleSubmit={handleSubmit}
    />
  );
};
