import authReducer from './authReducer';
import guideStat from './guideStat';
import gpsState from './gpsReducer';
import userInfo from './userInfoReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  authReducer,
  guideStat,
  userInfo,
  // gpsState,
});

export default rootReducer;
