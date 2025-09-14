const mongoose = require('mongoose');

const AcceptedTaskSchema = new mongoose.Schema({
  user_id: { type: String, ref: 'User', required: true },
  task_id: { type: String, ref: 'Task', required: true },
  status: { type: Number, required: true, default: 0 }
});

module.exports = mongoose.model('AcceptedTask', AcceptedTaskSchema);