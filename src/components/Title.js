import React from 'react';
import './Title.css'
import SpeakerImage from '../resources/speaker.svg'

const Title = ({enter}) => {
    return (
        <div className={"title-screen"}>
            <div className={"title-screen-center"}>
                <div className="title">
                    <p className={"title"}>
                        vir sanctus
                    </p>
                    <p className={"subtitle"}>
                        sketches by susannah simms
                    </p>
                </div>
                <div className="title-audio"
                     onClick={enter}>
                    <img src={SpeakerImage} alt="Speaker"/>
                </div>
            </div>
        </div>
    )
};

export default Title;
