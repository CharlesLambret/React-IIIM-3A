import { ModalContext } from "../../context/modalcontext";
import { useContext } from "react";
import { Button } from "@mui/material";

export default function OpenTaskEditButton (){

    const {setModalState, modalState} = useContext(ModalContext)
   
      const handleOpenEditTaskModal = () => {
        setModalState({ ...modalState, EditTaskModal: true });
      };
      return (
        <Button variant="contained" onClick={handleOpenEditTaskModal}>Modifier</Button>
      )
}