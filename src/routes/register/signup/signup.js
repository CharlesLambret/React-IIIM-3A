import React, {useState, useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import {auth} from '../../../firebase';
import { Input } from '@mui/material';
import "./signup.css";
import { RegisterContext } from '../../../context/registercontext';
import {Button} from '@mui/material';


export const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {errorMessage,setErrorMessage, showLogOut, setShowLogOut} = useContext(RegisterContext);

    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== ''){
          if (password !== confirmPassword) {
            isValid = false
            setErrorMessage('Passwords does not match')
          }
        }
        return isValid
      }
    let navigate = useNavigate();
    const handleSignUp = e => {
        e.preventDefault()
        setErrorMessage('')
        if(validatePassword()) {
          // Create a new user with email and password using firebase
            createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setShowLogOut(true);
                const user = res.user;
                console.log(res.user)
                navigate("/home")
              })
            .catch((error) => 
                {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)}
                
                )
        }
        setEmail('')
        setPassword('')
        setConfirmPassword('')
      }
    
   
    
 
  return (
            <div  class="global" id="pageSignUp">
                
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
                        <div class="inputdiv">
                            <label htmlFor="passwordconfirmation">  
                                Password confirmation
                            </label>
                            <Input class="input"
                                type="password"
                                label="Confirm password"
                                name="passwordconfirmation"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                placeholder="Password confirmation"
                            />
                        </div>                                       
                        {errorMessage !== '' &&(
                            <div class="error">
                                <p> {errorMessage} </p>
                            </div>
                        )
                        }
                        <Button type="submit" value="submit">Créer un compte</Button>                                                             
                    </form>
                                 
                </div>
            </div>
        
  )
}
 
