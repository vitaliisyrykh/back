const { Router } = require('express');
const taskController = require('../controllers/taskController');
const taskRouter = Router();

taskRouter.post('/', taskController.taskCreated);
taskRouter.get('/', taskController.getAllTasks);

taskRouter
  .route('/:idTask')
  .get(taskController.getTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);
module.exports = taskRouter;
