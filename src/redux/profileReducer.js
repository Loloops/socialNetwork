import { profileAPI } from "../api/api"

const ADD_POST = 'profile/ADD-POST',
      SET_USER_PROFILE = 'profile/SET-USER-PROFILE',
      SET_STATUS = 'profile/SET_STATUS',
      DELETE_POST = 'profile/DELETE_POST',
      SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

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
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
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
export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos
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
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file)

  if(response.data.resultCode === 0){//приходит две data
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}



export default profileReducer