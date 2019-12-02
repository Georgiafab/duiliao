import React from 'react';
import './style.scss'
import Toast from 'components/Toast/toast'
import {requestRegiester} from 'services/MineServices'

class regiester extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        status:0,
        text:'下一步',
        toastVal:{
            val:''
        }
    };
    
}

    render() {
        let {status,text,toastVal}=this.state;
        return (
        
        <div className="page" id="regiester">

            <div className="reg-top">
                <h2>绑定终端机</h2>

                <ul className="state">
                    <li className={status>=0?'active':''}><i>1</i>
                        <span>输入ID码</span></li>
                    <span className={status>=1?'in':'off'}></span>
                    <li className={status>=1?'active':''}>
                        <i>2</i>
                        <span>设置账号</span>
                    </li>
                    <span className={status>=2?'in':'off'}></span>
                    <li className={status>=2?'active':''}>
                        <i>3</i>
                        <span>  完成  </span>
                    </li>
                </ul>
            </div>
            <div className="reg-ps"> 
                <div className="reg-p p1" style={{display:status==0?'block':'none'}}>
                    <label>
                        <i className="iconfont icon-wode"></i>
                        <input type="text" name="id" placeholder="终端ID" ref={(inpa)=>{
                            this.inpa=inpa
                        }}/>
                    </label>
                    <label>
                        <i className="iconfont icon-wode"></i>
                        <input type="text" name="SN" placeholder="终端SN码" ref={(inpb)=>{
                            this.inpb=inpb
                        }} />
                    </label>
                    <p>翻看终端背后的ID与SN码，必须正确无误</p>
                </div>
                <div className="reg-p p2" style={{display:status==1?'block':'none'}}>
                    <label>
                        <i className="iconfont icon-wode"></i>
                        <input type="text" name="name" placeholder="设置昵称" ref={(inpc)=>{
                            this.inpc=inpc
                        }}/>
                    </label>
                    <label>
                        <i className="iconfont icon-wode"></i>
                        <input type="text" name="pass" placeholder="设置密码" ref={(inpd)=>{
                            this.inpd=inpd
                        }}/>
                    </label>
                    <p>昵称须唯一且不能修改</p>
                </div>
                <div className="reg-p p3" style={{display:status==2?'block':'none'}} >
                   <div className="sucess">
                       <i className="iconfont icon-wancheng"></i>
                       <p>绑定成功</p>
                   </div>
                </div>
            </div>


        <div className="btn" onClick={this.nextAction.bind(this)} >{text}</div>

        <Toast val={toastVal} />
        </div>
        );
    }

    nextAction(){
        if(this.state.status>=2){
            //跳转
            this.props.history.push('./login');
        }
        else{
            if(this.state.status==0){
                // console.log(0);
                if(!this.inpa.value||!this.inpb.value){
                    this.setState({
                        toastVal:{
                            ...this.state.toastVal.val,
                            val:"请将终端ID和SN码填写完整"
                        }
                    })
                    return;
                }
                this.changeStatus()
            }else if(this.state.status==1){
                // console.log(1);
                if(!this.inpc.value||!this.inpd.value){
                    this.setState({
                        toastVal:{
                            ...this.state.toastVal.val,
                            val:"请将昵称和密码填写完整"
                        }
                    })
                    return;
                }
                this.initData();
                
            }
           
        }
    }

    changeStatus(){
        this.setState({
            status:this.state.status+1
        },()=>{
            if(this.state.status===1){
                
            }
            if(this.state.status>=2){
                
                this.setState({
                    text:"完成"
                });
            }
        })
       }

       async initData(){
        let result= await requestRegiester({
            name:this.inpc.value,
            pass:this.inpd.value,
            id:this.inpa.value,
            sn:this.inpb.value
        });
        
        if(result.code===0){
            localStorage.setItem('ISLOGIN','true');
            this.changeStatus();
        }else{
            this.setState({
                toastVal:result.message
            })
        };
       }

    componentDidMount(){
        // console.log(this.props);
    }
}


export default regiester;