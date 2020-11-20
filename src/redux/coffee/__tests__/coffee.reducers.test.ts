import reducer from '../coffee.reducers';
import {
  calculateOrderPrice,
  orderPriceCalculated,
  orderComplete,
  orderDataCleared,
} from '../coffee.actions';
import { CoffeeState, CoffeeOrder } from '../coffee.types';

describe('coffee reducer', () => {
  it('should return initial state', () => {
    const initial_state = {} as CoffeeState;

    expect(reducer(initial_state, { type: 'SOME_UNKNOWN_TYPE' })).toEqual(
      initial_state,
    );
  });

  it('should switch is_pending to true', () => {
    const initial_state = {
      is_pending: false,
    } as CoffeeState;

    const result_state = {
      is_pending: true,
    };

    expect(
      reducer(initial_state, calculateOrderPrice({} as CoffeeOrder)),
    ).toEqual(result_state);
  });

  it('should switch is_pending to true', () => {
    const initial_state = {
      is_pending: false,
    } as CoffeeState;

    const result_state = {
      is_pending: true,
    };

    expect(
      reducer(initial_state, calculateOrderPrice({} as CoffeeOrder)),
    ).toEqual(result_state);
  });

  it('should switch is_pending to false, and assign price result', () => {
    const initial_state = {
      is_pending: true,
      price: 0,
    } as CoffeeState;

    const result_state = {
      is_pending: false,
      price: 42,
    };

    expect(reducer(initial_state, orderPriceCalculated(42))).toEqual(
      result_state,
    );
  });

  it('should clear state to its initial shape', () => {
    const initial_state = {
      is_pending: false,
      price: 42,
      is_order_complete: true,
    } as CoffeeState;

    const result_state = {
      is_pending: false,
      price: 0,
      is_order_complete: false,
    };

    expect(reducer(initial_state, orderDataCleared())).toEqual(result_state);
  });

  it('should set is_order_complete to true', () => {
    const initial_state = {
      is_order_complete: false,
    } as CoffeeState;

    const result_state = {
      is_order_complete: true,
    };

    expect(reducer(initial_state, orderComplete)).toEqual(result_state);
  });
});
