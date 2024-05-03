import React from 'react';
import Icon from '../components/Icon';

function UploadImageHere() {
  return (
    <div className="uploadimagehere">
      <Icon className='upload' name='upload'/>
      <p className='uploadimagehere-text'>Upload Image Here</p> 
    </div>
  );
}

export default UploadImageHere;