'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('flash_card', function(table) {
        table.increments('flash_card_id').primary();
        table.integer('flash_card_deck_id').unsigned().notNullable();
        table.foreign('flash_card_deck_id').references('flash_card_deck_id').inTable('flash_card_deck').onDelete('cascade');
        table.text('question').notNullable().defaultTo('');
        table.text('answer').notNullable().defaultTo('');
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('flash_card')
    ]);
};
