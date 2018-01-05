const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/EventsAssessment')

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to DB');
});

const schema = mongoose.Schema({
  coachId: Number,
  name: String,
  lastName: String,
  email: String,
  pic: String,

})
