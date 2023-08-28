const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: {
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
  ranking: {
    type : Number,
    required:false,
  },
  amountLeft: {
    type: Number,
    required: true,
    default: 1000000,
  },
  symbolStock: [
    {
      symbol: {
        type: String,
        required: true,
        unique: true,
      },
      stockLeft:{
        type: Number,
        required: false,
        default: 0,
      }
    }
  ],
  practiceHistory: [
    {
      symbol: {
        type: String,
        required: true,
      },
      orderType: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      currentValue: {
        type: Number,
        required: true,
      }
    }
  ],
  
});
UserSchema.pre('save',async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
module.exports = new mongoose.model('User', UserSchema);