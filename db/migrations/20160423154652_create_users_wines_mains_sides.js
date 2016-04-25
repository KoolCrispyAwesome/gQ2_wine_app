exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_favs', t => {
    t.increments();
    t.text('user_id');
    t.integer('wine_id');
    t.integer('mains_id');
    t.integer('sides_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_favs');
};