const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = ['Amin', 'Ruhul', 'Pabel', 'Rabbi', 'Hridoy', 'Yeasfi', 'Sohan']


// get

app.get('/', (req, res) => {
    const fruit = {
        product: 'apple, banana',
        price: '100, 80'
    }
    res.send(fruit);
});
app.get('/fruit/banana', (req, res) => {
    res.send({ fruit: 'banana', quantity: 1000, price: 5000 });
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({ id, name });
})


// post

app.post('/addUser', (req, res) => {
    // Save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(8080, console.log("Listening port 8080")); 
