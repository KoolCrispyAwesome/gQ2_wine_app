const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// index
router.get('/', (req, res) => {
  knex('users').select().then(users => {
    res.render('users/index', {users});
  });
});

// show
router.get('/:id', (req, res) => {
  
});

// edit
router.get('/:id/edit', (req, res) => {
  
});

// update
router.put('/:id', (req, res) => {

});

// delete
router.delete('/:id', (req, res) => {
  
});

module.exports = router;