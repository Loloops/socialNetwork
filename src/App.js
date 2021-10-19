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










const App = () => {

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
     </div>


    </div>
    
  );
}




export default App;
