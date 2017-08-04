//These routes will be used for registration and Login , here
// we would register the user and authenticate the user and generate the token
// the token will be supplied to the user.`

var express = require('express');
var registrationLogin = express.Router();
var mongoose = require('mongoose');
var user = require('../models/registration')
var jwt    = require('jsonwebtoken'); 
var superSecret = require('../config')

registrationLogin.post('/registration', function(req, res) {
  // body...
 if (req.body.password) {
    var userSave = new user({
      phone: req.body.phone,
  password: req.body.password,
  Building_id: req.body.Building_id,
  Building_address: req.body.Building_address,
  Building_name: req.body.Building_name,
  Restaurant_id: req.body.Restaurant_id,
  Restaurant_name: req.body.Restaurant_name,
  Restaurant_address: req.body.Restaurant_address


   
})
  

    userSave.save(function(err, data) {
      if (err) {
         //return res.send();
        res.json({ success: false, msg: "go to hell" })
      }
      res.json({
        success: true,
        data: data
      })
    })
  }
   else {
    res.json({
      success: false,
      msg: "No data entered"
    })
  }

})


registrationLogin.post('/login', function(req, res) {
  if (!req.body.phone || !req.body.password) {
    res.json({
      success: false,
      msg: "No data entered"
    })
  } else {
    user.findOne({
      phone: req.body.phone
    }, function(err, user) {

      if (err) throw err;

      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {

        // check if password matches
        if (user.password != req.body.password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {

          // if user is found and password is right
          // create a token
          var token = jwt.sign(user, superSecret.secret, {
            expiresIn: 86400 // expires in 24 hours
          });

          res.json({
            success: true,
            message: 'token generated',
            token: token
          });
        }

      }

    })
  }
})

module.exports = registrationLogin;
