const db = require('../data/dbConfig');

module.exports = {
  find: function() {
    return db('steps');
  },

  findById: function(id) {
    return db('steps')
      .where({ id })
      .then(data => (data.length > 0 ? data[0] : null));
  },
};
