import React, {useContext, useState} from 'react';
import {  SignInMethod, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider   } from 'firebase/auth';
import { auth } from '../../../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import { ModalContext } from '../../../context/modalcontext';
import { Modal, TextField } from '@mui/material';
import { Button } from '@mui/material';
import "./register.css";

export const SignIn = () => {
    const {modalState, setModalState} = useContext(ModalContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const provider = new GoogleAuthProvider();
    
    const handleGoogle = (e) => {
        e.preventDefault();
        signInWithRedirect(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user.email)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        })
    }


    const onSignIn = (e) => {
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
       
    }
    
 
    return(
        <>
        <Modal open={modalState} onClose={() => setModalState(false)}>
                    <div class="registerform">                                            
                        <p> Login </p>                       
                                                       
                        <form onSubmit={onSignIn}>                                              
                            <div class="inputdiv">
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <TextField
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div class="inputdiv">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <TextField
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div class="inputdiv">
                                <button type="submit">S'inscrire                                          
                                </button>
                            </div>                               
                        </form>
                        <Button class="btngoogle" variant="contained" onClick={handleGoogle}>Se connecter avec Google</Button>
                        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                        
                                                   
                    </div>
                    </Modal>
</>
)
}

