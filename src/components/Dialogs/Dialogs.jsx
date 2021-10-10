import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import Message from './Message/Message'





const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name='Dima' id='1'/>
        <DialogItem name='Kostya' id='2'/>
        <DialogItem name='Ivan' id='3'/>
        <DialogItem name='Lena' id='4'/>
        <DialogItem name='Alyona' id='5'/>
      </div>
    
      <div className={classes.messages}>
        <Message message='Hi'/>
        <Message message='How are you?'/>
        <Message message='Hello'/>
      </div>
    
    
    </div>
  )
}
export default Dialogs