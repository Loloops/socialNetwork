import { useSelector } from 'react-redux';
import Preloader from '../common/preloader/preloader';
import Paginator from './Paginator/Paginator';
import User from './User/User';
import { getUsersThunkCreator } from '../../redux/usersReducer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { followThunk, unfollowThunk } from '../../redux/usersReducer';

const Users = () => {
  const { users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress } =
    useSelector(({ usersPage }) => usersPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunkCreator(currentPage, pageSize));
  }, []);

  const onPageChanged = (p) => {
    dispatch(getUsersThunkCreator(p, pageSize));
  };

  return (
    <div>
      {isFetching ? (
        <Preloader />
      ) : (
        <>
          {users.map((u) => (
            <User
              key={u.id}
              u={u}
              followingInProgress={followingInProgress}
              unfollowThunk={unfollowThunk}
              followThunk={followThunk}
            />
          ))}

          <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
          />
        </>
      )}
    </div>
  );
};
export default Users;
