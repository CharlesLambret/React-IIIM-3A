import { createContext, useState} from "react";

export const ModalContext = createContext()

export function ModalContextProvider(props) {

  // modal
  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false
  })

  const toggleModals = modal => {
    if(modal === "signIn") {
      setModalState({
        signUpModal: false,
        signInModal: true
      })
    }
    if(modal === "signUp") {
      setModalState({
        signUpModal: true,
        signInModal: false
      })
    }
    if(modal === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false
      })
    }
  }

  return (
    <ModalContext.Provider value={{modalState, toggleModals}}>
      {props.children}
    </ModalContext.Provider>
  )
}