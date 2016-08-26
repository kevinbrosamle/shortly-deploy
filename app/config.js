var mongoose = require('mongoose');


uri = 'mongodb://localhost/shortlydb';
mongoose.connect(uri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected...');
});

module.exports = db;
