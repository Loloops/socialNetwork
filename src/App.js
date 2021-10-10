import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Navbar/Sidebar';
import Profile from './components/Profile/Profile';








const App = () => {
  return (
    <div className='app-wrapper'>

     <Header />

     <Sidebar />

     <Profile />

     
    </div>
  );
}




export default App;
