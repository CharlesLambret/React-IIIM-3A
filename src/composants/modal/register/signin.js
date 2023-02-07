import React, {useContext, useState} from 'react';
import {  SignInMethod, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider   } from 'firebase/auth';
import { auth } from '../../../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import { ModalContext } from '../../../context/modalcontext';
import { Modal } from '@mui/material';
import { Button } from '@mui/material';
import "./register.css"
export const SignIn = () => {

    const {modalState, setModalState} = useContext(ModalContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log("user is logged in");
            setModalState({SignInModal: false})
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
       
    }
    const handleCloseModal = () => { setModalState({SignInModal: false}) }
 
    return(
        <>
                    <div className="registermodal">                                                              
                        <i class="closebutton" onClick={handleCloseModal}>✕</i>                
                        <form className="modal-form-register">                                              
                            <div className="label-input">
                                <label htmlFor="email-address">
                                    Adresse email
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div  className="label-input">
                                <label htmlFor="password">
                                    Mot de passe
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div  className="label-input">
                                <Button className="bouton1" variant="contained"                                    
                                    onClick={handleSignIn}                                        
                                >      
                                    Login                                                                  
                                </Button>
                            </div>                               
                        </form>
                       
                        <p>
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                        
                                                   
                    </div>
</>
)
}
