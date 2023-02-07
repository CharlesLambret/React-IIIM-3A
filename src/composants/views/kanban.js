import { ModalContext } from "../../context/modalcontext"
import TaskCard from "../cards/task"
import { TaskContext } from "../../context/taskcontext"
import { useContext } from "react"
import "./kanban.css"
import { blueGrey } from '@mui/material/colors';
import OpenTaskCreateButton from "../buttons/opencreatetask"

const plus = require('../../Image/plus.png')
const tab = blueGrey[200];

export default function Kanban({task}){
    const {showCreateModal, setShowCreateModal} = useContext(ModalContext)
    const {tasks, editingTask} = useContext(TaskContext)
    
    return(
    <div className="dashboard">
      <h2>Kanban des tâches</h2>

      <OpenTaskCreateButton/>
      <div  className="kanban-container">

<div className='box'  >
  <div className='flex'>
    <h3>Non démarré</h3> 
    
  </div>
  
  <div className="kanban-column" id='non-demarrer'>
    {tasks
      .filter(task => task.status === "non démarré")
      .map(task => (
        <TaskCard task={task}/>
      ))}
  </div>
</div>

<div className='box'>
  <div className='flex'>
      <h3>En cours</h3>
    

   </div>
  <div className="kanban-column" id='en-cours'>
    {tasks
      .filter(task => task.status === "en cours")
      .map(task => (
        <TaskCard task={task}/>
      ))}
  </div>
</div>

<div className='box'>
  <div className='flex'>
    <h3>Recettage</h3>
    

  </div>
  <div className="kanban-column" id='recettage'>
    
    {tasks
      .filter(task => task.status === "recettage")
      .map(task => (
        <TaskCard task={task}/>
      ))}
  </div>
</div>

<div className='box'>
  <div className='flex'>
    <h3>Terminé</h3>
    

  </div>
  <div className="kanban-column" id='terminer'>
    {tasks
      .filter(task => task.status === "terminé")
      .map(task => (
        <TaskCard key = {task.id} task={task}/>
            ))}
          
        </div>
      </div>
    </div>
    </div>
    )
}