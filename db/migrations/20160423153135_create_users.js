exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t => {
    t.increments();
    t.text('email').unique().notNullable();
    t.text('name');
    t.text('password');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};