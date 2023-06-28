import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Videos } from "./pages/Videos";
import { LikedVideos } from "./pages/LikedVideos";
import { WatchLater } from "./pages/WatchLater";
import { VideoDetails } from "./pages/VideoDetails";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/videos" element={<Videos />}></Route>
        <Route path="/liked-videos" element={<LikedVideos />}></Route>
        <Route path="/watch-later" element={<WatchLater />}></Route>
        <Route path="videos/:videoId" element={<VideoDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
