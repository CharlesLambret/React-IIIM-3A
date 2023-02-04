import React, { useEffect } from "react";
import { Button } from "@mui/material";
import "./navbar.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import {SignIn} from "../modal/register/signin";
import {LogOut} from "../modal/register/logout";
import { RegisterContext } from "../../context/registercontext";
import {useContext} from "react";
import {Link} from "react-router-dom";


export default function Navbar (){
  
  const { showLogOut,
    setShowLogOut,
    setShowSignInModal,
    setShowLogOutModal, setModalState} = React.useContext(RegisterContext)
  
 

  return (
    <nav className="navbar">
        
        {showLogOut === false &&  (
          <>
          <Button variant="contained" class="bouton-custom" onClick={() => setModalState(true)}>
            Inscription
          </Button>
           <Button variant="contained" class="bouton-custom" onClick={() => setModalState(true)}>Connexion</Button>
           </>
            
        )
        }
        {setShowLogOut === true &&  (
          <>
            <Button variant="contained"  class="bouton-custom" onClick={() => setShowLogOutModal(true)}>
              Déconnexion
            </Button>
          </>
        )
        }
      </nav>
  );
};
