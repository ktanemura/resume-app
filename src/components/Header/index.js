import React from 'react';
import {Component} from 'react';
import crest from '../../resources/img/crest_black.svg';
import { connect } from 'react-redux';

import { requestQuote } from '../../actions/quoteActions';

class Header extends  Component {

    setTickerSpeed() {
        const { quote } = this.props;
        let timer = (quote.length * 0.9 + 36) / 9.5;

        let motto = document.querySelector('.header-motto');

        if (motto && timer && timer > 0) {
            motto.style.animationDuration = `${timer}s`;
        }
    }
    
    componentDidMount() {
        this.props.requestQuote();
    }

    componentDidUpdate(prevProps) {
        const { quote } = this.props;
        if(prevProps.quote !== quote) {
            this.setTickerSpeed();
        }
    }
    
    render() {
        
        const { quote, isActive, isPaused, author } = this.props;
        return (
            <div className={"d-flex flex-col flex-wrap w-100 align-items-center justify-content-center header"}>
                <div className="w-75">
                    <img src={crest} alt={"Tanemura Crest"} className={"crest"}></img>
                    <div className={"mt-3 text-box"}>
                        <h1 className={"header-name mb-3"}>Kyle Tanemura</h1>
                        <h3 className={"header-motto" + (isActive && !isPaused ? " active" : "") + (!isActive ? " loading": "") }>{isActive ? <><q className={"mr-2"}>{quote}</q> - {author}</>: "..."}</h3>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    const { motto } = state;
    return motto;
}

const mapDispatchToProps = {
    requestQuote
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);