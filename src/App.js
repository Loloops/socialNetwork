import './App.css';
import Sidebar from './components/Navbar/Sidebar';
import { Redirect, Route, Switch } from 'react-router';
import Login from './components/Login/Login';
import React, { Suspense, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/preloader/preloader';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import Header from './components/Header/Header';

const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const Profile = React.lazy(() => import('./components/Profile/Profile'));
const Users = React.lazy(() => import('./components/Users/Users'));

const App = () => {
  const initialized = useSelector(({ app }) => app.initialized);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!initialized) {
    return <Preloader />;
  }

  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <div className="app-wrapper-content">
        <Switch>
          <Redirect exact from="/" to="/profile" />
          <Route
            path="/profile/:userId?"
            render={() => {
              return (
                <Suspense fallback={<Preloader />}>
                  <Profile />
                </Suspense>
              );
            }}
          />
          <Route
            path="/dialogs"
            render={() => {
              return (
                <Suspense fallback={<Preloader />}>
                  <Dialogs />
                </Suspense>
              );
            }}
          />
          <Route
            path="/users"
            render={() => {
              return (
                <Suspense fallback={<Preloader />}>
                  <Users />
                </Suspense>
              );
            }}
          />
          <Route path="/login" render={() => <Login />} />
          <Route path="*" render={() => <div> 404 NOT FOUND </div>} />
        </Switch>
      </div>
    </div>
  );
};

const SocialNetworkApp = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default SocialNetworkApp;
