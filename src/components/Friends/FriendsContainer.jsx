import StoreContext from '../../storeContext'
import Friends from './Friends'




const FriendsContainer = (props) => {


  return (
    <StoreContext.Consumer> 
      {
        (store) => {
          let state = store.getState()

          return <Friends 
          friendsData={state.sidebarpages.friendsData}
          />
        }
      }
    
    </StoreContext.Consumer>
  )
}
export default FriendsContainer