import { NavLink } from 'react-router-dom'
import classes from '../Users.module.css'
import userPhoto from '../../../assets/Programmyi-dlya-sozdaniya-avatarok.png'


const User = (props) => {
  return (
    <div key={props.u.id}  className={classes.UsersWrapper}>
          <div className={`${classes.userItem} ${classes.wrapperImg}`}>
            <div>
              <NavLink to={'/profile/' + props.u.id}> 
                <img 
                src={props.u.photos.small != null ? props.u.photos.small : userPhoto} 
                alt="Foto" 
                className={classes.userItemPhoto} />
              </NavLink>
            </div>
            { 
              props.u.followed 
                ? 
                <button disabled={props.followingInProgress.some(id => id === props.u.id)}
                  onClick={() => {
                    props.unfollowThunk(props.u.id)
                  }
                  } 
                  className={`${classes.userItemBtn} ${classes.userItemBtnUnf}`}>
                    Unfollow
                </button> 
                : 
                <button disabled={props.followingInProgress.some(id => id === props.u.id)}  
                  onClick={() => {
                    props.followThunk(props.u.id)
                }} 
                  className={classes.userItemBtn}>
                    Follow
                </button> 
            }
            
          </div>

          <div className={`${classes.userItem} ${classes.wrapperInfo}`}>

            <div className={classes.userItemPersons}>
              <h3 className={classes.userItemPersonsName}>Name: <span>{props.u.name}</span> </h3>
              <p className={classes.userItemPersonsStatus}>Status: <span className={classes.dsad}>{props.u.status}</span> </p>
            </div>

            <div className={classes.userItemLievs}>
              <h3 className={classes.userItemLievsCountry}>Country: <span>{'NULL'}</span> </h3>
              <p className={classes.userItemLievsCity}>City: <span>{'NULL'}</span> </p>
            </div> 

          </div>  

       </div>
  )
}
export default User