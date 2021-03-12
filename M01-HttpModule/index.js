const http = require("http");

//buat object server dengan listen port 3000
http
.createServer(function(req,res){
    //respon ke browser / client
    res.write("Module HTTP Mobile and Web");

    //Respon diakhiri
    res.end();
})
.listen(3000);