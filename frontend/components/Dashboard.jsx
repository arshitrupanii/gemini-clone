
const Dashboard = () => {
  return (
    <div className="w-[85vw] h-screen text-white p-3">

      {/* upper */}
      <div className="flex justify-between">

        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-extralight">Gemini</h1>

          {/* dropdown */}
          <div className="bg-[#282a2c] rounded-4xl px-4">
            <button className="text-[14px] text-gray-500">2.5 flash</button>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="bg-[#3d3f42] text-[13px] px-5 rounded-2xl py-2">Upgrade</button>

          <div className="w-10 h-10 rouded-full">
            <img className="rouded-full border-1" src="profile.wedbp" alt="" />
          </div>
        </div>

      </div>


      {/* middle div */}
      <div className="flex w-full h-fit justify-center items-center ">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          {/* Hello, Arshit */}
        </h1>
      </div>


      {/* prompt bar */}
      <div>

      </div>

    </div>
  )
}

export default Dashboard