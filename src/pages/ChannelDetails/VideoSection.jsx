import { Link, useParams } from "react-router-dom";
import New from "../../components/New";
import { useState } from "react";
import PlaylistCard from "../../components/PlaylistCard";
import VideoCard from "../../components/VideoCard";
import useFetch from "../../utils/useFetch";
import ErrorPage from "../ErrorPage";

const VideoSection = () => {
  var { channelId } = useParams();
  const [selectedSubNav, setSelectedSubNav] = useState(0);
  let filters = ["Latest", "Popular", "Oldest"];
  const { data, error, pending } = useFetch(
    `search?part=snippet&maxResults=10&order=date&type=video&channelId=${channelId}&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`
  );
  if (pending) {
    // if (false) {
    return <></>;
  }
  // if (error) {
  if (false) {
    // return <ErrorPage />;
  }
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex gap-3 text-white text-sm  h-6 ">
        {filters.map((e, index) => {
          return (
            <div
              className={`flex rounded-lg py-1 px-2 bg-gray-500 dark:bg-gray-700 border-gray-400  ${
                index === selectedSubNav &&
                "bg-gray-400 dark:bg-gray-500 border-b-2"
              } `}
            >
              {e}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 items-center">
        {data &&
          data.map(
            (v) => (
              <span key={v.id.videoId}>
                <VideoCard
                  video={v}
                  thumbnail={v.snippet.thumbnails.high.url}
                  videoId={v.id.videoId}
                  showChannel={false}
                />
              </span>
            )
            // console.log(v);
          )}
      </div>
    </div>
  );
};

export default VideoSection;
