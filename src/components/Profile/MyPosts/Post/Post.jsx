import { useSelector } from 'react-redux';
import classes from './Post.module.css';
import userphoto from '../../../../assets/Programmyi-dlya-sozdaniya-avatarok.png';
import Preloader from '../../../common/preloader/preloader';

const Post = ({ message, likeCount }) => {
  const { profile } = useSelector(({ profilePage }) => profilePage);
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className={classes.item}>
      <div className={classes.itemImg}>
        <img
          src={profile.photos.large !== null ? profile.photos.large : userphoto}
          alt="Avatar..."
        />
      </div>
      <p className={classes.itemMessage}> {message} </p>

      <div className={classes.likeCount}>
        <span> Like</span> {likeCount}
      </div>
    </div>
  );
};
export default Post;
