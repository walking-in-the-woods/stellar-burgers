import { FC, memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { OrderCardProps } from './type';
import { OrderCardUI } from '../ui/order-card';
import { useSelector } from '../../services/hooks';
import { ingredientsSelector } from '../../services/slices/ingredientsSlice';
import { getIngredientsInfo, formatDate } from '../../utils/order-helpers';

const maxIngredients = 6;

export const OrderCard: FC<OrderCardProps> = memo(({ order }) => {
  const location = useLocation();
  const allIngredients = useSelector(ingredientsSelector);

  const orderInfo = useMemo(() => {
    if (!allIngredients.length) return null;

    const { ingredientsInfo, total } = getIngredientsInfo(
      order,
      allIngredients
    );

    const ingredientsToShow = ingredientsInfo.slice(0, maxIngredients);
    const remains =
      ingredientsInfo.length > maxIngredients
        ? ingredientsInfo.length - maxIngredients
        : 0;

    const date = formatDate(order.createdAt);

    return {
      ...order,
      ingredientsInfo,
      ingredientsToShow,
      remains,
      total,
      date
    };
  }, [order, allIngredients]);

  if (!orderInfo) return null;

  return (
    <OrderCardUI
      orderInfo={orderInfo}
      maxIngredients={maxIngredients}
      locationState={{ background: location }}
    />
  );
});
