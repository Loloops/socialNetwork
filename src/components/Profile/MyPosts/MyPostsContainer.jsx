
import { connect } from 'react-redux'
import { addPostActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'


const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }  
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (textAreaValuePost) => {
      dispatch(addPostActionCreator(textAreaValuePost))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer


// return (
//   <StoreContext.Consumer>
//     {
//       (store) => {
//         let state = store.getState()
//         const onAddPost = () => {
//           store.dispatch(addPostActionCreator())
          
//         }
      
//         const onPostChange = (text) => {
//           store.dispatch(updateNewPostActionCreater(text))
//         }
//         return <MyPosts 
//             updateNewPostText = { onPostChange } 
//             addPost = { onAddPost } 
//             postsData={state.profilePage.postsData}
//             newPostText = {state.profilePage.newPostText}
//           />
//         }
//     }
    
//   </StoreContext.Consumer>
// )