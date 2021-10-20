import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import sideBarReducer from './sidebarReducer'
import usersReducer from "./usersReducer";
import AuthReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebarpages: sideBarReducer,
  usersPage: usersReducer,
  auth: AuthReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store