import classes from './Post.module.css'

const Post = (props) => {
  return (

    <div className={classes.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU' />
      {props.message}
      <div>
        
        <span> Like</span> {props.likeCount}
      </div>
    </div>

           
  )
}
export default Post