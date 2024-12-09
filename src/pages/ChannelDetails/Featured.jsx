import React from "react";
import useFetch from "../../utils/useFetch";
import ErrorPage from "../ErrorPage";
import { useParams } from "react-router-dom";
import PlaylistCard from "../../components/PlaylistCard";
import VideoCard from "../../components/VideoCard";

const Featured = () => {
  var { channelId } = useParams();
  const { data, error, pending } = useFetch(
    `search?part=snippet&maxResults=10&type=video&channelId=${channelId}&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`
  );
  if (pending) {
    return <></>;
  }
  if (error) {
    return <ErrorPage />;
  }
  return (
    <div className="flex flex-col gap-4 items-center">
      {data &&
        data.map(
          (v) => (
            <>
              <VideoCard
                video={v}
                thumbnail={v.snippet.thumbnails.high.url}
                videoId={v.id.videoId}
                showChannel={false}
              />
            </>
          )
          // console.log(v);
        )}
    </div>
  );
};

export default Featured;
