import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <header className={classes.header}>
        <div className={classes.Logo}>
          <img src='https://e7.pngegg.com/pngimages/65/926/png-clipart-inkscape-graphics-editor-graphics-software-corel-draw-logo-silhouette-black-thumbnail.png' />
       </div>
       <div className={classes.loginblock}>
         {props.isAuth ? props.login :<NavLink to={'/login'}>Login</NavLink>}
         
       </div>
     </header>
  )
}
export default Header