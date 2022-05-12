import React, { useEffect, useState } from "react";
import SearchBar from "./components/SeacrhBar";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import useVideos from "./hooks/useVideos";

const App = () => {
  const [selctedVideo, setSelectedVideo] = useState(null);
  const { videos, youtubeSearch } = useVideos("");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]); /*

  const [search, setSearched] = useState("");
  const [videos, setVideos] = useState([]);
  const [selctedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const youtubeSearch = async () => {
      const { data } = await youtube.get("search", {
        params: {
          q: search,
        },
      });
      setVideos(data.items);
      setSelectedVideo(data.items[0]);
    };
    youtubeSearch();
  }, [search]);**/

  return (
    <div className="ui container">
      <SearchBar setSearched={youtubeSearch} />
      <div className="ui grid">
        <div className=" ui row">
          <div className="eleven wide column">
            <VideoDetail video={selctedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
