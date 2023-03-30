const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg: error})
    }
};

const createTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
};  // created how to handle error by sending error msg

const getTask = async (req, res) => {
    try {
        const { id: taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        if (!task) {
            return res.status(404).json({msg: `Error 404 no task found on ID: ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
};

const updateTask = (req, res) => {  // continuation: we are here...
    res.send('Update Task here...')
};

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params
        const task = await Task.findOneAndDelete({_id: id})
        if (!task) {
            res.status(404).json({msg: `Error 404 task not found on id:${id} `})
        }
        res.status(200).json({task})
        // or you can use res.status(200).json({task: null, status: "success"})
    } catch (error) {
        res.status(500).json({msg: error})
    }
};

module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask
};
