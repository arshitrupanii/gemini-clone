import { useState } from "react"
import Chat_area from "./Chat_area"
import Navbar from "./Navbar"
import Prompt_bar from "./Prompt_bar"

const Dashboard = () => {
  const [prompt, setPrompt] = useState("")

  return (
    <div className="w-[78vw] h-screen text-white p-4">

      {/* navbar */}
      <Navbar/>


      {/* chat area */}
      <Chat_area prompt={prompt}/>


      {/* prompt bar */}
     <Prompt_bar prompt={prompt} setPrompt={setPrompt}/>

    </div>
  )
}

export default Dashboard