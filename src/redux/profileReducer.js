import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST',
      SET_USER_PROFILE = 'SET-USER-PROFILE',
      SET_STATUS = 'SET_STATUS'

let initialState = 
{
  postsData:
  [
    {id: 1, message: 'Hi, how are you', likescount: 5},
    {id: 2, message: 'Its my first post', likescount: 10},
  ],
  newPostText: '',
  profile: null,
  status: ''
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
        const newPost = {
          id: 3,
          message: action.textAreaValuePost,
          likescount: 0
        }
        return {
          ...state,
          textAreaValuePost: '',
          postsData: [...state.postsData, newPost]
        }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state
  }

  
}

export const addPostActionCreator = (textAreaValuePost) => {
  return {
    type: ADD_POST,
    textAreaValuePost
  }
}

export const setUserProfileAC = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
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
export const getStatus = (id) => {
  return (dispatch) => {
    profileAPI.getStatus(id).then(data => {
      dispatch(setStatus(data.data))
    })
  }
}
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
      if(data.data.resultCode === 0){
        dispatch(setStatus(status))
      }
      
    })
  }
}



export default profileReducer