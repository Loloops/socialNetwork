import { NavLink } from 'react-router-dom'
import classes from './DialogItem.module.css'

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`
  
  return (
    <div className={classes.dialog} >
      <img src ="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
        alt='user...'
      />
      <NavLink to={path} activeClassName={classes.active}> {props.name} </NavLink> 
    </div>
  )
}
export default DialogItem