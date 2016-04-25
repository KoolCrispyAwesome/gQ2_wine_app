'use strict'

const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = (passport) => {

  passport.use(new LocalStrategy({
    usernameField: user[email],
    passwordField: user[password],
    passReqToCallback: true
  }, (req, username, password, done) => {
    knex('users').where('username', username).first().then(user => {
      if(user){
        bcrypt.compare(password, user.password, (err, isMatched) => {
          if(isMatched){
            return done(null, user);
          } else {
            return done(null, false, {error: 'Invalid username or password'});
          }
        });
      } else {
        return done(null, false, {error: 'Invalid username or password'});
      }
    }).catch(err => {
      console.log('ERROR!! ', err);
    });
  }));

  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    profileFields: ['id', 'name', 'emails']
  }, (accessToken, refreshToken, profile, done) => {

  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    knex('users').where('id', id).first().then(user => {
      done(null, user);
    }).catch(err => {
      done(err);
    });
  });

};