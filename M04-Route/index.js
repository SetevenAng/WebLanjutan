const bodyParser = require("body-parser");
var express = require("express");
var server = express();

//https://github.com/expressjs/morgan
var logger = require("morgan");

server.use(logger("dev"));
server.use(express.static(__dirname + "/publik"));
server.listen(4000,function(){
    console.log("Server run");
});

var data = bodyParser.urlencoded({extended:false});
server.post("/api/datamhs",data,function(req,res){
    res.send(req.body);
});