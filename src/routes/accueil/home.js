
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React, { useState, useContext } from "react";
import "./home.css";
import { Button } from "@mui/material";
import {TaskContext} from "../../context/taskcontext";
import CreateTaskModal from "../../composants/modal/task/create";
import EditModalTask from "../../composants/modal/task/edit";
import TaskCard from "../../composants/cards/task";

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
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Kanban" {...a11yProps(0)} />
          <Tab label="Tableau" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className="dashboard">
      <h2>Kanban des tâches</h2>
      <Button variant="contained" id="bouton" onClick={() => setShowCreateModal(true)}>Ajouter une tâche</Button>
      {showCreateModal && (
        <CreateTaskModal/>
      )}
      <div className="kanban-container">
        
        <div className="kanban-column" id='non-demarrer'>
          <h3>Non démarré</h3>
          {tasks
            .filter(tasks => tasks.status === "non démarré")
            .map(task => (
              <TaskCard task={task} />
            ))}
        </div>
        <div className="kanban-column" id='en-cours'>
          <h3>En cours</h3>
          {tasks
            .filter(task => task.status === "en cours")
            .map(task => (
              <TaskCard task={task}/>
            ))}
        </div>
        <div className="kanban-column" id='recettage'>
          <h3>Recettage</h3>
          {tasks
            .filter(task => task.status === "recettage")
            .map(task => (
              <TaskCard task={task}/>
            ))}
        </div>
        <div className="kanban-column" id='terminer'>
          <h3>Terminé</h3>
          {tasks
            .filter(task => task.status === "terminé")
            .map(task => (
              <TaskCard task={task}/>
            ))}
          
        </div>
      </div>
      {editingTask !== null ? (
        <EditModalTask/>
      ): null}
    </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}