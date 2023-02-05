import {Table, TableHead, TableContainer, TableRow, TableCell, TableBody, Paper} from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React, { useState, useContext } from "react";
import "./home.css";
import {TaskContext} from "../../context/taskcontext";
import CreateTaskModal from "../../composants/modal/task/create";
import EditModalTask from "../../composants/modal/task/edit";
import TaskCard from "../../composants/cards/task";
import { blueGrey } from '@mui/material/colors';

const plus = require('../../Image/plus.png')
const tab = blueGrey[200];

function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Kanban() {
  const {tasks, setTasks, newTask, handleInputChange, handleSubmit, showCreateModal, setShowCreateModal, editingTask, setEditingTask, handleDeleteTask, handleEditTask, handleSaveTask } = useContext(TaskContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  >
          <Tab  label="Kanban" {...a11yProps(0)} />
          <Tab  label="Tableau" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className="dashboard">
      <h2>Kanban des tâches</h2>
    
      {showCreateModal && (
        <CreateTaskModal/>
      )}
      <div  className="kanban-container">

        <div className='box'  >
          <div className='flex'>
            <h3>Non démarré</h3> 
            <img src={plus} alt="" className='img-add' onClick={() => setShowCreateModal(true)}/>
          </div>
          
          <div className="kanban-column" id='non-demarrer'>
            {tasks
              .filter(task => task.status === "non démarré")
              .map(task => (
                <TaskCard task={task}/>
              ))}
          </div>
        </div>

        <div className='box'>
          <div className='flex'>
              <h3>En cours</h3>
            <img src={plus} alt="" className='img-add' onClick={() => setShowCreateModal(true)}/>

           </div>
          <div className="kanban-column" id='en-cours'>
            {tasks
              .filter(task => task.status === "en cours")
              .map(task => (
                <TaskCard task={task}/>
              ))}
          </div>
        </div>

        <div className='box'>
          <div className='flex'>
            <h3>Recettage</h3>
            <img src={plus} alt="" className='img-add' onClick={() => setShowCreateModal(true)}/>

          </div>
          <div className="kanban-column" id='recettage'>
            
            {tasks
              .filter(task => task.status === "recettage")
              .map(task => (
                <TaskCard task={task}/>
              ))}
          </div>
        </div>

        <div className='box'>
          <div className='flex'>
            <h3>Terminé</h3>
            <img src={plus} alt="" className='img-add' onClick={() => setShowCreateModal(true)}/>

          </div>
          <div className="kanban-column" id='terminer'>
            {tasks
              .filter(task => task.status === "terminé")
              .map(task => (
                <TaskCard task={task}/>
              ))}
            </div>
        </div>
      </div>
      {editingTask !== null ? (
        <EditModalTask/>
      ): null}
    </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableContainer component={Paper}>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}