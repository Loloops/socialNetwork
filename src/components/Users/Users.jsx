import classes from './Users.module.css'
import userPhoto from '../../assets/Programmyi-dlya-sozdaniya-avatarok.png'


const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++){
      pages.push(i)
    }
  return (
    <div>
      {
        props.users.map(u => <div key={u.id}  className={classes.UsersWrapper}>
          <div className={`${classes.userItem} ${classes.wrapperImg}`}>
            <div>
              <img 
              src={u.photos.small != null ? u.photos.small : userPhoto} 
              alt="Foto" 
              className={classes.userItemPhoto} />
            </div>
            { 
              u.followed 
                ? 
                <button 
                  onClick={() => { props.unfollow(u.id) }} 
                  className={`${classes.userItemBtn} ${classes.userItemBtnUnf}`}>
                    Unfollow
                </button> 
                : 
                <button onClick={() => { props.follow(u.id) }} 
                  className={classes.userItemBtn}>
                    Follow
                </button> 
            }
            
          </div>

          <div className={`${classes.userItem} ${classes.wrapperInfo}`}>

            <div className={classes.userItemPersons}>
              <h3 className={classes.userItemPersonsName}>Name: <span>{u.name}</span> </h3>
              <p className={classes.userItemPersonsStatus}>Status: <span className={classes.dsad}>{u.status}</span> </p>
            </div>

            <div className={classes.userItemLievs}>
              <h3 className={classes.userItemLievsCountry}>Country: <span>{'NULL'}</span> </h3>
              <p className={classes.userItemLievsCity}>City: <span>{'NULL'}</span> </p>
            </div> 

          </div>  

       </div>)
      }
      <div>
        {pages.map(p => {
          return <button 
          className={`${props.currentPage === p && classes.selectedpadge} ${classes.page}`}
          onClick={() => {props.onPageChanged(p)} }>
            {p}
          </button>
        })}

      </div>
    </div>
  )
}
export default Users