import React from 'react';
import TextBox1 from '../components/Textbox1';
import TextBox2 from '../components/Textbox2';
import MiddleBox from '../components/MiddleBox';
import './MiddleBar.css';

function MiddleBar(){
    return (
        <div className="middlebar">
            <div className='textbox1'>
                <TextBox1 />
            </div>
            <div className='textbox2'>
                <TextBox2 />
            </div>
            <div>
                <MiddleBox />
            </div>
        </div>
    );
}

export default MiddleBar;