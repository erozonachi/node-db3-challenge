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
  
  findSteps: function(id) {
    return db.select('steps.id, scheme_name, step_number, instructions')
      .from('steps')
      .innerJoin('schemes', 'steps.scheme_id', 'schemes.id')
      .orderBy('steps.step_number');
  },

  add: function (newScheme) {
    return db('schemes')
    .insert(newScheme)
    .then(([id]) => this.findById(id));
  },
};
