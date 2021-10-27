import './App.css';
import Sidebar from './components/Navbar/Sidebar';
import { Route } from 'react-router';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Settings/Setting';
import FriendsContent from './components/Friends/FriendsContent';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/preloader/preloader';










class App extends React.Component{

  componentDidMount(){
    this.props.initializeApp()

  }


  render(){
    if (!this.props.initialized){
      return <Preloader />
    }
    

    return (
    
      <div className='app-wrapper'>
  
        <HeaderContainer />
        
        <Sidebar/>
  
        <div className='app-wrapper-content'>
           <Route path='/profile/:userId?' render={ () => <ProfileContainer/> } />
           <Route path='/dialogs' render={ () => <DialogsContainer /> } />
           <Route path='/news' render={ News } />
           <Route path='/music' render={ Music } />
           <Route path='/settings' render={ Setting } />
           <Route path='/users' render={ () => <UsersContainer /> } />
           <Route path='/friends' render={ FriendsContent } />
           <Route path='/login' render={ () => <Login /> } />
       </div>
  
  
      </div>
      
    )
  }
  
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default connect(mapStateToProps, {initializeApp})(App)
