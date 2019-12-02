import React from "react";
import Swiper from "swiper";
import 'swiper/css/swiper.css'
import {Link} from 'react-router-dom'

import './style.scss'

class startup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="startup">
        <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <h2>及时</h2>
            <p>
              任何时候都可以语音聊天
            </p>

            <Link to="/message" className="tohome">立即进入</Link>
            
          </div>
          <div className="swiper-slide">
          <h2>分享</h2>
            <p>
              圈子内分享新鲜事
            </p>

            <Link to="/message" className="tohome">立即进入</Link>
          </div>
          <div className="swiper-slide">
          <h2>乐趣</h2>
            <p>
              如同对讲机一般
            </p>

            <Link to="/message" className="tohome">立即进入</Link>
          </div>
        </div>
        <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });

    if (localStorage.getItem("ISNEW")) {
      //不是新用户
      this.props.history.replace('/login');
    }
  }

  componentWillUnmount(){
    localStorage.setItem('ISNEW',"false");
  }
}

export default startup;
