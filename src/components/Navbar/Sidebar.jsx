import { NavLink } from 'react-router-dom'
import FriendsContainer from '../Friends/FriendsContainer'
import classes from './Sidebar.module.css'

const Sidebar = (props) => {



  return (
    <nav className= {classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink> 
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink> 
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.active}>News</NavLink> 
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.active}>Music</NavLink> 
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink> 
      </div>

      <FriendsContainer/> 
      

    </nav>
  )
}
export default Sidebar

