import React, { useState, useEffect } from "react";

const TaskForm = ({ initialTask, onSubmit, onClear }) => {
  const [task, setTask] = useState({
    assignedTo: "",
    status: "Not Started",
    dueDate: "",
    priority: "Low",
    comments: "",
  });

  useEffect(() => {
    if (initialTask) setTask(initialTask);
  }, [initialTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({ assignedTo: "", status: "Not Started", dueDate: "", priority: "Low", comments: "" });
    onClear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Assigned To</label>
      <input
        type="text"
        name="assignedTo"
        value={task.assignedTo}
        onChange={handleChange}
        required
      />
      <label>Status</label>
      <select name="status" value={task.status} onChange={handleChange}>
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <label>Due Date</label>
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        required
      />
      <label>Priority</label>
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Normal">Normal</option>
        <option value="High">High</option>
      </select>
      <label>Comments</label>
      <textarea
        name="comments"
        value={task.comments}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Save</button>
      {initialTask && <button onClick={onClear}>Cancel</button>}
    </form>
  );
};

export default TaskForm;
