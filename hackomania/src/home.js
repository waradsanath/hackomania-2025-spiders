import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate()
    return(
        <div className="App">

        <header className="App-header">
            <a style={{padding: 30, fontWeight:'bold', fontSize:30}}>        Kitchen Copilot</a>

            <div className='recents'>
                {/* <p>Recents: </p>

                {recents.map((recent)=>{
                return(
                <p style={{marginLeft: 5,}}> 
                    {recent}
                </p>
                )
            })} */}
            <button onClick={()=>{navigate("/")}} className="HeaderNav">Home</button>
            <button onClick={()=>{navigate("/Gemini")}} className="HeaderNav">Generate Recipies</button>
            <button onClick={()=>{navigate("/Login")}} className="logut">Log Out</button>

            </div>
        </header>


        <div className="body">
            <div style={{flexDirection:"row"}}>
                <div className='box' style={{padding:93,flex:1}}>
                    <Link style={{fontSize: 30, color:"#FFFFFF"}} to="/Ingredients">My Pantry</Link>
                </div>
                <div className='box' style={{flex:1,padding:93}}>
                    <Link style={{fontSize: 30, color:"#FFFFFF"}} to="/Gemini">Generate Recipies</Link>
                </div>
                <div className='box' style={{flex:1,padding:92}}>
                    
                    <Link style={{fontSize: 30, color:"#FFFFFF"}} to="/Context">To Context</Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HomePage;
                