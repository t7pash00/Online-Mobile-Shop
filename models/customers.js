var db = require('../database');
var customers = {
  getAllcustomers: function(callback) {
    return db.query('select * from customers', callback);
  }
  };
  module.exports = customers;
