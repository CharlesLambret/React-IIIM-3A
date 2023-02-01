import React, { useState, useContext } from "react";
import "./home.css";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {TaskContext} from "../context/taskcontext";

const Liste = () => {
  const {tasks, setTasks, newTask, handleInputChange, handleSubmit, showCreateModal, setShowCreateModal } = useContext(TaskContext);



  const [editingTask, setEditingTask] = useState(null);

  const handleSaveTask = (editingTask) => {
    setTasks(
    tasks.map((task) =>
    task.id === editingTask.id ? { ...task, ...editingTask } : task
    )
    );
    setEditingTask(null);
    };
    
    const handleEditTask = (id) => {
    setEditingTask(tasks.find((task) => task.id === id));
    };
    
    const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    };

  return (
    <div className="dashboard">
      <h2>Kanban des tâches</h2>
      <Button variant="contained" onClick={() => setShowCreateModal(true)}>Ajouter une tâche</Button>
      {showCreateModal && (
        <div className="modal-background">
          <form onSubmit={handleSubmit} className="modal-form">
            <label>
              Titre de la tâche :
              <input
                type="text"
                name="title"
                value={newTask.title}
                showCreateModal
                required
              />
            </label>
            <label>
            Description :
            <input
              type="text"
              name="description"
              value={newTask.description}
              showCreateModal
              required
            />
          </label>
          <label>
            Date de début :
            <input
              type="date"
              name="startDate"
              value={newTask.startDate}
              showCreateModal
              required
            />
          </label>
          <label>
            Date de fin :
            <input
              type="date"
              name="endDate"
              value={newTask.endDate}
              showCreateModal
              required
            />
          </label>

            <label>
              Statut :
              <select
                name="status"
                value={newTask.status}
                showCreateModal
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
      )}
      <div className="kanban-container">
        
        <div className="kanban-column">
          <h3>Non démarré</h3>
          {tasks
            .filter(task => task.status === "non démarré")
            .map(task => (
              <Card sx={{ minWidth: 275 }} key={task.id} className="kanban-task">
                <CardContent className="content">
                {task.title}
                {task.description}
                <div className="Dates">
                  {task.startDate}
                  {task.endDate}
                </div>
                <div className="task-actions">
                  <Button className="TaskButton" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                  <Button className="TaskButton" onClick={() => handleEditTask(task.id)}>Edit</Button>
                </div>
                </CardContent>
              </Card>
            ))}
        </div>
        <div className="kanban-column">
          <h3>En cours</h3>
          {tasks
            .filter(task => task.status === "en cours")
            .map(task => (
             <Card sx={{ minWidth: 275 }} key={task.id} className="kanban-task">
                <CardContent className="content">
                {task.title}
                {task.description}
                {task.startDate}
                {task.endDate}
                <div className="task-actions">
                  <Button className="TaskButton" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                  <Button className="TaskButton" onClick={() => handleEditTask(task.id)}>Edit</Button>
                </div>
                </CardContent>
              </Card>
            ))}
        </div>
        <div className="kanban-column">
          <h3>Recettage</h3>
          {tasks
            .filter(task => task.status === "recettage")
            .map(task => (
             <Card sx={{ minWidth: 275 }} key={task.id} className="kanban-task">
                <CardContent className="content">
                {task.title}
                {task.description}
                {task.startDate}
                {task.endDate}
                <div className="task-actions">
                  <Button className="TaskButton" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                  <Button className="TaskButton" onClick={() => handleEditTask(task.id)}>Edit</Button>
                </div>
                </CardContent>
              </Card>
            ))}
        </div>
        <div className="kanban-column">
          <h3>Terminé</h3>
          {tasks
            .filter(task => task.status === "terminé")
            .map(task => (
              <Card sx={{ minWidth: 275 }} key={task.id} className="kanban-task">
                <CardContent className="content">
                {task.title}
                {task.description}
                {task.startDate}
                {task.endDate}
                <div className="task-actions">
                  <Button className="TaskButton" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                  <Button className="TaskButton" onClick={() => handleEditTask(task.id)}>Edit</Button>
                </div>
                </CardContent>
              </Card>
            ))}
          
        </div>
      </div>
      {editingTask && (
        <div className="modal-background">
          <form
            onSubmit={() => handleSaveTask(editingTask)}
            className="modal-form"
          >
            <label>
              Titre de la tâche :
              <input
                type="text"
                name="title"
                placeholder={editingTask.title}
                
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Description :
              <input
                type="text"
                name="description"
                placeholder={editingTask.description}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Date de début :
              <input
                type="date"
                name="startDate"
                placeholder={editingTask.startDate}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Date de fin :
              <input
                type="date"
                name="endDate"
                placeholder={editingTask.endDate}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Statut :
              <select
                name="status"
                value={editingTask.status}
                placeholder={editingTask.status}
                onChange={handleInputChange}
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
      )}
    </div>
  );
};

export default Liste;
