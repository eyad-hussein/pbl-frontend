// MiddleBox.js
import React from 'react';
import Icon from '../components/Icon';

function MiddleBox() {
  return (
    <div className="middlebox">
      <Icon className='pointer' name='pointer'/>
      <p className='middlebox-text'>choose a specific task to do</p> 
    </div>
  );
}

export default MiddleBox;