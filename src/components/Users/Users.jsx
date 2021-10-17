import classes from "./Users.module.css"
import User from './User/User'
import * as axios from 'axios'


const Users = (props) => {
  
  if (props.users.length === 0){
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(res => {
        console.log(res.data.items);
        props.setUsers(res.data.items)
      })

    
  }

  


  let userItem = props.users.map(u => 
  <User
    key={u.id}
    name={u.name} 
    status={u.status} 
    location={u.location} 
    photos={u.photos.small} 
    followed={u.followed} 
    follow={props.follow} 
    unfollow={props.unfollow}
    id={u.id}
  />)

  return (
    <div>
      { userItem }
    </div>
  )
}
export default Users