import React from 'react'
import { addPostActionCreator, updateNewPostActionCreater } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'





const MyPostsContainer = (props) => {

  let state = props.store.getState()


  const onAddPost = () => {
    props.store.dispatch(addPostActionCreator())
    
  }

  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostActionCreater(text))
  }


  return (
    <MyPosts 
      updateNewPostText = { onPostChange } 
      addPost = { onAddPost } 
      postsData={state.profilePage.postsData}
      newPostText = {state.profilePage.newPostText}
    />
  )
}
export default MyPostsContainer