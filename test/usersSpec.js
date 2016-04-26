process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app').app;
const knex = require('../db/knex');
// const jade = require('jade');

beforeEach('populate database with dummy content', done => {
return Promise.all([
    knex('users').insert({id: 1, email: 'first@example.com', first_name: 'first', last_name: 'firstlast'}),
    knex('users').insert({id: 2, email: 'second@example.com', first_name: 'second', last_name: 'secondlast'}),
    knex('users').insert({id: 3, email: 'third@example.com', first_name: 'third', last_name: 'thirdlast'})
  ]).then(() => done());
});

afterEach('clean up database after tests', done => knex('users').del().then(() => done()));

xdescribe('GET /users', () => {
  it('renders the index page', done => {
    request(app)
    .get('/users')
    .expect(200)
    .end((err, res) => {
      expect(res.redirect).to.equal(false)
      // OTHER OPTIONS?
      //1.
      // routes.index({}, {
      //   render: viewName => {
      //     viewName.to.equal('index');
      //   }
      // })
      // 2.
      // var html = jade.renderFile('./views/users/index.jade');
      // res.text.to.contain(html);
      // 3.
      // res.text.to.contain('index') 
      // 4.  
      // expect(res.render(viewName)).to.equal('index')
      done();
    });
  });
});

xdescribe('GET users/:id', () => {
  it('renders the show page for the user with the given id', done => {
    request(app)
      .get('/users/1')
      .end((err, res) => {
        knex('users').where('id', 1).then(user => {
          expect(user).to.deep.equal({
            id: 1,
            email: 'first@example.com',
            first_name: 'first',
            last_name: 'firstlast'
          });
        });
        done();
      })
  });
});

xdescribe('DELETE users/:id', () => {
  it('deletes the user with an id of 1 from the database', done => {
    request(app)
      .delete('/users/1')
      .end((err, res) => {
        knex('users').where('id', 1).then(user => {
          expect(user).to.be.empty;
          done();
        })
      });   
  });

  // it('redirects to /users', done => {
  //   request(app)
  //     .expect(200)
  //     .end((err, res) => {
  //       expect(res.redirect).to.equal(true)
  //     })
  // })
});

