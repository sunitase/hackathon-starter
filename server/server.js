const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api', (req, res) => {
    //axios.get(`http://www.mocky.io/v2/5d5cba7e320000a5e4628f33?apikey=${process.env.APIKEY}`)
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=1gPUiHV0m85zO9DCG6ssTie5bYmKi7cL9XvJgiEm`)
        .then((result) => {
            res.send(result.data);
        })
        .catch((error) => {
            console.error(error);
            res.send('An error occured.');
        })
});

module.exports = app;