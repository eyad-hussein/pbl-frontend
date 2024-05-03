// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import ColoringImagePage from './pages/ColoringImagePage'; 
import RegenerateImagePage from './pages/RegenerateImagePage';
import EnhancingImagePage from './pages/EnhancingImagePage';
import SketchToImagePage from './pages/SketchToImagePage';
import './components/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coloring-image" element={<ColoringImagePage />} />
        <Route path="/regenerate-image" element={<RegenerateImagePage />} />
        <Route path="/enhancing-image" element={<EnhancingImagePage />} />
        <Route path="/sketch-to-image" element={<SketchToImagePage />} />
      </Routes>
    </Router>
  );
}

export default App;