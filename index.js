

var express = require('express'); 
var cors = require('cors'); 
var bodyParser = require('body-parser');

var app = express(); 

app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.static('public'));
  

app.get('/', function (req, res) {  
   res.send('Welcome to ArjunDeep'); 
   consloe.log('Welcome to ArjunDeep');   
}) 

app.get('/update_data', function (req, res) {  
       var mysql = require('mysql2');  
    var con = mysql.createConnection({  
    host: "localhost",  
    user: "root",  
    password: "",  
    database: "crud"  
    });  
    con.connect(function(err) {  
    if (err) throw err;  
    con.query("UPDATE `login_tbl` SET `username`='Jahagir',`password`='Jahagir@123',`created_at`='2021-0503' WHERE `id`=12;", function (err, result) {  
    if (err) throw err;  
    res.json(result);
    console.log(result);  
    });  
    });  
}) 


app.get('/delete_data', function (req, res) {  
       var mysql = require('mysql2');  
    var con = mysql.createConnection({  
    host: "localhost",  
    user: "root",  
    password: "",  
    database: "crud"  
    });  
    con.connect(function(err) {  
    if (err) throw err;  
    con.query("DELETE FROM `login_tbl` WHERE `id`=13;", function (err, result) {  
    if (err) throw err;  
    res.json(result);
    console.log(result);  
    });  
    });  
}) 


app.post('/insert_data', function (req, res) {  
       var mysql = require('mysql2');  

       var dd=req.body;
       console.log(dd);
    var con = mysql.createConnection({  
    host: "localhost",  
    user: "root",  
    password: "",  
    database: "crud"  
    });  
    con.connect(function(err) {  
    if (err) throw err;  
    con.query(`INSERT INTO login_tbl (id, username, password, created_at) VALUES (NULL, '${dd.username}', '${dd.password}', '${dd.created_at}')`, function (err, result) {  
    if (err) throw err;  
    res.json(result);
    console.log(result);  
    });  
    });  
})  


app.get('/database_data', function (req, res) {  
       var mysql = require('mysql2');  
    var con = mysql.createConnection({  
    host: "localhost",  
    user: "root",  
    password: "",  
    database: "crud"  
    });  
    con.connect(function(err) {  
    if (err) throw err;  
    con.query("SELECT * FROM login_tbl", function (err, result) {  
    if (err) throw err;  
    res.json(result);
    console.log(result);  
    });  
    });  
})  


app.get('/data',function(req , res){
  var a=[
      { name:'ArjunDeep', email:'ad@gmail.com',phone:'999999999'},
      { name:'rudhay', email:'ad@gmail.com',phone:'8888888'},
      { name:'shamal', email:'ad@gmail.com',phone:'77777777'},
      { name:'amol', email:'ad@gmail.com',phone:'66666666'},
      { name:'sachin', email:'ad@gmail.com',phone:'55555555'},
      { name:'rahul', email:'ad@gmail.com',phone:'44444444'},
      { name:'onkar', email:'ad@gmail.com',phone:'33333333'},
      { name:'pooja', email:'ad@gmail.com',phone:'2222222222'},     
  ];
  res.json(a);
     console.log(res);
})
var server = app.listen(8000, function () {  
var host = server.address().address  
  var port = server.address().port  
 console.log("Example app listening at http://%s:%s", host, port)  
})  





