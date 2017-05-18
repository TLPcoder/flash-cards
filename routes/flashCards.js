'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/flash_cards_controllers');

router.get('/field_of_study/:user_id', controller.getFieldOfStudy);

router.get('/flash_card_deck/:field_of_study_id', controller.getFlashCardDeck);

router.get('/flash_card_cards/:flash_card_deck_id', controller.getFlashCards);

router.post('/create_flash_card', controller.postFlashCards);

router.post('/create_flash_card_deck', controller.postFlashCardDeck);

module.exports = router;
