var express = require('express');
  var router = express.Router();
  var phones = require('../models/phones');
  router.get('/:phone_id?', function(req, res, next) {
    if (req.params.phone_id) {
      phones.getphoneByphone_id(req.params.phone_id, function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    } else {
        phones.getAllphones(function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
  });
  
  router.get('/phones_by_brand/:brand_name', function(req, res, next) {
    phones.getphoneBybrand_name(req.params.brand_name, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows); 
      }
    });
  });
    


  router.post('/', function(req, res, next) {
    phones.addphone(req.body, function(err, count) {
      if (err) {
        res.json(err);
      } else {
        res.json(req.body); //or return count for 1 & 0
      }
    });
  });
  router.delete('/:phone_id', function(req, res, next) {
    phones.deletephone(req.params.phone_id, function(err, count) {
      if (err) {
        res.json(err);
      } else {
        res.json(count);
      }
    });
  });
  router.put('/:phone_id', function(req, res, next) {
    phones.updatephone(req.params.phone_id, req.body, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  module.exports = router;