import { initializeApp } from "firebase/app";
import { ModalLoginContext } from "./context/poplogincontext";
import { useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";



import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    }from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyAQKkHb3u46sS25hKxZ2XTyRnQG-0VlGNo",
  
    authDomain: "react-iim.firebaseapp.com",
  
    projectId: "react-iim",
  
    storageBucket: "react-iim.appspot.com",
  
    messagingSenderId: "348459757114",
  
    appId: "1:348459757114:web:473f7d62d0de0188874f03",
  
    measurementId: "G-SRBLH7WGDJ"
  
  };


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

const db = getFirestore(app);

const user = auth.currentUser;

  
const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
});
};
  
const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
});
};

const UserStateListener = () => {
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    
  }
});
  }
  const signOutUser = () => {
    auth.signOut().catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
  };
  
  export { signUp, signIn, signOutUser };