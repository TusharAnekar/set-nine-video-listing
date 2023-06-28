import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  function navigateToVideos() {
    navigate("/videos");
  }
  return (
    <>
      <h1>Welcome to video library.</h1>
      <h2>
        To browse all videos, click the below button or go to the videos page.
      </h2>
      <button onClick={navigateToVideos}>Explore Videos</button>
    </>
  );
}
