// // 提供fetch请求
// // 对fetch进行二次封装

// import "whatwg-fetch";

// // fetch();

// export default class Http {
//   static async request(method, url, data) {
//     console.log(data);
//     //get方法的参数直接接在url的后面
//     let dataStr = "?";
//     Object.keys(data).map(key => {
//       dataStr += key + "=" + data[key];
//     });

//     //只有post方法有配置项
    
//     let option= method === "POST"?{
//         method,
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }:{};

//     url = method === "GET" ? url + "?" + dataStr : url;

//     const response = await window.fetch(url,option);

//     return this.isSuccess(response);
//   }

//   // 判断响应结果是否成功
//   static isSuccess(res) {
//     if (res.status >= 200 && res.status < 300) {
//       return res.json();   //格式化数据
//     } else {
//       this.requestExpection(res);
//     }
//   }

//   // 构建失败对象
//   static requestExpection(res) {
//     throw new Error(res);
//   }

//   static get(url, data) {
//     return this.request("GET", url, data);
//   }

//   // post便捷方法
//   static post(url, data) {
//     return this.request("POST", url, data);
//   }
// }

import 'whatwg-fetch'

  export default class Http{

    static async get(url,data){

        let params = Object.entries(data).reduce((arr, [k, v]) => arr.concat(encodeURIComponent(k) + '=' + encodeURIComponent(v)), []).join('&')
        // console.log(url+'?'+params);
        

        try{
            let response = await window.fetch(url+'?'+params);
            let data = await response.json();

            
            return data
        } catch(error){
            throw new Error(error)
        }
    }

    static async post(url,data){
        try{
          // console.log(data);
            let response = await fetch(url,{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(data)
            })
            let res=await response.json();
            return res;
        }catch(error){
            throw new Error(error)
        }
    }
  }
