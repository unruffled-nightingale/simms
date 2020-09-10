import React from 'react';
import './App.css';
import Title from "./Title";
import Main from "./Main";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            play: false,
            titleScreen: true,
        };
        this.enter = this.enter.bind(this);
    }

    enter() {
        this.setState({titleScreen: false});
    }

    render() {
        return (
            <>
                {this.state.titleScreen ? <Title enter={this.enter}/> : <Main/>}
            </>
        );
    }
}

export default App;
