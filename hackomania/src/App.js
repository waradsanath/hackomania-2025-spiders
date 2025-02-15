import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [recents,setRecents] = useState(["Test", "Test", "Test","Test", "Test", "Test", "Test", "Test"])


  return (
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
      </div>
    </div>
  );
}

export default App;
