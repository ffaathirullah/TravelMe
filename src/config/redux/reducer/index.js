import authReducer from './authReducer';
import guideStat from './guideStat';
import gpsState from './gpsReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  authReducer,
  guideStat,
  gpsState,
});

export default rootReducer;
