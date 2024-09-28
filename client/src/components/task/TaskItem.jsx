import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const TaskItem = ({ task, onDelete, onEdit, onSave }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleEdit = (task) => {
    console.log(task)
    onEdit(task);  // Trigger the edit action
    onSave(true);  // Save the task after editing
  };
 
  const handleDelete = (task) => {
   
    onDelete(task._id)
    toast.success("Task added successfully!", {
      position: "top-center",
      autoClose: 3000,
    });
    
  
  };
  return (
      <>
      <tr>
      <td>{task.assignedTo}</td>
      <td>{task.status}</td>
      <td>{new Date(task.dueDate).toLocaleDateString()}</td>
      <td>{task.priority}</td>
      <td>{task.comments}</td>
      <td><button onClick={() => setShowDropdown(!showDropdown)}>:</button>
        {showDropdown && (
          <div className="dropdown">
            <button onClick={() => handleEdit(task)} >Edit</button>
            <button onClick={() => handleDelete(task)}>Delete</button>
          </div>
        )}</td>
    </tr>

    <ToastContainer />
      </>
  );
};

export default TaskItem;
