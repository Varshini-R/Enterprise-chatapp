import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyDqsMRyKzk1I4MEdAY5B8cKLGCKo2avfN0",
    authDomain: "chatapp-2ad01.firebaseapp.com",
    databaseURL: "https://chatapp-2ad01-default-rtdb.firebaseio.com",
    projectId: "chatapp-2ad01",
    storageBucket: "chatapp-2ad01.appspot.com",
    messagingSenderId: "368834761281",
    appId: "1:368834761281:web:0ea7c1e98484d8f94eecc0"
};
firebase.initializeApp(config);

export default firebase;
