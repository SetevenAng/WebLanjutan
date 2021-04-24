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


server.get("/api/cari",function(req,res,next){
    var nama = req.query.nama;
    console.log('nama : ',nama);
    var umur = req.query.umur;
    console.log('umur : ',umur);
    res.send(umur);
});