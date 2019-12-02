import React from 'react';
import {NavLink} from 'react-router-dom'
import './style.scss'


const tabsData=[
    {id: 1, title: '信息', icon: 'iconfont icon-xiaoxi', path: '/message'},
    {id: 2, title: '朋友', icon: 'iconfont icon-pengyou', path: '/user'},
    {id: 3, title: '圈子', icon: 'iconfont icon-pengyouquan-copy', path: '/moments'},
    {id: 4, title: '我的', icon: 'iconfont icon-wode', path: '/mine'},
]

class Tabs extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}
    render() {
        return (
            <nav className="app-tabs">
            {
              tabsData.map(item=>(
                <NavLink className="tab" key={item.id} to={item.path}>
                  <span className={item.icon}></span>
                  <span className="text">{item.title}</span>
                </NavLink>
              ))
            }


            <div className="voice">
                <i className="iconfont icon-yuyin"></i>
            </div>
            </nav>


          )
    }
}

export default Tabs;