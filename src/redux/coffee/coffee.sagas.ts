import { getType } from '@reduxjs/toolkit';
import { takeLatest, put, delay } from 'redux-saga/effects';
import {
  calculateOrderPrice,
  orderComplete,
  orderPriceCalculated,
} from './coffee.actions';
import {
  BEAN_TYPES,
  CINNAMON_PRICE,
  ROAST_TYPES,
  SUGAR_PRICE,
  SYRUP_TYPES,
  TAKEOUT_PRICE,
} from './coffee.constants';

function* calculateOrderPriceSaga({
  payload: { order },
}: ReturnType<typeof calculateOrderPrice>) {
  console.log('saga is triggered');
  console.log(`here is the thing ${order}`);

  // Mocking backend request
  yield delay(1000);

  const price = Object.keys(order).reduce((acc, currentKey) => {
    if (currentKey === 'sugar_included' && order['sugar_included']) {
      acc = acc + SUGAR_PRICE;
    }

    if (currentKey === 'takeout_included' && order['takeout_included']) {
      acc = acc + TAKEOUT_PRICE;
    }

    if (currentKey === 'cinnamon_included' && order['cinnamon_included']) {
      acc = acc + CINNAMON_PRICE;
    }

    if (currentKey === 'syrup') {
      const syrup = SYRUP_TYPES.find(({ id }) => id === order.syrup);

      if (syrup) {
        acc = acc + syrup.price;
      }
    }

    if (currentKey === 'bean_type') {
      const bean_type = BEAN_TYPES.find(({ id }) => id === order.bean_type);

      if (bean_type) {
        acc = acc + bean_type.price;
      }
    }

    if (currentKey === 'roast_type') {
      const roast_type = ROAST_TYPES.find(({ id }) => id === order.roast_type);

      if (roast_type) {
        acc = acc + roast_type.price;
      }
    }

    return acc;
  }, 0);

  yield put(orderPriceCalculated(price));
  yield put(orderComplete());
}

export default function* coffeeFlow() {
  yield takeLatest(getType(calculateOrderPrice), calculateOrderPriceSaga);
}
