import React, { useState } from "react";
import { createContext } from "react";
import { db } from "../firebase";
import { collection, doc, getDocs, updateDoc} from "firebase/firestore";
import { useEffect } from "react";
import { ModalContext } from "./modalcontext";
import { useContext } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props){
  const TasksCollection = collection(db, 'tasksdata');
  async function getTasks() {
   
    
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
  const handleNewSubmit = event => {
    event.preventDefault();
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setModalState(false);
    console.log(newTask.title);
  };

  
  
  const handleDeleteTask = (taskId) => {
    const taskRef = TasksCollection.doc(taskId);
    taskRef.delete();
};
    
 


  const startEditTask = (taskId) => {
    
    const tasktoedit = tasks.find((task) => task.id === taskId);
    setEditingTask(tasktoedit);
    setModalState.EditModalTask(true)
    console.log(tasktoedit.title)
  };

  async function handleUpdateTask ({task})  {
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
    

  return(
    <TaskContext.Provider
      value={{
        TasksCollection,
        tasks, 
        setTasks,
        newTask, 
        setNewTask,
        handleInputChange,
        handleInputChangeEdit,
        handleNewSubmit,
        startEditTask,
        handleDeleteTask,
        handleUpdateTask,
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