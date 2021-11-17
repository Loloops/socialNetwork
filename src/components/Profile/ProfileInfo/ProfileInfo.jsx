import Preloader from '../../common/preloader/preloader';
import classes from './ProfileInfo.module.css';
import userphoto from '../../../assets/Programmyi-dlya-sozdaniya-avatarok.png';
import ProfileStatusWithHOoks from './ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileDataFormReduxForm from './ProfileDataForm';
import { useSelector } from 'react-redux';
import { savePhoto, saveProfile } from '../../../redux/profileReducer';
import { useDispatch } from 'react-redux';

const ProfileInfo = ({ isOwner }) => {
  const [editMode, setEditMode] = useState(false);
  const { profile, status } = useSelector(({ profilePage }) => profilePage);
  const dispatch = useDispatch();

  if (!profile) {
    return <Preloader />;
  }
  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      dispatch(savePhoto(e.target.files[0]));
    }
  };

  const onSubmit = (formData) => {
    dispatch(saveProfile(formData)).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <div className={classes.avatar}>
          <img
            src={profile.photos.large !== null ? profile.photos.large : userphoto}
            alt="profile avatar"
          />
        </div>

        <div className={classes.about}>
          <ProfileStatusWithHOoks profileStatus={status} />

          {editMode ? (
            <ProfileDataFormReduxForm
              initialValues={profile}
              profile={profile}
              onSubmit={onSubmit}
            />
          ) : (
            <ProfileData
              goToEditMode={() => {
                setEditMode(true);
              }}
              profile={profile}
              isOwner={isOwner}
            />
          )}

          {isOwner && <input type={'file'} onChange={mainPhotoSelected} />}
        </div>
      </div>
    </div>
  );
};

//PROFILE DATA

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      <p className={classes.aboutDescription}>
        Name: <span>{profile.fullName}</span>
      </p>
      <p className={classes.aboutDescription}>
        About me: <span>{profile.aboutMe}</span>
      </p>
      <p className={classes.aboutDescription}>
        Looking for a job: <span>{profile.lookingForAJob ? 'Yes' : 'No'}</span>
      </p>
      <p className={classes.aboutDescription}>
        My professional skills: <span>{profile.lookingForAJobDescription}</span>
      </p>
      <p className={classes.aboutContacts}>Contacts:</p>
      <ul className={classes.aboutContactsLinks}>
        {Object.keys(profile.contacts).map((key) => {
          if (profile.contacts[key]) {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />;
          } else {
            return null;
          }
        })}
      </ul>
      {isOwner && <button onClick={goToEditMode}>Edit</button>}
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <li>
      {contactTitle}:
      <a href={contactValue} target="_blank" rel="noreferrer">
        {contactValue}
      </a>
    </li>
  );
};

export default ProfileInfo;
