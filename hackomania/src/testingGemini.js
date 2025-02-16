import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Link, useNavigate } from "react-router-dom";

function Geminie() {
  const [prompta, setPrompta] = useState("");
  const [ingredientsa, setIngredients] = useState("");
  const [answer, setAnswer] = useState("Type your prompt and press send!");
  const [reply, setReply] = useState("Type your prompt and press send!");

  const navigate = useNavigate();

  const genAI = new GoogleGenerativeAI("AIzaSyCjYD-Dh4i7tjiLXss7hxYl9hnQ97YBYV4"); 
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


  const sendMesssage = async () => {
    try {
      //call gemini

      setReply(null);
      setIngredients("") //Clear ingredients to show loading state correctly
      setAnswer("Loading..."); // Show loading message
      console.log("Loading...");

      // Get ingredients
      const ingredientsResult = await model.generateContent(
        `Write a list of ingredients for making ${prompta}, in the following format: \n Ingredients: A, B, C. Strictly do not bold any words`
      );

      const ingredientsResponse = await ingredientsResult.response;
      const ingredientsText = ingredientsResponse.candidates[0]?.content?.parts[0]?.text;

      setIngredients(ingredientsText || "Error fetching ingredients."); // Handle potential errors
      console.log("Ingredients:", ingredientsText);


        // Get the initial recipe step-by-step
      const initialRecipeResult = await model.generateContent(
        `Make a step-by-step recipe for making ${prompta}.`
      );

      const initialRecipeResponse = await initialRecipeResult.response;
      const initialRecipeText = initialRecipeResponse.candidates[0]?.content?.parts[0]?.text;

      setReply(initialRecipeText || "Error fetching initial recipe.");
      console.log("Initial Recipe:", initialRecipeText);

      // Get recipe using the ingredients
      const recipeResult = await model.generateContent(
        `Using the following ingredients: ${ingredientsText}, make a recipe for ${prompta}. Strictly do not bold any words and do not write the ingredients.`
      );
      const recipeResponse = await recipeResult.response;
      const recipeText = recipeResponse.candidates[0]?.content?.parts[0]?.text;

      setAnswer(recipeText || "Error fetching recipe.");
      console.log("Recipe:", recipeText);

      console.log("Finished!");

    } catch (error) {
      console.error("Error during Gemini API call:", error);
      setAnswer("An error occurred while generating the recipe.");
      setReply("An error occurred while generating the recipe.");
      setIngredients("An error occurred while generating the ingredients.");
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <a style={{ padding: 15, fontWeight: "bold", fontSize: 30 }}>
          Kitchen Copilot
        </a>

        <header className="App-header">
          <a style={{ padding: 30, fontWeight: "bold", fontSize: 30 }}>
            Kitchen Copilot
          </a>
          <button onClick={() => { navigate("/"); }} className="logut">
            Home
          </button>
          <button
            onClick={() => {
              navigate("/Gemini");
            }}
            className="logut"
          >
            Generate Recipies
          </button>
          <button
            onClick={() => {
              navigate("/Login");
            }}
            className="logout"
          >
            Log Out
          </button>
        </header>
        <div className="recents">
          <Link to="/">To Home</Link>
        </div>
      </header>
      <div className="body">
        <div className="gemini">
          <div className="gemininput">
            <input
              placeholder="Type what you want to make here!"
              type="text"
              onChange={(e) => setPrompta(e.target.value)}
              className="gemininput"
            />
            <button onClick={sendMesssage}>Find recipe</button>
            {/* Redundant Input */}
            {/* <div style={{ padding: 100, fontSize: 50 }}>
              <input
                placeholder="value"
                type="text"
                onChange={(e) => setPrompta(e.target.value)}
              />
              <button onClick={sendMesssage}>Send</button>
            </div> */}

            {ingredientsa ? (
              <div>
                <b>Ingredients:</b>
                <p>{ingredientsa}</p>
                <b>Recipe:</b>
                <p>{answer}</p>

              </div>
            ) : (
              <p>Loading ingredients...</p>
            )}


          </div>
        </div>
      </div>
    </div>
  );
}

export default Geminie;