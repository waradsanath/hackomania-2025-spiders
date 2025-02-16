import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Ingredients() {
  const [resources, setResources] = useState([
    { name: "Celery", number: 5 },
    { name: "Brocoli", number: 5 },
    { name: "Beef", number: 2 },
    { name: "Chicken", number: 5 },
    { name: "Alex", number: 5 },
    { name: "Fish", number: 5 },
    { name: "Potatoes", number: 5 },
  ]);

  const navigate = useNavigate()
  const [newName, setNewName] = useState("");
  const [newQuantity, setNewQuantity] = useState("");

  const handleNewItem = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    setResources(previous => [...previous,{ name: newName, number: parseInt(newQuantity, 10) }]);

    setNewName("");
    setNewQuantity("");
  }

  // useEffect(() => {
  //   console.log(resources);
  // }, [resources]); // Add resources to the dependency array of useEffect

  return (
    <div className="App">
      <header className="App-header">
            <a style={{padding: 30, fontWeight:'bold', fontSize:30}}>        Kitchen Copilot</a>
            <button onClick={()=>{navigate("/")}} className="logut">Home</button>
            <button onClick={()=>{navigate("/Gemini")}} className="logut">Generate Recipies</button>
            <button onClick={()=>{navigate("/Login")}} className="logout">Log Out</button>
      </header>
      <div className="body2">
        <div style={{ flex: 3 }}>
          <div className="box2">
            <b>Ingredients</b>
          </div>

          <div className="box2">
            {resources.map((resource, index) => ( // Add a key prop for React to identify each element in the list
              <p key={index}>
                {resource.name}: {resource.number}
              </p>
            ))}
          </div>

          <div className="box2">
            <b>Add Ingredient</b>

            <form className="addIngredient" onSubmit={handleNewItem}>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Name:"
              />
              <input
                type="number"
                value={newQuantity}
                onChange={(e) => setNewQuantity(e.target.value)}
                placeholder="Amount"
              />
              <button type="submit">Add</button>
            </form>
          </div>
        </div>

        <div className="box2" style={{ flex: 1 }}>
          <b style={{ justifyContent: "end", padding: "50" }}>Recipies</b>
        </div>
      </div>
    </div>
  );
}

export default Ingredients;