'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('field_of_study', function(table) {
        table.increments('field_of_study_id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('user_id').inTable('users').onDelete('cascade');
        table.string('field_name').notNullable().defaultTo('');
        table.text('description').notNullable().defaultTo('');
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('field_of_study')
    ]);
};
