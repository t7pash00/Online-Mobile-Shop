var db = require('../database');
var orders = {
  getAllorders: function(callback) {
    return db.query(
      'select * from orders inner join phones ON orders.phone_id=phones.phone_id INNER JOIN customers ON orders.customer_id=customers.customer_id', 
  
      callback);
  },
  getOrdersByorder_id: function(order_id, callback) {
    return db.query(
      'select * from orders inner join phones ON orders.phone_id=phones.phone_id INNER JOIN customers ON orders.customer_id=customers.customer_id where orders.phone_id=?',
      [order_id],
      callback
    );
  },
  addorders: function(orders, callback) {
    return db.query(
      'INSERT INTO orders VALUES(?,?,?,?,?,?);',
      [
        orders.phone_id,
        orders.customer_id,
        orders.order_date, 
        orders.order_status,
        orders.quantity,
        orders.price
      ],
      callback
    );
  },
  updateorder: function(phone_id, orders, callback) {
    const phoneprice = db.query("select price from phones where phone_id =?", [phones.phone_id])
    const total_price = phoneprice * orders.quantity;
    return db.query(
      'update orders set customer_id=?, ordersquantity=?, price=? where phone_id=?',
      [orders.customer_id,orders.order_date=new Date(),orders.order_status=1, orders.quantity, total_price, phone_id],
      callback
    );
  }
};
module.exports = orders;