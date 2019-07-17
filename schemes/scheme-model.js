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
    return db('steps')
      .join('schemes', 'steps.scheme_id', 'schemes.id')
      .where('schemes.id', id)
      .select('steps.id', 'scheme_name', 'steps.step_number', 'steps.instructions')
      .orderBy('steps.step_number');
  },

  add: function (newScheme) {
    return db('schemes')
    .insert(newScheme)
    .then(([id]) => this.findById(id));
  },

  update: function (changes, id) {
    return db('schemes')
      .where({ id })
      .update(changes)
      .then(count => (count > 0 ? this.findById(id) : null));
  },

  remove: function (id) {
    let scheme = null;
    return this.findById(id)
      .then(data => {
        if(!data) {
          return 0;
        }
        scheme = data;
        return db('schemes')
        .where({ id })
        .del();
      })
      .then(count => (count > 0 ? scheme : null));
  },
};
