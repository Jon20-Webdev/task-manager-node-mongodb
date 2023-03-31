const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const errorHandler = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')
const connectDB = require('./db/connect')   //connect from mongoDB
require('dotenv').config()  // This is from the connection string
const port = process.env.PORT || 3000;

app.use(express.static('./public'))
app.use(express.json());
app.use(('/api/v1/tasks'), tasks);
app.use(notFound);
app.use(errorHandler);


// app.get(('/hello'), (req, res) => {
//     res.send('Hello, welcome to homepage!')
// });



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

//where on
    // creating schema