import { useState } from "react"

const Prompt_bar = ({ onSubmit }) => {

  const [message, setMessage] = useState("")

  const handlesubmit = () => {
    if(message.trim() !== ''){
      onSubmit(message);
      setMessage("");
    }
  }

  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handlesubmit();
    }
  }

  return (
    <div className="flex items-center justify-center ">
      <div className="max-lg:w-[90%] min-md:w-[75%] flex flex-col gap-3 rounded-2xl border border-gray-800 p-5">

        {/* message bar */}
        <div>
          <input 
          onKeyDown={handleKeypress}
          autoComplete="off"
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-1 focus:outline-0 " type="text" name="prompt" id="prompt" placeholder="Ask gemini" />
        </div>

        <div className="flex items-center justify-between opacity-60">
          <div className="flex gap-3 items-center">
            <span className="px-1 py-1 hover:bg-gray-700 cursor-pointer rounded-full">
              <img className="w-5 h-5" src="https://img.icons8.com/?size=100&id=11153&format=png&color=EBEBEB" alt="" />
            </span>

            <span className="flex gap-2 items-center hover:bg-gray-700 cursor-pointer rounded-3xl px-2 py-1">
              <img className="w-5 h-5" src="https://img.icons8.com/?size=100&id=Ngf5dT8xL0GZ&format=png&color=EBEBEB" alt="" />
              <span className="text-[13px]">Deep Research</span>
            </span>

            <span className="flex gap-2 items-center hover:bg-gray-700 cursor-pointer rounded-3xl px-2 py-1">
              <img className="w-5 h-5" src="https://img.icons8.com/?size=100&id=40314&format=png&color=EBEBEB" alt="" />
              <span className="text-[13px]">Canvas</span>
            </span>
          </div>

          <div>
            <button onClick={handlesubmit} className="hover:bg-gray-700 cursor-pointer flex px-2 py-2 rounded-full">
              {message ? <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=M3364bo7ll36&format=png&color=EBEBEB" alt="" /> : <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=9622&format=png&color=EBEBEB" alt="" />}

            </button>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Prompt_bar