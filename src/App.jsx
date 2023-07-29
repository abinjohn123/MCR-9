import { Routes, Route } from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import Home from './Components/Home/Home';
import VideoList from './Components/Listing';
import WatchLater from './Components/Listing/WatchLater';
import PlayList from './Components/Playlists';
import PlayListListing from './Components/Playlists/PlayListListing';

import './App.scss';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/:categoryName" element={<VideoList />} />
        <Route path="/explore/" element={<VideoList />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/playlists" element={<PlayList />} />
        <Route path="/playlists/:playlistId" element={<PlayListListing />} />
      </Routes>
    </>
  );
}

export default App;
