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

    post: function (params, callback) {
      //add messages
      var queryCommand = 'insert into messages(text) values(?)'
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
    post: function (params, callback) {
      //add user
      console.log("params: ", params);
      var queryCommand = "INSERT into users(user_name) SET(?)"
      console.log("post: ", post);
      db.query(queryCommand, params, function(error, results) {
        // use params to format json into sql
        callback(results)
        // if(error) throw error;
      })
    }
  }
};

