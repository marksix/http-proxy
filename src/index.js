let url = 'https://www.github.com'

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
