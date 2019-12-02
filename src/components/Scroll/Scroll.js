import React from 'react';
import BScroll from 'better-scroll'
import './style.scss'

class scroll extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
            <div className="app-scroll" ref={(scrDom)=>{
                this.scrDom=scrDom
            }}>
                <div className="scoll-wrap">
                    {this.props.children}
                </div>
            </div>
        )
    }

    componentDidMount(){
         // 创建滚动视图
        this.scroll = new BScroll(this.scrDom, {
            tap: true,
            click: true
        });
        // 如果需要滚动，先刷新滚动视图，就可以在可滚动范围内滚动
        this.scroll.on('beforeScrollStart', ()=>{
            this.scroll.refresh();
        });
    }
}




export default scroll;