// reducers/index.js
import { combineReducers } from 'redux';
import userNameReducer from './userNameReducer';

const rootReducer = combineReducers({
  userName: userNameReducer,
  // Add other reducers as needed
});

export default rootReducer;
