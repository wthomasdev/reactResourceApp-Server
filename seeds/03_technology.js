exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('technology').insert({
			name: 'Haskell',
      version:"1.00"
		}),
    knex('technology').insert({
		name: 'Elixer',
    version:"5.10"
		}),
    knex('technology').insert({
    name: 'Java',
    version:"28.12"
    }),
    knex('technology').insert({
    name: 'JavaScript',
    version:"6.00"
  })
	]);
};
