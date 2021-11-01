import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'



const Profile = (props) => {

  return (
    <div>

      <ProfileInfo savePhoto={props.savePhoto} profile={props.profile} {...props} isOwner={props.isOwner} saveProfile={props.saveProfile}/>
      <MyPostsContainer/>
       
     </div>
  )
}
export default Profile