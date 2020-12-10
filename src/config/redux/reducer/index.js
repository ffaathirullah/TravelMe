import authReducer from './authReducer';
import guideStat from './guideStat';
import gpsState from './gpsReducer';
import userInfo from './userInfoReducer';
import workPlace from './workPlace';
import areaDestReducer from './areaDestReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  authReducer,
  guideStat,
  userInfo,
  workPlace,
  areaDestReducer,
  // gpsState,
});

export default rootReducer;
