import Http from '../utils/Http'
import api from '../utils/api'


// 关键字搜索好友列表
export const requestFriendByKey = async (data)=>{
    let result = await Http.post(api.FIND_FRIEND_BY_KEY_API, data);

    if(result.code === 0){
      return result.data
    }else{
      return result.message;
    }
  }

  
  //请求用户详细信息
  export const requestFriendBy_ID = async (data)=>{
    let result = await Http.get(api.FIND_FRIEND_BY__id_API, data);

    if(result.code === 0){
      return result.data
    }else{
      return result.message;
    }
  }


   //请求添加好友
   export const requestAddFriend = async (data)=>{
    let result = await Http.post(api.ADD_FRIEND_API, data);

    if(result.code === 0){
      return result
    }else{
      return result.message;
    }
  }

  //查询是否为好友
  export const requestIsFriend = async (data)=>{
    let result = await Http.post(api.IS_FRIEND_API, data);

    if(result.code === 0){
      return result
    }else{
      return result.message;
    }
  }

    //请求好友列表
    export const requestFriendList = async (data)=>{
      let result = await Http.get(api.FRIEND_LIST_API, data);
  
      if(result.code === 0){
        return result.data
      }else{
        return result.message;
      }
    }


  export default{
    requestFriendByKey,
    requestFriendBy_ID,
    requestAddFriend,
    requestIsFriend,
    requestFriendList
  }
  