import React, { useState } from "react";
import { createContext } from "react";

export const RegisterContext = createContext();

export function RegisterStateProvider(props){

    const [showLogOut, setShowLogOut] = useState(false);
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showLogOutModal, setShowLogOutModal] = useState(false);

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
           setShowLogOutModal
          }}
        >
          {props.children}
        </RegisterContext.Provider>
      );
}