const Task = require('../models/taskModel');

//Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(505).send(error.message);
  }
};

//Create a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(505).send(error.message);
  }
};

//Get a single task
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).send('No task found.');
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(505).send(error.message);
  }
};

//Remove a single task
const removeTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).send('No task found.');
    }
    res.status(200).send('Task deleted.');
  } catch (error) {
    res.status(505).send(error.message);
  }
};

//Update a task
const UpdateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(
      {
        _id: id,
      },
      req.body,
      { new: true, runValidators: true }
    );
    if (!task) {
      return res.status(404).send('Task not found.');
    }
    res.status(200).send('Task updated.');
  } catch (error) {
    res.status(505).send(error.message);
  }
};

//Update a task by patch
const UpdateTask_patch = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(
      {
        _id: id,
      },
      req.body,
      { new: true, runValidators: true }
    );
    if (!task) {
      return res.status(404).send('Task not found.');
    }
    res.status(200).send('Task updated.');
  } catch (error) {
    res.status(505).send(error.message);
  }
};

module.exports = {
  getTasks,
  createTask,
  getTask,
  removeTask,
  UpdateTask,
  UpdateTask_patch,
};
