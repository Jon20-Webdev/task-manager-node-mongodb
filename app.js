const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')   //connect from mongoDB
require('dotenv').config()  // This is from the connection string

app.use(express.json());
app.use(('/api/v1/tasks'), tasks);

app.get(('/hello'), (req, res) => {
    res.send('Hello, welcome to homepage!')
});

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is updated listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error)
    }
}

start()

//where on 1:16:48 
// creating schema