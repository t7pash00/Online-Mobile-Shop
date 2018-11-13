var express = require('express');
var router = express.Router();
var customers = require('../models/customers');
router.get('/:customer_id?', function(req, res, next) {
  if (req.params.customer_id) {
    customers.getcustomerBycustomer_id(req.params.customer_id, function(
      err,
      rows
    ) {
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
module.exports = router;

