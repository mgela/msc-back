const mongoose = require('../db.js');

// TODO: bcrypt password
const userSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  email: {type: String, unique: true},
  password: String,
  picture: String,
})


const UserModel = mongoose.model('users-msc', userSchema)


UserModel.findOrCreate = async (userData) => {
  const user = await UserModel.checkUser(userData.email)
  if (!user) return await UserModel.createUser(userData)
  return user
}

UserModel.checkUser = (userEmail) => {
  UserModel.findOne({email: userEmail})
}


UserModel.createUser = (userData) => {
  const user = new UserModel({
    username: userData.username,
    email: userData.email,
    password: userData.password,
    picture: userData.picture
  })
  return user.save();
}

module.exports = UserModel;
