// Icon.js
import React from 'react';

import topLeftLogo from '../pics/topleftlogo.png'; 
import userIcon from '../pics/user.png';
import pointer from '../pics/pointer.png';

import colorImage1 from '../pics/coloringImage1.png';
import colorImage2 from '../pics/coloringImage2.png';
import coloringImage1_180 from '../pics/coloringImage1_180.png';
import coloringImage2_180 from '../pics/coloringImage2_180.png';

import regenerateImage1 from '../pics/regenerateImage1.png'; 
import regenerateImage2 from '../pics/regenerateImage2.png'; 
import regenerateImage1_180 from '../pics/regenerateImage1_180.png';
import regenerateImage2_180 from '../pics/regenerateImage2_180.png';

import enhancingImage1 from '../pics/enhancingImage1.png';
import enhancingImage2 from '../pics/enhancingImage2.png';
import enhancingImage1_180 from '../pics/enhancingImage1_180.png';
import enhancingImage2_180 from '../pics/enhancingImage2_180.png';

import sketchToImage1 from '../pics/sketchToImage1.png';
import sketchToImage2 from '../pics/sketchToImage2.png';
import sketchToImage1_180 from '../pics/sketchToImage1_180.png';
import sketchToImage2_180 from '../pics/sketchToImage2_180.png';

import rightarrow_100 from '../pics/rightarrow_100.png';
import rightarrow from '../pics/rightarrow.png';
import upload from '../pics/upload.png';

function Icon({ name, className }) {
  let iconImage;
  switch(name) {
    case 'topLeftLogo':
      iconImage = topLeftLogo;
      break;
    case 'userIcon':
      iconImage = userIcon;
      break;
    case 'pointer':
      iconImage = pointer;
      break;
    case 'rightarrow':
      iconImage = rightarrow;
      break;

    case 'colorImage1':
      iconImage = colorImage1;
      break;
    case 'colorImage2':
      iconImage = colorImage2;
      break;
    case 'coloringImage1_180':
      iconImage = coloringImage1_180;
      break;
    case 'coloringImage2_180':
      iconImage = coloringImage2_180;
      break;

    case 'regenerateImage1':
      iconImage = regenerateImage1;
      break;
    case 'regenerateImage2':
      iconImage = regenerateImage2;
      break;
    case 'regenerateImage1_180':
      iconImage = regenerateImage1_180;
      break;
    case 'regenerateImage2_180':
      iconImage = regenerateImage2_180;
      break;
    
    case 'enhancingImage1':
      iconImage = enhancingImage1;
      break;
    case 'enhancingImage2':
      iconImage = enhancingImage2;
      break;
    case 'enhancingImage1_180':
      iconImage = enhancingImage1_180;
      break;
    case 'enhancingImage2_180':
      iconImage = enhancingImage2_180;
      break;

    case 'sketchToImage1':
      iconImage = sketchToImage1;
      break;
    case 'sketchToImage2':
      iconImage = sketchToImage2;
      break;
    case 'sketchToImage1_180':
      iconImage = sketchToImage1_180;
      break;
    case 'sketchToImage2_180':
      iconImage = sketchToImage2_180;
      break;
    
    case 'rightarrow_100':
      iconImage = rightarrow_100;
      break;
    case 'upload':
      iconImage = upload;
      break;
    default:
      iconImage = topLeftLogo;
  }
  return <img className={className} src={iconImage} alt={name} />;
}

export default Icon;