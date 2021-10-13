const ADD_POST = 'ADD-POST',
      UPD_POST = 'UPDATE-NEW-POST-TEXT',
      ADD_MESSAGE = 'ADD-MESSAGE',
      UPD_MESSAGE = 'UPDATE-MESSAGE-TEXTAREA'

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
    if (action.type === ADD_POST){
      const newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likescount: 0
      }
      this._state.profilePage.postsData.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)

    } else if (action.type === UPD_POST){

      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)

    } else if (action.type === ADD_MESSAGE){
      const newMessgae = {
        id: 5,
        message: this._state.messagesPage.textAreaStateValue,
        flag: true,
      }
      this._state.messagesPage.messagesData.push(newMessgae)
      this._callSubscriber(this._state)
      this._state.messagesPage.textAreaStateValue= ''

    } else if (action.type === UPD_MESSAGE){
      this._state.messagesPage.textAreaStateValue = action.newMessage
      this._callSubscriber(this._state)
    }
  },

}


//post
export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const updateNewPostActionCreater = (text) => {
  return {
    type: UPD_POST,
    newText: text
  }
}

//message
export const sendMessageBtnActionCreater = () => {
  return {
    type: ADD_MESSAGE
  }
}
export const updateTextAreaValueActionCreater = (text) => {
  return {
    type: UPD_MESSAGE,
    newMessage: text
  }
}

export default store









