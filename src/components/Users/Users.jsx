import classes from './Users.module.css'
import { NavLink } from 'react-router-dom'
import Paginator from './Paginator/Paginator'
import User from './User/User'



const Users = (props) => {


  return (
    <div>
      {
        props.users.map(u => <User 
          u={u} 
          followingInProgress={props.followingInProgress}
          unfollowThunk={props.unfollowThunk}
          followThunk={props.followThunk}
        />)
      }

      <Paginator 
        currentPage={props.currentPage} 
        onPageChanged={props.onPageChanged}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
    </div>
  )
}
export default Users