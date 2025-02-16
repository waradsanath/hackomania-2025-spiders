import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Context() {
  const [cal, setCal] = useState("");
  const [cuis, setCuis] = useState("");
  const [budg, setBudg] = useState("");
  const [isOven, setIsOven] = useState(false);
  const [isMicr, setIsMicr] = useState(false);
  const [diet, setDiet] = useState("");
  const [spice, setSpice] = useState("");
  const [variable, setVariable] = useState("");
  const [variable2, setVariable2] = useState("")
  const [extra, setExtra] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI("AIzaSyCTiGpm46kxl6xVTuT0KxgvUxrKAnJ7jfc");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
        A person would like a recipe of ${cal} calories of ${cuis} cuisine.
        They would like it to be under ${budg} budget.
        ${isOven ? "They have an oven." : "They do not have an oven."}
        ${isMicr ? "They have a microwave." : "They do not have a microwave."}
        Their dietary preference is ${diet}.
        They prefer a spice level of ${spice}.
        They have extra preferences of ${extra}. Generate the JUST THE ingredients and NOTHING ELSE needed to make this dish. Strictly no bold.
    `;
    const prompt2 = `
    A person would like a recipe of ${cal} calories of ${cuis} cuisine.
        They would like it to be under ${budg} budget.
        ${isOven ? "They have an oven." : "They do not have an oven."}
        ${isMicr ? "They have a microwave." : "They do not have a microwave."}
        Their dietary preference is ${diet}.
        They prefer a spice level of ${spice}.
        They have extra preferences of ${extra}. The ingredients are ${prompt}. GENERATE THE RECIPE AND STRICTLY NO BOLD
    `

    try {
      const result = await model.generateContent([prompt]); // Fix API Call
      const result2 = await model.generateContent([prompt2]);
      const textResponse = await result.response.text();
      const textResponse2 = await result2.response.text(); // Correct response parsing
      setVariable(textResponse);
      setVariable2(textResponse2)
    } catch (error) {
      console.error("Error:", error);
      setVariable("Failed to fetch recipe. Try again.");
      setVariable2("Failed to fetch recipe. Try again.");
    }
  };

  const navigate = useNavigate();

  return (

    <div>
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
            <button onClick={()=>{navigate("/")}} className="logut">Home</button>
            <button onClick={()=>{navigate("/Gemini")}} className="logut">Generate Recipies</button>
            <button onClick={()=>{navigate("/Login")}} className="logout">Log Out</button>

            </div>
        </header>

      
      <form onSubmit={handleSubmit} className="body">
        <input
          type="text"
          placeholder="Max calories?"
          value={cal}
          onChange={(e) => setCal(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cuisine type?"
          value={cuis}
          onChange={(e) => setCuis(e.target.value)}
        />
        <input
          type="text"
          placeholder="Budget?"
          value={budg}
          onChange={(e) => setBudg(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={isOven}
            onChange={(e) => setIsOven(e.target.checked)}
          />
          Do you have an oven?
        </label>
        <label>
          <input
            type="checkbox"
            checked={isMicr}
            onChange={(e) => setIsMicr(e.target.checked)}
          />
          Do you have a microwave?
        </label>
        <input
          type="text"
          placeholder="Diet preference?"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
        />
        <input
          type="text"
          placeholder="Spice level?"
          value={spice}
          onChange={(e) => setSpice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Extra Preferences?"
          value={extra}
          onChange={(e) => setExtra(e.target.value)}
        />
        <button type="submit">Generate Recipe</button>
        <div style={{alignContent:'center',alignItems:'center',justifyContent:'center'}}>
      <b style={{textAlign:'center'}}>Ingredients: {variable}</b>
      <p style={{textAlign:'center'}}>recipe: {variable2}</p>
      </div>
      </form>
      
      </div>
  );
};

export default Context;
