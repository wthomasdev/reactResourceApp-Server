exports.seed = function(knex, Promise) {
	return knex('employee_component').del()
		.then(function() {
			return knex('technology').del()
		}).then(function() {
			return knex('component').del()
		}).then(function() {
			return knex('employee').del()
    });
}
