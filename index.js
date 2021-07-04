/*
 express + http-proxy-middleware 代理请求
 */
const express = require('express');
const timeout = require('connect-timeout');
const proxy = require('http-proxy-middleware');
const app = express();
// cookie写入地址
const cookieUrl = 'www.github.com'
// PORT 服务端口
const  kandao =  { 
  target : 'https://expressproxy.luckin.workers.dev',
  changeOrigin: true,
  cookieDomainRewrite: {
    "*": cookieUrl // 把相应的 cookie 域都设置成 localhost
  },
  ws: true,
  withCredentials: true,
 }
 
// 超时时间
const TIME_OUT = 30 * 1e3;
 
// 设置端口
 
// 设置超时 返回超时响应
app.use(timeout(TIME_OUT));
//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Headers", "DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Access-Control-Allow-Headers,Authorization,Origin,Accept,Power-By,x-token-id");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("accept",'image/webp,image/apng,image/*,*/*;q=0.8')
  // res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.use((req, res, next) => {
  if (!req.timedout) next();
});
// 看到代理
app.use(proxy('/', { ...kandao }));
 
// 监听端口
app.listen(() => {
  console.log(`启动代理服务器=> https://expressproxy.luckin.worders.dev`);
});
