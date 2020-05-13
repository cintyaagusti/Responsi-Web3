import firebase from 'firebase/app';
import 'firebase/auth';     //mengimport sesuatu yg kita butuhkan saja
import 'firebase/database'  //import 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCmxlYkF7XV_GtHpIs0Ni4RAR22Vk9sKkw",
    authDomain: "bukumu-project-akhir.firebaseapp.com",
    databaseURL: "https://bukumu-project-akhir.firebaseio.com",
    projectId: "bukumu-project-akhir",
    storageBucket: "bukumu-project-akhir.appspot.com",
    messagingSenderId: "895405769973",
    appId: "1:895405769973:web:6b4c35ab290bd5cb6cf1bc",
    measurementId: "G-PHPRC676E7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database();

  export default firebase;
  //export artinya firebase siap dikonsumsi di semua project ini