import React from 'react'
import Header from './Header'
import * as axios from 'axios'
import { connect } from 'react-redux';
import {setAuthUserData} from '../../redux/authReducer'


class HeaderContainer extends React.Component{

  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
    .then(res => {
      if(res.data.resultCode === 0){
        let {id, login ,email} = res.data.data
        this.props.setAuthUserData(id, email, login)
      }
    })
  }



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

export default connect(mapStateTotProps, {setAuthUserData})(HeaderContainer)