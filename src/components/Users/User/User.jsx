import classes from './User.module.css'

const User = (props) => {

  return (
    <div   className={classes.UsersWrapper}>
          <div className={`${classes.userItem} ${classes.wrapperImg}`}>
            <div>
              <img src={props.photoUrl} alt="Foto" className={classes.userItemPhoto} />
            </div>
            { 
              props.followed 
                ? 
                <button 
                  onClick={() => { props.unfollow(props.id) }} 
                  className={`${classes.userItemBtn} ${classes.userItemBtnUnf}`}>
                    Unfollow
                </button> 
                : 
                <button onClick={() => { props.follow(props.id) }} 
                  className={classes.userItemBtn}>
                    Follow
                </button> 
            }
            
          </div>

          <div className={`${classes.userItem} ${classes.wrapperInfo}`}>

            <div className={classes.userItemPersons}>
              <h3 className={classes.userItemPersonsName}>Name: <span>{props.fullName}</span> </h3>
              <p className={classes.userItemPersonsStatus}>Status: <span className={classes.dsad}>{props.status}</span> </p>
            </div>

            <div className={classes.userItemLievs}>
              <h3 className={classes.userItemLievsCountry}>Country: <span>{props.location.country}</span> </h3>
              <p className={classes.userItemLievsCity}>City: <span>{props.location.city}</span> </p>
            </div> 

          </div>  

       </div>
  )
}
export default User