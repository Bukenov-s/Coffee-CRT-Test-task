import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CoffeeForm from '~/components/coffee/CoffeeForm';
import Modal from '~/components/ui/Modal';
import * as coffeeActions from '~/redux/coffee/coffee.actions';
import {
  selectCoffeeIsPending,
  selectCoffeeOrderComplete,
  selectCoffeePrice,
} from '~/redux/coffee/coffee.selectors';

export const CoffeePage: FC = () => {
  const dispatch = useDispatch();
  const order_complete = useSelector(selectCoffeeOrderComplete);
  const price = useSelector(selectCoffeePrice);
  const is_coffee_pending = useSelector(selectCoffeeIsPending);

  const calculateOrderPrice = useCallback(
    (order) => {
      dispatch(coffeeActions.calculateOrderPrice(order));
    },
    [dispatch],
  );

  const orderDataCleared = useCallback(() => {
    dispatch(coffeeActions.orderDataCleared());
  }, [dispatch]);

  return (
    <section className="flex-center">
      <CoffeeForm
        calculateOrderPrice={calculateOrderPrice}
        is_coffee_pending={is_coffee_pending}
      />
      {order_complete && (
        <Modal onClose={orderDataCleared}>Your order price is ${price}</Modal>
      )}
    </section>
  );
};
