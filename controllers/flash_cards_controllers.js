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

exports.putFlashCards = (req,res) => {
    var body = req.body;
    knex('flash_card')
    .where('flash_card_id', body.flash_card_id)
    .update({question:body.question, answer:body.answer})
    .then(() => {
        return knex('flash_card').where('flash_card_deck_id', body.flash_card_deck_id);
    }).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    });
};

exports.deleteFlashCardDeck = (req,res) => {
    var body = req.body;
    console.log('body', body);
    knex('flash_card_deck')
    .where('flash_card_deck_id', body.flash_card_deck_id)
    .del()
    .then(() => {
        return knex('flash_card_deck')
        .where('field_of_study_id', body.field_of_study_id);
    }).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    });
};

exports.deleteFlashCards = (req,res) => {
    var body = req.body;
    knex('flash_card')
    .where('flash_card_id', body.flash_card_id)
    .del()
    .then(() => {
        return knex('flash_card').where('flash_card_deck_id', body.flash_card_deck_id);
    }).then(data => {
        res.json(data);
    }).catch(err => {
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
    .insert({
        flash_card_deck_id: body.flash_card_deck_id,
        question:body.question,
        answer:body.answer
    }).then(() => {
        return knex('flash_card')
        .where('flash_card_deck_id', body.flash_card_deck_id);
    }).then(data => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
};

exports.putCategory = (req,res) => {
    var body = req.body;
    knex('field_of_study')
    .where('user_id', body.user_id)
    .where('field_of_study_id', body.field_of_study_id)
    .update({
        field_name: body.field_name,
        description: body.description
    }).then(() => {
        return knex('field_of_study')
        .where('user_id', body.user_id);
    }).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    });
};

exports.postCategory = (req,res) => {
    var body = req.body;
    console.log(body);
    knex('field_of_study')
    .insert({
        user_id: body.user_id,
        field_name: body.field_name,
        description: body.description
    }).then(() => {
        return knex('field_of_study')
        .where('user_id', body.user_id);
    }).then(data=>{
        res.json(data);
    }).catch(err => {
        console.log(err);
    });
};

exports.deleteCategory = (req,res) =>{
    var body = req.body;
    console.log('body', body);
    knex('field_of_study')
    .where('field_of_study_id', body.field_of_study_id)
    .del()
    .then(() => {
        return knex('field_of_study')
        .where('user_id', body.user_id);
    }).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    });
};

exports.postFlashCardDeck = (req, res) => {
    var body = req.body;
    knex('flash_card_deck')
    .insert({
        field_of_study_id: body.field_of_study_id,
        flash_card_deck_name: body.flash_card_deck_name
    }).then(() => {
        return knex('flash_card_deck')
        .where('field_of_study_id', body.field_of_study_id);
    }).then(data =>{
        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
};

exports.putFlashCardDeck = (req,res) => {
    var body = req.body;
    console.log(body);
    knex('flash_card_deck')
    .where('flash_card_deck_id', body.flash_card_deck_id)
    .update({
        flash_card_deck_name: body.flash_card_deck_name,
    }).then(() => {
        return knex('flash_card_deck')
        .where('field_of_study_id', body.field_of_study_id);
    }).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    });
};
