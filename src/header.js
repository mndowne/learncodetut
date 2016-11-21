import React from "react";

import Title from "./title";

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <header>This is The Header</header>
            </div>
        );
    }
}

