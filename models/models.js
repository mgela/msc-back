const mongoose = require('../db.js');


const userSchema = new mongoose.Schema({
  coachId: {type: String, lowercase: true, unique: true, required: true},
  fname: {type: String, lowercase: true, unique: false, required: true},
  lname: {type: String, lowercase: true, unique: false, required: true},
  email: {type: String, lowercase: true, unique: false, required: true},
  pic: {type: String, lowercase: true, unique: false, required: true},
});

exports.saveNewUser = newUserDetails => {
  const {fname, lname, username, password, address, flat, initials, online} = newUserDetails;
  const newUser = new UserModel({
    fname,
    lname,
    email,
    pic,
  });
  return newUser.save();
};

const UserModel = mongoose.model('usersMSC', userSchema);
