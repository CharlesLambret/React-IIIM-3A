import { TaskContext } from "../../../context/taskcontext"
import {useContext } from "react";
import { Button } from "@mui/material";
import { ModalContext } from "../../../context/modalcontext";
import "./taskcrud.css"

export default function EditModalTask () {


  const {title, setTitle, description, setDescription,  startDate, setStartDate, endDate, setEndDate, status, setStatus, handleNewSubmit} = useContext(TaskContext)
  const {modalState, setModalState} = useContext(ModalContext);
  
  const handleClose  = () => {
    setModalState({ ...modalState, EditModalTask: false });
    console.log("Modal fermée")
  };

    return(
          <div className="modal-background">
            <form onSubmit={handleNewSubmit}>
              <label htmlFor="title">Titre :</label>
              <input
                type="text"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />
        
              <label htmlFor="description">Description :</label>
              <textarea
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
        
              <label htmlFor="startDate">Date de début :</label>
              <input
                type="date"
                name="startDate"
                onChange={(e) => setStartDate(e.target.value)}
              />
        
              <label htmlFor="end-date">Date de fin :</label>
              <input
                type="date"
                name="endDate"
                onChange={(e) => setEndDate(e.target.value)}
              />
        
              <label htmlFor="status">Statut :</label>
              <select
                name="status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="non démarré">non démarré</option>
                <option value="en cours">en cours</option>
                <option value="recettage">recettage</option>
                <option value="terminé">terminé</option>
              </select>
              <Button variant="contained" value="submit" type="submit">Modifier</Button>
              <Button variant="text" onClick={handleClose}>Annuler</Button>
            </form>
          </div>
    )
}
