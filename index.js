const express = require('express');
const App = express();
const people = require('./people');

const PORT = 5050;
const HOST = "localhost"


// Home(bydefault endpoint)
App.get('/', (req, res)=>{
    res.send("This is a bydefault endpoint");
});

App.get('/users', (req, res)=>{
    res.status(200).json(people)
})


App.get('/users/:id', (req, res)=>{
    const x = req.params.id;
    res.status(200).json(people[x])
})


App.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})