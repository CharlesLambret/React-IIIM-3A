import React, {useState, useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import {auth} from '../../firebase';
import { Input } from '@mui/material';
import "./signup.css";
import { RegisterContext } from '../../context/registercontext';



export const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const handleSignUp = async (e) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(error.origin="register", error.show="true");               
          // ..
        });
    }
    const { error,setError} = useContext(RegisterContext)
   
    
 
  return (
            <div id="pageSignUp">
                <div class="registerform">                  
                    <h1> Créez votre compte </h1>                                                                            
                    <form onSubmit={handleSignUp}>                                                                                            
                        <div class="inputdiv">
                            <label htmlFor="email-address">
                                Adresse email
                            </label>
                            <Input class="input"
                                type="email"
                                label="Email address"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

                        <div class="inputdiv">
                            <label htmlFor="password">
                                Password
                            </label>
                            <Input class="input"
                                type="password"
                                label="Create password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        {error.show &&(
                            <div class="error">
                                <p> {error.message} </p>
                            </div>
                        )
                        }
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
 
