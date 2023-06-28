import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../contexts/data-context";

export function Header() {
  const getActiveStyle = ({ isActive }) => ({
    margin: "5px",
    color: isActive && "red",
  });

  const {likedVideos, watchLaterVideos} = useContext(DataContext)

  return (
    <>
      <nav>
        <NavLink to={"/"} style={getActiveStyle}>
          Home
        </NavLink>
        <NavLink to={"/videos"} style={getActiveStyle}>
          Videos
        </NavLink>
        <NavLink to={"/liked-videos"} style={getActiveStyle}>
          Liked Videos({likedVideos.length})
        </NavLink>
        <NavLink to={"/watch-later"} style={getActiveStyle}>
          Watch Later({watchLaterVideos.length})
        </NavLink>
      </nav>
    </>
  );
}
