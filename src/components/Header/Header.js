import React from 'react';
import './style.scss'

class Header extends React.Component {
constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
    };
}

    render() {
        let {title='',hasback=true,hasmore=false}=this.props;
        let backDom=<i className="iconfont icon-fanhui iconback" onClick={this.backAction.bind(this)}></i>;
        let moreDom=<i className="iconfont icon-gengduo iconmore" ></i>;
        return <div className="header">
               {hasback&&backDom}
                <h2>{title}</h2>
               {hasmore&&moreDom}
        </div>;
    }


    backAction(){
        this.props.history.goBack();
    }
}


export default Header;