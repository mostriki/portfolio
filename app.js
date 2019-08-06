const express = require('express');

const app = express();
const port = process.env.PORT || "3000";

app.get('/', function(req, res) {
    res.status(200).send('Hello World!');
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}!`);
});