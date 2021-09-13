import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyAWOkWU4TtD9fUrNMa7rJXSpz-1ir_150s",
    authDomain: "clone-354c6.firebaseapp.com",
    projectId: "clone-354c6",
    storageBucket: "clone-354c6.appspot.com",
    messagingSenderId: "380202934820",
    appId: "1:380202934820:web:a40622d31cfdac68572eb1",
    measurementId: "G-9P323NEE8Z"
  };

firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();

export const SignInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // var user = result.user;
        // console.log(user.email);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
      });
  };

export const auth = new firebase.auth();
export const storage = firebase.storage();
export const firestore = new firebase.firestore();
