const mongoose = require('../db.js');

// TODO: bcrypt
const coachSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  email: {type: String, unique: true},
  password: String,
  picture: String,
  isActive: false,
  schedule: String,
})

const CoachModel = mongoose.model('coaches', coachSchema)

CoachModel.findOrCreateCoach = async (userData) => {
  console.log(userData);
  const coach = await CoachModel.checkCoach(userData.email)
  console.log(coach, 'coach');
    if (!coach) return await CoachModel.createCoach(userData)
  return coach
}

CoachModel.checkCoach = async (userEmail) => {
  const coachFound = await CoachModel.findOne({email: userEmail})
  return coachFound
}

CoachModel.createCoach = (userData) => {
  const coach = new CoachModel({
    username: userData.username,
    email: userData.email,
    password: userData.password,
    picture: userData.picture,
    isActive: userData.isActive,
    schedule: userData.schedule,
  })
  return coach.save();
}

module.exports = CoachModel;
