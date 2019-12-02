import React from 'react';


class list extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    };
}

    render() {
        let {friendList} = this.props;

        const listDom=(friendList.map(item=>{
            return (
                <li key={item._id} onClick={(()=>{
                    this.onSendMessage(item._id);
                })}>
                    <img src={item.averImg||require("../../../../img/timg.jpg")} alt={item.name}/>
                    <div className="item-right">
                        <h3>{item.name}</h3>
                        <span>{item.city||'未知地区'}</span>
                    </div>
                </li>
            )
        }));
        const noDom=(<div className="nofriend">
            你还没有好友哦！
        </div>);
        return (<div className="list">
            <div className="cont">
                <ul>
                    {
                        friendList.length?listDom:noDom
                    }
                </ul>
            </div>

        </div>);
    }

    onSendMessage(id){

        
        this.props.history.push('/chat/'+id);
    }
}


export default list;