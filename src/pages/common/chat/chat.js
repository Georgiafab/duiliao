import React from 'react';
import "./style.scss";
import Header from "components/Header/Header";

class chat extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (<div className="page-wrap">
            <div className="page" id="chat">
                <Header title={12} {...this.props} />

            </div>
        </div>);
    }
}

export default chat;