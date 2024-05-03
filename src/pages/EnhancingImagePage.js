import React from 'react';
import TopBar from '../compositions/TopBar.js';
import EI_PicturesBar from '../compositions/EI-PicturesBar.js';
import '../components/global.css';

function EnhancingImagePage() {
    return (
      <div>
        <TopBar />
        <EI_PicturesBar />
      </div>
    );
  }
  
  export default EnhancingImagePage;