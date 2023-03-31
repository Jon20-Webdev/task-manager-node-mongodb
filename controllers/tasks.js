const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../error/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
});

const createTasks = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}) // created how to handle error by sending error msg

const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        if (!task) {
            return next(createCustomError(`No task with task id: ${taskID}`, 404))
    }
    res.status(200).json({task})
})

const deleteTask = asyncWrapper(async (req, res, next) => {
    const {id} = req.params
    const task = await Task.findOneAndDelete({_id: id})
        if (!task) {
            return next(createCustomError(`No task with task id: ${taskID}`, 404))
        }
    res.status(200).json({task})
        // or you can use res.status(200).json({task: null, status: "success"})
})

const updateTask = asyncWrapper(async (req, res, next) => {
    const {id: taskID} = req.params
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true
        })
    if (!task) {
        return next(createCustomError(`No task with task id: ${taskID}`, 404))
        } else {
            return res.status(200).json({task})
        }
});

module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask
};
