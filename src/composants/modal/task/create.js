import { Button, TextField , FormControl, MenuItem } from '@mui/material';
import {useContext} from 'react';
import { TaskContext } from '../../../context/taskcontext';
import { db } from '../../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { ModalContext } from '../../../context/modalcontext';
import "./taskcrud.css" 
import DescriptionInput from './inputs/description';
import TitleInput from './inputs/title';
import EndDateInput from './inputs/enddate';
import StartDateInput from './inputs/startdate';
import StatusInput from './inputs/status';
import { doc, setDoc } from "firebase/firestore";  

export default function CreateTaskModal () {
    const {title, setTitle, description, setDescription,  startDate, setStartDate, endDate, setEndDate, status, setStatus} = useContext(TaskContext)
    const {modalState, setModalState} = useContext(ModalContext);

    async function posttask(e) {
      e.preventDefault();
      await addDoc(doc(db, 'tasksdata'), {
          title: {title},
          description : {description},
          startDate : {startDate},
          endDate: {endDate},
          status: {status}, 
      }); 
  };
  const handleCloseCreateTaskModal = () => {
    setModalState({ ...modalState, CreateTaskModal: false });
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
            <Button id="AddtaskButton" variant="contained" value="submit" type="submit">Ajouter</Button>
            <Button
              type="button"
              onClick={handleCloseCreateTaskModal}
            >
              Annuler
            </Button>
            </div>
            
          </FormControl>
        </div>
    );
}