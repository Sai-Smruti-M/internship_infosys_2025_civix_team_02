const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  task_id: { type: String, ref: 'Task', required: true },
  requester_id: { type: String, ref: 'User', required: true },
  status: { type: Number, required: true, default: 0 }
});

module.exports = mongoose.model('Request', RequestSchema);