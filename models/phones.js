var db = require('../database');
var phones = {
  getAllphones: function(callback) {
    return db.query('select * from phones', callback);
  },
  getphoneByphone_id: function(phone_id, callback) {
    return db.query('select * from phones where phone_id=?', [phone_id], callback);
  },
  getphoneBybrand_name: function(brand_name, callback) {
    return db.query('select * from phones where brand_name=?', [brand_name], callback);
  },
  addphone: function(phones, callback) {
    return db.query(
      'insert into phones values (?,?,?,?,?,?,?)',
      [phones.phone_id, phones.brand_name, phones.model_name, phones.color, phones.storage_capacity, phones.price,phones.imagename],
      callback
    );
  },
  deletephone: function(phone_id, callback) {
    return db.query('delete from phones where phone_id=?', [phone_id], callback);
  },
  updatephone: function(phone_id, phones, callback) {
    return db.query(
      'update phones set brand_name=?, model_name=?, color=?, storage_capacity=?, price=? where phone_id=?',
      [phones.brand_name, phones.model_name, phones.color, phones.storage_capacity, phones.price, phone_id],
      callback
    );
  }
};
module.exports = phones;


