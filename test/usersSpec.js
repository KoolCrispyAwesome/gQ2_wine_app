process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app').app;
const knex = require('../db/knex');

beforeEach('populate database with dummy content', done => {
  return Promise.all([
    knex('users').insert({
      id: 1, 
      email: 'first@example.com', 
      first_name: 'first', 
      last_name: 'firstlast', 
      photo: "http://dev.bukkit.org/thumbman/avatars/14/772/160x166/man_wearing_hat_silhouette.png.-m0.png"
    }),
    knex('users').insert({
      id: 2, 
      email: 'second@example.com', 
      first_name: 'second', 
      last_name: 'secondlast', 
      photo: "http://dev.bukkit.org/thumbman/avatars/14/772/160x166/man_wearing_hat_silhouette.png.-m0.png"
    }),
    knex('users').insert({
      id: 3, 
      email: 'third@example.com', 
      first_name: 'third', 
      last_name: 'thirdlast', 
      photo: "http://dev.bukkit.org/thumbman/avatars/14/772/160x166/man_wearing_hat_silhouette.png.-m0.png"
    })
  ]).then(() => done());
});

afterEach('clean up database after tests', done => knex('users').del().then(() => done()));

describe('GET /users', () => {
  it('responds with JSON', done => {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('returns an array with all users', done => {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .end((err, res) => {

        expect(res.body).to.deep.equal([{
          id: 1, 
          email: 'first@example.com', 
          first_name: 'first', 
          last_name: 'firstlast',
          password: null,
          facebook_id: null, 
          photo: "http://dev.bukkit.org/thumbman/avatars/14/772/160x166/man_wearing_hat_silhouette.png.-m0.png"
        }, {
          id: 2, 
          email: 'second@example.com', 
          first_name: 'second', 
          last_name: 'secondlast',
          password: null,
          facebook_id: null,
          photo: "http://dev.bukkit.org/thumbman/avatars/14/772/160x166/man_wearing_hat_silhouette.png.-m0.png"
        }, {
          id: 3, 
          email: 'third@example.com', 
          first_name: 'third', 
          last_name: 'thirdlast',
          password: null,
          facebook_id: null,
          photo: "http://dev.bukkit.org/thumbman/avatars/14/772/160x166/man_wearing_hat_silhouette.png.-m0.png"
        }])
        done();
      });
  });
});

describe('GET /users/:id', () => {
  it('responds with JSON', done => {
    request(app)
      .get('/users/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });

  it('returns information on the user with the given id', done => {
    request(app)
      .get('/users/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.deep.equal({
          id: 1,
          email: 'first@example.com',
          first_name: 'first',
          last_name: 'firstlast',
          password: null, 
          facebook_id: null,
          photo: "http://dev.bukkit.org/thumbman/avatars/14/772/160x166/man_wearing_hat_silhouette.png.-m0.png"
        });
        done();
      });
  })

  it('returns a 404 error', done => {
    request(app)
      .get('/users/1000000')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done(); 
      });
  });
});

describe('PUT /users/:id', () => {
  var updatedUser = {
    user: {
      id: 1,
      email: 'firstupdated@example.com',
      first_name: 'firstupdated',
      last_name: 'firstlastupdated'
    }
  };

  it('responds with JSON', done => {
    request(app)
      .put('/users/1')
      .set('Accept', 'application/json')
      .type('form')
      .send(updatedUser)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('updates the specific user', done => {
    request(app)
      .put('/users/1')
      .set('Accept', 'application/json')
      .type('form')
      .send(updatedUser)
      .end((err, res) => {
        knex('users').where('id', 1).first().then(user => {
          expect(user).to.deep.include(updatedUser.user);
          done();
        });
      });
  });

  it('returns the updated user', done => {
    request(app)
      .put('/users/1')
      .set('Accept', 'application/json')
      .type('form')
      .send(updatedUser)
      .end((err, res) => {
        knex('users').where('id', 1).first().then(user => {
          expect(res.body[0]).to.deep.include(updatedUser.user);
          done();
        });
      });
  });
});

describe('DELETE /users/:id', () => {
  it('responds with JSON', done => {
    request(app) 
      .delete('/users/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })

  it('removes the user with an id of 1', done => {
    request(app)
      .delete('/users/1')
      .set('Accept', 'application/json')
      .end((err, res) => {
        knex('users').where('id', 1).then(user => {
          expect(user).to.be.empty;
          done();
        });
      });
  });

  it('returns the deleted user', done => {
    request(app)
      .delete('/users/1')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body[0]).to.deep.include({
          id: 1, 
          email: 'first@example.com', 
          first_name: 'first', 
          last_name: 'firstlast', 
          photo: "http://dev.bukkit.org/thumbman/avatars/14/772/160x166/man_wearing_hat_silhouette.png.-m0.png"
        });
        done();
      });
  });
});
