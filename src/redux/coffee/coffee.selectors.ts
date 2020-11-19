import { AppState } from '~/types';
import { CoffeeState } from './coffee.types';

export const selectCoffeeIsPending = (
  state: AppState,
): CoffeeState['is_pending'] => state.coffee.is_pending;

export const selectCoffeePrice = (state: AppState): CoffeeState['price'] =>
  state.coffee.price;

export const selectCoffeeOrderComplete = (
  state: AppState,
): CoffeeState['is_order_complete'] => state.coffee.is_order_complete;
