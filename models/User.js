const userSchema = new require('mongoose').Schema({
  username: String,
  email: String,
  photoURL: String
})

module.exports = require('mongoose').model('User', userSchema)