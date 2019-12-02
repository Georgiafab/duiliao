import Http from '../utils/Http'
import api from '../utils/api'


// 注册
export const requestRegiester = async (data)=>{
    let result = await Http.post(api.REGIESTER_API, data);
    // console.log(result);
    return result;
    // if(result.code === 0){
    //   return 'ok';
    // }else{
    //   return result.message;
    // }
  }
  
  // 密码登录
  export const requestLoginByPassword = async(data)=>{
    let result = await Http.post(api.LOGIN_API, data);
    return result;
  }

//   // 检查是否登录
// export const requestCheckLogin = async ()=>{
//     let result = await Http.get(api.CHECK_LOGIN);
//     return result.data.code;
//   }
  
  // 退出
  export const requestLogOut = async ()=>{
    let result = await Http.get(api.LOGOUT_API);
    return result.data.code;
  }
  


  export default{
    requestRegiester,
    requestLoginByPassword,
    // requestCheckLogin,
    requestLogOut
  }