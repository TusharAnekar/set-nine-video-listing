import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../contexts/data-context";

export function VideoCard({
  id,
  title,
  description,
  url,
  thumbnail,
  duration,
  details
}) {
  const {
    videos,
    likedVideos,
    setLikedVideos,
    watchLaterVideos,
    setWatchLaterVideos,
  } = useContext(DataContext);

  function addToLikedVideos(idToBeLiked, event) {
    if (
      !likedVideos.includes(videos.find(({ id }) => id === Number(idToBeLiked)))
    )
      setLikedVideos([
        ...likedVideos,
        videos.find(({ id }) => id === Number(idToBeLiked)),
      ]);
  }

  function addToWatchLater(idToBeAdded) {
    if (
      !watchLaterVideos.includes(
        videos.find(({ id }) => id === Number(idToBeAdded))
      )
    )
      setWatchLaterVideos([
        ...watchLaterVideos,
        videos.find(({ id }) => id === Number(idToBeAdded)),
      ]);
    console.log(watchLaterVideos);
  }

  return (
    <>
      <li key={id} className="video-container">
        <img src={thumbnail} alt={`${title} thumbnail`} />
        <p>{title}</p>
        <NavLink to={`/videos/${id}`} className={"watch-here"}>
          Watch here
        </NavLink>
        {details && <div>
          <h3>Description: {description}</h3>
          <p>Duration: {duration}</p>
          </div>}
        <button onClick={() => addToLikedVideos(id)}>Like</button>
        <button onClick={() => addToWatchLater(id)}>Add to watch later</button>
        
      </li>
    </>
  );
}
