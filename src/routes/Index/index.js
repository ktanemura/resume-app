import {
    Component
} from 'react';
import React from 'react';

import logo from '../../resources/img/logo.svg';

import Header from '../../components/Header';

class Index extends Component {
    render() {
        return (
            <div className={"w-100 h-100 d-flex flex-col flex-wrap align-items-center justify-content-center"}>
                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header> */}
                <Header message={"Hello, world!"}/>
            </div>
        );
    }
}

export default Index;
