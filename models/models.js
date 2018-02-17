const mongoose = require('../db.js');
// TODO: bcrypt password
const userSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  email: {type: String, unique: true},
  password: String,
  picture: String,
}, {versionKey: 'versionKey'})
// TODO: bcrypt password
const coachSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  email: {type: String, unique: true},
  password: String,
  picture: String,
  isActive: false,
  schedule: String,
})

const UserModel = mongoose.model('usersMSC', userSchema)
const CoachModel = mongoose.model('coachMSC', coachSchema)

UserModel.findOrCreate = async (userData) => {
  const user = await UserModel.checkUser(userData.email)
  if (!user) return await User.createUser(userData)
  return user
}

UserModel.checkUser = (userEmail) => {
  UserModel.findOne({email: userEmail})
}

CoachModel.createCoach = (coachData) => {
  const coach = new CoachModel({
    _id: new mongoose.Types.ObjectId(),
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    password: String,
    picture: String,
    isActive: false,
    schedule: String,
  })
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
