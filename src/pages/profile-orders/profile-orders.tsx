import { FC, useEffect } from 'react';
import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { useSelector, useDispatch } from '../../services/hooks';
// Позже создадим отдельный слайс для истории заказов, пока используем ленту
import {
  feedOrdersSelector,
  fetchFeeds
} from '../../services/slices/feedSlice';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector(feedOrdersSelector);

  useEffect(() => {
    dispatch(fetchFeeds());
  }, [dispatch]);

  return <ProfileOrdersUI orders={orders} />;
};
