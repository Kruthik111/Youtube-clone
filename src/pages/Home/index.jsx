import { HiOutlineDotsVertical } from "react-icons/hi";
import useFetch from "../../utils/useFetch";
import ErrorPage from "../ErrorPage";
import ResultLoading from "../../components/ResultLoading";
import { Link, useNavigate } from "react-router-dom";

const VideoCards = ({ e, key }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/Video/${e.id.videoId}`)}
      className="flex-1  h-full overflow-hidden min-w-72 max-w-96  md:min-w-80 bg-inherit pb-3"
      key={key}
    >
      <Link to={`/Video/${e.id.videoId}`}>
        <div className=" rounded-lg max-h-56 md:max-h-60 -my-7 relative z-5 overflow-hidden select-none bg-black">
          <img
            // src="https://static-cse.canva.com/blob/1684710/1600w-wK95f3XNRaM.jpg"
            src={e.snippet.thumbnails.high.url}
            draggable="false"
            className="object-cover select-none m-auto"
            alt=""
          />
        </div>
      </Link>
      <div className="flex gap-1 justify-between text-black bg-inherit  border-solid px-1 pt-9 h-2/6  ">
        <div className="text-sm  dark:text-gray-300 h-1/4">
          <h1 className="text-base line-clamp-2 font-bold text-black dark:text-white tracking-tighter ">
            {e.snippet.title}
          </h1>
          <h1 className="text-ellipsis  line-clamp-1 w-36 ">
            {e.snippet.channelTitle}
          </h1>
          <span className="flex gap-2">
            {/* {console.log(e)} */}
            <h1>10k views</h1>
            <h1>34 minutes ago</h1>
          </span>
        </div>
        <div
          className="pt-2 right-1 dark:text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <HiOutlineDotsVertical size={18} />
        </div>
      </div>
    </div>
  );
};

const Home = (props) => {
  document.title = "YouTube";
  var q = "youtube india";
  const { data, error, pending } = useFetch(
    `search?part=snippet&statistics&type=video&maxResults=24&q=${q}&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`,
    {}
  );

  if (pending) {
    return (
      <div className="w-screen h-[500vh]  bg-black mt-20">
        <ResultLoading />
      </div>
    );
  }
  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <div className="flex flex-wrap justify-around sm:gap-2 pt-16 w-screen h-full scroll-smooth overflow-y-hidden min-h-screen dark:bg-black px-3">
        {data && data.map((e, index) => <VideoCards key={index} e={e} />)}
      </div>
    </>
  );
};
export default Home;
