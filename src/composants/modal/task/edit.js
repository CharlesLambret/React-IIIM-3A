import { TaskContext } from "../../../context/taskcontext"
import {react, useContext } from "react";
import { Button } from "@mui/material";

export default function EditModalTask () {


    const {handleSaveTask, editingTask, handleInputChangeEdit, setEditingTask } = useContext(TaskContext);
    return(
        <div className="modal-background">
          <form
            onSubmit={handleSaveTask}
            className="modal-form"
          >
            <label>
              Titre de la tâche :
              <input
                type="text"
                name="title"
                placeholder={editingTask.title}
                value={setEditingTask.title}
                onChange={handleInputChangeEdit}
                required
                
              />
            </label>
            <label>
              Description :
              <input
                type="text"
                name="description"
                placeholder={editingTask.description}
                value={setEditingTask.description}
                onChange={handleInputChangeEdit}
                required
                
              />
            </label>
            <label>
              Date de début :
              <input
                type="date"
                name="startDate"
                placeholder={editingTask.startDate}
                value={setEditingTask.startDate}
                onChange={handleInputChangeEdit}
                required
                
              />
            </label>
            <label>
              Date de fin :
              <input
                type="date"
                name="endDate"
                placeholder={editingTask.endDate}
                value={setEditingTask.endDate}
                onChange={handleInputChangeEdit}
                required
                
              />
            </label>
            <label>
              Statut :
              <select
                name="status"
                value={setEditingTask.status}
                placeholder={editingTask.status}
                onChange={handleInputChangeEdit}
                required
                
                
              >
                <option value="non démarré">non démarré</option>
                <option value="en cours">en cours</option>
                <option value="recettage">recettage</option>
                <option value="terminé">terminé</option>
              </select>
            </label>
            <Button variant="contained" type="submit">
              Enregistrer
            </Button>
            <Button
              type="button"
              onClick={() => setEditingTask(null)}
            >
              Annuler
            </Button>
          </form>
        </div>
    )
}
