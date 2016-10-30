exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('employee').insert({
			first_name: 'Will',
			last_name: 'Thomas',
			email: 'will@dish.com'
		}),
    knex('employee').insert({
			first_name: 'Laney',
			last_name: 'Smith',
			email: 'laney@dish.com'
		}),
    knex('employee').insert({
			first_name: 'James',
			last_name: 'Albersheim',
			email: 'James@dish.com'
    }),
      knex('employee').insert({
  			first_name: 'Pete',
  			last_name: 'Aguilar',
  			email: 'Pete@dish.com'
    }),
    knex('employee').insert({
			first_name: 'Daniel',
			last_name: 'Abbott',
			email: 'Daniel@dish.com'
    }),
    knex('employee').insert({
  		first_name: 'Travis',
  		last_name: 'Cole',
  		email: 'Travis@dish.com'
    })
	]);
};
