import React, { useEffect } from "react";
import { Button } from "@mui/material";
import "./navbar.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import {SignIn} from "../modal/register/signin";
import {LogOut} from "../modal/register/logout";
import { RegisterContext } from "../../context/registercontext";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

export const Navbar = () => {
  
  const { showLogOut,
    setShowLogOut,
    setShowSignInModal,
    setShowLogOutModal, setModalState} = React.useContext(RegisterContext)


  return (
    <nav className="navbar">
        
        {showLogOut === false &&  (
          <>
           
           
            <Button variant="contained" className="navbar-button">
              Connexion
            </Button>
            {setShowSignInModal === true &&  (
              <SignIn/>
            )}
          </>
        )
        }
        {setShowLogOut === true &&  (
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
