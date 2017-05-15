'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('flash_card_deck', function(table) {
        table.increments('flash_card_deck_id').primary();
        table.integer('field_of_study_id').unsigned().notNullable();
        table.foreign('field_of_study_id').references('field_of_study_id').inTable('field_of_study').onDelete('cascade');
        table.string('flash_card_deck_name').notNullable().defaultTo('');
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('flash_card_deck')
    ]);
};
