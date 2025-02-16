import { Link, useNavigate } from "react-router-dom";
import React, {use, useState} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "./firebase/firebase";

function SignUpPage() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError]  = useState(true)

    const navigate = useNavigate()

    const handleSignUp = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            navigate("/Login")
        })
        .catch((error) => {
            
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode)
            
            // ..
        });

    }
    return(
        <div className="App">
            <header className="App-header">
                <a style={{padding: 30, fontWeight:'bold', fontSize:30}}>        Kitchen Copilot</a>

                
            </header>


            <div>
                
                <form className="loginForm" onSubmit={handleSignUp}>
                    <b>Sign up</b>
                    <input type="email" placeholder="insert email here" onChange={e=>setEmail(e.target.value)} />
                    <input type="password" placeholder="insert password" onChange={e=>setPassword(e.target.value)} />
                    <button type="submit">Sign up</button>
                    
                    
                </form>
                <Link to="/Login">Already have an account? Login here</Link>
            </div>
        </div>
    );
};

export default SignUpPage;