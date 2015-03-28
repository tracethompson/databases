var models = require('../models');
var bluebird = require('bluebird');
var express = require('express');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get(function(results){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(results);
        res.end(); //????????????
      });
      
    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {

    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};
