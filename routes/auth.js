'use strict'

const express = require('express');
const router = express.Router();
const passport = require('passport');
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const auth = require('../helpers/authHelpers');

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'You have successfully logged out');
  res.redirect('/home');
});

router.use(auth.preventLoginSignup);

router.get('/login', (req, res) => {
  res.render('auth/login', {error: req.flash('error'), success: req.flash('success')});
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/auth/login',
  successFlash: true,
  failureFlash: true
}));

router.post('/signup', (req, res) => {
  bcrypt.hash(req.body.user.password, SALT_WORK_FACTOR, (err, hash) => {
    let newUser = req.body.user;
    newUser.password = hash;

    knex('users').insert(newUser, '*').then(user => {
      req.login(user[0], (err) => {
        res.redirect(`/users/${req.user.id}`);
      });
    }).catch(err => {
      req.flash('error', 'email is already taken');
      res.redirect('/home');
    });
  });
});

router.get('/facebook', passport.authenticate('facebook', {scope: ['email']}));

router.get('/facebook/callback', passport.authenticate('facebook', {
  failureRedirect: '/auth/login'
}), (req, res) => {
  res.redirect('/matches');
});

module.exports = router;