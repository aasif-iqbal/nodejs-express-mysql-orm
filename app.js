const express = require('express')
const bodyParser = require('body-parser')

require('./models'); // index
const User = require('./models/user');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// User.sync({ force:true });
// User.drop();
User.sync();

app.get('/', function(req, res){
    res.send('hello world');
})

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})