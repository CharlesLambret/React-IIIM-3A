import { Button } from '@mui/material';
import {react, useContext} from 'react';
import { TaskContext } from '../../../context/taskcontext';
import { db } from '../../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { ModalContext } from '../../../context/modalcontext';

export default function CreateTaskModal () {
  const { title, setTitle, description, setDescription,  startDate, setStartDate, endDate, setEndDate, status, setStatus} = useContext(TaskContext)
    const {modalState, setModalState} = useContext(ModalContext);

    const posttask = (e) => addDoc(collection(db, 'tasksdata'), {
      title : "Tâche 5",
      description: "Lorem Ipsum Dolor Sit Amet",
      startDate: "15/01/2001",
      endDate: "13/07/2020",
      status: "Terminé",
    }); 
    const handleCloseModal = () => { setModalState({CreateTaskModal: false}) }
    return(
        <div className="modal-background">
           <i class="closebutton" onClick={handleCloseModal}>✕</i>  
          <form onSubmit={posttask} className="modal-form">
            
            <Button id="AddtaskButton" variant="contained" type="submit">Ajouter</Button>
            <Button
              type="button"
              onClick={handleCloseModal}
            >
              Annuler
            </Button>
          </form>
        </div>
    );
}