'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/MSC');

const Schema = mongoose.Schema;

module.exports = {
  mongoose,
  Schema
};
