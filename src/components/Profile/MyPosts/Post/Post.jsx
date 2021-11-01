import classes from './Post.module.css'

const Post = (props) => {
  return (

    <div className={classes.item}>
      <div className={classes.itemImg}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU' alt='Avatar...'/>
        <p className={classes.itemMessage}> {props.message} </p>
      </div>
      

      <div className={classes.likeCount}>
        <span> Like</span> {props.likeCount}
      </div>

    </div>

           
  )
}
export default Post