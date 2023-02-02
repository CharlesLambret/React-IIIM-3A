import React, { useState } from "react";
import { Button, fabClasses } from "@mui/material";
import "./navbar.css";
import {signUp, signIn, signOut } from "../firebase";

const Navbar = () => {
 
  return (
    <nav className="navbar">
        <>
          <Button variant="contained" className="navbar-button">Inscription</Button>
          <Button variant="contained" className="navbar-button" >
            Connexion
          </Button>
        </>
        <Button variant="contained" className="navbar-button" >
          Déconnexion
        </Button>
    </nav>
    
    
  );
};

export default Navbar;
