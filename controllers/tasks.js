const getAllTasks = (req, res) => {
    res.send('All Items...')
};

const createTasks = (req, res) => {
    res.send('Create Tasks here...')
};

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
