import React from "react";
import Icon from "../components/Icon.js";
import UploadImageHere from "../components/UploadImageHere.js";
import "./CI-PicturesBar.css";

function RI_PicturesBar() {
    return (
        <div>
            <div className="ci-picturesbar">
                <Icon className="regenerateImage1_180" name="regenerateImage1_180" />
                <Icon name='rightarrow_100' className='rightarrow_100' />
                <Icon className="regenerateImage2_180" name="regenerateImage2_180" />
            </div>
            <div className="regenerateImage-text">Regenerate Image</div>
            <div>
                <UploadImageHere/>
            </div>
        </div>
    );
}

export default RI_PicturesBar;