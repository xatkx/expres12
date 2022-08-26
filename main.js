const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('i am life')
})

app.get('/app', (req,res) => {
    res.send('hola')
})

app.listen(8080 , (res) => {
    console.log('life')
})