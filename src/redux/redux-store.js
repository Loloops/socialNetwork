import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import sideBarReducer from './sidebarReducer'
import usersReducer from "./usersReducer";
import AuthReducer from "./authReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebarpages: sideBarReducer,
  usersPage: usersReducer,
  auth: AuthReducer,
})

let store = createStore(reducers)

window.store = store

export default store