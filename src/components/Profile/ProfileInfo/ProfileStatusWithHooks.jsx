import React, { useEffect, useState } from 'react'
import Preloader from '../../common/preloader/preloader'
import classes from './ProfileInfo.module.css'


const ProfileStatusWithHOoks = (props) =>{


  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
   }
 

  return (
    <div className={classes.inputWrapper}>
      
      { !editMode &&
        <div className={classes.status}>
          STATUS: 
          <span onDoubleClick={activateEditMode} > {props.status || 'no_status'}</span>
        </div>
      }
      {editMode &&
        <div>
          <input  
            onChange={onStatusChange} 
            autoFocus={true}  
            className={classes.input}
            onBlur={deactivateEditMode} 
            value={status}
          />
        </div>
      }
    </div>
  )

}




export default ProfileStatusWithHOoks