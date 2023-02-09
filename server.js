var express = require('express')
var app = express()
console.log('ok')
app.get('/', function (req, res) {
  res.send('hello world')
})  

app.listen(3000)