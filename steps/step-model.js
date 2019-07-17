const db = require('../data/dbConfig');

module.exports = {
  find: function() {
    return db('steps');
  },
};
