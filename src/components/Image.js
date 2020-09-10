import React from 'react';

const Image = ({x, y, width, image, imgTitle, imgDesc, alt, onClick}) => {
    return (
        <>
            <img style={{position: 'absolute', left: x+"px", top: y+"px", width: width+"px"}}
                 src={image} alt={alt} onClick={() => onClick(image, imgDesc, imgTitle)}/>
        </>
    )
};

export default Image;
