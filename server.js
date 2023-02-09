var express = require('express')
const mongoose = require('mongoose')
var mysql = require('mysql');
const Product = require('./models/productModels')
var app = express()
app.use(express.json())//middleware 
app.use(express.urlencoded({extended: false}))
app.get('/', function (req, res) {
  res.send('hello world')
})  

app.get('/trilokee', function (req, res) {
  res.send('hello trilokee')
})  

app.get('/getData', function (req, res) {
  res.send('hello data')
}) 

app.post('/saveProducts', async(req, res) => {
  try {
      const product = await Product.create(req.body)
      res.status(200).json(product);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
})
mongoose.set('strictQuery', false);
//mysql connection 
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "@Tn33333"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected! to mysql");
//   app.listen(3000,()=>{
//     console.log('NODE_CRID_API RUNNING ON PORT 3000');
//   })
// });
//mongo connection 
mongoose.connect('mongodb://localhost:27017/Node-CRUD-API?retryWrites=true&w=majority').then(()=>{
  app.listen(3000,()=>{
    console.log('NODE_CRID_API RUNNING ON PORT 3000');
  })
  console.log('connected to mongodb');
}).catch((error)=>{console.log('Error while connecting mongodb',error);});
