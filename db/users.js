const mongoose = require('./connection')

const User = new mongoose.Schema({
	email: String,
	password: String
},
{ collection : 'Users' });  

mongoose.model('User', User)

module.exports = mongoose.model("User",User)