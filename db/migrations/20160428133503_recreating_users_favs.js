exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_favs', t => {
    t.increments();
    t.integer('user_id');
    t.integer('match_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_favs');
};