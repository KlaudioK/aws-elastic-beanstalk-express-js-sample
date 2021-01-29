const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Space Cadets, time for take off!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
