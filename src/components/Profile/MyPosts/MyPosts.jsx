import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={classes.content}>
       
       <div>
         My Posts

         <div>
           <textarea></textarea>
           <button>Add post</button>
         </div>


         <div className={classes.posts}>

           <Post message='Hi, how are you' likeCount = '3'/>
           <Post message="It's my first post"  likeCount = '10'/>
           
           

         </div>

       </div>
       
     </div>
  )
}
export default MyPosts