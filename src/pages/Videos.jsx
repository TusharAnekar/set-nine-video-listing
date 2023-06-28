import { useContext } from "react";
import { DataContext } from "../contexts/data-context";
import { VideoCard } from "../components/VideoCard";

export function Videos() {
  const { videos } = useContext(DataContext);
  return (
    <>
      <h2>All Videos</h2>

      <ul className="container">
        {videos.map((video) => <VideoCard {...video}/>)}
      </ul>
    </>
  );
}
