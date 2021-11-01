import classes from './Message.module.css'

const Message = (props) => {
  return (
    <div className={classes.messageItem} data-itsme={props.flag}>
      <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
        alt='user...'
      />
      <div className={classes.message} >{props.message}</div>
    </div>
  )
}
export default Message