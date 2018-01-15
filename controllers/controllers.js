'use strict';

const UserModel = require('../models/models');

exports.loginCustom = async (ctx, next) => {
  try {
    const user = await UserModel.checkUser(ctx.request.body.email)
    if (user === undefined) UserModel.createUser(ctx.request.body)
    ctx.response.body = 'Ok user Saved';
  }catch (e){
    console.log(e)
  }
}
exports.loginFacebook = async (ctx, next) => {
  try {
    console.log("facebook")
  }catch (e){
    console.log(e)
  }
}
exports.loginGoogle = async (ctx, next) => {
  try {
    console.log("google")
  }catch (e){
    console.log(e)
  }
}
