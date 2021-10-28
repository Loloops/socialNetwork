import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import sideBarReducer from './sidebarReducer'
import usersReducer from "./usersReducer";
import AuthReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import AppReducer from "./appReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebarpages: sideBarReducer,
  usersPage: usersReducer,
  auth: AuthReducer,
  form: formReducer,
  app: AppReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store