import { stopSubmit } from 'redux-form';
import { headerAPI, securityAPI } from '../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA',
  GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  userId: null,
  login: '',
  email: '',
  isAuth: false,
  captchaURL: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, email, login, isAuth },
});

export const getCaptchaURLSuccess = (captchaURL) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaURL },
});

export const loginThunk = () => async (dispatch) => {
  let data = await headerAPI.getAuth();
  if (data.resultCode === 0) {
    let { id, login, email } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let res = await headerAPI.login(email, password, rememberMe, captcha);
  if (res.data.resultCode === 0) {
    dispatch(loginThunk());
  } else {
    if (res.data.resultCode === 10) {
      dispatch(getCaptchaURL());
    }
    let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error';
    let action = stopSubmit('login', { _error: message });

    dispatch(action);
  }
};

export const getCaptchaURL = () => async (dispatch) => {
  let res = await securityAPI.getCaptchaURL();
  const captchaURL = res.data.url;
  dispatch(getCaptchaURLSuccess(captchaURL));
};

export const logout = () => async (dispatch) => {
  let res = await headerAPI.logout();
  if (res.data.resultCode === 0) {
    dispatch(setAuthUserData(null, '', '', false));
  }
};

export default AuthReducer;
