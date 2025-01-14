import React, { useState } from "react";
import useFetch from "../../utils/useFetch";
import { useParams, Outlet, Link } from "react-router-dom";
import ResultLoading from "../../components/ResultLoading";
import SubscribeButton from "../../components/Subscribe";
import PlaylistCard from "../../components/PlaylistCard";
import VideoCard from "../../components/VideoCard";
import ErrorPage from "../ErrorPage";

const ChannelDetails = () => {
  let { channelId } = useParams();
  var subNavs = [
    { navText: "Home", link: "featured" },
    { navText: "Videos", link: "Videos" },
    { navText: "Playlists", link: "Playlists" },
  ];
  const [currentNav, setCurrentNav] = useState(0);

  const { data, error, pending } = useFetch(
    `channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`
  );
  function getSubscribers(val) {
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    return formatter.format(val);
  }
  if (pending) {
    // if (false) {
    return <ResultLoading />;
  }
  if (error) {
    return <ErrorPage />;
  }
  console.log(data);

  return (
    data && (
      <div className="min-h-screen h-full dark:bg-[#0f0f0f] select-none">
        {/* {console.log(data)} */}
        <div className="lg:px-[10%] pt-16 dark:text-white overflow-hidden ">
          <div>
            <div className=" rounded-lg overflow-hidden h-[14vh] sm:h-[25vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="flex items-center justify-center sm:justify-start sm:pl-16  gap-3 -mt-9 md:-mt-14 ">
              <div className="rounded-full overflow-hidden w-32 md:w-44 shadow-slate-800 shadow-lg">
                {/* {console.log()} */}
                <img
                  // src="https://yt3.googleusercontent.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s160-c-k-c0x00ffffff-no-rj"
                  src={data[0].snippet.thumbnails.medium.url}
                  alt="channel profile"
                  className="w-full"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col gap-2 md:flex-row pt-10  ">
                <div className="text-sm md:text-md text-gray-500 font-semibold">
                  <h1 className="font-bold text-2xl text-black dark:text-white ">
                    {data[0]?.snippet.title}
                  </h1>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <span>@{data[0].snippet.customUrl}</span>
                    <span>
                      {" "}
                      {getSubscribers(data[0].statistics.subscriberCount)}{" "}
                      subscribers ' {data[0].statistics.videoCount} videos
                    </span>
                  </div>
                  <div>{data.snippet?.description}</div>
                </div>
                <div className="flex items-center">
                  <SubscribeButton
                    channelId={data[0].id}
                    channelProfile={data[0].snippet.thumbnails.high.url}
                    channelTitle={data[0].snippet.title}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5  text-gray-600 dark:text-gray-400 cursor-pointer">
            {subNavs.map((e, index) => (
              <Link to={`/ChannelDetails/${channelId}/${e.link}`}>
                <div
                  className={`hover:border-b-2 border-gray-600 p-3 ${
                    currentNav === index &&
                    "text-black dark:text-white border-b-2 border-black dark:border-white"
                  }`}
                  onClick={(e) => setCurrentNav(index)}
                >
                  {e.navText}
                </div>
              </Link>
            ))}
          </div>
          <div className="min-h-[50rem] pt-5">
            <Outlet />
          </div>
        </div>
      </div>
    )
  );
};

export default ChannelDetails;
