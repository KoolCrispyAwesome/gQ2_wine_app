const express = require('express');
const router = express.Router();
const matching = require('../helpers/matching');
const knex = require('../db/knex');

router.get('/', (req, res) => {
  res.render('matches/index')
});

router.get('/:id', (req, res) => {
  knex('matches').where('id', req.params.id).first().then(match => {
    knex('wines').where('id', match.wine_id).first().then( wine => {
      delete wine.id;
      Object.assign(match, wine);
      res.render('matches/show', {match});
    });
  });
});

router.post('/', (req, res) => {
  var choices = req.body.matches;
  var wine = matching.wineMatch(choices.veggie, choices.cheese, choices.meat, choices.dessert);
  knex('wines').where('name', wine).first().then(wine => {
    choices.wine_id = wine.id;
    knex('matches').insert(choices, '*').then(pairing => {
      res.redirect(`/matches/${pairing[0].id}`);
    });
  });
});

module.exports = router;