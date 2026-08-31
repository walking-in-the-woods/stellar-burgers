import { FC, useEffect } from 'react';
import { ProfileOrdersUI } from '@ui-pages';
import { useSelector, useDispatch } from '../../services/hooks';
import {
  profileOrdersSelector,
  profileOrdersLoadingSelector,
  fetchProfileOrders
} from '../../services/slices/profileOrdersSlice';
import { Preloader } from '@ui';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector(profileOrdersSelector);
  const isLoading = useSelector(profileOrdersLoadingSelector);

  useEffect(() => {
    dispatch(fetchProfileOrders());
  }, [dispatch]);

  if (isLoading) {
    return <Preloader />;
  }

  return <ProfileOrdersUI orders={orders} />;
};
