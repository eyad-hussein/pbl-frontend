// TopBar.js
import React from 'react';
import Icon from '../components/Icon';
import Button from '../components/Button';
import './TopBar.css';

function TopBar() {
  return (
    <div className="topbar">
      <div className='leftbuttons'>
        <Icon className="topLeftLogo" name="topLeftLogo" />
        <div className='pix2fix'>Pix2Fix</div>
      </div>
      <div className='middlebuttons'>
        <Button className="home" text="Home" />
        <Button className="product" text="Products" />
        <Button className="tutorial" text="Tutorial" />
        <Button className="support" text="Support" />
      </div>
      <div className='rightbuttons'>
        <Icon className="userIcon" name="userIcon" />
        <Button className="signup" text="Sign up" />
        <Button className="login" text="Log In" />
      </div> 
    </div>
  );
}

export default TopBar;