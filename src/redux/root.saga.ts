import { fork } from 'redux-saga/effects';
import coffeeFlow from './coffee/coffee.sagas';

export default function* rootSaga() {
  yield fork(coffeeFlow);
}
