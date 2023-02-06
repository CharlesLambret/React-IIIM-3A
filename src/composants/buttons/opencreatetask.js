import "./buttons.css";
import { ModalContext } from "../../context/modalcontext";
import { useContext } from "react";
const plus = require("../../Image/plus.png");


export default function OpenTaskCreateButton (){

    const {setModalState, modalState, isOnTableTab} = useContext(ModalContext)

      const handleOpenCreateTaskModal = () => {
        setModalState({ ...modalState, CreateTaskModal: true });
      };
      return (
        <div id="createtask" onClick={handleOpenCreateTaskModal}>
        {isOnTableTab && (
          <p>Ajouter une tâche </p>
        )
        }
        <img src={plus} id="CreateButton" alt="" className='img-add' onClick={handleOpenCreateTaskModal}/>
        </div>
      )
}