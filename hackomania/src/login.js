import { Link, useNavigate } from "react-router-dom";
import React, {use, useState} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "./firebase/firebase";

function LoginPage() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(false)


    
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate("/")
                // ...
            })
            .catch((error) => {
                setError(true)
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }
    return(
        <div className="App">
            <header className="App-header">
                <a style={{padding: 30, fontWeight:'bold', fontSize:30}}>        Kitchen Copilot</a>

                
            </header>


            <div style={{padding:200}}>
                
                <form className="loginForm" onSubmit={handleLogin}>
                    <b>Login</b>
                    <input type="email" placeholder="insert email here" onChange={e=>setEmail(e.target.value)} />
                    <input type="password" placeholder="insert password" onChange={e=>setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                    {error && <span>Incorrect user email or password. Try again</span>}
                </form>
                <Link to="/SignUp">Don't have an account? Sign up here</Link>
            </div>
        </div>
    );
};

export default LoginPage;