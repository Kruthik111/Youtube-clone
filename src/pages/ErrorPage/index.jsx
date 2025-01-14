import displayImg from "../../assets/out-error.gif";
const ErrorPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-6 justify-center items-center px-5  dark:bg-slate-800">
      {/* <Header /> */}
      <h1 className="text-red-600 font-bold text-2xl">
        OOPS! Something happened, try again later
      </h1>
      {/* TV */}
      <div className="bg-[#8e8e8e] dark:bg-[#0f0f0f] p-6 w-[90%] sm:w-auto rounded-md border-black dark:border-gray-400 border-4 shadow-black shadow-xl ">
        <div className="flex">
          <div className="w-96 rounded-2xl overflow-hidden shadow-black shadow-xl select-none brightness-150 ">
            <img
              // src="https://media.tenor.com/cG9DZ7s1oBMAAAAM/out-error.gif"
              src={displayImg}
              alt=""
              className="w-full h-full"
              draggable="false"
            />
          </div>
          <div className="w-20 flex item-center justify-around flex-col ">
            <div className="flex flex-col gap-5">
              {/* Controls */}
              <div className="animate-spin  rounded-full  delay-1000 ease-linear bg-black w-8 h-8 m-auto flex items-center justify-center shadow-black shadow border-gray-600 border-2">
                <div className="bg-gray-600 w-full h-1"></div>
              </div>
              {/* Controls */}
              <div className="  rounded-full ease-linear bg-black w-8 h-8 m-auto flex items-center justify-center shadow-black shadow-lg border-gray-600 border-2">
                <div className="bg-gray-600 w-full h-1"></div>
              </div>
            </div>
            <div className="flex flex-col gap-2 pl-5">
              {/* Lines */}
              <div className="w-full h-1 rounded-2xl bg-gray-600 "></div>
              <div className="w-full h-1 rounded-2xl bg-gray-600 "></div>
              <div className="w-full h-1 rounded-2xl bg-gray-600 "></div>
              <div className="w-full h-1 rounded-2xl bg-gray-600 "></div>
              <div className="w-full h-1 rounded-2xl bg-gray-600 "></div>
            </div>
          </div>
        </div>
        <div className=" h-6"></div>
      </div>
    </div>
  );
};

export default ErrorPage;
