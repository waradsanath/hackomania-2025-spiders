import { useState } from "react";
import {Link} from 'react-router-dom'

function HomePage() {
    const [recents, setRecents] = useState(["NIL", "Test", "test", "ttest", "Test"])
    return(
        <div className="App">

        <header className="App-header">
            <a style={{padding: 30, fontWeight:'bold', fontSize:30}}>        Kitchen Copilot</a>

            <div className='recents'>
                <p>Recents: </p>

                {recents.map((recent)=>{
                return(
                <p style={{marginLeft: 5,}}> 
                    {recent}
                </p>
                )
            })}

            </div>
        </header>


        <div className="body">
            <div className='box'>
            <li>
                <Link style={{fontSize: 20, color:"#FFFFFF"}} to="/Ingredients"> My Pantry</Link>
            </li>
            </div>
        </div>
        </div>
    )
}

export default HomePage;