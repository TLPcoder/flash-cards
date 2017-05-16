'use strict'
const knex = require('../knex');
var exports = module.exports = {};

exports.getFieldOfStudy = (req,res) => {
    knex('users')
    .innerJoin('field_of_study', 'users.user_id', 'field_of_study.user_id')
    .where('users.user_id', req.params.user_id)
    .then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
};

exports.getFlashCardDeck = (req, res) => {
    console.log('req.params', req.params.field_of_study_id);
    knex('field_of_study')
    .innerJoin('flash_card_deck','field_of_study.field_of_study_id', 'flash_card_deck.field_of_study_id')
    .where('field_of_study.field_of_study_id', req.params.field_of_study_id)
    .then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
};

exports.getFlashCards = (req,res) => {
    knex('flash_card_deck')
    .innerJoin('flash_card', 'flash_card_deck.flash_card_deck_id', 'flash_card.flash_card_deck_id')
    .where('flash_card_deck.flash_card_deck_id', req.params.flash_card_deck_id)
    .then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
};
