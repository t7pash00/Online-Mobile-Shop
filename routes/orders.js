var express = require('express');
var router = express.Router();
var targetOrders = require('../models/orders');
router.get('/:order_id?', function (req, res, next) {
    if (req.params.order_id) {
        targetOrders.getOrdersByorder_id(req.params.order_id,
            function (err, rows) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(rows);
                }
            });
    }else {
        targetOrders.getAllorders(function(err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        });
      }
    }
);
router.post('/',
    function (req, res, next) {
        targetOrders.addorder(req.body,
            function (err, count) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(req.body);
                }
            });
    });
router.put('/:phone_id',
    function (req, res, next) {
        targetOrders.updateorder(req.params.phone_id, req.body,
            function (
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

