exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('component').insert({
			name: 'Beacon',
    }),
    knex('component').insert({
			name: 'Resource Manager',
		}),
    knex('component').insert({
      name: 'Dish One',
    }),
    knex('component').insert({
      name: 'Sling',
    }),
    knex('component').insert({
      name: 'Ultra',
    }),
	]);
};
