'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('field_of_study').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
            user_id:1,
            field_name: 'Programming',
        },
        {
            user_id:1,
            field_name: 'Cars',
        },
        {
            user_id:1,
            field_name: 'Psychology',
        },
        {
            user_id:1,
            field_name: 'Math',
        },
        {
            user_id:1,
            field_name: 'Science',
        }
      ]);
    });
};
