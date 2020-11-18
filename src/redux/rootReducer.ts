import { combineReducers } from 'redux';

import thingsReducer from './things/things.reducers';
// import moduleNameReducer from './module_folder_name/reducers';

const rootReducer = combineReducers({
  things: thingsReducer,
  // moduleName: moduleNameReducer,
});

export default rootReducer;
