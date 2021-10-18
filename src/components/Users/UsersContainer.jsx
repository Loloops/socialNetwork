import React from "react"
import { connect } from "react-redux"
import { followAC, setCurrentPageAC, setIsFetchingAC, setTotalUsersCountAC, setUsersAC, unFollowAC } from "../../redux/usersReducer"
import * as axios from 'axios'
import Users from "./Users"
import Preloader from "../common/preloader/preloader"



class UsersContainer extends React.Component {

  componentDidMount(){
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      })
  }
  
  onPageChanged = (p) => { 
    this.props.setCurrentPage(p)
    this.props.toggleIsFetching(true) 
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.toggleIsFetching(false)
      })
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
        unfollow={this.props.unfollow}
        follow={this.props.follow}

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
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId)) //Этот код прописывается автоматом(*)
//     },
//     unfollow: (userId) => {
//       dispatch(unFollowAC(userId))
//     },
//     setUsers: (userId) => {
//       dispatch(setUsersAC(userId))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(setIsFetchingAC(isFetching))
//     },
//   }
// }





export default connect(mapStateToProps,  {
  follow: followAC, //(*)
  unfollow: unFollowAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalUsersCount: setTotalUsersCountAC,
  toggleIsFetching: setIsFetchingAC,
})(UsersContainer)