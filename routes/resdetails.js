
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
	var newRes = new BuildingSchema({
		building_id:req.body.building_id,
		building_address :req.body.Building_address,
		building_name: req.body.building_name,
		Restaurant:{
			Restaurant_id: 'avd',
			Restaurant_address: req.body.Restaurant_address,
			Restaurant_name: req.body.Restaurant_name,

		}


   
})
	   resdetails.save(function(err, data) {
      if (err) {
        res.status(500).json({
          success: false,
          msg: "Database error"
        })
      } else {
        res.json({
          success: true,
          data: data,
          decoded: req.decoded
        })
      }
    })