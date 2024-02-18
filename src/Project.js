import React from "react";
import './Project.css';
import leftArrow from "./images/leftArrow.png";
import rightArrow from "./images/rightArrow.png";

function Project({title, text, image, link, leftImage}) {
    function openLink(){
        window.open(link);
    }

    return(
        <div className="containerDiv" onClick={openLink}>
            <div id="titleContainerDiv">
                {title}
            </div>
            <div id="imageDiv">
                <div id="leftArrow">
                    <img id="leftArrow" src={leftArrow}/>
                </div>
                <img id="image" src={image}/>
                <div id="leftArrow">
                    <img id="rightArrow" src={rightArrow}/>
                </div>
            </div>
            <div id="textDiv">
                {text}
            </div>
        </div>
    );
};

export default Project;