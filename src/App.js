import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Navbar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Settings/Setting';








const App = (props) => {

  // Data
  
  let profileComponent = () =>  <Profile postsData={props.postsData}/>
  let dialogsComponent = () => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />


// JSX
  return (
    <BrowserRouter>
    <div className='app-wrapper'>

      <Header />

      <Sidebar />

      <div className='app-wrapper-content'>
         <Route path='/Profile' render={ profileComponent } />
         <Route path='/Dialogs' render={ dialogsComponent } />
         <Route path='/News' render={News} />
         <Route path='/Music' render={Music} />
         <Route path='/Settings' render={Setting} />
     </div>


    </div>
    </BrowserRouter>
  );
}




export default App;
