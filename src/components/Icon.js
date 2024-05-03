// Icon.js
import React from 'react';
import topLeftLogo from '../pics/topleftlogo.png'; 
import userIcon from '../pics/user.png';
import pointer from '../pics/pointer.png';
import colorImage1 from '../pics/coloringImage1.png';
import colorImage2 from '../pics/coloringImage2.png';
import regenerateImage1 from '../pics/regenerateImage1.png'; 
import regenerateImage2 from '../pics/regenerateImage2.png'; 
import enhancingImage1 from '../pics/enhancingImage1.png';
import enhancingImage2 from '../pics/enhancingImage2.png';
import sketchToImage1 from '../pics/sketchToImage1.png';
import sketchToImage2 from '../pics/sketchToImage2.png';
import rightarrow from '../pics/rightarrow.png';

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
    case 'colorImage1':
      iconImage = colorImage1;
      break;
    case 'rightarrow':
      iconImage = rightarrow;
      break;
    case 'colorImage2':
      iconImage = colorImage2;
      break;
    case 'regenerateImage1':
      iconImage = regenerateImage1;
      break;
    case 'regenerateImage2':
      iconImage = regenerateImage2;
      break;
    case 'enhancingImage1':
      iconImage = enhancingImage1;
      break;
    case 'enhancingImage2':
      iconImage = enhancingImage2;
      break;
    case 'sketchToImage1':
      iconImage = sketchToImage1;
      break;
    case 'sketchToImage2':
      iconImage = sketchToImage2;
      break;
    default:
      iconImage = topLeftLogo;
  }
  return <img className={className} src={iconImage} alt={name} />;
}

export default Icon;