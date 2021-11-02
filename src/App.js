import './App.css';
import Sidebar from './components/Navbar/Sidebar';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Settings/Setting';
import FriendsContent from './components/Friends/FriendsContent';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/preloader/preloader';
import { compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));





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
           <Switch>
            <Redirect exact from='/' to='/profile' />
            
            <Route path='/profile/:userId?' render={ () => {
              return <Suspense fallback={<Preloader />}>
                        <ProfileContainer/>
                      </Suspense>
            }  } />
            
            <Route path='/dialogs' render={ () => {
              return <Suspense fallback={<Preloader />}>
                      <DialogsContainer />
                    </Suspense>

            }  } />
            <Route path='/news' render={ News } />
            <Route path='/music' render={ Music } />
            <Route path='/settings' render={ Setting } />
            <Route path='/users' render={ () => {
              return <Suspense fallback={<Preloader />}>
                        <UsersContainer />
                      </Suspense>
            }  } />
            <Route path='/friends' render={ FriendsContent } />
            <Route path='/login' render={ () => <Login /> } />

            <Route path='*' render={() => <div> 404 NOT FOUND </div>} />
           </Switch>
       </div>
  
  
      </div>
      
    )
  }
  
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App)

const SocialNetworkApp = (props) => {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
  )
}
export default SocialNetworkApp

