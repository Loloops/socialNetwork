import React from 'react'
import { sendMessageBtnActionCreater, updateTextAreaValueActionCreater } from '../../redux/messagesReducer'
import StoreContext from '../../storeContext'
import Dialogs from './Dialogs'






const DialogsContainer = (props) => {
  
  return (
    <StoreContext.Consumer> 
      {
        (store) => {
          let state = store.getState()
          const sendMessageBtn = () => {
            store.dispatch(sendMessageBtnActionCreater())
          }
        
          const textAreaValue = (text) => {
            store.dispatch(updateTextAreaValueActionCreater(text))
          }
          return <Dialogs 
            MessageBtn={sendMessageBtn}
            AreaValue={textAreaValue}
            messagesPage={state.messagesPage}
          />
        }
      }
   
   </StoreContext.Consumer>

  )
}
export default DialogsContainer


