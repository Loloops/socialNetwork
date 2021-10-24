import React from 'react'
import Header from './Header'
import { connect } from 'react-redux';
import {loginThunk, logout, setAuthUserData} from '../../redux/authReducer'



class HeaderContainer extends React.Component{

  


  render () {

    return (
      <Header {...this.props} />
    )
  }
}

const mapStateTotProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateTotProps, {setAuthUserData, logout})(HeaderContainer)