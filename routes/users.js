const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcrypt');

// index
router.get('/', (req, res) => {
  knex('users').select().then(users => {
    res.format({
      default(){
        res.status(406).send('Not Acceptable');
      },
      html(){
        res.render('users/index',{users});
      },
      json(){
        res.send(users);
      }
    });
  });
});

// show
router.get('/:id', (req, res) => {
  knex('users').where('id', req.params.id).first().then(user => {
    res.format({
      default(){
        res.status(406).send('Not Acceptable');
      },
      html(){
        res.render('users/show',{user});
      },
      json(){
        if(user) {
          res.send(user);
        } else {
          res.status(404).send();
        }
      }
    });
  })
});

// edit
router.get('/:id/edit', (req, res) => {
  knex('users').where('id', req.params.id).first().then(user => {
    if(!user.password) {
      user.noPass = true;
    }
    res.format({
      default(){
        res.status(406).send('Not Acceptable');
      },
      html(){
        res.render('users/edit',{user});
      },
      json(){
        res.send(user);
      }
    });
  });
});

// update
router.put('/:id', (req, res) => {
  knex('users').where('id', req.params.id).first().then(user => {
    if(req.body.user.password !== user.password) {
      bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        bcrypt.hash(req.body.user.password, salt, (err, hash) => {
          knex('users').where('id', req.params.id).first().update({password: hash}).then(() => {
            res.redirect('/users');
          });
        });
      });
    }
    if(req.body.user.first_name !== user.first_name || req.body.user.last_name !== user.last_name || req.body.user.email !== user.email) {
      knex('users').where('id', req.params.id).first().update({first_name: req.body.user.first_name, last_name: req.body.user.last_name, email: req.body.user.email});
    }
  });
});

// delete
router.delete('/:id', (req, res) => {
  knex('users').where('id', req.params.id).first().del().then(user => {
    res.redirect('/users');
  });
});

module.exports = router;