import { createReducer } from '@reduxjs/toolkit';
import {
  calculateOrderPrice,
  orderComplete,
  orderDataCleared,
  orderPriceCalculated,
} from './coffee.actions';

const initial_state = {
  is_pending: false,
  price: 0,
  is_order_complete: false,
};

export default createReducer(initial_state, (builder) => {
  builder
    .addCase(calculateOrderPrice, (state) => {
      state.is_pending = true;
    })
    .addCase(orderPriceCalculated, (state, { payload }) => {
      state.price = payload.price;
      state.is_pending = false;
    })
    .addCase(orderDataCleared, (state) => {
      state.is_pending = false;
      state.price = 0;
      state.is_order_complete = false;
    })
    .addCase(orderComplete, (state) => {
      state.is_order_complete = false;
    })
    .addDefaultCase((state) => state);
});
