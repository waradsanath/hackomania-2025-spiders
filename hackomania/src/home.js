import { useState } from "react";
import {Link} from 'react-router-dom'

function HomePage() {
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
            <Link to="/Login">Log Out</Link>

            </div>
        </header>


        <div className="body">
            <div className='box'>
                <Link style={{fontSize: 25, color:"#FFFFFF"}} to="/Ingredients">My Pantry</Link>
            </div>
            <div className='box'>
                <Link style={{fontSize: 25, color:"#FFFFFF"}} to="/Gemini">To Gemini</Link>
            </div>
            <div className='box'>
                <Link style={{fontSize: 25, color:"#FFFFFF"}} to="/Context">To Context</Link>
            </div>
        </div>
        </div>
    )
}

export default HomePage;