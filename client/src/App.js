

import React, { useState, useEffect } from "react";
import TaskList from "./components/task/TaskList.jsx";
import TaskForm from "./components/task/TaskForm.jsx";
import SearchBar from "./components/task/SearchBar.jsx";
import axios from "axios";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showTaskForm, setShowTaskForm] = useState(false);
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
    <div >
           <h1>Tasks</h1>
      <SearchBar />
      <button
        className="btn"
        onClick={() => {
          setEditingTask(null); // Reset editing state
          setShowTaskForm(!showTaskForm); // Toggle form visibility
        }}
      >
        {showTaskForm ? "Cancel" : "New Task"}
      </button>
      <button className="btn" onClick={fetchTasks}>
        Refresh
      </button>
      {showTaskForm && (
         <TaskForm
         initialTask={editingTask}
         onSubmit={(task) =>
           editingTask
             ? updateTask(editingTask._id, task)
             : createTask(task)
         }
         onSave={() => setShowTaskForm(false)}
         onClear={() =>{ setEditingTask(null)
          setShowTaskForm(false)
         }}
         showFrom={showTaskForm}
       />
      )}
     
      <div>
        <hr/>
      </div>
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={setEditingTask} onSave={setShowTaskForm} />
    </div>
  );
};

export default App;
