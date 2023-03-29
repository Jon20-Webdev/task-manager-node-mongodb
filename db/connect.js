const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose
    .connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
};  // please check the email notes for connectionString of dotenv

module.exports = connectDB;