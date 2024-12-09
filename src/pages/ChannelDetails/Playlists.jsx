import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import PlaylistCard from "../../components/PlaylistCard";
import ErrorPage from "../ErrorPage";

const Playlists = () => {
  var { channelId } = useParams();
  let filters = ["Latest", "Popular", "Oldest"];
  const { data, error, pending } = useFetch(
    `search?part=snippet&maxResults=10&order=date&type=playlist&channelId=${channelId}&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`
  );
  if (pending) {
    // if (false) {
    return <></>;
  }
  if (error) {
    // if (false) {
    return <ErrorPage />;
  }
  return (
    <div className="flex flex-col gap-4 items-center">
      {data && data.length === 0 ? (
        <div>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M21 12 A9 9 0 0 1 12 21 A9 9 0 0 1 3 12 A9 9 0 0 1 21 12 z" />
            <path d="M9 10h.01M15 10h.01M9 15h6" />
          </svg>
        </div>
      ) : (
        data?.map(
          (v) => (
            <>
              <PlaylistCard video={v} showChannel={false} />
            </>
          )
          // console.log(v);
        )
      )}
    </div>
  );
};

export default Playlists;
