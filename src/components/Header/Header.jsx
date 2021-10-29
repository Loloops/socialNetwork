import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import logo from '../../assets/pngegg.png'

const Header = (props) => {
  return (
    <header className={classes.header}>
       <div className={classes.Logo}>
          <img src={ logo } />
       </div>
       <div className={classes.loginblock}>
         {props.isAuth 
         ? <div>{props.login} <button onClick={props.logout}>Logout</button> </div>
         :<NavLink to={'/login'}>Login</NavLink>}
         
       </div>
     </header>
  )
}
export default Header