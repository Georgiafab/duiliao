import Http from '../utils/Http'
import api from '../utils/api'


// 注册
export const requestRegiester = async (tel, password)=>{
    let result = await Http.post(api.REGIESTER_API, {tel, password});
    if(result.data.code === 0){
      return null;
    }else{
      return result.data.message;
    }
  }
  
  // 密码登录
  export const requestLoginByPassword = async(tel, password)=>{
    let result = await Http.post(api.LOGIN_API, {tel, type: 'password', value: password});
    if(result.data.code === 0){
      return null;
    }else{
      return result.data.message;
    }
  }

  // 检查是否登录
export const requestCheckLogin = async ()=>{
    let result = await Http.get(api.CHECK_LOGIN);
    return result.data.code;
  }
  
  // 退出
  export const requestLogOut = async ()=>{
    let result = await Http.get(api.LOGOUT_API);
    return result.data.code;
  }
  


  export default{
    requestRegiester,
    requestLoginByPassword,
    requestCheckLogin,
    requestLogOut
  }