import React from 'react'
import Header from './Header'
import * as axios from 'axios'
import { connect } from 'react-redux';
import {setAuthUserData} from '../../redux/authReducer'
import { headerAPI } from '../../api/api';


class HeaderContainer extends React.Component{

  componentDidMount(){
    headerAPI.getAuth()
    .then(data => {
      if(data.resultCode === 0){
        let {id, login ,email} = data.data
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