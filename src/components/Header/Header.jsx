import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import logo from '../../assets/pngegg.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authReducer';

const Header = () => {
  const { isAuth, login } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <header className={classes.header}>
      <div className={classes.Logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={classes.loginblock}>
        {isAuth ? (
          <div>
            {login} <button onClick={() => logOut()}>Logout</button>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
