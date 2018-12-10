var express = require('express');
var proxyMiddleWare = require("http-proxy-middleware");
var app = express();
app.use(express.static("./"));

app.use("/admin", proxyMiddleWare({
  target: "http://192.168.5.102:8081",
  changeOrigoin:true
}))
app.listen(8000);