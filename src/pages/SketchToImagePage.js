import React from 'react';
import TopBar from '../compositions/TopBar.js';
import STI_PicturesBar from '../compositions/STI-PicturesBar.js';
import '../components/global.css';

function SketchToImagePage() {
    return (
      <div>
        <TopBar />
        <STI_PicturesBar />
      </div>
    );
  }
  
  export default SketchToImagePage;