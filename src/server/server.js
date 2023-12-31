const express = require('express');
const app = express();
const port = 4000;

const login = require('./login');


app.get('/', (req, res) => res.send('Hello World!'));

app.post('/login', login);

app.get('/dashboard', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));