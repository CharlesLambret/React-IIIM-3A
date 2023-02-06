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
import Navbar from '../../composants/navbar/navbar';
import BasicTabs from './tabpanel';


export default function Home() {
  const {showCreateModal, setShowCreateModal, editingTask} = useContext(TaskContext);
  const {modalState, setModalState} = useContext(ModalContext);

  return (
    <div className="dashboarddiv">
      <Navbar/>
      {modalState.CreateTaskModal && <CreateTaskModal />}
      {modalState.EditTaskModal && <EditModalTask />}
      {modalState.signInModal && <SignIn/> }
      {modalState.LogOutModal && <LogOut/>} 
      <BasicTabs/>
    </div>
    
  );
}