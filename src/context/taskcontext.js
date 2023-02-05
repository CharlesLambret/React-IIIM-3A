import React, { useState } from "react";
import { createContext } from "react";
import { db } from "../firebase";
import { collection, doc, getDocs, updateDoc} from "firebase/firestore";
import { useEffect } from "react";
import { ModalContext } from "./modalcontext";
import { useContext } from "react";

export const TaskContext = createContext();

export function Taskdata(props){
  async function getTasks() {
   
    const TasksCollection = collection(db, 'tasksdata');
    const TasksSnapshot = await getDocs(TasksCollection);
    const TasksList = TasksSnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
    setTasks (TasksList);
  }
    useEffect(getTasks, []);

  const {modalState, setModalState} = useContext(ModalContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");

  const [tasks, setTasks] = useState([]);

 
  //
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "non démarré"
  });
  const [editingTask, setEditingTask] = useState({});

  const handleInputChange = event => {
    setTasks({
      ...newTask,
      [event.target.name]: event.target.value
    });
  };
  const handleInputChangeEdit = event => {
    setTasks({
      ...editingTask,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setModalState(false);
    console.log(newTask.title);
  };

  
  
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const startEditTask = (taskId) => {
    
    const task = tasks.find((task) => task.id === taskId);
    setEditingTask(task);
    setModalState.EditModalTask(true)
    console.log(task.title)
  };

  async function handleUpdateTask (task)  {
    updateDoc(doc(db, 'tasksdata', task.id), {
      title : task.title,
      description : task.description,
      startDate : task.startDate,
      endDate : task.endDate,
      status : task.status
    }).then(() => {

      setEditingTask(null);
    })
    
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
        startEditTask,
        handleDeleteTask,
        handleUpdateTask,
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