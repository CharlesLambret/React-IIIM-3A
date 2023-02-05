import { Button } from '@mui/material';
import {react, useContext} from 'react';
import { TaskContext } from '../../../context/taskcontext';
import { db } from '../../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { ModalContext } from '../../../context/modalcontext';

export default function CreateTaskModal () {
    const {TaskCollection, title, setTitle, description, setDescription,  startDate, setStartDate, endDate, setEndDate, status, setStatus} = useContext(TaskContext)
    const {setShowCreateModal} = useContext(ModalContext);

    const posttask = (e) => addDoc(TaskCollection, {
      title: setTitle ,
      description: setDescription,
      startDate: setStartDate,
      endDate: setEndDate,
      status: setStatus
    }); 
    return(
        <div className="modal-background">
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
              
                onChange = {(e) => setStatus(e.target.value)}
                required
              >
                <option value="non démarré">non démarré</option>
                <option value="en cours">en cours</option>
                <option value="recettage">recettage</option>
                <option value="terminé">terminé</option>
              </select>
            </label>
            <Button id="AddtaskButton" variant="contained" type="submit">Ajouter</Button>
            <Button
              type="button"
              onClick={() => setShowCreateModal(false)}
            >
              Annuler
            </Button>
          </form>
        </div>
    );
}