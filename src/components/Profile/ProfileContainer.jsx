
import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { userProfileThunk } from '../../redux/profileReducer'
import { Redirect, withRouter } from 'react-router'



class ProfileContainer extends React.Component{

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId){
      userId = 20262
    }
    this.props.userProfileThunk(userId)
  }


  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'} />
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, 
  {
    userProfileThunk
  })(WithUrlDataContainerComponent)