import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import mapReducer from './mapReducer';

const rootReducer = combineReducers({
  weatherReducer: weatherReducer,
  mapReducer: mapReducer
});

export default rootReducer;
