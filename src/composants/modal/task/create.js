import { Button, TextField, FormControl, MenuItem } from '@mui/material';
import {react, useContext} from 'react';
import { TaskContext } from '../../../context/taskcontext';
import { db } from '../../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { ModalContext } from '../../../context/modalcontext';

import "./taskcrud.css" 
import Status from './inputs/status';
import DescriptionInput from './inputs/description';
import TitleInput from './inputs/title';
import EndDateInput from './inputs/enddate';
import StartDateInput from './inputs/startdate';
import StatusInput from './inputs/status';

export default function CreateTaskModal () {
    const {title, setTitle, description, setDescription,  startDate, setStartDate, endDate, setEndDate, status, setStatus} = useContext(TaskContext)
    const {setShowCreateModal} = useContext(ModalContext);

    const posttask = (e) => {
      e.preventDefault();
      addDoc(collection(db, 'tasksdata'), {
          title: title,
          description : description,
          startDate : startDate,
          endDate: endDate,
          status: status, 
      }); 
  };
    
    return(
        <div className="modal-background">
          <FormControl onSubmit={posttask} className="modal-FormControl">
            
            <TitleInput onChange = {(e) => setTitle(e.target.value)}/>
            <DescriptionInput onChange = {(e) => setDescription(e.target.value)}/>
          
          
            
            
            <StartDateInput onChange = {(e) => setStartDate(e.target.value)}/>
          
          
            <EndDateInput onChange = {(e) => setEndDate(e.target.value)}/>
            <StatusInput onChange = {(e) => setStatus(e.target.value)}/>
            <div class="buttonrow">
            <Button id="AddtaskButton" variant="contained" type="submit">Ajouter</Button>
            <Button
              type="button"
              onClick={() => setShowCreateModal(null)}
            >
              Annuler
            </Button>
            </div>
            
          </FormControl>
        </div>
    );
}