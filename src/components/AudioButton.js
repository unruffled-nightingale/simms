import React from 'react';
import logo from '../resources/speaker.svg';
import AudioFile from '../resources/audio_music.mp3';
import './AudioButton.css';

class AudioButton extends React.Component {

    constructor() {
        super();
        this.state = {
            playing: true,
        };

        this.audio = new Audio(AudioFile);
        this.togglePlay = this.togglePlay.bind(this);

    }

    componentDidMount() {
        this.audio.play();
    }

    togglePlay() {
        this.setState({playing: !this.state.playing}, () => {
            this.state.playing ? this.audio.play() : this.audio.pause();
        });
    }

    play() {
        this.setState({
            playing: true,
        });
        this.audio.play();
    }

    pause() {
        this.setState({playing: false});
        this.audio.pause();
    }

    render() {
        return (
            <div className={"audio-container"}>
                    <img className={!this.state.playing ? "audio-icon paused" : "audio-icon"} src={logo} alt="Speaker" onClick={this.togglePlay}/>
            </div>
        );
    }
}

export default AudioButton;
