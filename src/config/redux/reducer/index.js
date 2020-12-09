import authReducer from './authReducer';
import guideStat from './guideStat';
import gpsState from './gpsReducer';
import userInfo from './userInfoReducer';
import workPlace from './workPlace';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  authReducer,
  guideStat,
  userInfo,
  workPlace,
  // gpsState,
});

export default rootReducer;
