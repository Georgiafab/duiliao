import React from "react";
import "./style.scss";
import Header from "components/Header/Header";
import List from "./chirdren/list"
import {requestFriendByKey} from 'services/UserServices'


class add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        listArr:[],
        begin:false
    };
  }

  render() {
    
    let sumNo= <p className="sumNo" >共搜索到{this.state.listArr.length}位好友</p>;
    let noneResult=<div className="noneResult" style={{display:this.state.begin?"block":"none"}}><i className="iconfont icon-kong"></i> <span>无搜索结果</span></div>;

    let result=null;
    if(this.state.listArr.length<=0){
        result=noneResult;
    }else{
        result=sumNo;
    }

    return (
      <div className="page-wrap">
        <Header title={"添加好友"} hasmore={true} {...this.props} />
        <div className="page subpage" id="add">
          <div className="search">
            <i className="iconfont icon-sousuo"></i>
            <input
              type="text"
              placeholder="搜索好友昵称"
              ref={(inp)=>{
                  this.inp=inp
              }}
              onKeyUp={this.searchAction.bind(this)}
            />
          </div>

          <List data={this.state.listArr} onGoUserDetail={this.goUserDetail.bind(this)} />

            {result}
        </div>
      </div>
    );
  }

  searchAction(ev) {
    ev.persist();
    // console.log(ev.keyCode)
    if(ev.keyCode===13){
        this.initSearchData(this.inp.value);
        
    }

  }

  async initSearchData(value){
    
      const result=await requestFriendByKey({
          "key":value
      });
      console.log(result);
      this.setState({
        listArr:result,
        begin:true
      })
      
  }

  goUserDetail(id){
    this.props.history.push('/user/add/detail/'+id);
  }
}

export default add;
