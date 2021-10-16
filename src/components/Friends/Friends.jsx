import { NavLink } from 'react-router-dom'
import classes from './Friends.module.css'
import FriendItem from './FrinedsItem/FriendsItem'



const Friends = (props) => {


let friendItem = props.friendsData
    .map(item => (<FriendItem img={item.img} key={item.id} name={item.name}/>))

  return (
    <div className={classes.Friends}>
        <NavLink to='/friends' activeClassName={classes.active}> Friends </NavLink>
        <div className={classes.friendsWrapper}>
          
          { friendItem }
          
            
        </div> 
      </div>
  )
}
export default Friends