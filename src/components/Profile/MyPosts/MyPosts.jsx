import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={classes.content}>
       
       <div className={classes.postsBlock}>
         <h3 className={classes.myPosts}>My Posts</h3>

         <div className={classes.inputsBtns}>
          <div>
           <textarea maxlength='1000' placeholder='What you think?' rows='10' cols='70' className={classes.textarea}></textarea>
          </div>
          <div>
           <button className={classes.addPostBtn}>Add post</button>
          </div>
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