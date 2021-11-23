import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { sendMessageBtnActionCreater } from '../../redux/messagesReducer';
import { Textarea } from '../common/formControls/FormsContols';
import { maxLength150, requiredField } from '../common/validators/validators';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = () => {
  const state = useSelector(({ messagesPage }) => messagesPage);
  const authRedirect = useSelector(({ auth }) => auth.isAuth);
  const dispatch = useDispatch();

  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messageselements = state.messagesData.map((message) => (
    <Message message={message.message} key={message.id} flag={message.flag} />
  ));

  const addNewMessage = (values) => {
    dispatch(sendMessageBtnActionCreater(values.textAreaValue));
    values.textAreaValue = '';
  };

  return (
    <div>
      {!authRedirect ? (
        <Redirect to={'/login'} />
      ) : (
        <>
          <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElements}</div>

            <div className={classes.messages}>{messageselements}</div>
          </div>

          <AddMessageFormRedux onSubmit={addNewMessage} />
        </>
      )}
    </div>
  );
};

const AddMessageForm = ({ handleSubmit }) => {
  return (
    <form className={classes.messageSendItem} onSubmit={handleSubmit}>
      <Field
        maxLength="1000"
        placeholder="Write your message..."
        rows="7"
        cols="70"
        className={classes.messageTextArea}
        validate={[requiredField, maxLength150]}
        component={Textarea}
        name="textAreaValue"></Field>
      <button className={classes.messageSendButton}>Send</button>
    </form>
  );
};
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Dialogs;
