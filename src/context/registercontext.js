import React, { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, user } from "../firebase";


export const RegisterContext = createContext();

export function RegisterStateProvider(props){

    
    const [showLogOut, setShowLogOut] = useState(false);
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showLogOutModal, setShowLogOutModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            
            // ...
            console.log("uid", uid)
            setShowLogOut(true)
            console.log("user is logged in")
          } else {
            setShowLogOut(false)
            console.log("user is logged out")          }
        });
    },[])

    

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
         
          }}
        >
          {props.children}
        </RegisterContext.Provider>
      );
}

