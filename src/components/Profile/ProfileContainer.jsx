
import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getStatus, updateStatus, userProfileThunk } from '../../redux/profileReducer'
import { Redirect, withRouter } from 'react-router'
import { withAuthRedirect } from '../hoc/AuthRedirect'
import { compose } from 'redux'



class ProfileContainer extends React.Component{

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId){
      userId = 20262
    }
    this.props.userProfileThunk(userId)

    this.props.getStatus(userId)
  }


  render() {
    
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})



// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, 
//   {
//     userProfileThunk
//   })(WithUrlDataContainerComponent)
export default compose(
  connect(mapStateToProps, 
    {
      userProfileThunk,
      getStatus,
      updateStatus
    }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)