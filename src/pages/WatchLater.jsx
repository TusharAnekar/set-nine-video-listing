import { useContext } from "react";
import { DataContext } from "../contexts/data-context";
import { VideoCard } from "../components/VideoCard";

export function WatchLater() {
    const {watchLaterVideos} = useContext(DataContext)
  return (
    <>
      <h2>Watch Later</h2>
      <ul className="container">
        {
            watchLaterVideos.map((video) => <VideoCard {...video}/>)
        }
      </ul>
    </>
  );
}
