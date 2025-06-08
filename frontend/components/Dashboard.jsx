import { useState } from "react"
import Chat_area from "./Chat_area"
import Navbar from "./Navbar"
import Prompt_bar from "./Prompt_bar"

const Dashboard = () => {
  const [prompts, setPrompts] = useState([])

  const handleSubmit = (newMessage) => {
    setPrompts(prev => [...prev, newMessage]);
  };

  return (
    <div className="w-[78vw] h-screen text-white p-4">

      {/* navbar */}
      <Navbar/>


      {/* chat area */}
      <Chat_area prompts={prompts}/>


      {/* prompt bar */}
     <Prompt_bar onSubmit={handleSubmit}/>

    </div>
  )
}

export default Dashboard