import { getType } from '@reduxjs/toolkit';
import { takeLatest, put } from 'redux-saga/effects';
import { calculateOrderPrice } from './coffee.actions';

function* calculateOrderPriceSaga({
  payload: { order },
}: ReturnType<typeof calculateOrderPrice>) {
  console.log('saga is triggered');
  console.log(`here is the thing ${order}`);
  yield put({ type: 'SOME_REACTION_TO_ACTION' });
}

export default function* coffeeFlow() {
  yield takeLatest(getType(calculateOrderPrice), calculateOrderPriceSaga);
}
