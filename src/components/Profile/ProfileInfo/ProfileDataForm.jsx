import classes from './ProfileInfo.module.css'
import { Input, Textarea } from '../../common/formControls/FormsContols'
import { Field, reduxForm } from 'redux-form'


const ProfileDataForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div className={classes.aboutDescription}>Name:  
    { 
      <Field placeholder={'Name'} component={Input} name={'fullName'} validate={[]}/>
    } 
    </div>
    <div className={classes.aboutDescription}>About me:
    { 
      <Field placeholder={'About me'} component={Textarea} name={'aboutMe'} validate={[]}/>
    }  
    </div>
    <div className={classes.aboutDescription}>Looking for a job:
    { 
      <Field  component={Input} type='checkbox' name={'lookingForAJob'} validate={[]}/>
    }  
    </div>
    <div className={classes.aboutDescription}>My professional skills:
    { 
      <Field  placeholder={'Looking for a job description'} component={Textarea}  name={'lookingForAJobDescription'} validate={[]}/>
    }  
    </div>
          <p className={classes.aboutContacts}>Contacts:</p>
          <ul className={classes.aboutContactsLinks}>

            {
              Object.keys(props.profile.contacts).map(key => {
                return <div key={key} >
                  <b>
                    {key}: <Field placeholder={key} component={Input} name={'contacts.' + key} validate={[]}/>
                  </b>
                </div>
              })
            }
            
           
          </ul>
          
            <button  >Save</button>
            {
              props.error && <div className={classes.error}> {props.error} </div>
            }
          
  </form>
  }

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)


export default ProfileDataFormReduxForm