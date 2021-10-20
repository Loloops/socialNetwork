import React from "react"
import { connect } from "react-redux"
import { followAC, followingInProgressAC, getUsersThunkCreator, setUsersAC, unFollowAC } from "../../redux/usersReducer"
import Users from "./Users"
import Preloader from "../common/preloader/preloader"
import { followThunk, unfollowThunk } from '../../redux/usersReducer'




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






const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}


export default connect(mapStateToProps,  {
  getUsersThunkCreator,
  followThunk,
  unfollowThunk
})(UsersContainer)