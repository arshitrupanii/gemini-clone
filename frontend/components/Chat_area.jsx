import React from 'react'

const Chat_area = ({ prompts }) => {

    if (!prompts || prompts.length === 0) {
        return <DefaultChatArea />;
    }
    return (
        <div className="w-[78vw] h-[70vh] overflow-y-auto px-40 py-10">
          {prompts.map((prompt, index) => (
            <div
              key={index}
              className="mb-3 w-fit ml-auto right-0 p-3 bg-gray-800 text-white rounded shadow"
            >
              {prompt}
            </div>
          ))}
        </div>
      );
}

const DefaultChatArea = () => {
    return (
        <div className="flex w-[78vw] h-[70vh]  justify-center items-center ">
            <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r font-medium from-indigo-500 via-purple-500 to-rose-500">
                Hello, Arshit
            </span>
        </div>
    )
}

export default Chat_area