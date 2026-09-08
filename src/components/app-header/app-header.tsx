import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useSelector } from '../../services/hooks';
import { userSelector } from '../../services/slices/userSlice';

export const AppHeader: FC = () => {
  const user = useSelector(userSelector);
  return <AppHeaderUI userName={user?.name || ''} />;
};
