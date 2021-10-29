import { usersAPI } from "../api/api"
import { updateObjectInArray } from "../components/common/objects-helper/object-helper"

const FOLLOW = 'users/FOLLOW',
      UNFOLLOW = 'users/UNFOLLOW',
      SET_USERS = 'users/SET-USERS',
      SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE',
      SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT',
      TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING',
      TOGGLE_FOLLOWING_PROGRESS = 'users/TOGGLE_FOLLOWING_PROGRESS'

let initialState = 
{
  users:
  [
    
  ],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],

}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      }
    case TOGGLE_IS_FETCHING:
      return{
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching 
        ? [...state.followingInProgress, action.userId] 
        : state.followingInProgress.filter(id => id != action.userId)
      }
    default:
      return state
  }

  
}

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}
export const unFollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}
export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users
  }
}
export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE, 
    currentPage
  }
}
export const setTotalUsersCountAC = (count) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count
  }
}
export const setIsFetchingAC = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}
export const followingInProgressAC = (isFetching, userId) => {
  return {
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetching,
    userId
  }
}




//THUNK
//------------------------------------------------------------------

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
  
  dispatch(setCurrentPageAC(currentPage))
  dispatch(setIsFetchingAC(true))
    
  let data = await usersAPI.getUsers(currentPage, pageSize)
      dispatch(setIsFetchingAC(false))
      dispatch(setUsersAC(data.items))
      dispatch(setTotalUsersCountAC(data.totalCount))

}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(followingInProgressAC(true, id))
  let data = await apiMethod(id)
    if (data.resultCode === 0){
      dispatch(actionCreator(id))
    }
    dispatch(followingInProgressAC(false, id)) 
}

export const followThunk = (id) => async (dispatch) => {
  let apiMethod = usersAPI.followUser.bind(usersAPI)
  let actionCreator = followAC

  followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
}

export const unfollowThunk = (id) => async (dispatch) => {
    let apiMethod = usersAPI.unFollowUser.bind(usersAPI)
    let actionCreator = unFollowAC

    followUnfollowFlow(dispatch, id, apiMethod, actionCreator) 
}

export default usersReducer