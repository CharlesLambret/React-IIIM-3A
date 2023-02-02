import { Button } from '@mui/material';
import {react, useContext} from 'react';
import { TaskContext } from '../../../context/taskcontext';

export default function CreateTaskModal () {
    const {handleSubmit,newTask, setShowCreateModal, handleInputChange} = useContext(TaskContext)
    return(
        <div className="modal-background">
          <form onSubmit={handleSubmit} className="modal-form">
            <label>
              Titre de la tâche :
              <input
                type="text"
                name="title"
                value={newTask.title}
                onChange = {handleInputChange}
                required
              />
            </label>
            <label>
            Description :
            <input
              type="text"
              name="description"
              value={newTask.description}
              onChange = {handleInputChange}
              required
            />
          </label>
          <label>
            Date de début :
            <input
              type="date"
              name="startDate"
              value={newTask.startDate}
              onChange = {handleInputChange}
              required
            />
          </label>
          <label>
            Date de fin :
            <input
              type="date"
              name="endDate"
              value={newTask.endDate}
              onChange = {handleInputChange}
              required
            />
          </label>

            <label>
              Statut :
              <select
                name="status"
                value={newTask.status}
                onChange = {handleInputChange}
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