import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/data-context";
import { VideoCard } from "../components/VideoCard";

export function VideoDetails() {
  const { videos } = useContext(DataContext);
  const { videoId } = useParams();
  const video = videos.find(({ id }) => id === Number(videoId));
  return (
    <>
      <h2>{video.title}</h2>
      <ul className="container">
      <VideoCard {...video} details/>
      </ul>
    </>
  );
}
