import React from "react";
import useLocalStroage from "../../utils/useLocalStorage";
import ChannelCard from "../../components/ChannelCard";

const Subscription = () => {
  const [subscriptions, setSubscriptions] = useLocalStroage(
    "subscriptions",
    []
  );
  return (
    <div className="flex flex-wrap justify-around pt-12 sm:gap-4 w-screen h-full scroll-smooth overflow-y-hidden  bg-white dark:bg-[#0f0f0f] overflow-hidden ">
      <div className="flex gap-1 w-screen  scroll-smooth flex-wrap">
        {subscriptions && subscriptions.length > 0 ? (
          subscriptions.map((channel) => {
            return (
              <ChannelCard
                channelId={channel.channelId}
                channelProfile={channel.channelProfile}
                channelTitle={channel.channelTitle}
              />
            );
          })
        ) : (
          <div className="flex justify-center items-center h-screen">
            <h1 className="mb-4 text-4xl font-extrabold leading-none text-center tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              You have not subscribed to any channels
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscription;
