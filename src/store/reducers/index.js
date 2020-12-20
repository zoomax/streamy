import { combineReducers } from "redux";
import { SIGN_IN, SIGN_OUT } from "../actions/types";
import { reducer as formReducer } from "redux-form";
const initialState = {
  isSignedIn: false,
  currentUser: null,
};
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_OUT:
      return { ...state, isSignedIn: false, currentUser: null };
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        currentUser: payload.currentUser.get().getId(),
      };
    default:
      return state;
  }
};

export default combineReducers({ isAuth: authReducer,  form: formReducer });
