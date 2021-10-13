const ADD_POST = 'ADD-POST',
      UPD_POST = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state, action) => {
  
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