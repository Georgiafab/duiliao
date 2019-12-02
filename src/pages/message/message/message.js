import React from "react";
import "./style.scss";

class message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCity: "",
      date: "",
      day: ""
    };
  }

  render() {
    let { date, day } = this.state;
    return (
      <div className="page" id="message">
        <header className="message-top">
          <div className="message-top-one">
            <span className="city">深圳</span>
            <span className="data">{date}</span>
            <span className="day">{day}</span>
          </div>
          <div className="message-top-two">
            <h1>信息</h1>
            <div className="scan">
              <i className="iconfont icon-saoyisao"></i>
            </div>
          </div>
        </header>

        <div className="search">
            <i className="iconfont icon-sousuo"></i>
            <input type="text" placeholder='搜索' />
        </div>

        <div className='messageList'>
            
        </div>
      
      </div>
    );
  }

  componentDidMount() {
    //获取当前城市
    // let geolocation = new BMap.Geolocation();
    // let _this = this;
    // geolocation.getCurrentPosition(function(r) {
    //   if (this.getStatus() == BMAP_STATUS_SUCCESS) {
    //     let city = r.address.city; //返回当前城市
    //     city = city.substr(0, city.length - 1);
    //     _this.currentCity = city;
    //   }
    // });

    const d = new Date();
    let month = d.getMonth();
    let date = d.getDate();
    let day = d.getDay();
    let datArr = [ "周日","周一", "周二", "周三", "周四", "周五", "周六"];

    //   let dateStr=;

    this.setState({
      date: month + 1 + "月" + date + "日",
      day: datArr[day]
    });
  }
}

export default message;
