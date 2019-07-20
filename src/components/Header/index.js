import React from 'react';
import crest from '../../resources/img/crest_black.svg';

const Header = (props) => {
    const { message } = props;

    return (
        <div className={"d-flex flex-col flex-wrap w-100 align-items-center justify-content-center header"}>
            <div className="w-75">
                <img src={crest} alt={"Tanemura Crest"} className={"crest"}></img>
                <div className={"mt-3 text-box"}>
                    <h1 className={"header-name"}>Kyle Tanemura</h1>
                    <h3 className={"header-motto"}>{message}</h3>
                </div>
            </div>
        </div>
    );
}

export default Header;