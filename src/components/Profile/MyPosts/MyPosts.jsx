import React from 'react'
import { Field, reduxForm } from 'redux-form'
import classes from './MyPosts.module.css'
import Post from './Post/Post'




const MyPosts = (props) => {

  let Posts = props.postsData.map(post => (<Post message={post.message} key={post.id} likeCount = {post.likescount}/>))


  const addNewPost = (values) =>{
    props.addPost(values.textAreaValuePost)
  }


  return (
    <div className={classes.content}>
       
       <div className={classes.postsBlock}>
         <h3 className={classes.myPosts}>
           My Posts
         </h3>

         <AddPostFormRedux onSubmit={addNewPost}/>

         <div className={classes.posts}>

           { Posts }
      
         </div>

       </div>
       
     </div>
  )
}

const AddNewPostArea = (props) => {
  return (
    <form className={classes.inputsBtns} onSubmit={props.handleSubmit}>
      <div>
        <Field 
            maxLength='1000' 
            placeholder='What you think?' 
            rows='10' 
            cols='70' 
            className={classes.textarea} 
            value={props.newPostText} 
            component='textarea'
            name='textAreaValuePost'
        />
      </div>
      <div>
        <button className={classes.addPostBtn} >Add post</button>
      </div>
    </form>
  )
}
const AddPostFormRedux = reduxForm({form: 'profilePostValue'})(AddNewPostArea)





export default MyPosts