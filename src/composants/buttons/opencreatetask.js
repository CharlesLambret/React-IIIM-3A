import "./buttons.css";
import { ModalContext } from "../../context/modalcontext";
import { useContext } from "react";
import { Button } from "@mui/material";


export default function OpenTaskCreateButton (){

    const {setModalState, modalState, isOnTableTab} = useContext(ModalContext)

      const handleOpenCreateTaskModal = () => {
        setModalState({ ...modalState, CreateTaskModal: true });
      };
      return (
        <div id="createtask" onClick={handleOpenCreateTaskModal}>
        
        <Button className="bouton1" id="CreateButton" alt=""  onClick={handleOpenCreateTaskModal}>
          Ajouter une tâche
          </Button>
        </div>
      )
}