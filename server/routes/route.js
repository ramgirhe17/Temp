import express, { Router } from 'express';


import {  createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
 } from '../controller/todo-controller.js';

const route = express.Router();


route.post('/todos', createTask) //http://localhost:8000/todos
route.get('/todos', getAllTasks);//http://localhost:8000/todos
route.get('/todos/:id', getTaskById);//http://localhost:8000/todos
route.put('/todos/:id', updateTask);//http://localhost:8000/todos
route.delete('/todos/:id', deleteTask);//http://localhost:8000/todos


export default route;

