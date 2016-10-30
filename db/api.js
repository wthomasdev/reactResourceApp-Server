var knex = require('./knex');

module.exports = {
  getAllEmployees: function () {
    return knex('employee').select();
  },
  getAllComponents: function() {
    return knex('component').select();
  },
  getAllTechnologies: function() {
    return knex('technology').select();
  }
}
