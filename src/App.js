import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Navbar/Sidebar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Settings/Setting';
import FriendsContent from './components/Friends/FriendsContent';
import DialogsContainer from './components/Dialogs/DialogsContainer';









const App = () => {

  // Data
  let profileComponent = () => 
              <Profile/>

  let dialogsComponent = () => 
              <DialogsContainer />


// JSX
  return (
    
    <div className='app-wrapper'>

      <Header />
      
      <Sidebar/>

      <div className='app-wrapper-content'>
         <Route path='/Profile' render={ profileComponent } />
         <Route path='/Dialogs' render={ dialogsComponent } />
         <Route path='/News' render={News} />
         <Route path='/Music' render={Music} />
         <Route path='/Settings' render={Setting} />
         <Route path='/friends' render={FriendsContent} />
     </div>


    </div>
    
  );
}




export default App;
