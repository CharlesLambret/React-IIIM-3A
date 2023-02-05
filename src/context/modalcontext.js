import { createContext, useState} from "react";

export const ModalContext = createContext()

export function ModalContextProvider(props) {

  // modal
  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false,
    LogOutModal: false,
    CreateTaskModal: false,
    EditTaskModal: false,
  })

  const toggleModals = modal => {
    if(modal === "CreateTask") {
      setModalState({
        signUpModal: false,
        signInModal: true,
        LogOutModal: false,
        CreateTaskModal: true,
        EditTaskModal: false,
      })
    }
    if(modal === "EditTask") {
      setModalState({
        signUpModal: false,
        signInModal: true,
        LogOutModal: false,
        CreateTaskModal: false,
        EditTaskModal: true,
      })
    }
    if(modal === "signIn") {
      setModalState({
        signUpModal: false,
        signInModal: true,
        LogOutModal: false,
        CreateTaskModal: false,
        EditTaskModal: false,
      })
    }
    if(modal === "signUp") {
      setModalState({
        signUpModal: true,
        signInModal: false,
        LogOutModal: false,
        CreateTaskModal: false,
        EditTaskModal: false,
      })
    }
    if(modal === "LogOut") {
      setModalState({
        signUpModal: false,
        signInModal: false,
        LogOutModal: true,
        CreateTaskModal: false,
        EditTaskModal: false,
      })
    }
    if(modal === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false, 
        LogOutModal: false,
        CreateTaskModal: false,
        EditTaskModal: false,
      })
    }
  }

  return (
    <ModalContext.Provider value={{modalState, setModalState, toggleModals}}>
      {props.children}
    </ModalContext.Provider>
  )
  }