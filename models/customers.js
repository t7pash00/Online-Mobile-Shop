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
  getRegisteredcustomer: function(email,pass, callback) {
    console.log(12345);
    return db.query(
      'select * from customers where email=? and password=?',
      [email,pass],
      callback);
      
      //email=? and password=?
  },

  getcustomerByEmail: function(email, callback) {
    return db.query(
      'select * from customers where email=?',
      [email],
      callback);
  
  },
  getcustomerByPassword: function(password, callback) {
    return db.query(
      'select * from customers where password=?',
      [password],
      callback);
  
  },
  
  addcustomer: function(customers, callback) {
    return db.query(
      'insert into customers values(?,?,?,?,?,?,?,?,?)',
      [
        customers.customer_id,
        customers.firstname,
        customers.lastname,
        customers.email,
        customers.password,
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
      'update customers set firstname=?,lastname=?, email=?, password=?, phone=?, streetAddress=?, city=?, postalCode=? where customer_id=?',
      [
        customers.firstname,
        customers.lastname,
        customers.email,
        customers.password,
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
