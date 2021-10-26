import Preloader from '../../common/preloader/preloader'
import classes from './ProfileInfo.module.css'
import userphoto from '../../../assets/Programmyi-dlya-sozdaniya-avatarok.png'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHOoks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader />
  }


  return (
    <div>
      <div className={classes.descriptionBlock}>

        <div className={classes.avatar}>
          <img 
            src={props.profile.photos.large != null 
            ? props.profile.photos.large 
            : userphoto} 
            alt="ava" />
        </div>
        
        <div className={classes.about}>
          <ProfileStatusWithHOoks status={props.status} {...props}/>
          <p className={classes.aboutDescription}>Name: <span>{props.profile.fullName}</span>  </p>
          <p className={classes.aboutDescription}>Description: <span>{props.profile.aboutMe}</span>  </p>
          <p className={classes.aboutContacts}>Contacts:</p>
          <ul className={classes.aboutContactsLinks}>
            <li> <a href={`https://${props.profile.contacts.vk}`} target='_blank' rel='noreferrer'>{props.profile.contacts.vk}</a>  </li>
            <li> <a href={`https://${props.profile.contacts.instagram}`} >{props.profile.contacts.instagram}</a>  </li>
            <li> <a href={`https://${props.profile.contacts.github}`}>{props.profile.contacts.github}</a>  </li>
          </ul>
        </div>
        


      </div>
    </div>

  )
}
export default ProfileInfo