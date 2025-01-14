import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";

const VideoCard = ({ video, thumbnail, videoId, showChannel = true }) => {
  return (
    <Link to={`/Video/${videoId}`} key={videoId}>
      <div className="flex text-black dark:text-gray-400 w-full gap-4 sm:max-w-96 tracking-tight min-w-[80vw] flex-col sm:flex-row px-3">
        <div className="flex justify-center min-w-48  lg:min-w-[30rem] overflow-hidden rounded-lg ">
          <img
            src={thumbnail}
            // src="https://i.ytimg.com/vi/QTlSWa_8NAU/hqdefault.jpg"
            draggable="false"
            className="rounded-lg -my-12 w-fit"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-1    ">
            <div>
              <p className=" sm:text-md md:text-lg dark:text-white text-ellipsis  line-clamp-2 w-full ">
                {video.snippet.title}
              </p>
              <span className="text-xs sm:text-sm ">
                789k views 1 years ago{" "}
              </span>
            </div>
            {showChannel && (
              <Link to={`/ChannelDetails/${video.snippet.channelId}`}>
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    // remove the below commentted code and comment
                    //  out the above line to get the proper channel profile image

                    /*
                src={
                    ? data[0].snippet.thumbnails.default.url
                    : "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s68-c-k-c0x00ffffff-no-rj"
                }
                    */
                    className="rounded-full md:w-6 w-5 lg:w-9"
                    draggable="false"
                    loading="lazy"
                    alt=""
                  />
                  <h1>{video.snippet.channelTitle}</h1>
                </div>
              </Link>
            )}
            <span className="text-xs md:text-md line-clamp-1">
              {video.snippet.description}
            </span>
          </div>
          <div>
            <HiOutlineDotsVertical size={23} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
