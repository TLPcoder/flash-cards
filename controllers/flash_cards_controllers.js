'use strict';
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

exports.postFlashCards = (req, res) => {
    var body = req.body;
    knex('flash_card')
    .returning('*')
    .insert({
        flash_card_deck_id: body.flash_card_deck_id,
        question:body.question,
        answer:body.answer
    }).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
};

exports.postFlashCardDeck = (req, res) => {
    var body = req.body;
    console.log(body);
    knex('flash_card_deck')
    .where('flash_card_deck_name', body.flash_card_deck_name)
    .where('field_of_study_id', body.field_of_study_id)
    .then((data) => {
        if(data.length === 0){
            createFlashCardDeck(body,res);
        }else {
            res.json({
                newFlashDeck: false,
                data:data
            });
        }
    });
};

function createFlashCardDeck(body, res){
    knex('flash_card_deck')
    .returning('*')
    .insert({
        field_of_study_id: body.field_of_study_id,
        flash_card_deck_name: body.flash_card_deck_name
    })
    .then((data) => {
        res.json({
            newFlashDeck: true,
            data: data
        });
    });
}
