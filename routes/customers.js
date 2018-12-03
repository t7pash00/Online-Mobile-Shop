var express = require('express');
var router = express.Router();
var customers = require('../models/customers');

router.get('/Login:customer_email?', function(req, res, next) {
  if (req.params.customer_email) {
    customers.getcustomerByEmailPass(req.params.customer_email, 
      function(err,rows ) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  

router.get('/Login:customer_password?', function(req, res, next) {
  if (req.params.customer_password) {
    customers.getcustomerByEmailPass(req.params.customer_password, 
      function(err,rows ) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
router.get('/:customer_id?', function(req, res, next) {
  if (req.params.customer_id) {
    customers.getcustomerBycustomer_id(req.params.customer_id, 
      function(err,rows ) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    customers.getAllcustomers(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.post('/',
 function(req, res, next) {
  customers.addcustomer(req.body, 
    function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 & 0
    }
  });
});
router.delete('/:customer_id',
 function(req, res, next) {
  customers.deletecustomer(req.params.customer_id, 
    function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
router.put('/:customer_id', 
function(req, res, next) {
  customers.updatecustomer(req.params.customer_id, req.body, 
    function(
    err,
    rows
  ) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;

