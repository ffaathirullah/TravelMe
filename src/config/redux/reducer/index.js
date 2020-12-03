import authReducer from './authReducer';
import guideStat from './guideStat';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  authReducer,
  guideStat,
});

export default rootReducer;
