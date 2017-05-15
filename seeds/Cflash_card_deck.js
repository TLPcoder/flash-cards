'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flash_card_deck').del()
    .then(function () {
      // Inserts seed entries
      return knex('flash_card_deck').insert([
        {
            field_of_study_id: 1,
            flash_card_deck_name:'Redux'
        },
        {
            field_of_study_id: 1,
            flash_card_deck_name:'React'
        },
        {
            field_of_study_id: 1,
            flash_card_deck_name:'Javascript'
        },
        {
            field_of_study_id: 2,
            flash_card_deck_name:'Engine'
        },
        {
            field_of_study_id: 2,
            flash_card_deck_name:'Transmission'
        },
        {
            field_of_study_id: 2,
            flash_card_deck_name:'Brakes'
        },
        {
            field_of_study_id: 3,
            flash_card_deck_name:'Social Psychology'
        },
        {
            field_of_study_id: 3,
            flash_card_deck_name:'Research Psychology'
        },
        {
            field_of_study_id: 3,
            flash_card_deck_name:'Development Psychology'
        }
      ]);
    });
};
