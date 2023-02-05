import React, { useState } from "react";
import { createContext } from "react";
import { db } from "../firebase";
import { collection, getDocs} from "firebase/firestore";
import { useEffect } from "react";

export const TaskContext = createContext();

export function Taskdata(props){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");

  const [tasks, setTasks] = useState([]);

  async function getTasks() {
   
    const TasksCol = collection(db, 'tasksdata');
    const TasksSnapshot = await getDocs(TasksCol);
    const TasksList = TasksSnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
    setTasks (TasksList);
  }
    useEffect(getTasks, []);

  //
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
        title, 
        setTitle, 
        description,
        setDescription,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        status,
        setStatus
      }}
    >
     
      {props.children}
    </TaskContext.Provider>
  );
}