const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:password@ds251827.mlab.com:51827/mahskicoach', {useMongoClient: true});
module.exports = mongoose;
