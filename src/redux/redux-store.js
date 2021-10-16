import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import sideBarReducer from './sidebarReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebarpages: sideBarReducer
})

let store = createStore(reducers)

  

export default store