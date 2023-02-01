import React, { useState } from "react";
import { Button } from "@mui/material";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
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
