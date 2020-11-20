import { fork } from 'redux-saga/effects';
import coffeeFlow from './coffee/coffee.sagas';
import converterFlow from './converter/converter.sagas';

export default function* rootSaga() {
  yield fork(coffeeFlow);
  yield fork(converterFlow);
}
