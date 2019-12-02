import React from "react";
import "./style.scss";
import { requestLoginByPassword } from "services/MineServices";
import Toast from "components/Toast/toast";
import {Link} from 'react-router-dom'

class login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toastVal: ""
    };
  }

  render() {
    let { toastVal } = this.state;
    return (
      <div className="page" id="login">
        <div className="login-top">
          <h2>登录</h2>
          <div className="text">
            <p>随时随地 想说就说</p>
            <div className="vioce">
              <i className="iconfont icon-shengyin"></i>
              <i className="iconfont icon-shengyin"></i>
              <i className="iconfont icon-shengyin"></i>
              <i className="iconfont icon-shengyin"></i>
            </div>
          </div>
        </div>
        <div className="cont">
          <input
            type="text"
            placeholder="昵称"
            name="name"
            ref={name => {
              this.name = name;
            }}
          />
          <input
            type="text"
            placeholder="密码"
            name="pass"
            ref={pass => {
              this.pass = pass;
            }}
          />

          
        <Link to="/regiester" className="toregiester">去注册</Link>
          <div className="login-btn" onClick={this.loginAction.bind(this)}>
            登录
          </div>
        </div>

        <Toast val={toastVal} />
      </div>
    );
  }

  loginAction() {
    this.initData();
  }
  async initData() {
    const result = await requestLoginByPassword({
      name: this.name.value,
      pass: this.pass.value
    });
    console.log(result);
    if (result.code === 0) {
      this.setState({
        toastVal: "登录成功"
      });
      localStorage.setItem('ISLOGIN','true');
      //设置cookie
      document.cookie=`user_id=${result.data}`;
      // document.cookie=`user_name=${this.name.value}`;
      this.props.history.push("/");
    } else {
      this.setState({
        toastVal: result.message
      });
    }
  }


  componentDidMount(){
    if(localStorage.getItem('ISLOGIN')){
      //登录了
     this.props.history.push('/message');
    }
  }
}
export default login;
