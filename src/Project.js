import React from "react";
import './Project.css'

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
                <img id="image" src={image}/>
            </div>
            <div id="textDiv">
                {text}
            </div>
        </div>
    );
};

export default Project;