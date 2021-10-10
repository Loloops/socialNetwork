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








const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>

      <Header />

      <Sidebar />

      <div className='app-wrapper-content'>
         <Route path='/Profile' component={Profile} />
         <Route path='/Dialogs' component={Dialogs} />
         <Route path='/News' component={News} />
         <Route path='/Music' component={Music} />
         <Route path='/Settings' component={Setting} />
     </div>


    </div>
    </BrowserRouter>
  );
}




export default App;
