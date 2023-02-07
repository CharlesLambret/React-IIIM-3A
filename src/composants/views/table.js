import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { TaskContext } from "../../context/taskcontext"
import { useContext } from "react";
import { ModalContext } from "../../context/modalcontext";
import OpenTaskCreateButton from "../buttons/opencreatetask"
import {Paper} from "@mui/material"
import "./kanban.css"
import OpenTaskEditButton from "../buttons/edittaskmodal";
import DeleteTaskButton from "../buttons/deletaskbutton";


export default function TaskTable(){
    const {modalState, setModalState} = useContext(ModalContext);
    const {tasks} = useContext(TaskContext);
    
    return (
        <div>
          <h2>Liste des tâches</h2>
          <OpenTaskCreateButton/>
        <TableContainer id="tablecontainer" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Titre</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Date de début</TableCell>
              <TableCell align="right">Date de fin</TableCell>
              <TableCell align="right">Statut</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {tasks.map(task =>(
              <TableRow
                key={task.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="task">
                  {task.title}
                </TableCell>
                <TableCell align="right">{task.description}</TableCell>
                <TableCell align="right">{task.startDate}</TableCell>
                <TableCell align="right">{task.endDate}</TableCell>
                <TableCell align="right">{task.status}</TableCell>
                <TableCell align="right"><OpenTaskEditButton key={task.id} task={task}/></TableCell>
                <TableCell align="right"><DeleteTaskButton key={task.id} task={task}/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
    )
}