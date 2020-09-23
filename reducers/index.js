import ObjReducer from './obj';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
  obj: ObjReducer,
});
export default rootReducer;
