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

//Menghitung Luas Segitiga
server.get("/api/cari",function(req,res,next){
    Alas = req.query.Alas;
    console.log('Alas : ',Alas);
    Tinggi = req.query.Tinggi;
    console.log('Tinggi : ',Tinggi);
    hasil = parseFloat(1/2)*parseInt(Alas)*parseInt(Tinggi);
    res.send("Luas Segitiga : "+ hasil);
});