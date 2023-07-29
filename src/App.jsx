import { Routes, Route } from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import Home from './Components/Home/Home';
import VideoList from './Components/Listing';

import './App.scss';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/:categoryName" element={<VideoList />} />
        <Route path="/explore/" element={<VideoList />} />
      </Routes>
    </>
  );
}

export default App;
