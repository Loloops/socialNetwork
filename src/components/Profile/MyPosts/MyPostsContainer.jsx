import React from 'react'
import { addPostActionCreator, updateNewPostActionCreater } from '../../../redux/profileReducer'
import StoreContext from '../../../storeContext'
import MyPosts from './MyPosts'





const MyPostsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState()
          const onAddPost = () => {
            store.dispatch(addPostActionCreator())
            
          }
        
          const onPostChange = (text) => {
            store.dispatch(updateNewPostActionCreater(text))
          }
          return <MyPosts 
              updateNewPostText = { onPostChange } 
              addPost = { onAddPost } 
              postsData={state.profilePage.postsData}
              newPostText = {state.profilePage.newPostText}
            />
          }
      }
      
    </StoreContext.Consumer>
  )
}
export default MyPostsContainer