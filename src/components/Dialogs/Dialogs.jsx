import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import Message from './Message/Message'





const Dialogs = (props) => {
  const dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Kostya'},
    {id: 3, name: 'Ivan'},
    {id: 4, name: 'Lena'},
    {id: 5, name: 'Alyona'},
  ]
  const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Hello'},
  ]

  let dialogsElements = dialogsData
        .map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>))
  
  let messageselements = messagesData
        .map(message => (<Message message={message.message}/>))
  

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