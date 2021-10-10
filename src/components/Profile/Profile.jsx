import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.content}>
       <div>
        <img src='https://images.ctfassets.net/hrltx12pl8hq/1XAMCcfZRbFQmNCuFR8oXH/e1bddb571332e355b076109938db0bf3/shutterstock_1308690499.jpg?fit=fill&w=800&h=400' />
       </div>
       <div>
         ava + desc
       </div>

       <MyPosts />
       
     </div>
  )
}
export default Profile