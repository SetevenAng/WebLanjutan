const http = require('http');
const fs = require('fs');

//Buat object server dengan listen port 3000
http
    .createServer(function(req,res){
        //Menggunakan modul readfile
        fs.readFile('index.html',(err,data) => {
            //Mengembalikan pesan error ketika gagal baca file
            if (err) throw err;

            //http Header
            res.writeHead(200,{"Content-type": "text/html"});

            //Respon ke browser / client berupada data dari file index.html
            res.write(data);

            //Respon diakhiri
            res.end();
        });
    })
    .listen(3000);