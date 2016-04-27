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
    var editUser = req.body.user;
    editUser.photo = editUser.photo || user.photo;
    editUser.email = editUser.email || user.email;
    editUser.first_name = editUser.first_name || user.first_name;
    editUser.last_name = editUser.last_name || user.last_name;
    if(!editUser.password){
      editUser.password = user.password;
      knex('users').where('id', req.params.id).update(editUser, '*').then(user => {
        res.redirect('/users');
      });
    } else {
      bcrypt.hash(editUser.password, SALT_WORK_FACTOR, (err, hash) => {
        editUser.password = hash;
        knex('users').where('id', req.params.id).update(editUser, '*').then(user => {
          res.redirect('/users');
        });
      });
    }
  });
});

// delete
router.delete('/:id', (req, res) => {
  knex('users').where('id', req.params.id).first().del().then(user => {
    console.log('USER:', user)
    res.format({
      default(){
        res.status(406).send('Not Acceptable');
      },
      html(){
        res.redirect('/users');
      },
      json(){
        res.send(user);
      }
    });
  });
});

module.exports = router;