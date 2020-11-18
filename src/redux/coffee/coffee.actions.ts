import { createAction } from '@reduxjs/toolkit';

export const calculateOrderPrice = createAction(
  '[coffee ->] Calculate order price',
  (order) => ({
    payload: {
      order,
    },
  }),
);

export const orderPriceCalculated = createAction(
  '[coffee <-] Order price calculated',
  (price) => ({
    payload: {
      price,
    },
  }),
);

export const orderDataCleared = createAction('[coffee <-] Order data cleared');

export const orderComplete = createAction('[coffee <-] Order complete');
