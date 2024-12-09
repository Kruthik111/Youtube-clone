import React from "react";
import New from "../../components/New";
import { useParams } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import VideoCard from "../../components/VideoCard";
import ErrorPage from "../ErrorPage";
import ResultLoading from "../../components/ResultLoading";

const PlaylistDetails = () => {
  document.title = "Playlist";
  var { playlistId } = useParams();
  const { data, error, pending } = useFetch(
    `playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${playlistId}&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`,
    {}
  );
  if (pending) {
    // if (true) {
    return <ResultLoading />;
  }
  if (error) {
    return <ErrorPage />;
  }
  // console.log(data);
  return (
    <div className="min-h-screen dark:bg-[#0f0f0f]  flex flex-col items-center gap-4 w-screen  scroll-smooth pt-16">
      {data &&
        data.map((v, index) => (
          <span className="flex sm:items-center ">
            <h1 className="text-2xl font-bold h-full rounded-full bg-gray-600 w-[10vw] p-1 text-center">
              {index + 1}
            </h1>
            <VideoCard
              video={v}
              thumbnail={v.snippet.thumbnails.high.url}
              videoId={v.snippet.resourceId.videoId}
            />
          </span>
        ))}
    </div>
  );
};

export default PlaylistDetails;
