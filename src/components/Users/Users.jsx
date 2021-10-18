import classes from "./Users.module.css"
import * as axios from 'axios'
import React from "react"
import userPhoto from '../../assets/Programmyi-dlya-sozdaniya-avatarok.png'


class Users extends React.Component {

  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      })
  }
  
  onPageChanged = (p) => { 
    this.props.setCurrentPage(p) 
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++){
      pages.push(i)
    }
    return <div>
      {
        this.props.users.map(u => <div key={u.id}  className={classes.UsersWrapper}>
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
                  onClick={() => { this.props.unfollow(u.id) }} 
                  className={`${classes.userItemBtn} ${classes.userItemBtnUnf}`}>
                    Unfollow
                </button> 
                : 
                <button onClick={() => { this.props.follow(u.id) }} 
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
          className={`${this.props.currentPage === p && classes.selectedpadge} ${classes.page}`}
          onClick={() => {this.onPageChanged(p)} }>
            {p}
          </button>
        })}

      </div>
    </div>
      
    
  }
}



export default Users