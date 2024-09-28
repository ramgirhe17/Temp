
// import './App.css';

// // components
// import Header from './components/Header';
// import TodoForm from './components/TodoForm';
// import Todos from './components/Todos';

// function App() {
//   return (
//     <div>
//       <Header />
//       <TodoForm />
//       <Todos />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import TaskList from "./components/task/TaskList.jsx";
import TaskForm from "./components/task/TaskForm.jsx";
import SearchBar from "./components/task/SearchBar.jsx";
import axios from "axios";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:8000/todos");
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks", err);
    }
  };

  const createTask = async (task) => {
    try {
      const res = await axios.post("http://localhost:8000/todos", task);
      setTasks([...tasks, res.data.task]);
    } catch (err) {
      console.error("Error creating task", err);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const res = await axios.put(`http://localhost:8000/todos/${id}`, updatedTask);
      setTasks(tasks.map((task) => (task._id === id ? res.data.task : task)));
    } catch (err) {
      console.error("Error updating task", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/todos/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error("Error deleting task", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <SearchBar />
      <TaskForm
        initialTask={editingTask}
        onSubmit={(task) =>
          editingTask
            ? updateTask(editingTask._id, task)
            : createTask(task)
        }
        onClear={() => setEditingTask(null)}
      />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={setEditingTask} />
    </div>
  );
};

export default App;
