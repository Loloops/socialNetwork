import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css';

const Sidebar = () => {
  const { isAuth } = useSelector(({ auth }) => auth);

  return (
    <nav className={classes.nav}>
      {!isAuth ? (
        <div></div>
      ) : (
        <>
          <div className={`${classes.item} ${classes.active}`}>
            <NavLink to="/profile" activeClassName={classes.active}>
              Profile
            </NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.active}>
              Messages
            </NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/settings" activeClassName={classes.active}>
              Settings
            </NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/users" activeClassName={classes.active}>
              Users
            </NavLink>
          </div>
        </>
      )}
    </nav>
  );
};
export default Sidebar;
