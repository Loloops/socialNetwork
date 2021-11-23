import { NavLink } from 'react-router-dom';
import classes from '../Users.module.css';
import userPhoto from '../../../assets/Programmyi-dlya-sozdaniya-avatarok.png';
import { useDispatch } from 'react-redux';

const User = ({ u, followingInProgress, followThunk, unfollowThunk }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.UsersWrapper}>
      <div className={`${classes.userItem} ${classes.wrapperImg}`}>
        <div>
          <NavLink to={'/profile/' + u.id}>
            <img
              src={u.photos.small != null ? u.photos.small : userPhoto}
              alt="Foto"
              className={classes.userItemPhoto}
            />
          </NavLink>
        </div>
        {u.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === u.id)}
            onClick={() => {
              dispatch(unfollowThunk(u.id));
            }}
            className={`${classes.userItemBtn} ${classes.userItemBtnUnf}`}>
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === u.id)}
            onClick={() => {
              dispatch(followThunk(u.id));
            }}
            className={classes.userItemBtn}>
            Follow
          </button>
        )}
      </div>

      <div className={`${classes.userItem} ${classes.wrapperInfo}`}>
        <div className={classes.userItemPersons}>
          <h3 className={classes.userItemPersonsName}>
            Name: <span>{u.name}</span>
          </h3>
          <p className={classes.userItemPersonsStatus}>
            Status: <span className={classes.status}>{u.status || '< without status >'}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default User;
