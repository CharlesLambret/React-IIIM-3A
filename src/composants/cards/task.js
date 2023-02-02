import { Card, CardContent, Button } from "@mui/material"
import { useContext } from "react"
import {TaskContext} from "../../context/taskcontext";


export default function TaskCard( {task} ){
    const {handleDeleteTask, handleEditTask, setEditingTask} = useContext(TaskContext);
    return (
        
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
                  <Button className="TaskButton" onClick={() => {
                                                                    handleEditTask(task.id);
                                                        
                                                                }}>Edit</Button>

                </div>
                </CardContent>
              </Card>
    )
}
