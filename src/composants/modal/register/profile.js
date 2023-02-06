import './register.css'
import { user } from '../../../firebase'
import { ModalContext } from '../../../context/modalcontext'
import { useContext } from 'react'

export default function ProfileModal() {
    const {setModalState} = useContext(ModalContext)

    const handleCloseModal = () => { setModalState({ProfileModal: false}) }

  return (
    <div className='registermodal'>
         <i class="closebutton" onClick={handleCloseModal}>✕</i>  
      <div className='modal-form-register'>
        <h1>Profile</h1>
        <p><strong>Email: </strong>{user?.email}</p>
      </div>
    </div>
  )
}
