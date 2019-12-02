import React from 'react';



class list extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        let {data,onGoUserDetail}=this.props;
        return (<div className="list">
            <ul>
            {data.map(item=>{
                return (<li key={item._id} onClick={(()=>{
                    onGoUserDetail(item._id);
                })}>
                    <img src={item.averImg||require("../../../../img/timg.jpg")} alt={item.name}/>
                    <div className="item-right">
                        <h3>{item.name}</h3>
                        <span>{item.city||'未知地区'}</span>
                        <i className="iconfont icon-arrow"></i>
                    </div>
                </li>)
            })}
            </ul>
        </div>)
    }

    // toUserDetail(id){
    //     console.log(id);
    //     console.log(this.props);
    //     // 
    // }

}


export default list;