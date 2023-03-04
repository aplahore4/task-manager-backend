const express = require('express');
const route = express.Router();
const {
  getTasks,
  createTask,
  getTask,
  removeTask,
  UpdateTask,
  UpdateTask_patch,
} = require('../controllers/taskController');

route.post('/', createTask);
route.get('/', getTasks);
route.get('/:id', getTask);
route.delete('/:id', removeTask);
route.put('/:id', UpdateTask);
route.patch('/:id', UpdateTask_patch);

module.exports = route;
