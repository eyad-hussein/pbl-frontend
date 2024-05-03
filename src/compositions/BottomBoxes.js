import React from "react";
import Icon from "../components/Icon.js";
import "./BottomBoxes.css"

function BottomBoxes(){
    return (
        <div>
            <div className="box1">
                <Icon name='colorImage1' className='colorImage1' />
                <Icon name='rightarrow' className='rightarrow' />
                <Icon name='colorImage2' className='colorImage2' />
                <div className="box1-text1">Coloring Image</div>
                <div>
                    <p className="box1-text2">
                    Convert any black and white image to a<br></br> 
                    new colorized image to be used in<br></br>
                    modern life with just one click .
                    </p>
                </div>
            </div>

            <div className="box2">
                <Icon name='regenerateImage1' className='regenerateImage1' />
                <Icon name='rightarrow' className='rightarrow' />
                <Icon name='regenerateImage2' className='regenerateImage2' />
                <div className="box2-text1">Regenerate Image</div>
                <div>
                    <p className="box2-text2">
                    Let the Artificial intelligence regenerate<br></br>
                    your image so you can use in different<br></br>
                    ways and perspectives.
                    </p>
                </div>
            </div>

            <div className="box3">
                <Icon name='enhancingImage1' className='enhancingImage1' />
                <Icon name='rightarrow' className='rightarrow' />
                <Icon name='enhancingImage2' className='enhancingImage2' />
                <div className="box3-text1">Enhancing Image</div>
                <div>
                    <p className="box3-text2">
                    Let the Artificial intelligence regenerate<br></br>
                    your image so you can use in different<br></br>
                    ways and perspectives.
                    </p>
                </div>
            </div>

            <div className="box4">
                <Icon name='sketchToImage1' className='sketchToImage1' />
                <Icon name='rightarrow' className='rightarrow' />
                <Icon name='sketchToImage2' className='sketchToImage2' />
                <div className="box4-text1">Sketch To Image</div>
                <div>
                    <p className="box4-text2">
                    Let the Artificial intelligence regenerate<br></br>
                    your image so you can use in different<br></br>
                    ways and perspectives.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BottomBoxes;