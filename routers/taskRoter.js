const { Router } = require('express');
const taskController = require('../controllers/taskController');
const taskRouter = Router();

taskRouter.post('/',taskController.taskCreated);
module.exports = taskRouter;
