
const Chat_area = ({ prompts, responses }) => {
  if (!prompts || prompts.length === 0) {
    return <DefaultChatArea />;
  }

  return (
    <div className="w-[78vw] h-[70vh] overflow-y-auto px-40 py-10 flex flex-col gap-4">
      {prompts.map((prompt, index) => (
        <div key={index}>
          {/* User Prompt */}
          <div className="mb-2 w-fit ml-auto right-0 p-3 bg-gray-800 text-white rounded shadow">
            {prompt}
          </div>

          {/* Gemini Response */}
          {responses[index] && (
            <div className="w-fit flex text-[15px] gap-2 mr-auto left-0 p-3 bg-gray-800 text-white rounded shadow">
              <img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=iBkBIBWE6tfT&format=png&color=000000" alt="" />
              {responses[index]}
            </div>
          )}
        </div>
      ))}
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
