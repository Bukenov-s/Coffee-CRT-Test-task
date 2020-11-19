import { createAction } from '@reduxjs/toolkit';
import { CoffeeOrder } from './coffee.types';

export const calculateOrderPrice = createAction(
  '[coffee ->] Calculate order price',
  (order: CoffeeOrder) => ({
    payload: {
      order,
    },
  }),
);

export const orderPriceCalculated = createAction(
  '[coffee <-] Order price calculated',
  (price: number) => ({
    payload: {
      price,
    },
  }),
);

export const orderDataCleared = createAction('[coffee <-] Order data cleared');

export const orderComplete = createAction('[coffee <-] Order complete');
