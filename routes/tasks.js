const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks');

// Initiate crud operations with this routes and functions
    // and to interact with backend to frontend using this crud
router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;