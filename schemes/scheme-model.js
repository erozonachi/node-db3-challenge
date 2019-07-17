const db = require('../data/dbConfig');

module.exports = {
  find: function() {
    return db('schemes');
  },

  findById: function(id) {
    return db('schemes')
      .where({ id })
      .then(data => (data.length > 0 ? data[0] : null));
  },
};
