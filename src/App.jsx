import { Routes, Route } from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import Home from './Components/Home/Home';
import VideoList from './Components/Listing';
import WatchLater from './Components/Listing/WatchLater';

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
      </Routes>
    </>
  );
}

export default App;
