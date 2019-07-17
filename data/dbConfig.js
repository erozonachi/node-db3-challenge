const configOptions = require('../knexfile').development;
const knex = require('knex');

module.exports = knex(configOptions);
