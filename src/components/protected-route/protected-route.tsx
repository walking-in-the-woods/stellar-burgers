import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from '../../services/hooks';
import {
  isAuthCheckedSelector,
  userSelector
} from '../../services/slices/userSlice';
import { Preloader } from '@ui';
import { LocationState } from '../../utils/types';

type TProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: ReactNode;
};

export const ProtectedRoute: FC<TProtectedRouteProps> = ({
  onlyUnAuth = false,
  children
}) => {
  const isAuthChecked = useSelector(isAuthCheckedSelector);
  const user = useSelector(userSelector);
  const location = useLocation();
  const state = location.state as LocationState;

  if (!isAuthChecked) {
    return <Preloader />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  if (onlyUnAuth && user) {
    const from = state?.from || { pathname: '/' };
    return <Navigate to={from} replace />;
  }

  return <>{children}</>;
};
