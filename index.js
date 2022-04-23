const express = require('express');
const executor = require('./executor')

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome to postpostman monitors executor');
})

app.post('/executeMonitor', async (req, res) => {
    const reqBody = (req.body)
    console.log(reqBody)
    if(!reqBody.collection_url) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    results = await executor(reqBody.collection_url);
    res.send(results);
});

const port = process.env.EXECUTOR_PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));