const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');

app.use(express.json());
app.use(('/api/v1/tasks'), tasks);

app.get(('/hello'), (req, res) => {
    res.send('Hello, welcome to homepage!')
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});