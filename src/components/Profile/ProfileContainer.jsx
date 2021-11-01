
import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getStatus, savePhoto, updateStatus, userProfileThunk } from '../../redux/profileReducer'
import { withRouter } from 'react-router'
import { withAuthRedirect } from '../hoc/AuthRedirect'
import { compose } from 'redux'



class ProfileContainer extends React.Component{

  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId){
      userId = this.props.AuthUser
    }
    this.props.userProfileThunk(userId)

    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps){
    if(this.props.match.params.userId !== prevProps.match.params.userId){
      this.refreshProfile()
    }
    
  }


  render() {
    
    return (
      <Profile
      isOwner = {!this.props.match.params.userId}
      {...this.props} 
      profile={this.props.profile}
      savePhoto = {this.props.savePhoto}
      />
    )
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  AuthUser: state.auth.userId,
  isAuth: state.auth.isAuth
})


export default compose(
  connect(mapStateToProps, 
    {
      userProfileThunk,
      getStatus,
      updateStatus,
      savePhoto
    }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)