import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React, { useContext } from "react";
import Kanban from './views/kanban';
import TaskTable from './views/table';
import { TaskContext } from '../../context/taskcontext';
import CreateTaskModal from '../../composants/modal/task/create';
import EditModalTask from '../../composants/modal/task/edit';
import {ModalContext} from '../../context/modalcontext';
import { SignIn } from '../../composants/modal/register/signin';
import { LogOut } from '../../composants/modal/register/logout';
import "./home.css"
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

export default function Home() {
  const [value, setValue] = React.useState(0);
  const {showCreateModal, setShowCreateModal, editingTask} = useContext(TaskContext);
  const {modalState, setModalState} = useContext(ModalContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpenCreateTaskModal = () => {
    setModalState({ ...modalState, CreateTaskModal: true });
  };

  return (
    <div className="dashboarddiv">
      <Button variant="contained" id="bouton1"  onClick={handleOpenCreateTaskModal}>Ajouter une tâche</Button>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" id ="tab">
          <Tab  label="Kanban" {...a11yProps(0)} />
          <Tab  label="Tableau" {...a11yProps(1)} />
        </Tabs>
      </Box>
      
      {modalState.CreateTaskModal && <CreateTaskModal />}
      {modalState.EditTaskModal && <EditModalTask />}
      {modalState.signInModal && <SignIn/> }
      {modalState.LogOutModal && <LogOut/>} 
      <TabPanel value={value} index={0}>
        <Kanban/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TaskTable/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
    
    </div>
    
  );
}