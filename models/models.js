const mongoose = require('../db.js');


const userSchema = new mongoose.Schema({
  coachId: {type: String, lowercase: true, unique: true, required: true},
  fname: {type: String, lowercase: true, unique: false, required: true},
  lname: {type: String, lowercase: true, unique: false, required: true},
  email: {type: String, lowercase: true, unique: false, required: true},
  pic: {type: String, lowercase: true, unique: false, required: true},
});

const UserModel = mongoose.model('usersMSC', userSchema);
