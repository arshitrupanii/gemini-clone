import React from 'react'

const Chat_area = ({ prompt }) => {
    console.log(prompt);
    
    return (
        <div className="flex w-[78vw] h-[70vh]  justify-center items-center ">
            <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r font-medium from-indigo-500 via-purple-500 to-rose-500">
                Hello, Arshit
            </span>
        </div>
    )
}

export default Chat_area