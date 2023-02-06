import { Card, CardContent, Button } from "@mui/material"
import { useContext } from "react"
import {TaskContext} from "../../context/taskcontext";
import { useEffect } from "react";
import { getDoc } from "firebase/firestore";
import { useLocation } from "react-router";
import OpenTaskEditButton from "../buttons/edittaskmodal";
import "./task.css";

export default function TaskCard( {task} ){
    const {handleDeleteTask, startEditTask, setEditingTask, TasksSnapshot, TasksCol, setTasks, getTasks, tasks} = useContext(TaskContext);
    const location = useLocation();
   
    return (
        
        <Card sx={{ minWidth: 275 }} key={tasks.id} className="kanban-task">
                <CardContent className="content">
                <h3>{task.title}</h3>
                <p>{task.description} </p>
                <p>{task.startDate} - {task.endDate}</p>
                <div className="task-actions">
                  <Button className="TaskButton" onClick={handleDeleteTask({task})}>Delete</Button>
                  <OpenTaskEditButton/>

                </div>
                </CardContent>
              </Card>
    )
}
