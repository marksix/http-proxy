let url = 'http://127.0.0.1:9527'

$.ajax(

 {

     url,

     // 如果请求需自动带上cookie

     type: 'GET',

     xhrFields: {

         withCredentials: true

     },

     crossDomain: true,

     success () {}

 }

)
