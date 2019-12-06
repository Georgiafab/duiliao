import Http from '../utils/Http'
import api from '../utils/api'


// 开始聊天，请求聊天记录
export const requestStartChat = async (data)=>{
    let result = await Http.post(api.START_CHAT_API, data);
    if(result.code === 0){
      return result.data;
    }else{
      return result.message;
    }
  }

  //结束聊天，保存聊天记录
  export const requestEndChat = async (data)=>{
    let result = await Http.post(api.END_CHAT_API, data);
    if(result.code === 0){
      return 'ok';
    }else{
      return result.message;
    }
  }


  export default{
    requestStartChat
  }