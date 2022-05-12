import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (searchTerm) => {
  const [videos, setVideos] = useState([]);

  const youtubeSearch = async (searchTerm) => {
    const { data } = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });
    setVideos(data.items);
  };

  useEffect(() => {
    youtubeSearch(searchTerm);
  }, []);

  return { videos, youtubeSearch };
};

export default useVideos;
