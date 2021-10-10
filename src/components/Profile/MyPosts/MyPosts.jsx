import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  const postsData = [
    {id: 1, message: 'Hi, how are you', likescount: 3},
    {id: 2, message: 'Its my first post', likescount: 10},
  ]
  let Posts = postsData.map(post => (<Post message={post.message} likeCount = {post.likescount}/>))


  return (
    <div className={classes.content}>
       
       <div className={classes.postsBlock}>
         <h3 className={classes.myPosts}>
           My Posts
         </h3>

         <div className={classes.inputsBtns}>
          <div>
           <textarea maxlength='1000' placeholder='What you think?' rows='10' cols='70' className={classes.textarea}></textarea>
          </div>
          <div>
           <button className={classes.addPostBtn}>Add post</button>
          </div>
         </div>


         <div className={classes.posts}>

           
           { Posts }
           
           

         </div>

       </div>
       
     </div>
  )
}
export default MyPosts