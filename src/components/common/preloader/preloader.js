import loader from '../../../assets/Loader.svg';
import classes from './preloader.module.css';

const Preloader = () => {
  return (
    <div className={classes.preloader}>
      <div className={classes.preloaderBlock}>
        <img className={classes.preloaderImg} src={loader} alt="Loading..." />
      </div>
    </div>
  );
};
export default Preloader;
