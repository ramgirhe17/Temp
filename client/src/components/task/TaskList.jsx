import React from "react";
import TaskItem from "./TaskItem.jsx";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
