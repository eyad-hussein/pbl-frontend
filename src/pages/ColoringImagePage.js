import React from 'react';
import TopBar from '../compositions/TopBar.js';
import CI_PicturesBar from '../compositions/CI-PicturesBar.js';
import '../components/global.css';

function ColoringImagePage() {
    return (
      <div>
        <TopBar />
        <CI_PicturesBar />
      </div>
    );
  }
  
  export default ColoringImagePage;