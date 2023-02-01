import React, { useState } from "react";
import { Button, fabClasses } from "@mui/material";
import "./navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ShowHiddenModal] = useState(false);

  const handleLogin = () => {true
    ShowHiddenModal(true);
    setIsLoggedIn();
  };

  const handleLogout = () => {
    setIsLoggedIn();
  };

  return (
    <nav className="navbar">
      {!isLoggedIn && (
        <>
          <Button variant="contained" className="navbar-button">Inscription</Button>
          <Button variant="contained" className="navbar-button" onClick={handleLogin}>
            Connexion
          </Button>
        </>
      )}
      {isLoggedIn && (
        <Button variant="contained" className="navbar-button" onClick={handleLogout}>
          Déconnexion
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
