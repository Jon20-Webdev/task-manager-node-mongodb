const Task = require('../models/Task');

const getAllTasks = (req, res) => {
    res.send('All NEW database Items Updated...')
};

const createTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
};  // created how to handle error by sending error msg

const getTask = (req, res) => {
    res.send('Get Task here...')
};

const updateTask = (req, res) => {
    res.send('Update Task here...')
};

const deleteTask = (req, res) => {
    res.send('Delete Task here!')
};

module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask
};
