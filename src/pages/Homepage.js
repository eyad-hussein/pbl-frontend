import React from 'react';
import TopBar from '../compositions/TopBar.js';
import MiddleBar from '../compositions/MiddleBar.js';
import BottomBoxes from '../compositions/BottomBoxes.js';
import '../components/global.css';

function Homepage() {
  return (
    <div>
      <TopBar />
      <MiddleBar />
      <BottomBoxes />
    </div>
  );
}

export default Homepage;