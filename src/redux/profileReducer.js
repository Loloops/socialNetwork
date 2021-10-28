import { profileAPI } from "../api/api"

const ADD_POST = 'profile/ADD-POST',
      SET_USER_PROFILE = 'profile/SET-USER-PROFILE',
      SET_STATUS = 'profile/SET_STATUS',
      DELETE_POST = 'profile/DELETE_POST'

let initialState = 
{
  postsData:
  [
    {id: 1, message: 'Hi, how are you', likescount: 5},
    {id: 2, message: 'Its my first post', likescount: 10},
  ],
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
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter(p => p.id !== action.postId)
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
export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId
  }
}



//THUNK
//------------------------------------------------------------------

export const userProfileThunk = (id) => async (dispatch) =>{
   let data = await profileAPI.getUsers(id)
      dispatch(setUserProfileAC(data))
}

export const getStatus = (id) => async (dispatch) =>{
    let data = await profileAPI.getStatus(id)
      dispatch(setStatus(data.data)) //приходит две data
}

export const updateStatus = (status) => async (dispatch) => {
   let data = await profileAPI.updateStatus(status)
      if(data.data.resultCode === 0){//приходит две data
        dispatch(setStatus(status))
      }
}



export default profileReducer