import React, { useState } from "react";
import { createContext } from "react";
import { db } from "../firebase";
import { collection, doc, getDocs, updateDoc} from "firebase/firestore";
import { useEffect } from "react";
import { ModalContext } from "./modalcontext";
import { useContext } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props){
  
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
 
  const [editingTask, setEditingTask] = useState({});

  
  const handleInputChangeEdit = event => {
    setTasks({
      ...editingTask,
      [event.target.name]: event.target.value
    });
  };
  
  
  const handleDeleteTask = (taskId) => {

    
};
    
 


  const startEditTask = (taskId) => {
    
    const tasktoedit = tasks.find((task) => task.id === taskId);
    setEditingTask(tasktoedit);
    setModalState.EditModalTask(true)
    console.log(tasktoedit.title)
  };

  return(
    <TaskContext.Provider
      value={{
      
        tasks, 
        setTasks,

        
        handleInputChangeEdit,
       
        startEditTask,
        handleDeleteTask,
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
    
    };
    

  
