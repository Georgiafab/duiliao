// 管理api
export const HOST = '';



/* 
#### 注册
**method:** post
**参数:** tel      password
*/
const REGIESTER_API = HOST+'/api/user/regiester';

/* 
#### 登录
**method:** post
**参数:** tel   type('code',  'password' )  value 
*/
const LOGIN_API = HOST+'/api/user/login';

/*
检查登录
参数：无
*/
const CHECK_LOGIN = HOST+'/api/user/check_login'

/*
退出登录
参数：无
*/
const LOGOUT_API = HOST+'/api/user/logout';

/*
关键字搜索好友
参数：key
*/
const FIND_FRIEND_BY_KEY_API = HOST+'/api/user/find_friend_by_key';


/*
_id获取好友详细信息
参数：friend_id
*/
const FIND_FRIEND_BY__id_API = HOST+'/api/user/find_friend_by__id';


/*
添加好友
参数：friend_id
*/
const ADD_FRIEND_API = HOST+'/api/friend/addfriend';



/*
判断是否为好友
参数：friend_id
*/
const IS_FRIEND_API = HOST+'/api/friend/isfriend';



/*
请求好友列表
参数：null
*/
const FRIEND_LIST_API = HOST+'/api/friend/find_friend_by_user';

export default {
    REGIESTER_API,
    LOGIN_API,
    CHECK_LOGIN,
    LOGOUT_API,
    FIND_FRIEND_BY_KEY_API,
    FIND_FRIEND_BY__id_API,
    ADD_FRIEND_API,
    IS_FRIEND_API,
    FRIEND_LIST_API
}