import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Lectures from './pages/Lectures';
import Events from './pages/Events';
import Blog from './pages/Blog';
import DownloadQuran from './pages/DownloadQuran';
import Pioneers from './pages/Pioneers';
import Advisors from './pages/Advisors';
import Qiblah from './pages/Qiblah';
import SolatTime from './pages/SolatTime';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/download-quran" element={<DownloadQuran />} />
        <Route path="/pioneers" element={<Pioneers />} />
        <Route path="/advisors" element={<Advisors />} />
        <Route path="/qiblah" element={<Qiblah />} />
        <Route path="/solat-time" element={<SolatTime />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;