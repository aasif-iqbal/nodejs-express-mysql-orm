const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;

// controller
const userCtr = require('./controllers/userController');

app.use(bodyParser.json());

// Routes
app.get('/', function(req, res){
    res.send('hello world');
})

app.get('/users', userCtr.getUsers);
app.get('/user/:id', userCtr.getUser);
app.post('/users', userCtr.addUser);
app.patch('/user/:id', userCtr.updateUser);
app.delete('/user/:id', userCtr.deleteUser);

// 
app.get('/users/details', userCtr.getFullDetails);

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})