import { use, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Link } from "react-router-dom";

function Geminie() {
    const [prompta,setPrompta] = useState('')
    const [reply,setReply] = useState("type your prompt and press send!")
    const [chatHistory, setChatHistory] = useState("")

    const genAI = new GoogleGenerativeAI("AIzaSyCjYD-Dh4i7tjiLXss7hxYl9hnQ97YBYV4");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const sendMesssage = async () => {
        try {
        //call gemini
        setReply(null)
        
        console.log("Loading...")
        const result = await model.generateContent("make a step by step recipie for making" + prompta)
        console.log("still loading...")
        const response = await result.response;
        console.log("Finished!")
        console.log(response)
        setReply(response.candidates[0].content.parts[0].text)


        
        
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

            <div className="gemini">
                <div style={{padding:100, fontSize:50}}> 
                <input placeholder="value" type="text" onChange={(e)=>setPrompta(e.target.value)}/>
                <button onClick={sendMesssage}>Send</button>
                </div>
                
                {reply ? <p>{reply}</p> : <p>Loading...</p>}

                

            </div>
        </div>
    )
}
export default Geminie;