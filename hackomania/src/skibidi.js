import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Ingredients() {
  const [resources,setResources] = useState([
    {"Celery":5},
    {"Brocoli":5},
    {"Beef":5},
    {"Chicken":5},
    {"Alex":5},
    {"Cauliflower":5},
    {"Chips":5}
  ]);

  const [newName,setNewName] = useState("");
  const [newQuantity,setNewQuantity] = useState("");

  const handleNewItem = () => {
    const newResources = [resources, {newName: parseInt(newQuantity)}]
    setResources(newResources)
    console.log(`THing ${newResources}`)
    setNewName("")
    setNewQuantity("")
    
  };

  useEffect(()=>{
    console.log(resources)
  })
    return(
    <div className="App">

      <header className="App-header">
        <a style={{padding: 30, fontWeight:'bold', fontSize:30}}>        Ingredients</a>

        <div className='recents'>
            <p>Recents:<Link to="/"> 
             To Home </Link></p>
        </div>

        
      </header>
      <div className="body2">

        <div style={{flex:3}}>

          
            <div className="box2">
                <b>Ingredients</b>
            </div>
              
              <div className="box2">
              {resources.map((resource, index) => { 
                const ingredient = Object.keys(resource)[0]
                const quantity = resource[ingredient];       
                return (
                  <p key={index}>
                    {ingredient}: {quantity}
                  </p>
                );
              })}
              </div>

            <div className="box2">
              <b>Add Ingredient</b>
              
              <form className="addIngredient" onSubmit={handleNewItem}>
                <input type="text" onChange={setNewName} placeholder="Name:"/>
                <input type="number" onChange={setNewQuantity} placeholder="Amount"/>
                <button type="submit">Add</button>
              </form>
            
              
               
            </div>
            
        </div>

        <div className="box2" style={{flex:1}}>
          <b style={{justifyContent:'end', padding:'50'}}>Recipies</b>
        </div>


      </div>
    </div>
    );
};

export default Ingredients;