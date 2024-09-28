import mongoose from "mongoose";


// const TodoSchema = new mongoose.Schema({
//     data: {
//         type: String,
//         required: true
//     },
//     done: {
//         type: Boolean,
//         default: false
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// })

// const todo = mongoose.model('todo', TodoSchema);

// export default todo;

const taskSchema = new mongoose.Schema({
  assignedTo: {
    type: String,
    required: true, // Assigned to field is mandatory
    trim: true, // Remove any leading/trailing whitespaces
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'], // Limiting the status to specific values
    default: 'Not Started', // Default value is 'Not Started'
  },
  dueDate: {
    type: Date,
    required: true, // Due date is mandatory
  },
  priority: {
    type: String,
    enum: ['Low', 'Normal', 'High'], // Priority limited to predefined values
    default: 'Normal', // Default priority is 'Normal'
  },
  comments: {
    type: String,
    trim: true, // Optional comments, trimming whitespace
  },
}, {
  timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields
});

const Task = mongoose.model('Task', taskSchema);

// module.exports = Task;
export default Task;

// const todo = mongoose.model('todo', TodoSchema);

// export default todo;
