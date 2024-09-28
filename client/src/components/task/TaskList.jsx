import React from "react";
import TaskItem from "./TaskItem.jsx";

const TaskList = ({ tasks, onDelete, onEdit, onSave }) => {
  return (
    <div>
      {tasks.length > 0 ? (
      <table>
      <thead>
        <tr>
          <th>Assigned To</th>
          <th>Status</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Comments</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
            onSave={onSave}
          />
        ))}
      </tbody>
    </table>
        
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
