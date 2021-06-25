var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : "my_db"
});

con.connect();
con.query('SELECT 1 + 1 AS solution',function(error,results,fields){
  if(error) throw error;
  console.log('The Solution is : ', results[0].solution);
});
con.end();