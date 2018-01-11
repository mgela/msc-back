'use strict';

const UserModel = require('../models/models');

exports.trial = async (ctx, next) => {
  try {
    console.log(ctx.request.body.email, "email");
    const user = await UserModel.checkUser(ctx.request.body.email)
    console.log(user, "there");
    if (user === undefined) UserModel.createUser(ctx.request.body)

  }catch (e){

  }

}

exports.second = async (ctx, next) => {

}
