
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import Message from './Message/Message'





const Dialogs = (props) => {
  

  let dialogsElements = props.state.dialogsData
        .map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>))
  
  let messageselements = props.state.messagesData
        .map(message => (<Message message={message.message} flag={message.flag}/>))
  

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>

        { dialogsElements }

      </div>
    
      <div className={classes.messages}>

        { messageselements }

      </div>
    
    
    </div>
  )
}
export default Dialogs