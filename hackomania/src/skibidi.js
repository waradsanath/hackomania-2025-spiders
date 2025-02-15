import { useState } from "react";
import { Link } from "react-router-dom";

function Ingredients() {
  const [rsources,setResources] = useState({
    "Celery" : "5",
    "Brocoli" : "10"
})
    return(
    <div className="App">

      <header className="App-header">
        <a style={{padding: 30, fontWeight:'bold', fontSize:30}}>        Ingredients</a>

        <div className='recents'>
            <p>Recents: </p>
                <Link to="/"> To Home </Link>
        </div>

        
      </header>
      <div className="body2">
        <div style={{flex:3}}>
            <div className="box">
                <b>Ingredients</b>
            </div>


            <div className="box">
              
            </div>
            
        </div>
        <div style={{flex:1}}>
            
        </div>
      </div>
    </div>
    );
};

export default Ingredients;