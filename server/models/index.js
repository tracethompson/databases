var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //fetch messages 
      var queryCommand = 'Select * FROM messages';
      //fetch users
      db.query(queryCommand, function(error, results, fields) {
        if(error) throw error;
        callback(JSON.stringify(results))
      });

    }, // a function which produces all the messages

    post: function (callback, params) {
      //add messages
      var queryCommand = 'insert into messages(text) value ???'
      //fetch users
      db.query(queryCommand, function(error, results, fields) {
        if(error) throw error;
        callback(results)
      })

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryCommand = 'Select * FROM users'
      //fetch users
      db.query(queryCommand, function(error, results, fields) {
        if(error) throw error;
        callback(results)
      })
    },
    post: function (parameter, callback) {
      //add user
      var queryCommand = 'insert into users(userName) values ??' 
      db.query(queryCommand, function(error, results, fields) {
        if(error) throw error;
        callback(results)
      })
    }
  }
};

