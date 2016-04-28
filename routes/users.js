const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcrypt');
const auth = require('../helpers/authHelpers');

// index
router.get('/', auth.ensureAuthenticated, (req, res) => {
  knex('users').select().then(users => {
    res.format({
      default(){
        res.status(406).send('Not Acceptable');
      },
      html(){
        res.redirect(`/users/${req.user.id}`);
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
    delete user.password;
    delete user.facebook_id;
    knex.select('m.*', 'w.name', 'w.image', 'w.pairing', 'w.about').from('users_favs as uf').where('user_id', req.params.id)
      .join('matches as m', 'm.id', 'uf.match_id').join('wines as w', 'w.id', 'm.wine_id').then(matches => {
        res.format({
          default(){
            res.status(406).send('Not Acceptable');
          },
          html(){
            res.render('users/show',{user, matches});
          },
          json(){
            if(user) {
              res.send(user);
            } else {
              res.status(404).send();
            }
          }
        });
      });
  });
});

router.use(auth.ensureCorrectUser);

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
    if(editUser.password) {
      editUser.password = bcrypt.hashSync(editUser.password, SALT_WORK_FACTOR);
    } else {
      editUser.password = user.password;
    }

    knex('users').where('id', req.params.id).returning('*').update(editUser).then(user => {
      res.format({
        default(){
          res.status(406).send('Not Acceptable');
        },
        html(){
          res.redirect('/users');
        },
        json(){
          user.length ? res.send(user) : res.status(404).send({
            msg: 'Not a valid user'
          });
        }
      });
    });
  });
});

// delete
router.delete('/:id', (req, res) => {
  knex('users').where('id', req.params.id).returning('*').del().then(user => {
    res.format({
      default(){
        res.status(406).send('Not Acceptable');
      },
      html(){
        res.redirect('/users');
      },
      json(){
        user.length ? res.send(user) : res.status(404).send({
          msg: 'Not a valid user'
        });
      }
    });
  });
});

// delete favorite
router.delete('/:id/matches/:match_id', (req, res) => {
  knex('users_favs').where('match_id', req.params.match_id).del().then(() => {
    res.redirect(`/users/${req.user.id}`);
  });
});

module.exports = router;