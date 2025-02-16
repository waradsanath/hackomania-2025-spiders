import { use, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Link } from "react-router-dom";

function Geminie() {
    const [prompta,setPrompta] = useState('')
    const [ingredientsa,setIngredients] = useState("")
    const [answer,setAnswer] = useState("type your prompt and press send!")

    const genAI = new GoogleGenerativeAI("AIzaSyCjYD-Dh4i7tjiLXss7hxYl9hnQ97YBYV4");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const sendMesssage = async () => {
        try {
        //call gemini
        
        console.log("Loading...")
        const ingredients = await model.generateContent("Write a list of ingredients for making" + prompta+ ", in the following format: \n Ingredients: A, B, C. Strictly do not bold any words ")
        

        console.log("still loading...")
        const responseIngredients = await ingredients.response;
        setIngredients(responseIngredients.candidates[0].content.parts[0].text)
        console.log(ingredientsa)

        const recipe = await model.generateContent("Using the" +ingredientsa +", make a recipe for "+prompta+". Strictly do not bold any words and do not write the ingredients")

        const responseRecipe = await recipe.response;
        console.log("Finished!")
        console.log(responseIngredients)

        
        setAnswer(responseRecipe.candidates[0].content.parts[0].text)


        
        
        } catch (error) {
            console.error(error)
            
        }
    }

    return(
        <div className="App">
        <header className="App-header">
            <a style={{padding: 15, fontWeight:'bold', fontSize:30}}>        Kitchen Copilot</a>

            <div className='recents'>
                <Link to="/">To Home</Link>
            </div>
        </header>
        <div className="body">
            <div className="gemini">

                <div className="gemininput"> 
                    <input placeholder="type what you want to make here!" type="text" onChange={(e)=>setPrompta(e.target.value)} className="gemininput"/>
                    <button onClick={sendMesssage}>Find recipe</button>
                </div>
                
                {ingredientsa ? 
                <div>
                    <b>{ingredientsa}</b>
                    <p>{answer}</p>
                </div> : <p>Loading...</p>}

                
                </div>
            </div>
        </div>
    )
}
export default Geminie;