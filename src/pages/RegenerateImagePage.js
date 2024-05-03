import React from 'react';
import TopBar from '../compositions/TopBar.js';
import RI_PicturesBar from '../compositions/RI-PicturesBar.js';
import '../components/global.css';

function RegenerateImagePage() {
    return (
      <div>
        <TopBar />
        <RI_PicturesBar />
      </div>
    );
  }
  
export default RegenerateImagePage;