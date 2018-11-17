var db = require('../database');
var orders = {
  getAllcartproducts: function(customer_id,callback) {
    return db.query(
      'select a.*,b.*,c.firstname from orders a,phones b,customers c where a.customer_id=? and a.order_status=1 and a.phone_id=b.phone_id and c.customer_id=?',
      [customer_id,customer_id], 
      callback
    );
  },
  getAllPaidproducts: function(customer_id,callback) {
    return db.query(
      'select * from orders where customer_id=? and order_status=2',
      [customer_id], 
      callback
    );
  },
  getAllPaidproducts: function(customer_id,callback) {
    return db.query(
      'select * from orders where customer_id=? and order_status=3',
      [customer_id], 
      callback
    );
  },
  getborrowByborrow_id: function(borrow_id, callback) {
    return db.query(
      'select firstname,lastname,book_name,borrow_date,return_date from borrows inner join books ON borrows.book_id=books.book_id INNER JOIN borrowers ON borrows.borrower_id=borrowers.borrower_id where borrows.book_id=?',
      [borrow_id],
      callback
    );
  },
  addToCart: function(orders, callback) {
    return db.query(
      'INSERT INTO orders (order_id, customer_id, phone_id, order_date, order_status, quantity,price)VALUES(?,?,?,?,?,?,?  );',
      [
        orders.order_id,
        orders.customer_id,
        orders.phone_id,
        orders.order_date,
        1,
        orders.quantity,
        orders.price
      ],
      callback
    );
  },
  deleteborrow: function(book_id, callback) {
    return db.query('delete from borrows where book_id=?', [book_id], callback);
  },
  updateborrow: function(book_id, borrows, callback) {
    return db.query(
      'update borrows set borrower_id=?, borrow_date=?, return_date=? where book_id=?',
      [borrows.borrower_id, borrows.borrow_date, borrows.return_date, book_id],
      callback
    );
  }
};
module.exports = orders;