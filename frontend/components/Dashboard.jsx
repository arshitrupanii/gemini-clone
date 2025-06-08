import { useState } from "react"
import Chat_area from "./Chat_area"
import Navbar from "./Navbar"
import Prompt_bar from "./Prompt_bar"
import axios from 'axios'


const Dashboard = () => {
  const [prompts, setPrompts] = useState([])
  const [responses, setresponses] = useState([])

  const handleSubmit = async(newMessage) => {
    setPrompts(prev => [...prev, newMessage]);
    let prompt = newMessage

    const response = await axios.post('http://localhost:3000/api/message/getResponse', { prompt })
    setresponses(prev => [...prev, response.data.response]);
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