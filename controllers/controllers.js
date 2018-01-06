'use strict';
const Model = require('../models/models');

exports.trial = async (ctx, next) => {
 ctx.body = 'server working'
  return ctx;
}
