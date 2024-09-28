import Task from '../model/Todo.js';
// const Task = require('../models/task.model');

// Create a new task
export const createTask = async (req, res) => {
  try {
    const { assignedTo, status, dueDate, priority, comments } = req.body;
    const newTask = new Task({ assignedTo, status, dueDate, priority, comments });
    const savedTask = await newTask.save();
    res.status(201).json({ message: 'Task created successfully', task: savedTask });
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error: error.message });
  }
};

// Get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find(); // Find all tasks
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving tasks', error: error.message });
  }
};

// Get a task by ID
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving task', error: error.message });
  }
};

// Update a task by ID
export const updateTask = async (req, res) => {
  try {
    const { assignedTo, status, dueDate, priority, comments } = req.body;
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { assignedTo, status, dueDate, priority, comments },
      { new: true, runValidators: true } // Return the updated task
    );
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task updated successfully', task });
  } catch (error) {
    res.status(500).json({ message: 'Error updating task', error: error.message });
  }
};

// Delete a task by ID
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task', error: error.message });
  }
};
