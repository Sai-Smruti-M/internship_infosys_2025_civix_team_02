const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  user_id: { type: String, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  start_time: { type: Date, required: true },
  end_time: { type: Date },
  status: { type: Number, required: true, default: 0 },
  category: { type: String },
  picture: { type: String }
});

module.exports = mongoose.model('Task', TaskSchema);