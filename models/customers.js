var db = require('../database');
var customers = {
  getAllcustomers: function(callback) {
    return db.query('select * from customers', callback);
  },
  getcustomerBycustomer_id: function(customer_id, callback) {
    return db.query(
      'select * from customers where customer_id=?', 
      [customer_id], 
      callback);
  },
  addcustomer: function(customers, callback) {
    return db.query(
      'insert into customers values(?,?,?,?,?,?,?)',
      [
        customers.customer_id,
        customers.firstname,
        customers.lastname,
        customers.phone,
        customers.streetAddress,
        customers.city,
        customers.postalCode
      ],
      callback
    );
  },
  deletecustomer: function(customer_id, callback) {
    return db.query(
      'delete from customers where customer_id=?',
      [customer_id],
      callback
    );
  },
  updatecustomer: function(customer_id, customers, callback) {
    return db.query(
      'update customers set firstname=?,lastname=?, phone=?, streetAddress=?, city=?, postalCode=? where customer_id=?',
      [
        customers.firstname,
        customers.lastname,
        customers.phone,
        customers.streetAddress,
        customers.city,
        customers.postalCode,
        customer_id    
        ],
      callback
    );
  }
  };
  module.exports = customers;
