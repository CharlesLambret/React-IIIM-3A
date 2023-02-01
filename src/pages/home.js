import React, { useState } from "react";
import "./home.css";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Liste = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tâche 1",
      status: "non démarré"
    },
    {
      id: 2,
      title: "Tâche 2",
      status: "en cours"
    },
    {
      id: 3,
      title: "Tâche 3",
      status: "recettage"
    },
    {
      id: 4,
      title: "Tâche 4",
      status: "terminé"
    }
  ]);
  const handleInputChange = event => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setShowModal(false);
  };
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    status: "non démarré"
  });

  const [editingTask, setEditingTask] = useState(null);

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    setEditingTask(task);
  };

  const handleSaveTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === editingTask.id ? { ...task, ...updatedTask } : task
      )
    );
    setEditingTask(null);
  };

  return (
    <div className="dashboard">
      <h2>Kanban des tâches</h2>
      <Button variant="contained" onClick={() => setShowModal(true)}>Ajouter une tâche</Button>
      {showModal && (
        <div className="modal-background">
          <form onSubmit={handleSubmit} className="modal-form">
            <label>
              Titre de la tâche :
              <input
                type="text"
                name="title"
                value={newTask.title}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Statut :
              <select
                name="status"
                value={newTask.status}
                onChange={handleInputChange}
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
              onClick={() => setShowModal(false)}
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
                <CardContent>
                {task.title}
                <div className="task-actions">
                  <Button class="TaskButton" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                  <Button class="TaskButton" onClick={() => handleEditTask(task.id)}>Edit</Button>
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
                <CardContent>
                {task.title}
                <div className="task-actions">
                  <Button class="TaskButton" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                  <Button class="TaskButton" onClick={() => handleEditTask(task.id)}>Edit</Button>
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
                <CardContent>
                {task.title}
                <div className="task-actions">
                  <Button class="TaskButton" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                  <Button class="TaskButton" onClick={() => handleEditTask(task.id)}>Edit</Button>
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
                <CardContent>
                {task.title}
                <div className="task-actions">
                  <Button class="TaskButton" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                  <Button class="TaskButton" onClick={() => handleEditTask(task.id)}>Edit</Button>
                </div>
                </CardContent>
              </Card>
            ))}
          
        </div>
      </div>
    </div>
  );
};

export default Liste;
