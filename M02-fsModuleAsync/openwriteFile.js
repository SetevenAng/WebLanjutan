var fs = require("fs");

fs.open("datamw.txt","w+",function(err,file){
    if(err) throw err;

    //Data yang akan kita tulis ke file
    let data = "Kelas Mobile Dan Web";

    //Tulis konten ke file
    fs.writeFile(file,data,(err) => {
        if(err) throw err;
        console.log("Tersimpan!");
    });

    //Baca File
    fs.readFile(file,(err,data) => {
        if(err) throw err;
        console.log(data.toString("utf8"));
    });
});