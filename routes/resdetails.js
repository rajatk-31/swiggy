
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get our config file
//var user = require('../models/user'); // get our mongoose model
//var todo = require('../models/todo')
var registrationLogin = require('../routes/registrationLogin')
var jwtVerify = require('../routes/jwtVerify')

var resdetails = express.Router()
todoRoutes.use(function(req, res, next) {
  jwtVerify(req, res, next)
})

resdetails.post('/res_details',function(req,res){
	var newRes = new todo({
      email: req.decoded._doc.email,
      name: req.body.name
})