const mongoose = require('../db.js');

const userSchema = new mongoose.Schema({

  username: {type: String, unique: true},
  email: {type: String, unique: true},
  password: String,
}, {versionKey: 'versionKey'});

const UserModel = mongoose.model('usersMSC', userSchema);
const UsersFB = mongoose.model('usersFB', userSchema);

UserModel.findOrCreate = async (userData) => {
  const user = await UserModel.checkUser(userData.email);
  if (!user) return await User.createUser(userData);
  return user;
}

UserModel.checkUser = (userEmail) => {
  UserModel.findOne({email: userEmail})
}

UserModel.createUser = (userData) => {
  const user = new UserModel({
    username: userData.username,
    email: userData.email,
    password: userData.password,
  })
  return user.save();
}

module.exports = UserModel;
