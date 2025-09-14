const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  user_id: { type: String, ref: 'User', required: true },
  body: { type: String, required: true },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', NotificationSchema);