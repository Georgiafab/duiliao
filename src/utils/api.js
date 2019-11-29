// 管理api
// export const HOST = 'http://localhost:9000';



/* 
#### 注册
**method:** post
**参数:** tel      password
*/
const REGIESTER_API = '/api/user/regiester';

/* 
#### 登录
**method:** post
**参数:** tel   type('code',  'password' )  value 
*/
const LOGIN_API = '/api/user/login';

/*
检查登录
参数：无
*/
const CHECK_LOGIN = '/api/user/check_login'

/*
退出登录
参数：无
*/
const LOGOUT_API = '/api/user/logout';



export default {
    REGIESTER_API,
    LOGIN_API,
    CHECK_LOGIN,
    LOGOUT_API
}