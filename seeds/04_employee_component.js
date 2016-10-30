var find = require('../helper.js');

exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('employee').select(),
		knex('component').select()
	]).then(function(result) {
		var employee = result[0];
		var component = result[1];
		return Promise.all([
			knex('employee_component').insert({
				employee_id: find.findFromList('Will', employee, "first_name"),
				component_id: find.findFromList('Resource Manager', component, "name")
			}),
			knex('employee_component').insert({
				employee_id: find.findFromList('Laney', employee, "first_name"),
				component_id: find.findFromList('Beacon', component, "name")
			}),
			knex('employee_component').insert({
				employee_id: find.findFromList('James', employee, "first_name"),
				component_id: find.findFromList('Dish One', component, "name")
			}),
			knex('employee_component').insert({
				employee_id: find.findFromList('Pete', employee, "first_name"),
				component_id: find.findFromList('Sling', component, "name")
			}),
			knex('employee_component').insert({
				employee_id: find.findFromList('Travis', employee, "first_name"),
				component_id: find.findFromList('Ultra', component, "name")
			})
		]);
	});
};
