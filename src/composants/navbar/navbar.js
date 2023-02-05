import React, { useEffect, useContext } from "react";
import { Button } from "@mui/material";
import "./navbar.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import {SignIn} from "../modal/register/signin";
import {LogOut} from "../modal/register/logout";
import { RegisterContext } from "../../context/registercontext";
import {NavLink, Router, useNavigate} from "react-router-dom";
import {ModalContext} from "../../context/modalcontext";
const logo = require("../../Image/kanban.png");

export default function Navbar (){
  let navigate = useNavigate();
  const { setShowLogOutModal, showLogOut, setShowLogOut} = useContext(RegisterContext)
  const {modalState, setModalState} = useContext(ModalContext)
  const NavigateSignUp = () => {navigate("signup")}
 const ShowLoginModal = () => { setModalState({signInModal: true}) }

  return (
    <nav className="navbar" id="top">
       <div className="logo"><img src={logo} /> ProPlanner</div>
        {showLogOut === false &&  (
          <>
          
          <Button class="bouton-custom" onClick={NavigateSignUp}>Inscription</Button>
         
         
          <Button variant="contained" class="bouton-custom" onClick={ShowLoginModal}>Connexion</Button>

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
