'use strict';
const parse = require('co-body');
const Model = require('../models/models');

exports.trial = async (ctx, next) => {
  console.log(23);
  console.log(ctx.request.body);

}

exports.second = async (ctx, next) => {

}
