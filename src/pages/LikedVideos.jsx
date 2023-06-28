import { useContext } from "react";
import { DataContext } from "../contexts/data-context";
import { VideoCard } from "../components/VideoCard";

export function LikedVideos() {
  const { likedVideos } = useContext(DataContext);
  return (
    <>
      <h2>Liked Vidoes</h2>
      <ul className="container">
        {likedVideos.map((video) => (
          <VideoCard {...video} />
        ))}
      </ul>
    </>
  );
}
