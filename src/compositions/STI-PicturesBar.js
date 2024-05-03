import React from "react";
import Icon from "../components/Icon.js";
import UploadImageHere from "../components/UploadImageHere.js";
import "./CI-PicturesBar.css";

function STI_PicturesBar() {
    return (
        <div>
            <div className="ci-picturesbar">
                <Icon className="sketchToImage1_180" name="sketchToImage1_180" />
                <Icon name='rightarrow_100' className='rightarrow_100' />
                <Icon className="sketchToImage2_180" name="sketchToImage2_180" />
            </div>
            <div className="regenerateImage-text">Sketch To Image</div>
            <div>
                <UploadImageHere/>
            </div>
        </div>
    );
}

export default STI_PicturesBar;