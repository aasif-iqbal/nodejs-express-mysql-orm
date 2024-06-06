const express = require('express')
const bodyParser = require('body-parser')

require('./models/index');

const app = express();
const PORT = 3000;

app.get('/', function(req, res){
    res.send('hello world');
})

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})