import React from "react"
import { connect } from "react-redux"
import { getUsersThunkCreator} from "../../redux/usersReducer"
import Users from "./Users"
import Preloader from "../common/preloader/preloader"
import { followThunk, unfollowThunk } from '../../redux/usersReducer'
import { withAuthRedirect } from "../hoc/AuthRedirect"
import { compose } from "redux"
import { getCurrentPageState, getFollowingInProgressState, getIsFetchingState, getPageSizeState, getTotalUsersCountState, getUsersState } from "../../redux/usersSelectors"




class UsersContainer extends React.Component {

  componentDidMount(){

    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

  }
  
  onPageChanged = (p) => { 

    this.props.getUsersThunkCreator(p, this.props.pageSize)

  }

  render() {
    
    return <>
    {this.props.isFetching ? <Preloader /> : 
    <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        followingInProgress={this.props.followingInProgress}
        followThunk={this.props.followThunk}
        unfollowThunk={this.props.unfollowThunk}
    />
  }
    </> 
      
    
  }
}






// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// }

const mapStateToProps = (state) => {
  return {
    users: getUsersState(state),
    pageSize: getPageSizeState(state),
    totalUsersCount: getTotalUsersCountState(state),
    currentPage: getCurrentPageState(state),
    isFetching: getIsFetchingState(state),
    followingInProgress: getFollowingInProgressState(state)
  }
}


export default compose(
  connect(mapStateToProps,  {//2
    getUsersThunkCreator,
    followThunk,
    unfollowThunk
  }),
  withAuthRedirect//1
)(UsersContainer)//1