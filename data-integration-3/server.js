const express = require('express');
const app = express();
const page = require('./page.js');

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });
app.use(express.static('public'));