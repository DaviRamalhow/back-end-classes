const express = require('express');
const app = express();


app.get('/', function (req, res) {
    res.send('Hello World');

})

app.get('/produtos', function (req, res) {
    res.send('Tudo ok para a lista de profutos');

})


app.post('/produtos', function (req, res){

    res.send('Tudo ok para incluir um produto');

})

app.put('/produtos', function (req, res){

    res.send('Tudo ok para alterar um produto');

})

app.delete('/produtos', function (req, res){

    res.send('Tudo ok para deletar um produto');

})

app.listen(3000);