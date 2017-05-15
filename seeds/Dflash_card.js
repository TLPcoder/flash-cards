'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flash_card').del()
    .then(function () {
      // Inserts seed entries
      return knex('flash_card').insert([
        {
            flash_card_deck_id: 1,
            question:'What is an action',
            answer:'a object that has a action type and a payload that will update the redux store',
        },
        {
            flash_card_deck_id: 1,
            question:'what is a dispatch',
            answer:'A function that sends a action to a reducer',
        },
        {
            flash_card_deck_id: 1,
            question:'what is a reducer',
            answer:'A pure function that updates the redux store',
        },
        {
            flash_card_deck_id: 1,
            question:'What is an action',
            answer:'a object that has a action type and a payload that will update the redux store',
        },
        {
            flash_card_deck_id: 1,
            question:'what is a dispatch',
            answer:'A function that sends a action to a reducer',
        },
        {
            flash_card_deck_id: 1,
            question:'what is a reducer',
            answer:'A pure function that updates the redux store',
        },
        {
            flash_card_deck_id: 1,
            question:'What is an action',
            answer:'a object that has a action type and a payload that will update the redux store',
        },
        {
            flash_card_deck_id: 1,
            question:'what is a dispatch',
            answer:'A function that sends a action to a reducer',
        },
        {
            flash_card_deck_id: 1,
            question:'what is a reducer',
            answer:'A pure function that updates the redux store',
        },
        {
            flash_card_deck_id: 1,
            question:'What is an action',
            answer:'a object that has a action type and a payload that will update the redux store',
        },
        {
            flash_card_deck_id: 1,
            question:'what is a dispatch',
            answer:'A function that sends a action to a reducer',
        },
        {
            flash_card_deck_id: 1,
            question:'what is a reducer',
            answer:'A pure function that updates the redux store',
        },
        {
            flash_card_deck_id: 2,
            question:'What is state?',
            answer:'State is an object that is stored on a react components which stores current data related to the application state.',
        },
        {
            flash_card_deck_id: 2,
            question:'what is a life cycle method?',
            answer:'A life cycle method allows the user special functionalty to the developer to run code durning specific states of a component. Such as before or after it renders, if it should update, and more',
        },
        {
            flash_card_deck_id: 2,
            question:'Is react functional?',
            answer:'True',
        },
        {
            flash_card_deck_id: 2,
            question:'What is state?',
            answer:'State is an object that is stored on a react components which stores current data related to the application state.',
        },
        {
            flash_card_deck_id: 2,
            question:'what is a life cycle method?',
            answer:'A life cycle method allows the user special functionalty to the developer to run code durning specific states of a component. Such as before or after it renders, if it should update, and more',
        },
        {
            flash_card_deck_id: 2,
            question:'Is react functional?',
            answer:'True',
        },
        {
            flash_card_deck_id: 2,
            question:'What is state?',
            answer:'State is an object that is stored on a react components which stores current data related to the application state.',
        },
        {
            flash_card_deck_id: 2,
            question:'what is a life cycle method?',
            answer:'A life cycle method allows the user special functionalty to the developer to run code durning specific states of a component. Such as before or after it renders, if it should update, and more',
        },
        {
            flash_card_deck_id: 2,
            question:'Is react functional?',
            answer:'True',
        }
      ]);
    });
};
