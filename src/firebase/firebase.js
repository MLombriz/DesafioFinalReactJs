import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAt_BkBFkFGT1IY3fXvN2wGz_TLHH9gJpY",
    authDomain: "coderreact-taller.firebaseapp.com",
    projectId: "coderreact-taller",
    storageBucket: "coderreact-taller.appspot.com",
    messagingSenderId: "561674408799",
    appId: "1:561674408799:web:861cd9c2089462ab101cea"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

//Disponible para todos
export const dataBase = fb.firestore();