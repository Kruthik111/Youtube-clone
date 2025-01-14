import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Search from "./pages/Search";
import Video from "./pages/Video";
import ChannelDetails from "./pages/ChannelDetails";
import VideoSection from "./pages/ChannelDetails/VideoSection";
import PlaylistDetails from "./pages/PlaylistDetails";
import Featured from "./pages/ChannelDetails/Featured";
import Playlists from "./pages/ChannelDetails/Playlists";
import Speech from "./pages/Speech";
import Subscription from "./pages/Subscription";

const App = () => {
  return (
    <div className="w-screen font-[Arial] overflow-x-hidden relative transform-none max-w-full dark:bg-[#0f0f0f] scroll-smooth transition-colors duration-[500ms] ease-in-out min-h-screen">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speech" element={<Speech />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/results" element={<Search />} />
          <Route
            path="/ChannelDetails/:channelId/"
            element={<ChannelDetails />}
          >
            <Route index element={<Featured />} />
            <Route path="featured" element={<Featured />} />
            <Route path="Videos" element={<VideoSection />} />
            <Route path="Playlists" element={<Playlists />} />
          </Route>
          <Route path="/Video/:videoId" element={<Video />} />
          <Route path="Playlist/:playlistId" element={<PlaylistDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
