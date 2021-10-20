import { usersAPI } from "../api/api"

const FOLLOW = 'FOLLOW',
      UNFOLLOW = 'UNFOLLOW',
      SET_USERS = 'SET-USERS',
      SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
      SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT',
      TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING',
      TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

let initialState = 
{
  users:
  [
    
  ],
  pageSize: 5,
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
        users: state.users.map(u => {
          if (u.id === action.userId){
            return {...u, followed: true}
          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId){
            return {...u, followed: false}
          }
          return u
        })
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

export const getUsersThunkCreator = (currentPage, pageSize) => {
  
  return (dispatch) => {
  dispatch(setCurrentPageAC(currentPage))
  dispatch(setIsFetchingAC(true))
    
  usersAPI.getUsers(currentPage, pageSize)
    .then(data => {
      dispatch(setIsFetchingAC(false))
      dispatch(setUsersAC(data.items))
      dispatch(setTotalUsersCountAC(data.totalCount))
    })
  }
}

export const followThunk = (id) => {
  
  return (dispatch) => {
    dispatch(followingInProgressAC(true, id))
    usersAPI.followUser(id).then(data => {
      if (data.resultCode === 0){
        dispatch(followAC(id))
      }
      dispatch(followingInProgressAC(false, id)) 
     })
  }
}

export const unfollowThunk = (id) => {
  
  return (dispatch) => {
    dispatch(followingInProgressAC(true, id))
    usersAPI.unFollowUser(id).then(data => {
      if (data.resultCode === 0){
        dispatch(unFollowAC(id))
      }
      dispatch(followingInProgressAC(false, id)) 
     })
  }
}




export default usersReducer