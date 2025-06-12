import React, { useEffect, useRef } from "react";

const Chat_area = ({ prompts, responses, loading }) => {
  if (!prompts || prompts.length === 0) {
    return <DefaultChatArea />;
  }
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [prompts, responses])

  return (
    <div className="w-full h-[70vh] overflow-y-auto lg:px-36 md:px-14 py-10 flex flex-col gap-4">
      {prompts.map((prompt, index) => (
        <div key={index}>
          {/* User Prompt */}
          <div className="mb-3 w-fit ml-auto right-0 p-3 bg-gray-800 text-white rounded shadow">
            {prompt}
          </div>


          {/* Gemini Response */}
          {responses[index] && (
            <div className="w-fit flex flex-col text-[15px] gap-3 mr-auto left-0 p-3 text-white rounded shadow">
              <img
                className="w-7 h-7"
                src="https://img.icons8.com/?size=100&id=iBkBIBWE6tfT&format=png&color=000000"
                alt=""
              />
              <div>
                {responses[index].split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    <strong>{line.replace(/\*/g, '')}</strong>
                    <br />
                  </React.Fragment>
                ))}

              </div>
            </div>
          )}

        </div>
      ))}
      {loading && (
        <div className="flex gap-1 items-center justify-start px-4 py-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0s]"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
        </div>
      )}
      <div ref={bottomRef}></div>

    </div>
  );
};

const DefaultChatArea = () => {
  return (
    <div className="flex w-[78vw] h-[70vh] justify-center items-center">
      <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r font-medium from-indigo-500 via-purple-500 to-rose-500">
        Hello, Arshit
      </span>
    </div>
  );
};

export default Chat_area;
