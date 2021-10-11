import { NavLink } from 'react-router-dom'
import classes from './Friends.module.css'


const FriendItem = (props) => {
  return (
    <div className={classes.friendsItem}>

      <img src={ props.img }/>
      <p> { props.name } </p>

    </div>
  )
}


const Friends = (props) => {
console.log(props);

let friendItem = props.friendsData
    .map(item => (<FriendItem img={item.img} name={item.name}/>))

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