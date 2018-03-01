'use strict';

const UserModel = require('../models/userModels');
const CoachModel = require('../models/coachModels')

exports.loginCustom = async (ctx, next) => {
  try {
    const user = await UserModel.checkUser(ctx.request.body.email)
    if (user === undefined){
      UserModel.createUser(ctx.request.body)
      ctx.response.body = 'Ok user Saved';
    }
  }catch (e){
    console.log(e)
  }
}
exports.coachSignUp = async (ctx, next) => {
  try {
    const coach = await CoachModel.checkCoach(ctx.request.body.email)
    if (!coach) {
      CoachModel.createCoach(ctx.request.body)
      ctx.response.body = 'Ok coach Saved';
    } else {
      ctx.response.body = 'User already registered'
    }
  }catch (e){
    console.log(e)
  }
}
exports.loginGoogle = async (ctx, next) => {
  try {
    const user = await UserModel.checkCoach(ctx.request.body.email)
    if (user === undefined) UserModel.createCoach(ctx.request.body)
    ctx.response.body = 'Ok user Saved';
  }catch (e){
    console.log(e)
  }
}
