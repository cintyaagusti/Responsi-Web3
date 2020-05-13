import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/pages/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import firebase from './config/firebase';   //mengimport dari export default firebase

// console.log('config firebase ==> ', firebase); 

//reducer: kumpulan instruksi yg akan mengubah store itu sndiri

ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}><App/></BrowserRouter>, document.getElementById('root'));
// ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();