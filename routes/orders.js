var express = require('express');
var router = express.Router();
var targetOrders = require('../models/orders');
router.get('/cart/:customer_id?', function (req, res, next) {
    if (req.params.customer_id) {
        targetOrders.getAllcartproducts(req.params.customer_id,
            function (err, rows) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(rows);
                }
            });
    }
});
router.get('/paid/:customer_id?', function (req, res, next) {
    if (req.params.customer_id) {
        targetOrders.getAllPaidproducts(req.params.customer_id,
            function (err, rows) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(rows);
                }
            });
    }
});

router.post('/',
    function (req, res, next) {
        targetOrders.addToCart(req.body,
            function (err, count) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(req.body);
                }
            });
    });
router.delete('/:customer_id',
    function (req, res, next) {
        customers.deletecustomer(req.params.customer_id,
            function (err, count) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(count);
                }
            });
    });
router.put('/:customer_id',
    function (req, res, next) {
        customers.updatecustomer(req.params.customer_id, req.body,
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

