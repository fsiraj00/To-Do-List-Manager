const express = require('express');
const router = express.Router();

//importing functions from tasks.js
const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask} = require("../controllers/tasks.js");


/*

    app.get('/api/v1/tasks')            - get all the tasks
    app.post('/api/v1/tasks')           - create a new task
    app.get('/api/v1/tasks/:id')        - get a single task
    app.patch('/api/v1/tasks/:id')      - update/edit task
    app.delete('/api/v1/tasks/:id')     - delete task

*/

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);



module.exports = router;