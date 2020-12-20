import { SIGN_IN, SIGN_OUT } from "./types";

const trySignIn = (auth) => {
  // return async (dispatch)=>{
  //    const payload  = null;
  //    return dispatch({
  //        type  : SIGN_IN ,
  //        payload
  //    } )
  // }
  return {
    type: SIGN_IN,
    payload: auth,
  };
};
const trySignOut = () => {
  //     return async (dispatch)=>{
  //    const payload  = null;
  //    return dispatch({
  //        type  : SIGN_OUT ,
  //        payload
  //    } )
  // }
  return {
    type: SIGN_OUT,
  };
};

const authChange = () => {
  return null;
};

export { trySignIn, trySignOut, authChange };
