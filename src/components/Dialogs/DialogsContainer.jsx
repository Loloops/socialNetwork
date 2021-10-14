import React from 'react'
import { sendMessageBtnActionCreater, updateTextAreaValueActionCreater } from '../../redux/messagesReducer'
import Dialogs from './Dialogs'






const DialogsContainer = (props) => {
  
  let state = props.store.getState()


  const sendMessageBtn = () => {
    props.store.dispatch(sendMessageBtnActionCreater())
  }

  const textAreaValue = (text) => {
    props.store.dispatch(updateTextAreaValueActionCreater(text))
  }
  

  return (
   <Dialogs 
    MessageBtn={sendMessageBtn}
    AreaValue={textAreaValue}
    textAreaValue={state.messagesPage.textAreaStateValue}
    dialogs={state.messagesPage.dialogsData}
    message={state.messagesPage.messagesData}
   />
  )
}
export default DialogsContainer

