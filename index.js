// https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm

const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/process_get', (req, res) => {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

const server = app.listen(8081, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`app is listing on ${host},${port}`);
})