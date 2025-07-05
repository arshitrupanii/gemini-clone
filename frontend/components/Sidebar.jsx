import { useState } from "react";

const SidebarContent = ({ onClose }) => (
  <>
    {/* Top buttons */}
    <div className="flex justify-between items-center">

      {/* Close button (mobile only) */}
      <button onClick={onClose} className="lg:hidden block">
        <img
          className="p-2 w-9 h-9 cursor-pointer"
          src="https://img.icons8.com/?size=100&id=8113&format=png&color=EBEBEB"
          alt="close"
        />
      </button>

      <img
        className="p-2 rounded-full w-9 h-9 cursor-pointer hover:bg-gray-700"
        src="https://img.icons8.com/?size=100&id=7695&format=png&color=EBEBEB"
        alt="user"
      />
    </div>

    {/* New chat */}
    <div className="flex items-center gap-5 cursor-pointer hover:bg-gray-700 px-2 py-1 rounded-2xl">
      <img
        className="w-6 h-6"
        src="https://img.icons8.com/?size=100&id=kCViyr9hZtLX&format=png&color=737373"
        alt="chat"
      />
      <span className="text-gray-500 text-[14px]">New chat</span>
    </div>

    {/* Gems section */}
    <div className="flex flex-col gap-5">
      <span className="text-gray-400">Gems</span>
      <div className="flex flex-col gap-2">
        <span className="flex gap-2 items-center hover:bg-gray-700 cursor-pointer rounded-3xl px-2 py-1">
          <span className="w-8 h-8 bg-[#612B00] rounded-full flex justify-center items-center">
            <span className="material-symbols-outlined text-[#EC8C4C] text-base">emoji_objects</span>
          </span>
          <span className="text-[15px] text-gray-400">Brainstormer</span>
        </span>
        <span className="flex gap-2 items-center hover:bg-gray-700 cursor-pointer rounded-3xl px-2 py-1">
          <span className="w-8 h-8 bg-[#00404e] rounded-full flex justify-center items-center">
            <span className="material-symbols-outlined text-[#25B2D4] text-base leading-none">code</span>
          </span>
          <span className="text-[15px] text-gray-400">Coding Partner</span>
        </span>
        <span className="flex gap-2 items-center hover:bg-gray-700 cursor-pointer rounded-3xl px-2 py-1">
          <img
            className="w-8 h-8"
            src="https://img.icons8.com/?size=100&id=2IdmnPWYZKdH&format=png&color=737373"
            alt="explore"
          />
          <span className="text-[15px] text-gray-400">Explore Gems</span>
        </span>
      </div>
    </div>

    {/* Recent */}
    <div className="flex flex-col gap-5">
      <span className="text-gray-400">Recent</span>
      <div className="flex flex-col gap-3 text-gray-400 text-[14px]">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <span
              key={i}
              className="w-full h-8 hover:bg-gray-700 px-3 py-2 rounded-2xl truncate whitespace-nowrap overflow-hidden cursor-pointer"
            >
              Tailwind CSS Color Gradient Analysis
            </span>
          ))}
        <span className="w-fit h-8 hover:bg-gray-700 px-3 py-2 rounded-2xl flex items-center gap-2 cursor-pointer">
          <span>Show more</span>
          <img
            className="w-4 h-4"
            src="https://img.icons8.com/?size=100&id=39786&format=png&color=737373"
            alt="show more"
          />
        </span>
      </div>
    </div>

    {/* Bottom settings */}
    <div className="pt-6">
      <span className="w-full flex gap-6 items-center cursor-pointer rounded-3xl px-2 py-1">
        <img
          className="w-6 h-6"
          src="https://img.icons8.com/?size=100&id=14099&format=png&color=EBEBEB"
          alt="settings"
        />
        <span className="text-[14px] text-gray-400">Settings & help</span>
      </span>
    </div>
  </>
);

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="w-[20vw] lg:block hidden h-screen bg-[#282a2c] p-7 flex flex-col overflow-auto">
        <div className="flex flex-col gap-10 overflow-y-auto pr-1">
          <SidebarContent onClose={() => setToggle(!toggle)} />
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <div className="lg:hidden max-sm:hidden block ">
        <button onClick={() => setToggle(true)}>
          <img
            className="p-2 m-1 w-9 h-9 cursor-pointer"
            src="https://img.icons8.com/?size=100&id=8113&format=png&color=EBEBEB"
            alt="menu"
          />
        </button>

        {/* Mobile Sidebar */}
        {toggle && (
          <div className="fixed top-0 left-0 z-50 w-[80vw] h-screen bg-[#282a2c] p-7 flex flex-col gap-10 overflow-y-auto">
            <SidebarContent onClose={() => setToggle(false)} />
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;