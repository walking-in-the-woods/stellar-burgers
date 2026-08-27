import { FC, useMemo } from 'react';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient } from '@utils-types';
import { useSelector } from '../../services/hooks';
import { ingredientsSelector } from '../../services/slices/ingredientsSlice';
import { useParams } from 'react-router-dom';
import { feedOrdersSelector } from '../../services/slices/feedSlice';

export const OrderInfo: FC = () => {
  const { number } = useParams<{ number: string }>();
  const ingredients = useSelector(ingredientsSelector);
  const orders = useSelector(feedOrdersSelector);

  const orderData = useMemo(() => {
    if (!number) return null;
    return orders.find((order) => order.number === Number(number)) || null;
  }, [number, orders]);

  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients.length) return null;

    const date = new Date(orderData.createdAt);

    const ingredientsInfo: { [key: string]: TIngredient & { count: number } } =
      {};
    orderData.ingredients.forEach((item) => {
      const ingredient = ingredients.find((ing) => ing._id === item);
      if (ingredient) {
        if (ingredientsInfo[item]) {
          ingredientsInfo[item].count++;
        } else {
          ingredientsInfo[item] = { ...ingredient, count: 1 };
        }
      }
    });

    const total = Object.values(ingredientsInfo).reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );

    return {
      ...orderData,
      ingredientsInfo,
      date,
      total
    };
  }, [orderData, ingredients]);

  if (!orderInfo) {
    return <Preloader />;
  }

  return <OrderInfoUI orderInfo={orderInfo} />;
};
