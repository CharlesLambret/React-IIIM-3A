import { ModalContext } from "../../context/modalcontext";
import { useContext } from "react";
import CreateTaskModal from "./task/create";
import EditModalTask from "./task/edit";
import { SignIn } from "./register/signin";
import { LogOut } from "./register/logout";
import ProfileModal from "./register/profile";


export default function ModalRender() {
  const { modalState, setModalState } = useContext(ModalContext);

  return (
    <div>
      {modalState.CreateTaskModal && <CreateTaskModal />}
      {modalState.EditTaskModal && <EditModalTask />}
      {modalState.signInModal && <SignIn />}
      {modalState.LogOutModal && <LogOut />}
      {modalState.ProfileModal && <ProfileModal />}
    </div>
  );
}