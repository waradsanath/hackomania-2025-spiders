import { use, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Link, useNavigate } from "react-router-dom";

function Geminie() {
    const [prompta,setPrompta] = useState('')
    const [reply,setReply] = useState("type your prompt and press send!")
    const [chatHistory, setChatHistory] = useState("")
    const navigate = useNavigate()
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
            <header className="App-header">
            <a style={{padding: 30, fontWeight:'bold', fontSize:30}}>        Kitchen Copilot</a>
            <button onClick={()=>{navigate("/")}} className="logut">Home</button>
            <button onClick={()=>{navigate("/Gemini")}} className="logut">Generate Recipies</button>
            <button onClick={()=>{navigate("/Login")}} className="logout">Log Out</button>
      </header>
            <div className='recents'>
                <Link to="/">To Home</Link>
            </div>
        </header>
<div className="body">
            <div className="gemini">
                <div style={{padding:100, fontSize:50}}> 
                <input placeholder="value" type="text" onChange={(e)=>setPrompta(e.target.value)}/>
                <button onClick={sendMesssage}>Send</button>
                </div>
                
                {reply ? <p>{reply}</p> : <p>Loading...</p>}

                
                </div>
            </div>
        </div>
    )
}
export default Geminie;