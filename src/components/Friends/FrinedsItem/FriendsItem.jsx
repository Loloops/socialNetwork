
import classes from './FriendsItem.module.css'


const FriendItem = (props) => {
  return (
    <div className={classes.friendsItem}>

      <img src={ props.img }/>
      <p> { props.name } </p>

    </div>
  )
}
export default FriendItem