import React, {useState} from 'react';
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';
import { Button } from '@mui/material';
import { RegisterContext } from '../../../context/registercontext';

export const LogOut = () => {
    const {showLogOutModal} = React.useContext(RegisterContext)

    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
 
    return(
                    <div>                                            
                        <h1> Voulez-vous vous déconnecter ? </h1>                       
                        <Button onClick={showLogOutModal(false)}>Annuler</Button>
                        <Button onClick={handleLogout}>Se déconnecter</Button>
                                                   
                    </div>
               
       
    )
}