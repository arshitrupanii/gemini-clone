
const Dashboard = () => {
  return (
    <div className="w-[78vw] h-screen text-white p-4">

      {/* navbar */}
      <div className="min-w-full min-h-fit flex justify-between">

        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-light">Gemini</h1>

          {/* dropdown */}
          <div className="bg-[#282a2c] rounded-4xl hover:bg-gray-800 px-4 py-0.5">
            <button className="text-[14px] text-gray-400 flex cursor-pointer items-center gap-1">
              <span>2.5 flash</span>
              <span>
                <img className="w-4 h-4 " src="https://img.icons8.com/?size=100&id=39786&format=png&color=737373" alt="" />
              </span>
            </button>
          </div>

        </div>

        {/* side buttons */}
        <div className="flex items-center gap-4">

          <button className="bg-[#3d3f42] flex hover:bg-[#5c5f6c] gap-3 text-[13px] cursor-pointer px-6 rounded-2xl py-3">
            <span>
              <img className="w-4 h-4" src="https://img.icons8.com/?size=100&id=VSROkm9ByHs0&format=png&color=F25081" alt="" />
            </span>
            <span className="text-[12px]">Upgrade</span>
          </button>

          <div className="w-10 h-10">
            <img className="rounded-full" src="https://img.icons8.com/?size=100&id=23241&format=png&color=000000" alt="" />
          </div>
        </div>

      </div>
      {/* end navbar */}


      {/* middle div */}
      <div className="flex w-[78vw] h-[70vh]  justify-center items-center ">
        <p class="text-3xl text-transparent bg-clip-text bg-gradient-to-r font-medium from-indigo-500 via-purple-500 to-rose-500">
          Hello, Arshit
        </p>
      </div>


      {/* prompt bar */}
      <div className="flex items-center justify-center">
        <div className="absolute bottom-15 w-[55vw] flex flex-col gap-3 rounded-2xl border border-gray-800 p-5">

          {/* message bar */}
          <div>
            <input className="w-full p-1 focus:outline-0 " type="text" name="prompt" id="prompt" placeholder="Ask gemini" />
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
              <span className="hover:bg-gray-700 cursor-pointer flex px-1 py-1 rounded-full">
                <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=8LR9OAENZPeS&format=png&color=EBEBEB" alt="" />
              </span>
            </div>

          </div>


        </div>
      </div>

    </div>
  )
}

export default Dashboard