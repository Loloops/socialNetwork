const ADD_POST = 'ADD-POST',
      UPD_POST = 'UPDATE-NEW-POST-TEXT';

let initialState = 
{
  postsData:
  [
    {id: 1, message: 'Hi, how are you', likescount: 5},
    {id: 2, message: 'Its my first post', likescount: 10},
  ],
  newPostText: ''
}

export const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_POST:
        const newPost = {
          id: 3,
          message: state.newPostText,
          likescount: 0
        }
        state.postsData.push(newPost)
        state.newPostText = ''
      return state
    case UPD_POST:
        state.newPostText = action.newText
      return state
    default:
      return state
  }

  
}

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

export default profileReducer