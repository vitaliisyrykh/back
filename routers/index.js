const {Router} = require('express');
const taskRouter = require('./taskRoter');
const router = Router();

router.use('/tasks', taskRouter);

module.exports = router;