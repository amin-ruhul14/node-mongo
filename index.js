const express = require('express');

const app = express();

const users = ['Amin', 'Ruhul', 'Pabel', 'Rabbi', 'Hridoy', 'Yeasfi', 'Sohan']

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
    console.log(req.query.sort);
    const name = users[id];
    res.send({ id, name });
})
const user = ['Moin', 'Sohan', 'Anam', 'Shakil']
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query);
})

app.listen(8080, console.log("Listening port 8080"));
