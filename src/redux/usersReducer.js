const FOLLOW = 'FOLLOW',
      UNFOLLOW = 'UNFOLLOW',
      SET_USERS = 'SET-USERS',
      SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
      SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT',
      TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = 
{
  users:
  [
    
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,

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

export default usersReducer