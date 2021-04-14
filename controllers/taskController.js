const { Task } = require('../models');

module.exports.taskCreated = async (req, res, next) => {
  try {
    const {
      body: { body },
    } = req;
    const taskCreated = await Task.create({body});
    res.status(200).send({data:taskCreated});
  } catch (err) {
    next(err);
  }
};

