import React from 'react';
import "./ImageInfo.css"

const ImageInfo = ({img, imgTitle, imgDesc, mouseOver, onClose}) => {
    console.log(imgTitle, imgDesc)
    return (
        <div className={"box-upper"} onMouseMove={mouseOver}>
            <div className={"little-box"}>
                <img src={img} style={{width: "90%", margin: '5px'}}/>
            </div>
            <div className={"info-box"}>
                <p className={"info-title"}>{imgTitle}</p>
                <p className={"info-desc"}>{imgDesc}</p>
            </div>
            <span className={"close-button material-icons"} onClick={onClose}>close</span>
        </div>
    )
};

export default ImageInfo;
