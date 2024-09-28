import React, { useState, useEffect } from "react";
// import './TaskForm.css'; // Import the CSS file

const TaskForm = ({ initialTask, onSubmit, onClear, onSave, showFrom }) => {
  const [task, setTask] = useState({
    assignedTo: "",
    status: "Not Started",
    dueDate: "",
    priority: "Low",
    comments: "",
  });

  useEffect(() => {
    if (initialTask) {
      setTask({
        ...initialTask,
        dueDate: formatDateForInput(initialTask.dueDate), // format date
      });
    }
  }, [initialTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({
      assignedTo: "",
      status: "Not Started",
      dueDate: "",
      priority: "Low",
      comments: "",
    });
    onClear();
  };

  // Format ISO date to 'yyyy-MM-dd'
  const formatDateForInput = (isoDate) => {
    const date = new Date(isoDate);
    return date.toISOString().split("T")[0]; // Extracts the 'yyyy-MM-dd' part
  };

  return (
    <div className="task-form-container">
      <form id="task-form" onSubmit={handleSubmit}>
        <label htmlFor="assignedTo">Assigned To</label>
        <input
          id="assignedTo"
          type="text"
          name="assignedTo"
          value={task.assignedTo}
          onChange={handleChange}
          required
        />
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={task.status}
          onChange={handleChange}
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <label htmlFor="dueDate">Due Date</label>
        <input
          id="dueDate"
          type="date"
          name="dueDate"
          value={task.dueDate} // Ensure the date is in 'yyyy-MM-dd' format
          onChange={handleChange}
          required
        />
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          name="priority"
          value={task.priority}
          onChange={handleChange}
        >
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>
        <label htmlFor="comments">Comments</label>
        <textarea
          id="comments"
          name="comments"
          value={task.comments}
          onChange={handleChange}
        ></textarea>
        <button className="save-btn" type="submit" >
          Save
        </button>
        {showFrom && (
          <button className="cancel-btn" onClick={onClear}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default TaskForm;
