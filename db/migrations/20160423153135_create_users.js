exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t => {
    t.increments();
    t.text('email').unique().notNullable();
    t.text('first_name');
    t.text('last_name');
    t.text('password');
    t.text('facebook_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};