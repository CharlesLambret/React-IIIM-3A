import React, { useState } from "react";
import { createContext } from "react";

export const TaskContext = createContext();

export function Data(props){
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
      startDate: "",
      endDate: "",
      status: "en cours"
    },
    {
      id: 3,
      title: "Tâche 3",
      description: "description",
      startDate: "",
      endDate: "",
      status: "recettage"
    },
    {
      id: 4,
      title: "Tâche 4",
      description: "description",
      startDate: "",
      endDate: "",
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
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setShowCreateModal(false);
  };

  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        newTask,
        setNewTask,
        handleInputChange,
        handleSubmit,
        showCreateModal,
        setShowCreateModal
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
