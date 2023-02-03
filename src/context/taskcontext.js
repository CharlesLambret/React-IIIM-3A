import React, { useState } from "react";
import { createContext } from "react";

export const TaskContext = createContext();

export function Taskdata(props){
  
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tâche 1",
      description: "description",
      startDate: "15/01/2021",
      endDate: "12/03/2022",
      status: "non démarré"
    },
    {
      id: 2,
      title: "Tâche 2",
      description: "description",
      startDate: "12/02/2025",
      endDate: "25/06/2027",
      status: "en cours"
    },
    {
      id: 3,
      title: "Tâche 3",
      description: "description",
      startDate: "15/07/1982",
      endDate: "25/03/2023",
      status: "recettage"
    },
    {
      id: 4,
      title: "Tâche 4",
      description: "description",
      startDate: "15/01/1999",
      endDate: "30/01/2000",
      status: "terminé"
    }
  ]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "non démarré"
  });

  const handleInputChange = event => {
    setEditingTask({
      ...newTask,
      [event.target.name]: event.target.value
    });
  };
  const handleInputChangeEdit = event => {
    setTasks({
      ...tasks,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setShowCreateModal(false);
    console.log(newTask.title);
  };

  const [showCreateModal, setShowCreateModal] = useState(false);

  const [editingTask, setEditingTask] = useState(null);
  
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    setEditingTask(task);
    console.log(setEditingTask.title)
  };

  const handleSaveTask = (editingTask) => {
    setTasks(
    [...tasks, {id : editingTask.id, title : editingTask.title, description : editingTask.description, startDate : editingTask.startDate, endDate : editingTask.endDate, status : editingTask.status}],
    )
    console.log(editingTask.title)
    setEditingTask(null);
    };
    

  return (
    <TaskContext.Provider
      value={{
        tasks, 
        setTasks,
        newTask, 
        setNewTask,
        handleInputChange,
        handleInputChangeEdit,
        handleSubmit,
        handleEditTask,
        handleDeleteTask,
        handleSaveTask,
        showCreateModal, 
        setShowCreateModal,
        editingTask, 
        setEditingTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}