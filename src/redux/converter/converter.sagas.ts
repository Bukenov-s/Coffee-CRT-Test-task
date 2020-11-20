import { getType } from '@reduxjs/toolkit';
import { takeLatest, put, delay, call } from 'redux-saga/effects';
import { calculateX } from '~/solution';
import {
  convertReminderModulosPairs,
  reminderModulosPairsConverted,
} from './converter.actions';

function* calculateOrderPriceSaga({
  payload: { data },
}: ReturnType<typeof convertReminderModulosPairs>) {
  // Mocking backend request
  yield delay(1000);

  const result_number: ReturnType<typeof calculateX> = yield call(
    calculateX,
    data,
  );

  yield put(reminderModulosPairsConverted(result_number));
}

export default function* converterFlow() {
  yield takeLatest(
    getType(convertReminderModulosPairs),
    calculateOrderPriceSaga,
  );
}
