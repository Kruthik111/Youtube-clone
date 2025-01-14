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
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Subscription;
