
import MyPostsContainer from './MyPosts/MyPostsContainer'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'



const Profile = (props) => {

  return (
    <div>

      <ProfileInfo savePhoto={props.savePhoto} profile={props.profile} {...props} isOwner={props.isOwner}/>
      <MyPostsContainer/>
       
     </div>
  )
}
export default Profile