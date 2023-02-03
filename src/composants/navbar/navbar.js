import React, { useEffect } from "react";
import { Button } from "@mui/material";
import "./navbar.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import {SignIn} from "../modal/register/signin";
import {SignUp} from "../modal/register/signup";
import {LogOut} from "../modal/register/logout";
import { RegisterContext } from "../../context/registercontext";
import {useContext} from "react";


export const Navbar = () => {

  const { showLogOut,
    setShowLogOut,
    showSignInModal,
    setShowSignInModal,
    showSignUpModal,
    setShowSignUpModal,
    showLogOutModal,
    setShowLogOutModal} = React.useContext(RegisterContext)
  
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
          console.log("user is logged out")
        }
      });
     
}, [])


  return (
    <nav className="navbar">
        
        {showLogOut === false &&  (
          <>
            <Button variant="contained" className="navbar-button" onClick={() => setShowSignInModal(true)}>Inscription</Button>
            {showSignInModal === true &&  (
              <SignIn/>
            )}
            <Button variant="contained" className="navbar-button" onClick={() => setShowSignUpModal(true)}>
              Connexion
            </Button>
            {showSignUpModal === true &&  (
              <SignUp/>
              )}
          </>
        )
        }
        {showLogOut === true &&  (
          <>
            <Button variant="contained" className="navbar-button" onClick={() => setShowLogOutModal(true)}>
              Déconnexion
            </Button>
          </>
        )
        }
      </nav>
  );
};
    