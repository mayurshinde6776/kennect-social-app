// reducers/userNameReducer.js
import { SET_USER_NAME } from '../actions/userNameActions';

const initialState = {
  Name: '',
};

const userNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        Name: action.payload,
      };
    default:
      return state;
  }
};

export default userNameReducer;
