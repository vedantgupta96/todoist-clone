import { firebase } from "firebase/app";
import 'firebase/firestore';
firebase.analytics();
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyC6vXYKjaiA2uA_ZZCfUe7K74fLGmp82aQ",
    authDomain: "todoist-clone2.firebaseapp.com",
    databaseURL: "https://todoist-clone2.firebaseio.com",
    projectId: "todoist-clone2",
    storageBucket: "todoist-clone2.appspot.com",
    messagingSenderId: "685320079196",
    appId: "1:685320079196:web:b7ea7e0309255c9704a399",
    measurementId: "G-NT32V734HK"

});

export {firebaseConfig as firebase};