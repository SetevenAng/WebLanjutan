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

//Menghitung Luas Persegi
server.get("/persegi/:angka1/:angka2",function(req,res){
    angka1 = req.params.angka1;
    angka2 = req.params.angka2;
    hasil = parseInt(angka1)*parseInt(angka2);
    var hasil1 = String(hasil)
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plan");
    res.send("Luas Pesergi Panjang : " + hasil1);
});