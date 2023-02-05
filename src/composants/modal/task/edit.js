import { TaskContext } from "../../../context/taskcontext"
import {react, useContext } from "react";
import { Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import TitleInput from "./inputs/title";
import DescriptionInput from "./inputs/description";
import StartDateInput from "./inputs/startdate";
import EndDateInput from "./inputs/enddate";
import StatusInput from "./inputs/status";
import { ModalContext } from "../../../context/modalcontext";
import "./taskcrud.css"

export default function EditModalTask () {


    
    const {handleSaveTask, editingTask, handleInputChangeEdit, setEditingTask } = useContext(TaskContext);

    return(
        <div className="modal-background">
          <FormControl onSubmit={handleSaveTask} class="modal-form">
            
            <TitleInput placeholder={editingTask.title} onChange={handleInputChangeEdit}
                 />
            <DescriptionInput placeholder={editingTask.description} onChange={handleInputChangeEdit}/>
          
          
            
            
            <StartDateInput onChange={handleInputChangeEdit}/>
          
          
            <EndDateInput onChange={handleInputChangeEdit} />
            <StatusInput onChange={handleInputChangeEdit} placeholder={editingTask.status}/>
            <div class="buttonrow">
            <Button id="AddtaskButton" variant="contained" type="submit">Ajouter</Button>
            <Button
              type="button"
              onClick={() => setEditingTask(null)}
            >
              Annuler
            </Button>
            </div>
            
          </FormControl>
          
        </div>
    )
}
