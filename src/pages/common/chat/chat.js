import React from "react";
import "./style.scss";
import Header from "components/Header/Header";
import Scroll from "components/Scroll/Scroll";
import { requestFriendBy_ID } from "services/UserServices";
import { requestStartChat, requestEndChat } from "services/MessageServices";

class chat extends React.Component {
  websocket = new WebSocket("ws://10.20.152.22:3000");

  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      user_info: {},
      messageList: [],
      myInfo: {},
      newMessage: []
    };
  }
  render() {
    let { user_info, messageList, myInfo } = this.state;
    return (
      <div className="page-wrap">
        <div className="page" id="chat">
          <Header title={user_info.name} {...this.props} hasmore={true} />

          <Scroll
            ref={el => {
              this.scroll = el;
            }}
          >
            <div className="cont">
              <div className="name">{user_info.name}</div>

              <div className="talk-box">
                <ul className="clear">
                  {messageList.map((item, index) => {
                    return (
                      <>
                        {index >= 1 &&
                          index < messageList.length - 1 &&
                          item.time - messageList[index - 1].time >
                            1000 * 60 && (
                            <div key={item.time} className='time'>
                              <span>
                              {this.mathTime(
                                item.time,
                                messageList[index - 1].time
                              )}
                              </span>
                            </div>
                          )}
                        <li
                          className={
                            item.sendId === myInfo._id ? "right" : "left"
                          }
                          key={index}
                        >
                          <div className="info">
                            <img
                              src={
                                item.averImg || require("../../../img/timg.jpg")
                              }
                              alt={item.send}
                            />
                            <span>{item.send}</span>
                          </div>
                          <p>{item.value}</p>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Scroll>

          <div className="sendbar">
            <div className="iconfont icon-yuyin talk"></div>
            <input type="text" onKeyUp={this.sendMessageAction.bind(this)} />
            <div className="iconfont icon-weixiao face"></div>
            <div className="iconfont icon-jia1 more"></div>
          </div>
        </div>
      </div>
    );
  }

  mathTime(nowT) {
    nowT=parseInt(nowT);
    let d = new Date();
    let now=new Date(nowT);
    if(d.toLocaleDateString()===now.toLocaleDateString()){
      return now.getHours(nowT)+':'+now.getMinutes(nowT)+':'+now.getSeconds(nowT);
    }else {
      
      return now.getMonth(nowT)+'/'+now.getMonth(nowT) + '/' + now.getDate(nowT)+' '+now.getHours(nowT)+':'+now.getMinutes(nowT)+':'+now.getSeconds(nowT);
    }
  }

  async initData(_id) {
    const result = await requestFriendBy_ID({
      _id: _id
    });

    this.setState({
      _id: _id,
      user_info: {
        ...result
      }
    });
  }

  async endChat() {
    if(this.state.newMessage.value===''){
      return;
    }
    let message = JSON.stringify(this.state.newMessage);
    await requestEndChat({
      _id: this.state.myInfo._id,
      friend_id: this.state._id,
      message: message
    });
  }

  async initChat(_id) {
    const result = await requestStartChat({
      _id: this.state.myInfo._id,
      friend_id: _id
    });

    this.setState({
      messageList: [...result]
    });
  }

  sendMessageAction(ev) {
    ev.persist();
    if (ev.keyCode === 13) {
      // 发送的回车事件
      // 获得用户输入
      this.scroll.scroll.refresh();
      this.scroll.scroll.scrollTo(
        0,
        this.scroll.scroll.maxScrollY,
        1,
        "linear"
      );
      let value = ev.target.value;
      if (!value) {
        alert("输入不能为空");
      } else {
        // 发送给服务器
        let data = {
          time: Date.now(),
          send: this.state.myInfo.name,
          value: value,
          averImg: this.state.myInfo.arerImg,
          toId: this.state._id,
          type: 1,
          sendId: this.state.myInfo._id
        };

        this.websocket.send(JSON.stringify(data));

        this.setState({
          newMessage: [...this.state.newMessage, data],
          messageList: [...this.state.messageList, data]
        });
        // 情空输入框
        ev.target.value = "";
      }
    }
  }
  componentDidMount() {
    let _id = this.props.match.params.userId;

    this.scroll.scroll.scrollTo(0, this.scroll.scroll.maxScrollY, 1, "linear");

    let Info = JSON.parse(localStorage.getItem("userInfo"));

    this.setState({
      myInfo: { ...Info }
    });

    this.initData(_id);

    this.initChat(_id);

    this.websocket.onmessage = ev => {

      let data = JSON.parse(ev.data);

      if (data.status === "ok") {
        //是你自己发送的，发送成功了
        this.scroll.scroll.refresh();
        this.scroll.scroll.scrollTo(
          0,
          this.scroll.scroll.maxScrollY,
          1,
          "linear"
        );
      } else {
        this.setState({
          messageList: [
            ...this.state.messageList,
            {
              ...data
            }
          ]
        });
      }
    };
  }

  componentWillUnmount() {
    this.endChat();
  }
}

export default chat;
