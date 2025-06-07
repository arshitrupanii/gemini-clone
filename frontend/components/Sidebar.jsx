const Sidebar = () => {
  return (
    <div className="w-[20vw] h-screen bg-[#282a2c] p-7 flex flex-col">
      {/* Top + Middle Scrollable Area */}
      <div className="flex-1 flex flex-col gap-10 overflow-y-auto pr-1">
        {/* upper */}
        <div className="flex justify-between items-center">
          <span>
            <img className="w-5 h-5" src="https://img.icons8.com/?size=100&id=120374&format=png&color=EBEBEB" alt="" />
          </span>
          <span>
            <img className="w-5 h-5" src="https://img.icons8.com/?size=100&id=7695&format=png&color=737373" alt="" />
          </span>
        </div>

        {/* new chat */}
        <div className="flex items-center gap-5">
          <span>
            <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=kCViyr9hZtLX&format=png&color=737373" alt="" />
          </span>
          <span className="text-gray-500 text-[14px]">New chat</span>
        </div>

        {/* gems */}
        <div className="flex flex-col gap-5">
          <span className="text-gray-400">Gems</span>
          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center hover:bg-gray-700 cursor-pointer rounded-3xl px-2 py-1">
              <img className="w-7 h-7" src="https://img.icons8.com/?size=100&id=XIyLUWeiDv3K&format=png&color=000000" alt="" />
              <span className="text-[14px] text-gray-500">Brainstormer</span>
            </span>
            <span className="flex gap-2 items-center hover:bg-gray-700 cursor-pointer rounded-3xl px-2 py-1">
              <img className="w-7 h-7" src="https://img.icons8.com/?size=100&id=19294&format=png&color=000000" alt="" />
              <span className="text-[14px] text-gray-500">Coding Partner</span>
            </span>
            <span className="flex gap-2 items-center hover:bg-gray-700 cursor-pointer rounded-3xl px-2 py-1">
              <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=8221&format=png&color=EBEBEB" alt="" />
              <span className="text-[14px] text-gray-500">Explore Gems</span>
            </span>
          </div>
        </div>

        {/* recent */}
        <div className="flex flex-col gap-5">
          <span className="text-gray-400">Recent</span>
          <div className="flex flex-col gap-3 text-gray-400 text-[14px]">
            {Array(5).fill(0).map((_, i) => (
              <span
                key={i}
                className="w-full h-8 hover:bg-gray-700 px-3 py-2 rounded-2xl truncate whitespace-nowrap overflow-hidden cursor-pointer"
              >
                Tailwind CSS Color Gradient Analysis
              </span>
            ))}
            <span className="w-fit h-8 hover:bg-gray-700 px-3 py-2 rounded-2xl flex items-center gap-2 cursor-pointer">
              <span>Show more</span>
              <img className="w-4 h-4" src="https://img.icons8.com/?size=100&id=39786&format=png&color=737373" alt="" />
            </span>
          </div>
        </div>
      </div>

      {/* Bottom: Settings */}
      <div className="pt-6">
        <span className="w-full flex gap-6 items-center cursor-pointer rounded-3xl px-2 py-1">
          <img
            className="w-6 h-6"
            src="https://img.icons8.com/?size=100&id=364&format=png&color=737373"
            alt=""
          />
          <span className="text-[14px] text-gray-500">Settings & help</span>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
