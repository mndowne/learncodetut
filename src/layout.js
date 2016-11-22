import React from "react";

import Footer from "./footer";
import Header from "./header";

export default class Layout extends React.Component {
    
    render() {
        const title = "Welcome Marty";
        return (
            <div>
                <Header title={title}/>
                <Header title={title}/>
                <Footer />
            </div>
        );
    }
}

