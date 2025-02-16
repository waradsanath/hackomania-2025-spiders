import { useState } from "react";

function Context() {
  const [cal, setCal] = useState("");
  const [cuis, setCuis] = useState("");
  const [budg, setBudg] = useState("");
  const [isOven, setIsOven] = useState(false);
  const [isMicr, setIsMicr] = useState(false);
  const [diet, setDiet] = useState("");
  const [spice, setSpice] = useState("");
  const [variable, setVariable] = useState("");
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
        They have extra preferences of ${extra}.
    `;

    try {
      const result = await model.generateContent([prompt]); // Fix API Call
      const textResponse = await result.response.text(); // Correct response parsing
      setVariable(textResponse);
    } catch (error) {
      console.error("Error:", error);
      setVariable("Failed to fetch recipe. Try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
      </form>
      <p>{variable}</p>
    </div>
  );
}

export default Context;
