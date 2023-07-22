const mongoose = require('mongoose');
const {isEmail} = require('validator');

const UserSchema = new mongoose.Schema({
//_id is the username of the user
  _id: {
    type: String,
    required: [true,'please enter a username'],
    unique:true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
    lowercase:true,
    validate:[isEmail,'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true,'please enter a password'],
    minlength:[6,'minimum length of password is 6 characters'],
  },
});

module.exports = new mongoose.model('User', UserSchema);