import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type TProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: ReactNode;
};

export const ProtectedRoute: FC<TProtectedRouteProps> = ({
  onlyUnAuth = false,
  children
}) => {
  // Временная заглушка, позже заменим на реальную проверку авторизации
  const isAuthChecked = true;
  const user = null;
  const location = useLocation();

  if (!isAuthChecked) {
    return null;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  if (onlyUnAuth && user) {
    const from = location.state?.from || { pathname: '/' };
    return <Navigate to={from} replace />;
  }

  return <>{children}</>;
};
