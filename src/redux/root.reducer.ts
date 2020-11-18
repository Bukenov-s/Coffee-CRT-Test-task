import { combineReducers } from 'redux';
import coffeeReducer from './coffee/coffee.reducers';

const rootReducer = combineReducers({
  coffee: coffeeReducer,
});

export default rootReducer;
