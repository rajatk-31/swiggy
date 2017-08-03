var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newUser = new Schema({
	phone: String,
	password: String,
	Building_id: String,
	Building_address: String,
	Building_name: String,
	Restaurant_id: String,
	Restaurant_name: String,
	Restaurant_address: String,

})


module.exports = mongoose.model('signupData', newUser);