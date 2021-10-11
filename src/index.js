import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const dialogsData = [
  {id: 1, name: 'Dima'},
  {id: 2, name: 'Kostya'},
  {id: 3, name: 'Ivan'},
  {id: 4, name: 'Lena'},
  {id: 5, name: 'Alyona'},
]
const messagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Hello'},
]
const postsData = [
  {id: 1, message: 'Hi, how are you', likescount: 5},
  {id: 2, message: 'Its my first post', likescount: 10},
]



ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
