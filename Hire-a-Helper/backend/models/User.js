const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const UserSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone_number: { type: String, required: true },
  email_id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile_picture: { type: String }
});

module.exports = mongoose.model('User', UserSchema);