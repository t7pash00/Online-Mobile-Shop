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
  module.exports = router;