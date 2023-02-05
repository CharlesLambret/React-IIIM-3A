import { ModalContext } from "../../context/modalcontext";
import { useContext } from "react";
const plus = require("../../Image/plus.png");
export default function OpenTaskCreateButton (){

    const {setModalState, modalState} = useContext(ModalContext)
   
      const handleOpenCreateTaskModal = () => {
        setModalState({ ...modalState, CreateTaskModal: true });
      };
      return (
        <img src={plus} alt="" className='img-add' onClick={handleOpenCreateTaskModal}/>
      )
}