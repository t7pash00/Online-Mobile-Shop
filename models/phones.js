var db = require('../database');
var phones = {
  getAllphones: function(callback) {
    return db.query('select * from phones', callback);
  }
};
module.exports = phones;
