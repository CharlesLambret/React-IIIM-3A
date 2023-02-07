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
      title : title,
      description: description,
      startDate: startDate,
      endDate: endDate,
      status: status,
    }); 
    
    const handleStatusChange = (e) => {
      setStatus(e.target.value);
      console.log(status);
    };
    const handleCloseModal = () => { setModalState({CreateTaskModal: false}) }
    return(
        <div className="modal-background">
           <i class="closebutton" onClick={handleCloseModal}>✕</i>  
          <form onSubmit={posttask} className="modal-form">
            <label>
              Titre de la tâche :
              <input
                type="text"
                name="title"
                onChange = {(e) => setTitle(e.target.value)}
                required
              />
            </label>
            <label>
            Description :
            <input
              type="text"
              name="description"
              onChange = {(e) => setDescription(e.target.value)}
              required
            />
          </label>
          <label>
            Date de début :
            <input
              type="date"
              name="startDate"
              onChange = {(e) => setStartDate(e.target.value)}
              required
            />
          </label>
          <label>
            Date de fin :
            <input
              type="date"
              name="endDate"
              onChange = { (e) => setEndDate(e.target.value)}
              required
            />
          </label>

            <label>
              Statut :
              <select
                name="status"
                defaultValue="Non démarré"
                onChange = {handleStatusChange}
                required
              >
                <option value="Non démarré">Non démarré</option>
                <option value="En cours">En cours</option>
                <option value="Recettage">Recettage</option>
                <option value="Terminé">Terminé</option>
              </select>
            </label>
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