import React from 'react'
import { sendMessageBtnActionCreater, updateTextAreaValueActionCreater } from '../../redux/state'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import Message from './Message/Message'





const Dialogs = (props) => {
  

  let dialogsElements = props.state.dialogsData
        .map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>))
  
  let messageselements = props.state.messagesData
        .map(message => (<Message message={message.message} flag={message.flag}/>))

  const newMessageIn = React.createRef()
  
  const sendMessageBtn = () => {
    props.dispatch(sendMessageBtnActionCreater())
  }

  const textAreaValue = () => {
    let text = newMessageIn.current.value
    props.dispatch(updateTextAreaValueActionCreater(text))
  }
  

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>

          { dialogsElements }

        </div>
      
        <div className={classes.messages}>

          { messageselements }

        </div>
      
      
      </div>

      <div className={classes.messageSendItem}>
        <textarea ref={ newMessageIn } maxLength='1000' placeholder='Write your message...' rows='7' cols='70' className={classes.messageTextArea} value={ props.state.textAreaStateValue } onChange={ textAreaValue }>

        </textarea>
        <button className={classes.messageSendButton} onClick={ sendMessageBtn }>Send</button>
      </div>
    </div>
  )
}
export default Dialogs