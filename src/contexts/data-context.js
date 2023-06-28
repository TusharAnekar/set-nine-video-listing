import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../apis/fakefetch";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [videos, setVideos] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);

  async function getVideos() {
    try {
      const {
        status,
        data: { videos },
      } = await fakeFetch("https://example.com/api/videos");
      if (status === 200) {
        setVideos(videos);
      }
    } catch (error) {}
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <>
      <DataContext.Provider
        value={{
          videos,
          setVideos,
          likedVideos,
          setLikedVideos,
          watchLaterVideos,
          setWatchLaterVideos,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
}
