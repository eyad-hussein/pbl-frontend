import React from "react";
import Icon from "../components/Icon.js";
import UploadImageHere from "../components/UploadImageHere.js";
import "./CI-PicturesBar.css";

function EI_PicturesBar() {
    return (
        <div>
            <div className="ci-picturesbar">
                <Icon className="enhancingImage1_180" name="enhancingImage1_180" />
                <Icon name='rightarrow_100' className='rightarrow_100' />
                <Icon className="enhancingImage2_180" name="enhancingImage2_180" />
            </div>
            <div className="regenerateImage-text">Enhancing Image</div>
            <div>
                <UploadImageHere/>
            </div>
        </div>
    );
}

export default EI_PicturesBar;