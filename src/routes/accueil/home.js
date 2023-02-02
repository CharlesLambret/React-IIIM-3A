import React, { useState, useContext } from "react";
import "./home.css";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {TaskContext} from "../../context/taskcontext";
import CreateTaskModal from "../../composants/modal/task/create";
import EditModalTask from "../../composants/modal/task/edit";
import TaskCard from "../../composants/cards/task";

const Kanban = () => {
  
  const {tasks, setTasks, newTask, handleInputChange, handleSubmit, showCreateModal, setShowCreateModal, editingTask, setEditingTask, handleDeleteTask, handleEditTask, handleSaveTask } = useContext(TaskContext);

  return (
    <div className="dashboard">
      <h2>Kanban des tâches</h2>
      <Button variant="contained" onClick={() => setShowCreateModal(true)}>Ajouter une tâche</Button>
      {showCreateModal && (
        <CreateTaskModal/>
      )}
      <div className="kanban-container">
        
        <div className="kanban-column">
          <h3>Non démarré</h3>
          {tasks
            .filter(tasks => tasks.status === "non démarré")
            .map(task => (
              <TaskCard task={task} />
            ))}
        </div>
        <div className="kanban-column">
          <h3>En cours</h3>
          {tasks
            .filter(task => task.status === "en cours")
            .map(task => (
              <TaskCard task={task}/>
            ))}
        </div>
        <div className="kanban-column">
          <h3>Recettage</h3>
          {tasks
            .filter(task => task.status === "recettage")
            .map(task => (
              <TaskCard task={task}/>
            ))}
        </div>
        <div className="kanban-column">
          <h3>Terminé</h3>
          {tasks
            .filter(task => task.status === "terminé")
            .map(task => (
              <TaskCard task={task}/>
            ))}
          
        </div>
      </div>
      {editingTask !== null ? (
        <EditModalTask/>
      ): null}
    </div>
  );
};

export default Kanban;
