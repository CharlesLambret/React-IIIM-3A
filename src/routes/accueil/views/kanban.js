import { Button } from "@mui/material"
import { ModalContext } from "../../../context/modalcontext"
import CreateTaskModal from "../../../composants/modal/task/create"
import TaskCard from "../../../composants/cards/task"
import { TaskContext } from "../../../context/taskcontext"
import EditModalTask from "../../../composants/modal/task/edit"
import { useContext } from "react"
import "./kanban.css"

export default function Kanban({task}){
    const {showCreateModal, setShowCreateModal} = useContext(ModalContext)
    const {tasks, editingTask} = useContext(TaskContext)

    return(
    <div className="dashboard">
      <h2>Kanban des tâches</h2>

      
      <div className="kanban-container">
        
        <div className="kanban-column" id='non-demarrer'>
          <h3>Non démarré</h3>
          {tasks
            .filter(task => task.status === "non démarré")
            .map(task => (
              <TaskCard task={task}/>
            ))}
        </div>
        <div className="kanban-column" id='en-cours'>
          <h3>En cours</h3>
          {tasks
            .filter(task => task.status === "en cours")
            .map(task => (
              <TaskCard task={task}/>
            ))}
        </div>
        <div className="kanban-column" id='recettage'>
          <h3>Recettage</h3>
          {tasks
            .filter(task => task.status === "recettage")
            .map(task => (
              <TaskCard task={task}/>
            ))}
        </div>
        <div className="kanban-column" id='terminer'>
          <h3>Terminé</h3>
          {tasks
            .filter(task => task.status === "terminé")
            .map(task => (
              <TaskCard task={task}/>
            ))}
          
        </div>
      </div>
    </div>
    )
}