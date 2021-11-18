import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router';
import { getStatus, userProfileThunk } from '../../redux/profileReducer';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function usePrevious(value) {
  //custom hook for prev value
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const Profile = () => {
  let { userId } = useParams();

  const dispatch = useDispatch();
  const authUser = useSelector(({ auth }) => auth.userId);
  const authRedirect = useSelector(({ auth }) => auth.isAuth);

  const refreshProfile = () => {
    if (!userId) {
      userId = authUser;
    }
    dispatch(userProfileThunk(userId));
    dispatch(getStatus(userId));
  };

  let prevId = usePrevious(userId);

  useEffect(() => {
    refreshProfile();
    if (userId !== prevId) {
      refreshProfile();
    }
  }, [userId]);

  return (
    <div>
      {!authRedirect ? (
        <Redirect to={'/login'} />
      ) : (
        <>
          <ProfileInfo isOwner={!userId} />
          <MyPosts />
        </>
      )}
    </div>
  );
};

export default Profile;
