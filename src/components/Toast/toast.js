import React from "react";
import './style.scss'


class toast extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      show:'none'
    }
  }

  render() {
    let {val}=this.props;
    let {show}=this.state;
    return (
      <div id="toast" style={{display:show}}>
        {/* <div className="mask"></div> */}
        <span>{val.val}</span>
      </div>
    );
  }

  componentDidUpdate(oldProps){

    if(this.props.val!==oldProps.val){
      
      this.setState({
        show:'block'
      },()=>{
        this.timer=setTimeout(()=>{
          this.setState({
            show:'none'
          });
        },3000);
      })
    }
  }
  componentWillUnmount(){
    clearTimeout(this.timer);
  }
}

export default toast;
