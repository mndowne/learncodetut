import React from "react";

import Footer from "./footer";
import Header from "./header";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {name: "marty"};
    }

    render() {
        setTimeout(() => {
            this.setState({name: "Downes"});
        }, 1000)

        return (
            <div>
                {this.state.name} 
                <Header />
                <Header />
                <Footer />
            </div>
        );
    }
}

