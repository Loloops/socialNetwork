import classes from "./Users.module.css"
import User from './User/User'


const Users = (props) => {
  
  if (props.users.length === 0){
    
    props.setUsers(
    [
      {
        id: 1, 
        photoUrl: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png', 
        followed: false, 
        fullName: 'Dmitry', 
        status: 'So fucking goods', 
        location: 
          {
            city:'Kiev', 
            country: 'Ukrain'
          }},
      
    ])
  }

  


  let userItem = props.users.map(u => 
  <User
    key={u.id}
    fullName={u.fullName} 
    status={u.status} 
    location={u.location} 
    photoUrl={u.photoUrl} 
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