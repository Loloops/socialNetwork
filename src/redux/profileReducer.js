import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST',
      UPD_POST = 'UPDATE-NEW-POST-TEXT',
      SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = 
{
  postsData:
  [
    {id: 1, message: 'Hi, how are you', likescount: 5},
    {id: 2, message: 'Its my first post', likescount: 10},
  ],
  newPostText: '',
  profile: null
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
        const newPost = {
          id: 3,
          message: state.newPostText,
          likescount: 0
        }
        return {
          ...state,
          newPostText: '',
          postsData: [...state.postsData, newPost]
        }
    case UPD_POST: 
      return {
        ...state,
        newPostText: action.newText
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
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
export const setUserProfileAC = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

//THUNK
//------------------------------------------------------------------

export const userProfileThunk = (id) => {
  return (dispatch) => {
    profileAPI.getUsers(id).then(data => {
      dispatch(setUserProfileAC(data))
    })
  }
}



export default profileReducer