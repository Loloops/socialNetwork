import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sidebarReducer";

let store = {
  _state: 
  {
    profilePage : 
    {
      postsData:
      [
        {id: 1, message: 'Hi, how are you', likescount: 5},
        {id: 2, message: 'Its my first post', likescount: 10},
      ],
      newPostText: ''
    },
    messagesPage: 
    {
      messagesData: 
      [
        {id: 1, message: 'Hi', flag: true},
        {id: 2, message: 'How are you?', flag: true},
        {id: 3, message: 'Hello', flag: false},
        {id: 4, message: 'Fuck you', flag: false},

      ],
      textAreaStateValue: '',
      dialogsData: 
      [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Kostya'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Lena'},
        {id: 5, name: 'Alyona'},
      ],
    },
    sidebar:
    {
      friendsData:
      [
        {id:1, img: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png', name: 'Ivan'},
        {id:2, img: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png', name: 'Andrew'},
        {id:3, img: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png', name: 'Alex'},
      ],
    },

  },
  _callSubscriber() {
    
  },

  getState() {
    return this._state;
  },
  subscribe(observer){
    this._callSubscriber = observer
  },
  

  dispatch(action){//action - object { type: 'ADD-POST'}
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._state.sidebar = sideBarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state)
  },

}


//post


//message


export default store









