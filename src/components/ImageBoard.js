import React from 'react';
import PopeBenedict from '../resources/pope_benedict.svg';
import Logo from '../resources/logo.svg';
import Tashi from '../resources/tashi.svg';
import Face from '../resources/face.svg';
import Image from "./Image";
import "./ImageInfo.css"
import "./ImageBoard.css"
import ImageInfo from "./ImageInfo";

const width = 10000;
const height = 10000;
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const middleWidth = (width / 2) + (screenWidth / 2);
const middleHeight = (height / 2) + (screenHeight / 2);
const imageBoard = {
    'width': width + "px",
    'height': height + "px",
};

class ImageBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            x: null,
            y: null,
            posX: width / 2,
            posY: height / 2,
            left: false,
            right: false,
            imageSelected: null,
            imageTitle: null,
            imageDesc: null,
        };

        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.selectImage = this.selectImage.bind(this);

    }

    componentDidMount() {
        window.scrollTo(this.state.posX, this.state.posY);
        window.addEventListener("mousewheel", function (e) {
            e.preventDefault();
        });
    }

    handleMouseMove(e) {
        if (this.state.imageSelected != null) return;
        let curX = e.clientX;
        let curY = e.clientY;
        this.setState(prevState => ({
            x: curX,
            y: curY,
            posX: prevState.x != null ? prevState.posX + (curX - prevState.x) : this.state.posX,
            posY: prevState.y != null ? prevState.posY + (curY - prevState.y) : this.state.posY
        }));
        window.scrollTo(this.state.posX, this.state.posY)
    }

    handleMouseMove2(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY,
        });
    }

    doSetTimeout(func) {
        setTimeout(function () {
            func();
        }, 2);
    }

    moveLeft() {
        if (this.state.imageSelected) return;
        let posX = this.state.posX - 2;
        this.setState({posX: posX});
        window.scrollTo(posX, this.state.posY);
        if (this.state.left) this.doSetTimeout(this.moveLeft.bind(this))
    }

    handleMouseOverLeft(e) {
        this.setState({left: true}, () => this.moveLeft());

    }

    handleMouseOutLeft(e) {
        this.setState({left: false});
    }

    handleMouseOverRight(e) {
        this.setState({right: true}, () => this.moveRight());

    }

    handleMouseOutRight(e) {
        this.setState({right: false});
    }

    moveRight() {
        if (this.state.imageSelected) return;
        let posX = this.state.posX + 2;
        this.setState({posX: posX});
        window.scrollTo(posX, this.state.posY);
        if (this.state.right) this.doSetTimeout(this.moveRight.bind(this))
    }

    selectImage(image, imageDesc, imageTitle) {
        this.setState({
            imageSelected: image,
            imageTitle: imageTitle,
            imageDesc: imageDesc,
        });
    }

    unselectImage() {
        this.setState(prevState => ({
            imageSelected: null,
            imageTitle: null,
            imageDesc: null,
        }))
    }


    render() {
        return (
            <>
                {this.state.imageSelected ?
                    <div className={"box"} onClick={() => {
                        this.setState({box: false})
                    }}>
                    </div>
                    : null}
                <div style={imageBoard} onMouseMove={this.handleMouseMove}>
                    <Image onClick={this.selectImage} imgDesc={""} imgTitle={"Eye cup"} x={middleWidth - 130} y={middleHeight - 300} width={300} image={Logo} alt={"Logo"} />
                    <Image image={PopeBenedict} imgDesc={"In exelcis 140bpm amen"} imgTitle={"Pope Benedict"} x={middleWidth - 70} y={middleHeight + 50} width={400} alt={"Pope Benedict"} onClick={this.selectImage}/>
                    <Image image={Tashi} imgDesc={"All hail thee praise"} imgTitle={"Queen Tashi"} x={middleWidth - 450} y={middleHeight - 300} width={300} alt={"Tashi"} onClick={this.selectImage}/>
                    <Image image={Face} imgDesc={"Jesus"} imgTitle={"Jesus"} x={middleWidth + 400} y={middleHeight - 300} width={800} alt={"Face"} onClick={this.selectImage}/>
                    <Image image={Face} imgDesc={"Jesus"} imgTitle={"Jesus"} x={middleWidth - 130} y={middleHeight - 300} width={50} alt={"Face"} onClick={this.selectImage}/>
                    <Image image={Face} imgDesc={"Jesus"} imgTitle={"Jesus"} x={middleWidth + 130} y={middleHeight - 300} width={200} alt={"Face"} onClick={this.selectImage}/>
                    <Image image={Face} imgDesc={"Jesus"} imgTitle={"Jesus"} x={middleWidth - 190} y={middleHeight + 100} width={100} alt={"Face"} onClick={this.selectImage}/>
                </div>
                {this.state.imageSelected ?
                    <ImageInfo img={this.state.imageSelected} imgTitle={this.state.imageTitle}  imgDesc={this.state.imageDesc} mouseOver={this.handleMouseMove2.bind(this)} onClose={this.unselectImage.bind(this)}/>
                    : null}
                <div className={"left-side"}
                     onMouseOver={this.handleMouseOverLeft.bind(this)}
                     onMouseOut={this.handleMouseOutLeft.bind(this)}
                     onMouseMove={this.handleMouseMove}/>
                <div className={"right-side"}
                     onMouseOver={this.handleMouseOverRight.bind(this)}
                     onMouseOut={this.handleMouseOutRight.bind(this)}
                     onMouseMove={this.handleMouseMove}/>
            </>
        )
    }
}

export default ImageBoard;
