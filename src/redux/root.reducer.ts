import { combineReducers } from 'redux';
import { AppState } from '~/types';
import coffeeReducers from './coffee/coffee.reducers';
import converterReducers from './converter/converter.reducers';

const rootReducer = combineReducers<AppState>({
  coffee: coffeeReducers,
  converter: converterReducers,
});

export default rootReducer;
