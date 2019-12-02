import React from "react";
import './style.scss'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="search">
          <i className="iconfont icon-sousuo"></i>
          <input
            type="text"
            placeholder="搜索"
            onKeyUp={this.searchAction.bind(this)}
          />
        </div>
      </div>
    );
  }




  searchAction(ev){
    ev.persist();
    let val=ev.target.value;

    let list=this.props.friendList.filter(item=>{
        return item.name.indexOf(val) > -1;
    });
    
    this.props.sendFilterList(list);

  }
}

export default Search;
