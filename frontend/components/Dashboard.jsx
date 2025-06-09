import { useEffect, useState } from "react"
import Chat_area from "./Chat_area"
import Navbar from "./Navbar"
import Prompt_bar from "./Prompt_bar"
import axios from 'axios'


const Dashboard = () => {
  let storedPrompts = JSON.parse(localStorage.getItem("prompts")) || [];
  let storedResponses = JSON.parse(localStorage.getItem("responses")) || [];


  const [prompts, setPrompts] = useState(storedPrompts)
  const [responses, setresponses] = useState(storedResponses)
  

  const handleSubmit = async(newMessage) => {
    let prompt = newMessage
    
    let response = await (await axios.post('http://localhost:3000/message/getResponse', { prompt })).data.response;
    
    storedPrompts.push(prompt);
    localStorage.setItem("prompts", JSON.stringify(storedPrompts));
    
    // ✅ Parse stored responses
    storedResponses.push(response);
    localStorage.setItem("responses", JSON.stringify(storedResponses));
    
    
    setPrompts(storedPrompts);
    setresponses(storedResponses);
  };

  return (
    <div className="w-[78vw] h-screen text-white p-4">

      {/* navbar */}
      <Navbar/>


      {/* chat area */}
      <Chat_area prompts={prompts} responses={responses}/>


      {/* prompt bar */}
     <Prompt_bar onSubmit={handleSubmit}/>

    </div>
  )
}

export default Dashboard