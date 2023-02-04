import { createContext, useState} from "react";

export const ModalContext = createContext()

export function ModalContextProvider(props) {

  // modal
  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false,
    LogOutModal: false,
  })

  const toggleModals = modal => {
    if(modal === "signIn") {
      setModalState({
        signUpModal: false,
        signInModal: true,
        LogOutModal: false,
      })
    }
    if(modal === "signUp") {
      setModalState({
        signUpModal: true,
        signInModal: false,
        LogOutModal: false,
      })
    }
    if(modal === "LogOut") {
      setModalState({
        signUpModal: false,
        signInModal: false,
        LogOutModal: true,
      })
    }
    if(modal === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false, 
        LogOutModal: false,
      })
    }
  }

  return (
    <ModalContext.Provider value={{modalState, setModalState, toggleModals}}>
      {props.children}
    </ModalContext.Provider>
  )
}