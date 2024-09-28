import React from "react";

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <div className="task-item">
      <h3>{task.assignedTo}</h3>
      <p>Status: {task.status}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <p>Priority: {task.priority}</p>
      <p>Comments: {task.comments}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
