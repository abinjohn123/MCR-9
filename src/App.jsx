import { Routes, Route } from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import Home from './Components/Home/Home';

import './App.scss';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
