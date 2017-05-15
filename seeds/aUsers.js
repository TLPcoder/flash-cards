'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
            first_name: 'trevor',
            last_name: 'pellegrini',
            hashed_password: 'something',
            email: 'trevorpellegrini@gmail.com'
        },
        {
            first_name: 'Namkai',
            last_name: 'Fairfield',
            hashed_password: 'something',
            email: 'namkai@gmail.com'

        },
        {
            first_name: 'Yubo',
            last_name: 'Diwu',
            hashed_password: 'something',
            email: 'Yubo@gmail.com'
        }
      ]);
    });
};
