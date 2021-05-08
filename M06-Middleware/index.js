var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//https://github.com/expressjs/morgan
var logger = require("morgan");

//Middleware cek Buku Bahasa Indonesia dan Bahasa Inggris
const myMiddleware = (req, res, next) => {
  if (req.params.Buku === "BahasaIndonesia" || req.params.Buku === "BahasaInggris") {
    console.log("Buku Ditemukan");
    next();
  } else {
    const err = {
      status: "error",
      data: {
        Buku: req.params.buku,
      },
    };
    next(err);
  }
};

//route dengan method get
app.get("/api/:Buku/:Tahun", myMiddleware, function (req, res) {
  res.statusCode = 200;
  //content-type pada expressjs
  res.setHeader("Content-Type", "text/plain");
  res.send(req.params);
});

//ErrorHandling
app.use((error, req, res, next) => {
  res.send(error);
});

app.listen(4000, function () {
  console.log("Server run");
});