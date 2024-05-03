import React from "react";
import Icon from "../components/Icon.js";
import UploadImageHere from "../components/UploadImageHere.js";
import "./CI-PicturesBar.css";

function CI_PicturesBar() {
    return (
        <div>
            <div className="ci-picturesbar">
                <Icon className="coloringImage1_180" name="coloringImage1_180" />
                <Icon name='rightarrow_100' className='rightarrow_100' />
                <Icon className="coloringImage2_180" name="coloringImage2_180" />
            </div>
            <div className="regenerateImage-text">Coloring Image</div>
            <div>
                <UploadImageHere/>
            </div>
        </div>
    );
}

export default CI_PicturesBar;