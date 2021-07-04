let url = 'https://http-proxy.luckin.workers.dev'

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
