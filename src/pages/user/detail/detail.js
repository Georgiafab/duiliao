import React from 'react';
import "./style.scss"
import {requestFriendBy_ID,requestAddFriend,requestIsFriend} from 'services/UserServices'
import Toast from 'components/Toast/toast'
class detail extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        userInfo:{},
        _id:'',
        toastVal:{
            val:''
        },
        isfriend:false
    };
}

    render() {
        let {userInfo,toastVal,isfriend}=this.state;
        return (<div className="page-wrap">
            <div className="page subpage" id="detail">
                <div className="userCard">
                <img src={userInfo.averImg||require("../../../img/timg.jpg")} alt={userInfo.name}/>
                <h3>{userInfo.name}</h3>
                <span>ID:{userInfo.id}</span>
                <p>{userInfo.desc||"这个用户好懒呀，啥都没说"}</p>
                </div>
                <div className="userFunc">
                    <div className="city func">
                        <i className="iconfont icon-dingwei"></i>
                        <span>{userInfo.city||"未知地区"}</span>
                    </div>
                    <div className="moments func">
                        <i className="iconfont icon-ai-camera"></i>
                        <span>圈子</span>
                    </div>

                </div>

    <div className="addUser" style={{display:isfriend?"none":"block"}} onClick={this.addUserAction.bind(this)}>添加好友</div>
    <div className="addUser" style={{display:isfriend?"block":"none"}} onClick={this.toSendMessAction.bind(this)}>发信息</div>
            </div>

            <Toast val={toastVal} />
        </div>);
    }


    async initdata(){
       let _id=this.props.match.params.id;
        const result=await requestFriendBy_ID({
            _id:_id
        });
        this.setState({
            userInfo:{
                ...this.state.userInfo,
                ...result
            },
            _id:_id
        },()=>{
            this.isfriendrequest();
        })
    }

    async addrequest(){
        const result=await requestAddFriend({
            friend_id:this.state._id
        });
        this.isfriendrequest();
        if(result.code===0){
            this.setState({
                toastVal:{
                    ...this.state.toastVal.val,
                    val:"添加好友成功"
                }
            })
        }
    }

    async isfriendrequest(){
        const result=await requestIsFriend({
            friend_id:this.state._id
        });
        console.log(result);
        if(result.data.length){
            this.setState({
                isfriend:true
            })
        }
        
    }
    toSendMessAction(){

    }

    componentDidMount(){
        this.initdata();
    }

    addUserAction(){
        this.addrequest();
        
    }
    
}


export default detail;