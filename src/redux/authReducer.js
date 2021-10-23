import { stopSubmit } from "redux-form"
import { headerAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
      
  
    default:
      return state
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}})


export const loginThunk = () => {
  
  return (dispatch) => {
    headerAPI.getAuth()
    .then(data => {
      if(data.resultCode === 0){
        let {id, login ,email} = data.data
        dispatch(setAuthUserData(id, email, login, true))
      }
    })
  }
}

export const login = (email, password, rememberMe) => (dispatch) => {
  headerAPI.login(email, password, rememberMe)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(loginThunk())
        } else {
          let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
          let action = stopSubmit('login', {_error: message})
          
          dispatch(action)
        }
      })
}

export const logout = () => (dispatch) => {
  headerAPI.logout()
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false))
        }
      })
}


export default AuthReducer