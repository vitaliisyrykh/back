const { Task } = require('../models');

module.exports.taskCreated = async (req, res, next) => {
  try {
    const {
      body: { body },
    } = req;
    const taskCreated = await Task.create({ body });
    res.status(201).send({ data: taskCreated });
  } catch (err) {
    next(err);
  }
};
module.exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.status(201).send({ data: tasks });
  } catch (err) {
    next(err);
  }
};

module.exports.updateTask = async (req, res, next) => {
  try {
    const {
      body: { body },
      params: { idTask },
    } = req;
    const [rows,updatedTask] = await Task.update(
      { body },
      {
        where: { id: idTask },
        returning: true,
      }
    );
    res.status(201).send({ data: updatedTask });
  } catch (err) {
    next(err);
  }
};

module.exports.getTask = async (req, res, next) => {
  try {
    const {
      params: { idTask },
    } = req;
    const task = await Task.findByPk(Number(idTask));
    res.status(201).send(task);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
    const {
      params: { idTask },
    } = req;
    const taskDelete = await Task.destroy({
      where: {
        id: Number(idTask),
      },
    });
    res.status(201).send({ data: taskDelete });
  } catch (err) {
    next(err);
  }
};
