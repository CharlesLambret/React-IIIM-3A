import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import {auth} from '../../../firebase';
import "./register.css";
import { TextField } from '@mui/material';

export const SignUp = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
        
   
    }
 
  return (
            <div>
                <div class="registerform">                  
                    <h1> Créez votre compte </h1>                                                                            
                    <form onSubmit={onSubmit}>                                                                                            
                        <div class="inputdiv">
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <TextField class="input"
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

                        <div class="inputdiv">
                            <label htmlFor="password">
                                Password
                            </label>
                            <TextField class="input"
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        
                        <button
                            type="submit" 
                        >
                            Sign up                                
                        </button>
                                                                     
                    </form>
                                 
                </div>
            </div>
        
  )
}
 
