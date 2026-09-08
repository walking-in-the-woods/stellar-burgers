import { FC, useMemo, useEffect } from 'react';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient } from '@utils-types';
import { useSelector, useDispatch } from '../../services/hooks';
import { ingredientsSelector } from '../../services/slices/ingredientsSlice';
import { feedOrdersSelector } from '../../services/slices/feedSlice';
import { profileOrdersSelector } from '../../services/slices/profileOrdersSlice';
import {
  fetchOrderByNumber,
  orderDetailsSelector,
  orderDetailsLoadingSelector,
  orderDetailsErrorSelector,
  clearOrderDetails
} from '../../services/slices/orderDetailsSlice';
import { useParams } from 'react-router-dom';
import { getIngredientsWithCount, formatDate } from '../../utils/order-helpers';

export const OrderInfo: FC = () => {
  const { number } = useParams<{ number: string }>();
  const dispatch = useDispatch();
  const allIngredients = useSelector(ingredientsSelector);
  const feedOrders = useSelector(feedOrdersSelector);
  const profileOrders = useSelector(profileOrdersSelector);
  const orderDetails = useSelector(orderDetailsSelector);
  const orderDetailsLoading = useSelector(orderDetailsLoadingSelector);
  const orderDetailsError = useSelector(orderDetailsErrorSelector);

  const orderData = useMemo(() => {
    if (!number) return null;
    const num = Number(number);
    const fromFeed = feedOrders.find((order) => order.number === num);
    if (fromFeed) return fromFeed;
    const fromProfile = profileOrders.find((order) => order.number === num);
    if (fromProfile) return fromProfile;
    if (orderDetails && orderDetails.number === num) return orderDetails;
    return null;
  }, [number, feedOrders, profileOrders, orderDetails]);

  useEffect(() => {
    if (!number) return;
    const num = Number(number);
    const existsInFeed = feedOrders.some((order) => order.number === num);
    const existsInProfile = profileOrders.some((order) => order.number === num);
    const existsInDetails = orderDetails && orderDetails.number === num;

    if (existsInFeed || existsInProfile || existsInDetails) return;
    if (orderDetailsLoading || orderDetailsError) return;

    dispatch(fetchOrderByNumber(num));
  }, [
    number,
    feedOrders,
    profileOrders,
    orderDetails,
    orderDetailsLoading,
    orderDetailsError,
    dispatch
  ]);

  // eslint-disable-next-line arrow-body-style
  useEffect(() => () => void dispatch(clearOrderDetails()), [dispatch]);

  const orderInfo = useMemo(() => {
    if (!orderData || !allIngredients.length) return null;

    const ingredientsInfo = getIngredientsWithCount(orderData, allIngredients);
    const total = Object.values(ingredientsInfo).reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    const date = formatDate(orderData.createdAt);

    return {
      ...orderData,
      ingredientsInfo,
      date,
      total
    };
  }, [orderData, allIngredients]);

  if (orderDetailsError) {
    return (
      <div className='text text_type_main-medium pt-4' style={{ color: 'red' }}>
        Ошибка загрузки заказа: {orderDetailsError}
      </div>
    );
  }

  if (!orderData && !orderDetailsLoading) {
    return (
      <div className='text text_type_main-medium pt-4'>
        Заказ с номером #{number} не найден
      </div>
    );
  }

  if (orderDetailsLoading || !allIngredients.length || !orderInfo) {
    return <Preloader />;
  }

  return <OrderInfoUI orderInfo={orderInfo} />;
};
