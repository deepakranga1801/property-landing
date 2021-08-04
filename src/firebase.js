import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // web app's Firebase configuration
  
  apiKey: "AIzaSyBZVNmmu9m31Wq8K3lvRQViitzukqCD-Ws",
    authDomain: "a21-khandala-contact.firebaseapp.com",
    projectId: "a21-khandala-contact",
    storageBucket: "a21-khandala-contact.appspot.com",
    messagingSenderId: "1097835782337",
    appId: "1:1097835782337:web:5f24ed60f0373541e23440"
  
});

var db = firebaseApp.firestore();

export { db };