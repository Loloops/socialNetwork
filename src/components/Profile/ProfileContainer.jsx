
import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setUserProfileAC } from '../../redux/profileReducer'
import { withRouter } from 'react-router'
import { profileAPI } from '../../api/api'


class ProfileContainer extends React.Component{

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId){
      userId = 20262
    }
    profileAPI.getUsers(userId).then(data => {
        this.props.setUserProfile(data)
      })
  }


  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, 
  {
    setUserProfile: setUserProfileAC
  })(WithUrlDataContainerComponent)