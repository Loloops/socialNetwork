import React from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/formControls/FormsContols';
import { maxLength100, requiredField } from '../../common/validators/validators';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator } from '../../../redux/profileReducer';
import { useDispatch } from 'react-redux';

const MyPosts = React.memo(() => {
  const { postsData } = useSelector(({ profilePage }) => profilePage);
  const dispatch = useDispatch();

  let Posts = [...postsData]
    .reverse()
    .map((post) => <Post message={post.message} key={post.id} likeCount={post.likescount} />);

  const addNewPost = (values) => {
    dispatch(addPostActionCreator(values.textAreaValuePost));
    values.textAreaValuePost = '';
  };

  return (
    <div className={classes.content}>
      <div className={classes.postsBlock}>
        <h3 className={classes.myPosts}>My Posts</h3>

        <AddPostFormRedux onSubmit={addNewPost} />

        <div className={classes.posts}>{Posts}</div>
      </div>
    </div>
  );
});

const AddNewPostArea = (props) => {
  return (
    <form className={classes.inputsBtns} onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="What you think?"
          rows="7"
          cols="70"
          className={classes.textarea}
          component={Textarea}
          name="textAreaValuePost"
          validate={[requiredField, maxLength100]}
        />
      </div>
      <div>
        <button className={classes.addPostBtn}>Add post</button>
      </div>
    </form>
  );
};
const AddPostFormRedux = reduxForm({ form: 'profilePostValue' })(AddNewPostArea);

export default MyPosts;
