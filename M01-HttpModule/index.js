const http = require("http");

//buat object server dengan listen port 3000
http
    .createServer(function(req,res){
        //http header
        res.writeHead(200,{"Content-Type": "text/html"});

        //respon ke browser / client
        res.write("<H1>Module HTTP Mobile and Web Dengan Formatting HTML</H1>");

        //Respon diakhiri
        res.end();
    })
    .listen(3400);