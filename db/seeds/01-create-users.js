exports.seed = (knex, Promise) => {
  return Promise.join(
    knex('users').del(),
    knex('users').insert({id: 1, email: 'first@example.com', first_name: 'first', last_name: 'firstlast'}),
    knex('users').insert({id: 2, email: 'second@example.com', first_name: 'second', last_name: 'secondlast'}),
    knex('users').insert({id: 3, email: 'third@example.com', first_name: 'third', last_name: 'thirdlast'})
  );
};