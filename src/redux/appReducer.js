import { loginThunk } from "./authReducer"

const SET_INIT = 'app/SET_INIT'


let initialState = {
  initialized: false,
}

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INIT:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

export const setInitializedSucces = () => ({type: SET_INIT})


export const initializeApp = () => (dispatch) =>{
    let promise = dispatch(loginThunk())
    Promise.all([promise])
      .then(() => {
          dispatch(setInitializedSucces())
    }) 
}




export default AppReducer