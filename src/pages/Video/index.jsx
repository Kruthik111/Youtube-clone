import { Link, useParams } from "react-router-dom";
import "./Video.css";
import { useRef, useState } from "react";
import useFetch from "../../utils/useFetch";
import ErrorPage from "../ErrorPage";
import SubscribeButton from "../../components/Subscribe";

function MiniCardSection() {
  return (
    <div className="flex">
      <div>
        <img src="" alt="" />
      </div>
      <div></div>
    </div>
  );
}

const Comments = ({ videoId }) => {
  const { data, error, pending } = useFetch(
    `commentThreads?part=snippet%2Cid&order=relevance&textFormat=plainText&videoId=${videoId}&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`
  );
  if (pending) {
    return <>Loading...</>;
  }
  if (error) {
    return <div>Comments disabled</div>;
  }
  // console.log(data);

  return (
    <div className="w-full min-h-10 bg-inherit p-2">
      {data ? (
        <div className="flex flex-col gap-2">
          {data?.map((comment, index) => (
            <div className="px-2 flex gap-3" key={index}>
              {/* <div className="rounded-full w-14 overflow-hidden">
                <img
                  src={
                    comment.snippet.topLevelComment.snippet
                      .authorProfileImageUrl
                  }
                  alt=""
                  className="h-9"
                />
              </div> */}
              <Link
                to={`/ChannelDetails/${comment.snippet.topLevelComment.snippet.authorChannelId.value}`}
              >
                <div className="flex items-start gap-3 w-10 h-full ">
                  <img
                    src={
                      comment.snippet.topLevelComment.snippet
                        .authorProfileImageUrl
                    }
                    className="rounded-full md:w-6 w-5 lg:w-9"
                    draggable="false"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </Link>
              <div>
                <Link
                  to={`/ChannelDetails/${comment.snippet.topLevelComment.snippet.authorChannelId.value}`}
                >
                  <h1>
                    {comment.snippet.topLevelComment.snippet.authorDisplayName}
                  </h1>
                </Link>
                <p className="line-clamp-2 text-base ">
                  {comment.snippet.topLevelComment.snippet.textDisplay}
                </p>
                <div className="flex gap-2 text-sm pl-5">
                  <span className="flex">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="1.3em"
                      width="1.3em"
                    >
                      <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 001.873-1.298l2.757-7.351A1 1 0 0022 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0013 10h7v1.819z" />
                    </svg>
                    {comment.snippet.topLevelComment.snippet.likeCount}
                  </span>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="1.3em"
                      width="1.3em"
                    >
                      <path d="M20 3H6.693A2.01 2.01 0 004.82 4.298l-2.757 7.351A1 1 0 002 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2.004 2.004 0 00.274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-8.469 17h-1.145l1.562-4.684A1 1 0 0011 14H4v-1.819L6.693 5H16v9.638L11.531 20zM18 14V5h2l.001 9H18z" />
                    </svg>
                  </span>
                </div>
              </div>
              {/* {console.log(comment.snippet.topLevelComment.snippet.textDisplay)} */}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const Video = () => {
  const { videoId } = useParams();
  const iframeref = useRef();
  const [expandDescription, setExpandDescription] = useState(false);

  const { data, error, pending } = useFetch(
    `videos?part=snippet%2CcontentDetails%2Cstatistics%2Cid&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`
  );
  function getSubscribers(val, country) {
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    return formatter.format(val);
  }

  if (pending) {
    return <></>;
  }
  if (error) {
    return <ErrorPage />;
  }
  data && (document.title = data[0].snippet.title);

  return (
    data && (
      <div className="flex flex-col h-full md:flex-row text-black dark:text-white w-full gap-7  pt-20 min-h-screen dark:bg-[#0f0f0f] px-3 sm:px-12 xl:px-20">
        {/* Video section */}
        <div className="w-full  lg:w-2/3">
          <div
            className="w-full h-[30vh] sm:h-[65vh] rounded-lg overflow-hidden "
            ref={iframeref}
          >
            {/* <video src=""> */}
            {/* <img
            src="https://static-cse.canva.com/blob/1684710/1600w-wK95f3XNRaM.jpg"
            draggable="false"
            className="rounded-lg"
            alt=""
          /> */}
            <iframe
              id="player"
              type="text/html"
              allow="picture-in-picture; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              allowFullScreen
            ></iframe>
            {/* <poster src="https://static-cse.canva.com/blob/1684710/1600w-wK95f3XNRaM.jpg"></poster> */}
            {/* </video> */}
          </div>
          <div className="flex flex-col gap-2 w-full   min-w-0 ">
            <p className=" sm:text-md md:text-lg   dark:text-white text-ellipsis  line-clamp-2 min-w-0   ">
              {data[0].snippet.title}
            </p>
            {/* Channel details */}
            <div className="flex gap-3">
              <Link to={`/ChannelDetails/${data[0].snippet.channelId}`}>
                <div className="flex items-center gap-3">
                  <img
                    src="https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s68-c-k-c0x00ffffff-no-rj"
                    className="rounded-full md:w-6 w-5 lg:w-9"
                    draggable="false"
                    loading="lazy"
                    alt=""
                  />
                  <h1 className="text-md font-semibold">
                    {data[0].snippet.channelTitle}
                  </h1>
                </div>
              </Link>
              <SubscribeButton
                channelId={data[0].snippet.channelId}
                channelTitle={data[0].snippet.channelTitle}
              />
              {/* {console.log("channel data;", data[0].snippet.channelId)} */}
            </div>
            {/* Description section */}
            <div className="bg-[#f2f2f2] dark:bg-[#272727] p-3 rounded-xl">
              <span className="text-xs sm:text-sm ">
                {getSubscribers(data[0].statistics.viewCount)} views 1 years ago{" "}
              </span>
              <p
                className={`text-sm md:text-md w-full whitespace-pre-line  ${
                  expandDescription || "line-clamp-2"
                }`}
              >
                {data[0].snippet.description}
              </p>
              <p
                className="text-black dark:text-gray-400 cursor-pointer text-sm"
                onClick={() => setExpandDescription(!expandDescription)}
              >
                {expandDescription ? "Read Less" : "Read More.."}
              </p>
            </div>
            {/* Comment section */}
            <div className=" rounded-xl bg- w-full">
              <h1 className="font-semibold text-lg">
                {data[0].statistics.commentCount} Comments
              </h1>
              <Comments videoId={videoId} />
            </div>
          </div>
        </div>
        {/* Video Recommendation section */}
        {/* <div className="w-2/6 bg-gray-500">sdfsd</div> */}
      </div>
    )
  );
};

export default Video;
