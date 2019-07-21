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
                < Header message = {
                    `ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of L`
                }
                />
                {/* <Header message={"Hello, world"}/> */}
                {/* <Header message={"So, annoyingly, most JS solutions don't do horizontal tickers on an infinite loop, nor do they render all that smoothly."}/> */}
            </div>
        );
    }
}

export default Index;
