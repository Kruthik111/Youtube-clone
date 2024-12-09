import VideoCard from "../../components/VideoCard";
import useFetch from "../../utils/useFetch";
import Header from "../../components/Header";
import ErrorPage from "../ErrorPage";
import PlaylistCard from "../../components/PlaylistCard";
import ChannelCard from "../../components/ChannelCard";
import { useParams } from "react-router-dom";
import ResultLoading from "../../components/ResultLoading";
import { useEffect } from "react";

const Search = () => {
  // console.log(document.title);
  const q = window.location.search;
  const searched = q.split("=");
  const temp = useParams();
  var searchedTitle = decodeURI(searched[1]);
  document.title = searchedTitle.split("+").join(" ");

  const { data, error, pending } = useFetch(
    `search?part=snippet&maxResults=25&q=${searched[1]}&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`,
    {}
  );

  // const data = new Array(5);
  if (pending) {
    // if (true) {
    return <ResultLoading />;
  }
  if (error) {
    return <ErrorPage />;
  }
  return (
    <div className="flex flex-wrap justify-around pt-12 sm:gap-4 w-screen h-full scroll-smooth overflow-y-hidden  bg-white dark:bg-[#0f0f0f] overflow-hidden ">
      <div className="flex flex-col items-center gap-4 w-screen  scroll-smooth pt-5 md:pt-14">
        {data &&
          data.map(
            (v) => (
              <>
                {v.id.videoId && (
                  <VideoCard
                    video={v}
                    thumbnail={v.snippet.thumbnails.high.url}
                    videoId={v.id.videoId}
                  />
                )}
                {v.id.channelId && <ChannelCard channelDetails={v} />}
                {v.id.playlistId && <PlaylistCard video={v} />}
              </>
            )
            // console.log(v);
          )}
      </div>
    </div>
  );
};

export default Search;
