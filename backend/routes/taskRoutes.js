const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  priority: { type: String, required: true, enum: ['Low', 'Medium', 'High'] },
  status: { type: String, default: 'pending', enum: ['pending', 'completed'] }, 
});


const Task = mongoose.model('Task', taskSchema, 'task_management'); 

router.post('/tasks', async (req, res) => {
  try {
    const { title, description, dueDate, priority, status } = req.body;

    if (!title || !description || !dueDate || !priority) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newTask = new Task({
      title,
      description,
      dueDate,
      priority,
      status, 
    });

    const savedTask = await newTask.save();
    res.status(201).json(savedTask); 
  } catch (err) {
    res.status(500).json({ error: 'Error creating task', details: err.message });
  }
});

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ dueDate: 1 }); 
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching tasks', details: err.message });
  }
});

router.get('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching task', details: err.message });
  }
});

router.put('/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedTask) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task updated successfully', task: updatedTask });
  } catch (err) {
    res.status(500).json({ error: 'Error updating task', details: err.message });
  }
});

router.delete('/tasks/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting task', details: err.message });
  }
});

module.exports = router;
