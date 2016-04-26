process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app').app;
const knex = require('../db/knex');

beforeEach('populate database with dummy content', done => {
  return Promise.all([
    knex('users').insert({id: 1, email: 'first@example.com', first_name: 'first', last_name: 'firstlast'}),
    knex('users').insert({id: 2, email: 'second@example.com', first_name: 'second', last_name: 'secondlast'}),
    knex('users').insert({id: 3, email: 'third@example.com', first_name: 'third', last_name: 'thirdlast'})
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
          facebook_id: null
        }, {
          id: 2, 
          email: 'second@example.com', 
          first_name: 'second', 
          last_name: 'secondlast',
          password: null,
          facebook_id: null
        }, {
          id: 3, 
          email: 'third@example.com', 
          first_name: 'third', 
          last_name: 'thirdlast',
          password: null,
          facebook_id: null
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
          facebook_id: null
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
  }

  it('responds with JSON', done => {
    request(app)
      .put('/users/1')
      .type('form')
      .send(updatedUser)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

xdescribe('DELETE /users/:id', () => {
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
      .end((err, res) => {
        knex('users').where('id', 1).then(user => {
          expect(users).to.be.empty;
          done();
        })
      })
  })
})



