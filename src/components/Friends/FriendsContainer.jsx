import { connect } from 'react-redux'
import Friends from './Friends'


const mapStateToProps = (state) => {
  return {
    friendsData: state.sidebarpages.friendsData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}



const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)


export default FriendsContainer

// return (
//   <StoreContext.Consumer> 
//     {
//       (store) => {
//         let state = store.getState()

//         return <Friends 
//         friendsData={state.sidebarpages.friendsData}
//         />
//       }
//     }
  
//   </StoreContext.Consumer>
// )