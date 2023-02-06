import React, {useState} from 'react';
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';
import { Button } from '@mui/material';
import { RegisterContext } from '../../../context/registercontext';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from '../../../context/modalcontext';
import { useContext } from 'react';

export const LogOut = () => {
    const {setModalState} = useContext(ModalContext)
    let navigate = useNavigate();
    const handleLogout = () => {               
        signOut(auth).then(() => {
        navigate("/signup")
        setModalState({LogOutModal: false})
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
    const handleCloseModal = () => { setModalState({LogOutModal: false}) }

    return(
                    <div className='registermodal'>  
                        <div className='modal-form-register' >
                        <h2> Voulez-vous vous déconnecter ? </h2>                       
                        <Button onClick={handleCloseModal}>Annuler</Button>
                        <Button onClick={handleLogout}>Se déconnecter</Button>
                        </div>                                         
                                                   
                    </div>
               
       
    )
}