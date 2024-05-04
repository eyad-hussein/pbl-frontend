import React from 'react';
import Icon from '../components/Icon';

function UploadImageHere() {
  return (
    <div className="uploadimagehere">
      <input type='file' id='file' accept='image/*' style={{display: 'none'}}/>
      <label htmlFor='file' style={{cursor: 'pointer'}}>
      <Icon className='upload' name='upload'/>
      <p className='uploadimagehere-text'>Upload Image Here</p> 
      </label>
    </div>
  );
}

export default UploadImageHere;