process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');
const knex = require('../db/knex');

beforeEach(done => {
  knex.migrate.latest().then(() => {
    knex.seed.run().then(() => {
      knex('users').then(users => {
        allUsers = users;
        done();
      });
    });
  });
});

afterEach(done => {
  knex.migrate.rollback().then(() => {
    done();
  });
});

describe('GET /users', () => {
  it('gets all users', done => {
    request(app)
    .get('/users')
    .expect('Content-Type', /json/)
    .end((err, res) => {
      expect(res.body.length).to.equal(allUsers.length);
      done();
    });
  });
});

