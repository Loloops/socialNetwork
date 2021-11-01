import Preloader from '../../common/preloader/preloader'
import classes from './ProfileInfo.module.css'
import userphoto from '../../../assets/Programmyi-dlya-sozdaniya-avatarok.png'
import ProfileStatusWithHOoks from './ProfileStatusWithHooks'
import { useState } from 'react'
import ProfileDataFormReduxForm from './ProfileDataForm'


const ProfileInfo = (props) => {

let [editMode, setEditMode] = useState(false)



if(!props.profile){
  return <Preloader />
}
const mainPhotoSelected = (e) => {
  if(e.target.files.length) {
    props.savePhoto(e.target.files[0])
  }
}

const onSubmit = (formData) => {
   props.saveProfile(formData).then(() => {
    setEditMode(false)
   })
   
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

          {
            editMode 
            ? 
            <ProfileDataFormReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} /> 
            : 
            <ProfileData 
              goToEditMode={() => {setEditMode(true)}} 
              profile={props.profile} 
              isOwner={props.isOwner} 
              
            />
          }
          
          {
            props.isOwner && <input type={'file'} onChange={ mainPhotoSelected } />
          }
        </div>
        


      </div>
    </div>

  )
}

const ProfileData = ({profile, isOwner, goToEditMode }) => {
  
return <div>
  <p className={classes.aboutDescription}>Name: <span>{profile.fullName}</span>  </p>
          <p className={classes.aboutDescription}>About me: <span>{profile.aboutMe}</span>  </p>
          <p className={classes.aboutDescription}>Looking for a job: <span>{profile.lookingForAJob ? 'Yes' : 'No'}</span>  </p>
          <p className={classes.aboutDescription}>My professional skills: <span>{profile.lookingForAJobDescription}</span>  </p>
          <p className={classes.aboutContacts}>Contacts:</p>
          <ul className={classes.aboutContactsLinks}>

            {

              Object.keys(profile.contacts).map(key => {
                if(profile.contacts[key]){
                  return <Contact key={key}  contactTitle={key} contactValue={profile.contacts[key]}/>
                } else {
                  return null
                }
                
              })
            }
            
           
          </ul>
          {
            isOwner && <button onClick={goToEditMode } >Edit</button>
          }
          
</div>
}




const Contact = ({contactTitle, contactValue}) => {
  return <li> {contactTitle}: <a href={contactValue} target='_blank' rel='noreferrer'>{contactValue}</a>  </li>
}




export default ProfileInfo