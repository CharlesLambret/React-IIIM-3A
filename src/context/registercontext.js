import React, { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, user } from "../firebase";

export const RegisterContext = createContext();

export function RegisterStateProvider(props){

    const [showLogOut, setShowLogOut] = useState(false);
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showLogOutModal, setShowLogOutModal] = useState(false);
    const [error, setError] = useState([
      {
        origin : "register",
        message : "Wrong combination of email and password",
        show : false
      },
    ])
    const handleSignUp = async (e) => {
      CreateUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/kanban")
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.origin="register", error.show="true");               
        // ..
      });
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
         
            // ...
            console.log("uid", uid)
            setShowLogOut(true)
           
          } else {
            setShowLogOut(false)
            console.log("user is logged out")          }
        });
    },[])

    const [errorMessage, setErrorMessage] =useState(false);

    return (
        <RegisterContext.Provider
          value={{
           showLogOut,
           setShowLogOut,
           showSignInModal,
           setShowSignInModal,
           showSignUpModal,
           setShowSignUpModal,
           showLogOutModal,
           setShowLogOutModal,
           errorMessage, 
           setErrorMessage,
           error,
            setError,
            handleSignUp,
            

          }}
        >
          {props.children}
        </RegisterContext.Provider>
      );
}