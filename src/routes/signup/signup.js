import React, {useState, useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  CreateUserWithEmailAndPassword  } from 'firebase/auth';
import {auth} from '../../firebase';
import "./register.css";
import { Input } from '@mui/material';
import "./signup.css";
import { RegisterContext } from '../../context/registercontext';
import { NavigationContext } from 'react-router/dist/lib/context';


export const SignUp = () => {
    const {error,setError} = useContext(RegisterContext)
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const {handleSignUp} = useContext(RegisterContext)
   
    }
 
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
 
