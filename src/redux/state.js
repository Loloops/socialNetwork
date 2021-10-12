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

  getState() {
    return this._state;
  },

  _callSubscriber() {
    
  },


  addPost() {
    const newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likescount: 0
    }
  
    this._state.profilePage.postsData.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },

  updateNewPostText(newText){
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },

  subscribe(observer){
    this._callSubscriber = observer
  },

  addMessage(){
    const newMessgae = {
      id: 5,
      message: this._state.messagesPage.textAreaStateValue,
      flag: true,
    }
  
    this._state.messagesPage.messagesData.push(newMessgae)
    this._callSubscriber(this._state)
    this.updateMessageTextarea('')
  },

  updateMessageTextarea(newMessage){
    this._state.messagesPage.textAreaStateValue = newMessage
    this._callSubscriber(this._state)
  }

        

}



export default store









