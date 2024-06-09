const express = require('express')
const bodyParser = require('body-parser')

const userCtr = require('./controllers/userController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


app.get('/', function(req, res){
    res.send('hello world');
})

app.get('/users', userCtr.getUser);
app.post('/users', userCtr.addUser);


app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})