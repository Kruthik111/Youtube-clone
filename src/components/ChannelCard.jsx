import SubscribeButton from "./Subscribe";

const ChannelCard = ({
  channelDetails = {},
  channelTitle,
  channelProfile,
  channelId,
  channelDescription = "",
}) => {
  return (
    <a
      href={`/ChannelDetails/${channelId}`}
      key={channelId}
      className="min-w-96 flex-1"
    >
      <div className="flex h-44">
        <div className="flex justify-center items-center flex-grow   ">
          <div className="  rounded-full overflow-hidden ">
            <img
              // src="https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s176-c-k-c0x00ffffff-no-rj-mo"
              src={channelProfile}
              alt="channel profile"
              draggable="false"
              loading="lazy"
              className="w-fit aspect-square min-w-28 max-w-32"
            />
          </div>
        </div>
        <div className="text-gray-500 grow-[2] w-1/2 dark:text-gray-400 font-semibold text-[0.5rem] sm:text-xs flex flex-col justify-center gap-2 ">
          <h1 className="text-black dark:text-white font-bold text-lg">
            {channelTitle}
          </h1>
          <div>
            <h1 className="line-clamp-2">{channelDescription}</h1>
          </div>
          <div>
            <SubscribeButton
              channelDetails={channelDetails}
              channelId={channelId}
              channelProfile={channelProfile}
              channelTitle={channelTitle}
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default ChannelCard;
