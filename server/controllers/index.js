var models = require('../models');
var bluebird = require('bluebird');
var express = require('express');

// var test = {
//   "access-control-allow-origin": '*',
//   "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "access-control-allow-headers": "content-type, accept",
//   "access-control-max-age": 10,
//   "Content-Type": "application/json"
// }
module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      console.log("HI")
      models.messages.get(function(results){
        // res.writeHead(200, {'Content-Type': 'application/json'});
        res.json(results);
      }); 
    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {
    var params = [req.body[text], req.body[username], req.body[roomname]]
     models.messages.post(params, function(results){
      req.writeHead(201, {'Content-Type': 'application/json'});
      req.write(results)
      req.end();
     })
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(results){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(results);
        res.end();
      });
    },
    post: function (req, res) {
    console.log("body", req.body);
    var params = [req.body["username"]];
     models.users.post(params, function(results){
      console.log(results);
      req.writeHead(201, {'Content-Type': 'application/json'});
      req.write(results)
      req.end("ok");
     })
    } 
  }
};
