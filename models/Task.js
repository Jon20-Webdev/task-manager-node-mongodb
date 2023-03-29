const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 chars']
    },
    completed: {
        type: Boolean,
        default: false
    }
});  // created our new schema that will reflect to the DB 

module.exports = mongoose.model('Task', TaskSchema)