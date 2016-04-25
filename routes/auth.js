'use strict'

const express = require('express');
const router = express.Router();
const passport = require('passport');
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

router.get('/login', (req, res) => {
  res.render('auth/login', {error: req.flash('error')});
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/users',
  failureRedirect: '/auth/login',
  successFlash: true,
  failureFlash: true
}));

router.post('/signup', (req, res) => {
  bcrypt.hash(req.body.user.password, SALT_WORK_FACTOR, (err, hash) => {
    let newUser = req.body.user;
    newUser.password = hash;

    knex('users').insert(newUser, '*').then(user => {
      res.redirect('/users');
    }).catch(err => {
      req.flash('error', 'email is already taken');
      res.redirect('/auth/login');
    });
  });
});

router.get('/facebook', passport.authenticate('facebook', {scope: ['email']}));

router.get('/facebook/callback', passport.authenticate('facebook', {
  failureRedirect: '/auth/login'
}), (req, res) => {
  res.redirect('/users');
});

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'You have successfully logged out');
  res.redirect('/auth/login');
});

module.exports = router;