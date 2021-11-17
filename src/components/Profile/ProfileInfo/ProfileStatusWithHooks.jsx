import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStatus } from '../../../redux/profileReducer';
import classes from './ProfileInfo.module.css';

const ProfileStatusWithHOoks = ({ profileStatus }) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(profileStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    setStatus(profileStatus);
  }, [profileStatus]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    dispatch(updateStatus(status));
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={classes.inputWrapper}>
      {!editMode && (
        <div className={classes.status}>
          STATUS:
          <span onDoubleClick={activateEditMode}>
            {profileStatus || 'change status(2 click on this text)'}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            className={classes.input}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHOoks;
