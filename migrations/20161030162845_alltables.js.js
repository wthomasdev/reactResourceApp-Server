
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employee',
function(table) {
  table.increments();
  table.string('first_name');
  table.string('last_name');
  table.string('email');
}).then(function() {
  return knex.schema.createTable('component', function(table) {
    table.increments();
    table.string('name');
  });
}).then(function() {
  return knex.schema.createTable('technology', function(table) {
    table.increments();
    table.string('name');
    table.string('version');
  });
}).then(function() {
  return knex.schema.createTable('employee_component', function (table) {
    table.increments();
    table.integer('employee_id').references('id').inTable('employee').onDelete('cascade');
    table.integer('component_id').references('id').inTable('component').onDelete('cascade');
  });
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('employee_component').then(function() {
    return knex.schema.dropTableIfExists('technology');
  }).then(function() {
    return knex.schema.dropTableIfExists('component');
  }).then(function() {
    return knex.schema.dropTableIfExists('employee');
  });
};
