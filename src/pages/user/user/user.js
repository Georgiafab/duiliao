import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Search from "components/Search/Search";
import Loading from "components/Loading/Loading";
import Scroll from "components/Scroll/Scroll";
import { requestFriendList, requestFriendBy_ID } from "services/UserServices";

const List = React.lazy(() => import("./children/list"));

let statusLis = [
  {
    id: 0,
    text: "好友"
  },
  {
    id: 1,
    text: "群聊"
  }
];

class user extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 0,
      friendList: [],
      filterList: []
    };
  }

  render() {
    let { status, filterList, friendList } = this.state;
    return (
      <div className="page" id="user">
        <header className="user-top">
          <h1>朋友</h1>
          <div className="user-top-one">
            {statusLis.map(item => {
              return (
                <span
                  className={status === item.id ? "active" : ""}
                  key={item.id}
                  onClick={this.changeStatusAction.bind(this, item.id)}
                >
                  {item.text}{" "}
                </span>
              );
            })}

            <Link to="/user/add">
              <i className="iconfont icon-jia"></i>
            </Link>
          </div>
        </header>

        <Scroll>
          <div>
            <Search
              friendList={friendList}
              sendFilterList={this.filterListAction.bind(this)}
            />
            <React.Suspense
              fullback={<Loading />}
            ></React.Suspense>
            <List friendList={filterList} {...this.props} />
          </div>
        </Scroll>
      </div>
    );
  }
  changeStatusAction(id) {
    this.setState({
      status: id
    });
  }

  async initdata() {
    const result = await requestFriendList({
      id: ""
    });



    //获取所有好友的ID
    let friendArr = [];
    result.map(item => {
      friendArr.push(item.friend_id);
    });

    // 根据好友ID查找详细信息
    let newArr = friendArr.map(async _id => {
      return requestFriendBy_ID({
        _id: _id
      });
    });
    let res = await Promise.all(newArr);
    // console.log(result);

    this.setState({
      friendList: [...this.state.friendList, ...res],
      filterList: [...res]
    });
  }

  filterListAction(list) {
    this.setState({
      filterList: [...list]
    });
  }
  componentDidMount() {
    this.initdata();
  }
}

export default user;
