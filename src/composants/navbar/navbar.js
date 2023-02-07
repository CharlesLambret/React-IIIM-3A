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
  const { showLogOut, setShowLogOut} = useContext(RegisterContext)
  const {modalState, setModalState} = useContext(ModalContext)
  const [user, setUser] = React.useState(null);
  const setShowProfile = () => { setModalState({ProfileModal: true}) }
  const setShowLogOutModal = () => { setModalState({LogOutModal: true}) }
  const NavigateSignUp = () => {navigate("/signup")}
 const ShowLoginModal = () => { setModalState({signInModal: true}) }
  const NavigateKanban = () => {navigate("/home")}

  return (
    <nav className="navbar" id="top">
      <div className="navcontent">
          <div className="logo" onClick={NavigateKanban}><img src={logo} alt="Logo"/> ProPlanner</div>
          
          <div id="buttons">
          {showLogOut === false ? (
            <div className="buttondiv">
              <Button className="bouton1"  onClick={NavigateSignUp}>Inscription</Button>
              <Button className="bouton1" variant="contained"  onClick={ShowLoginModal}>Connexion</Button>
              
            </div>
          ) : (
            <div className="buttondiv">
            <Button className="bouton1" variant="contained"   onClick={setShowLogOutModal}>
              Déconnexion
            </Button>
            <Button className="bouton1" variant="contained"  onClick={setShowProfile}>Profil </Button>
            </div>
          )}
        </div>
      </div>
       
      </nav>
  );
};
