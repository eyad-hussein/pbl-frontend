// TopBar.js
import React from 'react';
import Icon from '../components/Icon';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import './TopBar.css';

function TopBar() {
  return (
    <div className="topbar">
      
      <div className='leftbuttons'>
        <Icon className="topLeftLogo" name="topLeftLogo" />
        <Link to="/">
          <div className='pix2fix'>Pix<span className='two-digit'>2</span>Fix</div>
        </Link>
      </div>

      <div className='middlebuttons'>
        <Link to="/">
          <Button className="home" text="Home" />
        </Link>

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