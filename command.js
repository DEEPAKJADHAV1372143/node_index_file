npm install -g express  
npm install express --save 
npm install body-parser --save   
npm install cookie-parser --save   
npm install multer --save   
npm install cors
npm install body-parser
npm install mysql2


====cor=====
var cors = require('cors')
var app = express()
app.use(cors())

====body parser===
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})


=====code=====
var express = require('express');  
var app = express();  
app.get('/', function (req, res) {  
   res.send('Welcome to JavaTpoint');  
})  
var server = app.listen(8000, function () {  
var host = server.address().address  
  var port = server.address().port  
 console.log("Example app listening at http://%s:%s", host, port)  
})  
